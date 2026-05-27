import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => <input ref={ref} {...props} />,
)

Input.displayName = 'Input'
