import { createRef, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'


export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex  items-center gap-3 w-[327px] h-12 py-4 px-3 rounded  bg-gray-850 outline-none focus-within:ring-2 ring-blue-350">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className=" bg-transparent flex-1 flex-col text-gray-100 text-sm outline-none placeholder:text-gray-400"
        {...props}
      />
    )
  }
)

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
