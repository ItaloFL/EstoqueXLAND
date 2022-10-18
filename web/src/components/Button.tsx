import { ButtonHTMLAttributes, HTMLProps } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-[327px] h-[50px] rounded bg-blue-250 text-black font-bold uppercase hover:bg-blue-150"
      {...props}
    >
      <>{props.children}</>
    </button>
  )
}
