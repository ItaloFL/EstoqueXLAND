import ImgLogo from '../assets/LogoEstoque.svg'
import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useNavigate } from 'react-router-dom'
export function Header() {
  const navigate = useNavigate()

  function handleClickLeft() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      <div className="bg-[#202024] flex items-center justify-between h-[100px] px-24">
        <img src={ImgLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger>
            <div className="flex items-center justify-center gap-5 w-[140px] h-[50px]  bg-blue-350 hover:cursor-pointer hover:bg-blue-150">
              <X className="w-[20px] h-[20px] text-black" />
              <span className="text-center font-medium text-lg text-black">
                Sair
              </span>
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <span className="flex text-2xl font-bold text-center justify-center mb-7">
                Tem certeza que deseja sair?
              </span>
              <div className="flex justify-center gap-3 font-bold">
                <button
                  className="w-[150px] h-[180px] bg-blue-150 rounded text-black hover:bg-blue-250"
                  onClick={handleClickLeft}
                >
                  Sair
                </button>
                <Dialog.Close className="w-[150px] h-[180px] bg-[#131319] rounded hover:bg-[#29292E]">
                  Não sair
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  )
}
