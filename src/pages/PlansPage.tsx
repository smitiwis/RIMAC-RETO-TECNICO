import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuoteStore } from "@/store/useQuoteStore";
import { usePlanStore } from "../store/usePlanStore";
import { ProgressStepper, SelectionCard } from "../shared/components/ui";
import { PlanCard } from "../features/plans/PlanCard";
import type { Plan } from "../types";
import ContainerMain from "@/shared/components/layouts/ContainerMain";
import { dataShared } from "@/contants/forMeOrOther";
import { usePlans } from "../features/plans/usePlans";

export function PlansPage() {
  const navigate = useNavigate();
  const { user } = useQuoteStore();
  const nombre = user?.name || "Rocío";

  const {
    setPlanId,
    setTipoCotizante,
    setSelectedPlanPrice,
    setSelectedPlanName,
  } = usePlanStore();

  const currentStep = 1;

  const [option, setOption] = useState<"me" | "other" | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { data: rawPlans = [], isLoading, isError } = usePlans(option !== null);
  const plansContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (option && rawPlans.length > 0 && !isLoading) {
      const timer = setTimeout(() => {
        plansContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [option, rawPlans.length, isLoading]);

  const handleBack = () => {
    if (option) {
      setOption(null);
      setSelectedPlanId(null);
    } else {
      navigate("/");
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanId(plan.id);

    setPlanId(plan.id);
    setTipoCotizante(option === "me" ? "Para mí" : "Para alguien más");
    setSelectedPlanName(plan.nombre);

    const finalPrice = option === "other" ? plan.precio * 0.95 : plan.precio;
    setSelectedPlanPrice(finalPrice);

    navigate("/resumen");
  };

  const plans: Plan[] = rawPlans.map((plan) => {
    if (option === "other") {
      return {
        ...plan,
        precio: plan.precio * 0.95,
      };
    }
    return plan;
  });

  return (
    <div className="pb-4">
      <ProgressStepper currentStep={currentStep} onBack={handleBack} />
      <div className="w-full border-t border-brand-divider mt-1 mb-3 md:hidden" />
      <ContainerMain className="md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full border-amber-800">
          <div className="col-span-4 md:col-start-2 md:col-span-10 w-full overflow-visible">
            <div className="mb-8 hidden md:block">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 group text-[12px] font-bold text-brand-blue hover:text-brand-red transition-all duration-200 cursor-pointer"
              >
                <img
                  src="/icons/Icon-button.png"
                  alt="Volver"
                  className="w-6 h-6 object-contain"
                />
                <span className="tracking-wide font-extrabold">Volver</span>
              </button>
            </div>

            <div className="text-center md:text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-3">
                {nombre} ¿Para quién deseas cotizar?
              </h1>
              <p className="text-sm font-medium text-brand-gray leading-relaxed">
                Selecciona la opción que se ajuste más a tus necesidades.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center md:items-stretch mb-8">
              {dataShared.map((item) => (
                <SelectionCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  selected={option === item.icon}
                  onSelect={() => {
                    setOption(item.icon);
                    setSelectedPlanId(null);
                    setCurrentSlideIndex(0);
                  }}
                />
              ))}
            </div>

            {option && (
              <div className="animate-fade-in">
                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm font-semibold text-brand-gray">
                      Cargando planes compatibles...
                    </span>
                  </div>
                )}

                {isError && (
                  <div className="text-center py-12 text-brand-red font-semibold">
                    Hubo un problema al cargar los planes. Por favor, inténtelo
                    de nuevo.
                  </div>
                )}

                {!isLoading && !isError && plans.length === 0 && (
                  <div className="text-center py-12 text-brand-gray font-medium">
                    No encontramos planes compatibles con tu edad en este
                    momento.
                  </div>
                )}

                {!isLoading && !isError && plans.length > 0 && (
                  <div
                    ref={plansContainerRef}
                    className="flex flex-col gap-8 w-[calc(100%+2rem)] -mx-4 overflow-hidden md:w-full md:mx-0 md:px-0 md:overflow-visible"
                  >
                    <div
                      className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 transition-transform duration-500 ease-out w-full md:transform-none md:justify-items-center"
                      style={
                        isMobile
                          ? {
                              transform: `translateX(calc(50vw - 146px - ${currentSlideIndex * (292 + 16)}px))`,
                            }
                          : undefined
                      }
                    >
                      {plans.map((plan) => {
                        const originalPlan = rawPlans.find(
                          (rp) => rp.id === plan.id,
                        );
                        const originalPrecio = originalPlan
                          ? originalPlan.precio
                          : plan.precio;

                        return (
                          <div
                            key={plan.id}
                            className="w-73 md:w-full shrink-0"
                          >
                            <PlanCard
                              plan={plan}
                              selected={selectedPlanId === plan.id}
                              onSelect={() => handleSelectPlan(plan)}
                              recommended={plan.id === "plan-clinica"}
                              hasDiscount={option === "other"}
                              originalPrecio={originalPrecio}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex md:hidden items-center justify-center gap-6 mt-4">
                      <button
                        onClick={() =>
                          setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))
                        }
                        disabled={currentSlideIndex === 0}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                          currentSlideIndex === 0
                            ? "border-[#A9AFD9]/40 text-[#A9AFD9]/40 pointer-events-none"
                            : "border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                        }`}
                        aria-label="Plan anterior"
                      >
                        <svg
                          className="w-4 h-4 stroke-current stroke-2 fill-none"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>

                      <span className="text-base font-extrabold text-brand-dark select-none">
                        {currentSlideIndex + 1} / {plans.length}
                      </span>

                      <button
                        onClick={() =>
                          setCurrentSlideIndex((prev) =>
                            Math.min(prev + 1, plans.length - 1),
                          )
                        }
                        disabled={currentSlideIndex === plans.length - 1}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                          currentSlideIndex === plans.length - 1
                            ? "border-[#A9AFD9]/40 text-[#A9AFD9]/40 pointer-events-none"
                            : "border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                        }`}
                        aria-label="Siguiente plan"
                      >
                        <svg
                          className="w-4 h-4 stroke-current stroke-2 fill-none"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </ContainerMain>
    </div>
  );
}
