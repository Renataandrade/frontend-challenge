const convertToBRL = (value: number): string => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const convertToBRLWithoutSymbol = (value: string): string => {
  const currency = value.replace(',', '.')
  return Number(currency).toFixed(2).replace(/(\d)(?=(\d{3})+\/.)/g, "$1.")
}

export const Currency = {
  convertToBRL,
  convertToBRLWithoutSymbol
}