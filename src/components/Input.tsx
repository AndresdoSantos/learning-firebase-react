import { InputHTMLAttributes } from 'react'
import { Path, UseFormRegister, RegisterOptions } from 'react-hook-form'

interface IInputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  register: UseFormRegister<T>
  optionsRegister?: RegisterOptions
}

export function Input<T extends unknown>({
  name,
  register,
  optionsRegister = undefined,
  placeholder = undefined,
  type = undefined,
  ...props
}: IInputProps<T>) {
  return (
    <label htmlFor="" className="text-zinc-800 text-xs w-full">
      <input
        {...props}
        type={undefined}
        className="h-10 w-full px-2 border rounded-sm bg-zinc-100 outline-0 transition-[:focus] duration-300 focus-within:border-blue-500 focus-within:ring"
        placeholder={placeholder}
        name={name}
        {...register(name, optionsRegister)}
      />
    </label>
  )
}
