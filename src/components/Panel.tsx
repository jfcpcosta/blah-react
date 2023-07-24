import { HTMLAttributes, ReactNode } from 'react'

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  children: ReactNode
}

export function Panel({ title, children, className, ...props }: PanelProps) {
  return (
    <div className={`shadow rounded-lg bg-white ${className}`} {...props}>
      {title && (
        <h2 className="border-b p-4 text-center text-xl drop-shadow-md text-zinc-900">
          {title}
        </h2>
      )}

      <div className="flex flex-col p-4 gap-4">{children}</div>
    </div>
  )
}
