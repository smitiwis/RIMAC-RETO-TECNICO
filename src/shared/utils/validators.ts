export function isValidDni(value: string): boolean {
  return /^\d{8}$/.test(value)
}

export function isValidCelular(value: string): boolean {
  return /^\d{9}$/.test(value)
}
