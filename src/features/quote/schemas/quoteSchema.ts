import { z } from "zod";

export const quoteSchema = z
  .object({
    docType: z.enum(["DNI", "RUC"]),
    dni: z.string(),
    celular: z.string().superRefine((val, ctx) => {
      const trimmed = val.trim();
      if (!trimmed) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ingresa número de celular",
        });
      } else if (!/^\d+$/.test(trimmed)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El celular debe ser solo numérico",
        });
      } else if (!trimmed.startsWith("9")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El celular debe empezar con el número 9",
        });
      } else if (trimmed.length !== 9) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El celular debe tener exactamente 9 dígitos",
        });
      }
    }),
    acceptPrivacy: z
      .boolean()
      .refine((val) => val === true, "Debe aceptar la Política de Privacidad"),
    acceptCommercial: z
      .boolean()
      .refine((val) => val === true, "Debe aceptar la Política de Comunicaciones Comerciales"),
  })
  .superRefine((data, ctx) => {
    const dniTrimmed = data.dni.trim();
    if (!dniTrimmed) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Ingresa número de documento",
        path: ["dni"],
      });
    } else if (!/^\d+$/.test(dniTrimmed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El documento debe contener solo números",
        path: ["dni"],
      });
    } else if (data.docType === "DNI" && dniTrimmed.length !== 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El DNI debe tener exactamente 8 caracteres",
        path: ["dni"],
      });
    } else if (data.docType === "RUC" && dniTrimmed.length !== 11) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El RUC debe tener exactamente 11 caracteres",
        path: ["dni"],
      });
    }
  });

export type QuoteFormData = z.infer<typeof quoteSchema>;
