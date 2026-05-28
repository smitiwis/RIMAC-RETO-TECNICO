import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../features/quote/quoteSchema";
import { useQuoteStore } from "../store/useQuoteStore";

import {
  RimacHeader,
  RimacFooter,
  Badge,
  Button,
  Checkbox,
  Input,
  DocumentInputGroup,
  SelectionCard,
} from "../shared/components";
import { PlanCard } from "../features/plans/PlanCard";
import type { Plan } from "../types";

export function HomePage() {
  const navigate = useNavigate();
  const { setDni, setCelular, setNombre } = useQuoteStore();

  const [showStorybook, setShowStorybook] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { dni: "", celular: "" },
    mode: "onChange",
  });

  const [acceptPrivacy, setAcceptPrivacy] = useState(true);
  const [acceptCommercial, setAcceptCommercial] = useState(true);

  const [docType, setDocType] = useState("DNI");

  const [sbChecked1, setSbChecked1] = useState(false);
  const [sbChecked2, setSbChecked2] = useState(true);
  const [sbDocType, setSbDocType] = useState("DNI");
  const [sbDocNum, setSbDocNum] = useState("87654321");
  const [sbOption, setSbOption] = useState<"me" | "other">("me");
  const [sbPlanId, setSbPlanId] = useState<string | null>(null);

  const onSubmit = (data: QuoteFormData) => {
    if (!acceptPrivacy || !acceptCommercial) {
      alert("Debe aceptar las políticas para cotizar.");
      return;
    }
    setDni(data.dni);
    setCelular(data.celular);
    setNombre("Rocío");

    navigate("/planes");
  };

  const samplePlans: Plan[] = [
    {
      id: "plan-casa",
      nombre: "Plan en Casa",
      precio: 39,
      tipo: "me",
      coberturas: [
        "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.",
        "Indemnización de S/300 en caso de hospitalización por más de un día.",
      ],
    },
    {
      id: "plan-clinica",
      nombre: "Plan en Casa y Clínica",
      precio: 99,
      tipo: "me",
      coberturas: [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%.",
        "Atención médica en más de 200 clínicas del país.",
      ],
    },
    {
      id: "plan-chequeo",
      nombre: "Plan en Casa + Chequeo",
      precio: 49,
      tipo: "me",
      coberturas: [
        "Un Chequeo preventivo general de manera presencial o virtual.",
        "Acceso a Vacunas en el Programa del MINSA en centros privados.",
        "Incluye todos los beneficios del Plan en Casa.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light-gray relative">
      <RimacHeader />

      {showStorybook ? (
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 text-left animate-fade-in">
          <div className="mb-16 border-b border-brand-border/40 pb-8 flex justify-between items-end flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#4F46E5] bg-[#EEF2FF] rounded-full">
                  Catálogo de Componentes
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border" />
                <span className="text-xs text-brand-gray font-medium">
                  Estilo Storybook
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-brand-dark tracking-tight">
                Rimac UI Showroom
              </h1>
            </div>
            <button
              onClick={() => setShowStorybook(false)}
              className="px-5 py-2.5 bg-brand-dark text-white rounded-full text-xs font-bold shadow-md hover:bg-brand-dark/90 active:scale-95 transition-all duration-200"
            >
              💻 Ver Diseño Página Real
            </button>
          </div>

          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Badges & Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge>Seguro Salud Flexible</Badge>
                <span className="inline-flex px-3 py-1 text-xs font-bold bg-brand-mint text-brand-dark rounded-md uppercase tracking-wider">
                  Plan recomendado
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Buttons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <Button variant="primary">Cotiza aquí</Button>
                <Button variant="secondary">Seleccionar Plan</Button>
                <Button variant="outline">Volver</Button>
                <Button variant="primary" disabled>
                  Deshabilitado
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Checkboxes
              </h3>
              <div className="space-y-3">
                <Checkbox
                  label="Acepto la Política de Privacidad"
                  checked={sbChecked1}
                  onToggle={setSbChecked1}
                />
                <Checkbox
                  label="Acepto la Política de Comunicaciones Comerciales"
                  checked={sbChecked2}
                  onToggle={setSbChecked2}
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                DocumentInputGroup
              </h3>
              <div className="max-w-md">
                <DocumentInputGroup
                  docType={sbDocType}
                  docNumber={sbDocNum}
                  onDocTypeChange={setSbDocType}
                  onDocNumberChange={setSbDocNum}
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Selection Cards
              </h3>
              <div className="flex flex-wrap gap-6">
                <SelectionCard
                  title="Para mí"
                  description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                  icon="me"
                  selected={sbOption === "me"}
                  onSelect={() => setSbOption("me")}
                />
                <SelectionCard
                  title="Para alguien más"
                  description="Realiza una cotización para uno de tus familiares o cualquier persona."
                  icon="other"
                  selected={sbOption === "other"}
                  onSelect={() => setSbOption("other")}
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-border/20 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Plan Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {samplePlans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    selected={sbPlanId === plan.id}
                    onSelect={() => setSbPlanId(plan.id)}
                    recommended={plan.id === "plan-clinica"}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-33 items-center">
            <div className="hidden md:block relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white border border-brand-border/20">
                <img
                  src="/images/image220.png"
                  alt="Familia Rimac Protegida"
                  className="w-full h-auto object-cover rounded-4xl"
                />
              </div>
            </div>

            <div className="flex flex-col text-left max-w-87.5 space-y-6">
              <div className="space-y-2">
                <Badge className="mb-3">Seguro Salud Flexible</Badge>

                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-1xl md:text-[32px] font-bold text-brand-dark tracking-tight leading-tight">
                    Creado para ti y tu familia
                  </h1>

                  <div className="md:hidden w-20 h-20 rounded-2xl overflow-hidden border border-brand-border/30 shadow-md shrink-0">
                    <img
                      src="/images/Mask group.png"
                      alt="Familia Rimac"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[12px] md:text-sm font-semibold text-brand-dark leading-relaxed">
                  Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                  nuestra asesoría. 100% online.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Controller
                  name="dni"
                  control={control}
                  render={({ field }) => (
                    <DocumentInputGroup
                      label="Documento"
                      docType={docType}
                      docNumber={field.value}
                      onDocTypeChange={setDocType}
                      onDocNumberChange={field.onChange}
                      error={errors.dni?.message}
                    />
                  )}
                />

                <Input
                  label="Celular"
                  placeholder="987654321"
                  error={errors.celular?.message}
                  {...register("celular")}
                />

                <div className="space-y-2 pt-2">
                  <Checkbox
                    label="Acepto la Política de Privacidad"
                    checked={acceptPrivacy}
                    onToggle={setAcceptPrivacy}
                  />
                  <Checkbox
                    label="Acepto la Política Comunicaciones Comerciales"
                    checked={acceptCommercial}
                    onToggle={setAcceptCommercial}
                  />
                  <a
                    href="#terminos"
                    className="text-xs font-bold text-brand-dark underline hover:text-brand-red transition-colors duration-200"
                  >
                    Aplican Términos y Condiciones.
                  </a>
                </div>

                <Button type="submit" variant="primary" className="mt-3">
                  Cotiza aquí
                </Button>
              </form>
            </div>
          </div>
        </main>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowStorybook(!showStorybook)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-brand-dark text-white font-extrabold text-xs shadow-xl shadow-brand-dark/30 hover:bg-brand-red hover:shadow-brand-red/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          {showStorybook ? (
            <>
              <span>💻</span>
              <span>Ver Diseño Página Real</span>
            </>
          ) : (
            <>
              <span>📖</span>
              <span>Ver Catálogo de Componentes</span>
            </>
          )}
        </button>
      </div>

      <RimacFooter />
    </div>
  );
}
