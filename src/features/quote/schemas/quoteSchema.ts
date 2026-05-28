import { z } from "zod";

export const quoteSchema = z
  .object({
    docType: z.enum(["DNI", "RUC"]),
    dni: z.string().regex(/^\d+$/, "Solo números"),
    celular: z
      .string()
      .regex(/^9\d{8}$/, "El celular debe empezar con 9 y tener 9 dígitos"),
    acceptPrivacy: z
      .boolean()
      .refine((val) => val === true, "Debe aceptar la Política de Privacidad"),
    acceptCommercial: z
      .boolean()
      .refine((val) => val === true, "Debe aceptar la Política de Comunicaciones Comerciales"),
  })
  .superRefine((data, ctx) => {
    if (data.docType === "DNI" && data.dni.length !== 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El DNI debe tener 8 dígitos",
        path: ["dni"],
      });
    } else if (data.docType === "RUC" && data.dni.length !== 11) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El RUC debe tener 11 dígitos",
        path: ["dni"],
      });
    }
  });

export type QuoteFormData = z.infer<typeof quoteSchema>;
