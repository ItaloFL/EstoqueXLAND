interface ButtonProps {
  children: string
}

export function Button({ children }: ButtonProps) {
  return (
    <button type="submit" className="w-[327px] h-[50px] rounded bg-blue-250 text-black font-bold uppercase hover:bg-blue-150">
      {children}
    </button>
  )
}
