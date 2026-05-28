import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../schemas/quoteSchema";
import { useQuoteStore } from "@/store/useQuoteStore";
import { fetchUser } from "../services/fetchUser";

export function useQuoteForm() {
  const navigate = useNavigate();
  const { setDni, setDocType: setStoreDocType, setCelular, setUser } = useQuoteStore();

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
      const fetchedUser = await fetchUser();
      setDni(data.dni);
      setStoreDocType(data.docType);
      setCelular(data.celular);
      setUser(fetchedUser);
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
