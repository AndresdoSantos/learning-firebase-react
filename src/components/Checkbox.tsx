import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister, RegisterOptions } from "react-hook-form";

interface ICheckBoxProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  register: UseFormRegister<T>
  description: string
  optionsRegister?: RegisterOptions
}

export function Checkbox<T extends unknown>({ name, register, optionsRegister, placeholder, description, ...props }: ICheckBoxProps<T>) {
  return (
    <div className="flex items-center mb-4">
      <input 
        {...props}
        id="default-checkbox" 
        type="checkbox" 
        className="w-4 h-4 text-green-400 bg-zinc-100 rounded border-gray-300 focus:ring-green-400 outline-0 border"
        name={name}
        {...register(name, optionsRegister)}
      />
      <label
        htmlFor="default-checkbox" 
        className="ml-2 text-zinc-800 text-[0.82rem]"
      >
        {description}
      </label>
    </div>
  )
}