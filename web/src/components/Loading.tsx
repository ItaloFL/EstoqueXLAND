import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="absolute left-[48%] top-[50%] flex items-center justify-center overflow-hidden bg-no-repeat">
      <CircleNotch weight="bold" className="h-20 w-20 animate-spin text-blue-350" />
    </div>
  )
}
