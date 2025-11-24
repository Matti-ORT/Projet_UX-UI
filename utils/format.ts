export function formatPrice(value: number | string | undefined): string {
  if (value === undefined || value === null || value === '') return '';
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);

  try {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(num);
  } catch (e) {
    // Intl could be missing on some RN environments — fallback
    return `€${num}`;
  }
}
