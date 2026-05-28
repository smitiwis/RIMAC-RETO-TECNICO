import { Controller } from "react-hook-form";
import { useQuoteForm } from "../hooks/useQuoteForm";
import {
  Button,
  Checkbox,
  Input,
  DocumentInputGroup,
} from "../../../shared/components/ui";

export function QuoteForm() {
  const {
    form: {
      control,
      register,
      formState: { errors },
    },
    docType,
    setDocType,
    onSubmit,
  } = useQuoteForm();

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
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
        <Controller
          name="acceptPrivacy"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-1 text-left">
              <Checkbox
                label="Acepto la Política de Privacidad"
                checked={field.value}
                onToggle={field.onChange}
              />
              {errors.acceptPrivacy && (
                <span className="text-xs text-brand-red font-medium pl-1 mt-0.5 animate-fade-in">
                  {errors.acceptPrivacy.message}
                </span>
              )}
            </div>
          )}
        />

        <Controller
          name="acceptCommercial"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-1 text-left">
              <Checkbox
                label="Acepto la Política Comunicaciones Comerciales"
                checked={field.value}
                onToggle={field.onChange}
              />
              {errors.acceptCommercial && (
                <span className="text-xs text-brand-red font-medium pl-1 mt-0.5 animate-fade-in">
                  {errors.acceptCommercial.message}
                </span>
              )}
            </div>
          )}
        />

        <a
          href="#terminos"
          className="text-xs font-bold text-brand-dark underline hover:text-brand-red transition-colors duration-200 self-start"
        >
          Aplican Términos y Condiciones.
        </a>
      </div>

      <Button className="w-full md:w-fit" type="submit" variant="primary">
        Cotiza aquí
      </Button>
    </form>
  );
}
