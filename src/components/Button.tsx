import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border border-green-500 shadow-sm rounded px-8 py-2 text-white font-semibold text-sm bg-gradient-to-b from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-400 transition-all"
      {...props}
    >
      {children}
    </button>
  )
}
