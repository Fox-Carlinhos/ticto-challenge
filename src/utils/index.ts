import { z } from "zod";

export function currencyFormat(value: string | number, format: "input" | "output" = "output"): string | number {
  if (format === "output") {
    const numValue = typeof value === "number" ? value : Number(value);
    return (numValue / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  if (format === "input" && typeof value === "string") {
    const numericValue = value.replace(/\D/g, "");
    return Number(numericValue);
  }

  return value;
}

export const personalDataSchema = z.object({
  title: z.string().nonempty("Nome do registro é obrigatório."),
  amount: z.number().min(1, "O valor do registro deve ser maior que 0."),
  category: z.string().nonempty("A categoria é obrigatória."),
});

export type PersonalDataForm = z.infer<typeof personalDataSchema>;
