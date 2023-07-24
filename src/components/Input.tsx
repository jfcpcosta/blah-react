import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  return (
    <div>
      {!!label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}

      <input
        name={name}
        id={name}
        ref={ref}
        className="w-full border shadow rounded px-2 py-2 text-zinc-400 focus:outline-none"
        {...rest}
      />

      {!!error && <div>{error.message}</div>}
    </div>
  )
}

export const Input = forwardRef(InputBase)
