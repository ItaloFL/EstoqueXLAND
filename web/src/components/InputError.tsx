interface InputErrorProps {
  children: any
}

export function InputError({ children }: InputErrorProps) {
  return <span className="text-red-600">{children}</span>
}
