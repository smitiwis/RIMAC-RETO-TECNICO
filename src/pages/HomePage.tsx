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
} from "../shared/components";

export function HomePage() {
  const navigate = useNavigate();
  const { setDni, setCelular, setNombre } = useQuoteStore();

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

  return (
    <div className="flex flex-col min-h-screen bg-brand-light-gray relative">
      <RimacHeader />

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
              <div className="flex items-center justify-between gap-5">
                <div>
                  <Badge className="mb-3">Seguro Salud Flexible</Badge>
                  <h1 className="text-[28px] md:text-[32px] font-bold text-brand-dark leading-tight">
                    Creado para ti y tu familia
                  </h1>
                </div>

                <div className="md:hidden w-35 h-40 rounded-2xl overflow-hidden border border-brand-border/30 shadow-md shrink-0">
                  <img
                    src="/images/Mask group.png"
                    alt="Familia Rimac"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span className="block w-full h-2 border-b border-brand-divider my-4 md:hidden" />

              <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
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
              </div>

              <div className="flex flex-col gap-3.5">
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
                  className="text-xs font-bold text-brand-dark underline hover:text-brand-red transition-colors duration-200 self-start"
                >
                  Aplican Términos y Condiciones.
                </a>
              </div>

              <Button type="submit" variant="primary">
                Cotiza aquí
              </Button>
            </form>
          </div>
        </div>
      </main>

      <RimacFooter />
    </div>
  );
}
