export interface User {
  dni: string
  celular: string
  nombre: string
}

export interface Plan {
  id: string
  nombre: string
  precio: number
  tipo: string
  coberturas: string[]
}

export interface Quote {
  dni: string
  celular: string
  planId: string
  tipoCotizante: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}
