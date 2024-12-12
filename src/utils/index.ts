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
