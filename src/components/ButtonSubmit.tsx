import { ButtonHTMLAttributes } from 'react'

interface IButtonSubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string
}

export function ButtonSubmit({ description, ...props }: IButtonSubmitProps) {
  return (
    <button
      type="submit"
      className="h-10 w-full px-2 rounded-sm bg-green-400 outline-0"
      {...props}
    >
      <p className="text-zinc-100 text-xs">{description}</p>
    </button>
  )
}
