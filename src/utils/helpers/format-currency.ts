export const formatCurrency = (value: number | string): string =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
