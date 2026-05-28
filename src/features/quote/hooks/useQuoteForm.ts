import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../schemas/quoteSchema";
import { useQuoteStore } from "../../../store/useQuoteStore";

export function useQuoteForm() {
  const navigate = useNavigate();
  const { setDni, setCelular, setNombre } = useQuoteStore();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      docType: "DNI",
      dni: "",
      celular: "",
      acceptPrivacy: true,
      acceptCommercial: true,
    },
    mode: "onChange",
  });

  const docType = form.watch("docType");

  const setDocType = (val: string) => {
    form.setValue("docType", val as "DNI" | "RUC", { shouldValidate: true });
  };

  const onSubmit = (data: QuoteFormData) => {
    setDni(data.dni);
    setCelular(data.celular);
    setNombre("Rocío");
    navigate("/planes");
  };

  return {
    form,
    docType,
    setDocType,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
