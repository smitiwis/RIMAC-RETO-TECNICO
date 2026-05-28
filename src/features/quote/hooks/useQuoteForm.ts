import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../schemas/quoteSchema";
import { useQuoteStore } from "@/store/useQuoteStore";
import { fetchUser } from "../services/fetchUser";

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
  });

  const docType = form.watch("docType");

  const setDocType = (val: string) => {
    form.setValue("docType", val as "DNI" | "RUC");
    form.setValue("dni", "");
    form.clearErrors("dni");
  };

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const user = await fetchUser();
      setDni(data.dni);
      setCelular(data.celular);
      setNombre(user.name);
      navigate("/planes");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al obtener los datos del usuario. Inténtelo de nuevo.");
    }
  };

  return {
    form,
    docType,
    setDocType,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
