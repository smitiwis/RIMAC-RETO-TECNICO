import { z } from "zod";

export const quoteSchema = z
  .object({
    docType: z.enum(["DNI", "RUC"]),
    dni: z.string().regex(/^\d+$/, "Solo números"),
    celular: z
      .string()
      .length(9, "El celular debe tener 9 dígitos")
      .regex(/^\d+$/, "Solo números"),
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
