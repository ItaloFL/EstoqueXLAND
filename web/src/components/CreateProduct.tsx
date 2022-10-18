import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { Plus } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from './Button'
import { TextInput } from './Input'

export function CreateProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<any>()
  const [price, setPrice] = useState('')
  const [quantEstoque, setquantEstoque] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)
    data.append('price', price)
    data.append('quantEstoque', quantEstoque)

    try {
      setIsLoading(true)
      const product = await axios.post('http://localhost:3333/product', data)

      setIsLoading(false)
    } catch (error) {}
  }

  return (
    <div className="flex items-center justify-center">
      <Dialog.Root>
        <Dialog.Trigger className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-350 hover:bg-blue-250 hover:scale-110 duration-300">
          <Plus color="#000" weight="bold" />
        </Dialog.Trigger>
        <Dialog.Portal className="">
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <form action="" className="ml-7" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="image">Escolha sua imagem</label>
              </div>

              <TextInput.Root>
                <TextInput.Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setImage(e.target.files?.[0])
                  }
                />
              </TextInput.Root>

              <div className="my-2">
                <label htmlFor="name" className="text-base">
                  Nome
                </label>
              </div>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
              </TextInput.Root>

              <div className="my-2">
                <label htmlFor="description" className="text-base ">
                  Descrição
                </label>
              </div>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="description"
                  name="description"
                  onChange={e => {
                    setDescription(e.target.value)
                  }}
                />
              </TextInput.Root>

              <div className="my-2">
                <label htmlFor="price" className="text-base">
                  Preço
                </label>
              </div>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="price"
                  name="price"
                  onChange={e => {
                    setPrice(e.target.value)
                  }}
                />
              </TextInput.Root>

              <div className="my-2">
                <label htmlFor="quantEstoque" className="text-base ">
                  Quantidade no estoque
                </label>
              </div>
              <div className="mb-8">
                <TextInput.Root>
                  <TextInput.Input
                    type="text"
                    id="quantEstoque"
                    name="quantEstoque"
                    onChange={e => {
                      setquantEstoque(e.target.value)
                    }}
                  />
                </TextInput.Root>
              </div>
              <Button children="Enviar" />
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
