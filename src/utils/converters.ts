export const priceString = (price: number | string): string => {
  if (price == null) return ""
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
