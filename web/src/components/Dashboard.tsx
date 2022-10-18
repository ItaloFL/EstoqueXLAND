import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CreateProduct } from './CreateProduct'
import { Header } from './Header'
import { Loading } from './Loading'
import * as Dialog from '@radix-ui/react-dialog'

import * as Popover from '@radix-ui/react-popover'
import { DotsThreeOutlineVertical, Pencil, Trash, X } from 'phosphor-react'
import jwtdecode from 'jwt-decode'
import { TextInput } from './Input'
import { Button } from './Button'
import { toast, ToastContainer } from 'react-toastify'

type PayLoad = {
  id: string
  isAdmin: boolean
}

type ProductsType = {
  id: string
  name: string
  description: string
  image: string
  price: string
  quantEstoque: string
}

export function Dashboard() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<ProductsType[]>([])
  const [quantEstoque, setQuantEstoque] = useState<number>(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

  async function handleDelete(id: string) {
    const token = localStorage.getItem('token')
    axios
      .delete(`http://localhost:3333/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {})
  }

  async function handleEditProduct(id: string, event: FormEvent) {
    event.preventDefault()

    if (quantEstoque) {
    }

    console.log(quantEstoque)

    axios
      .put(`http://localhost:3333/product/${id}`, {
        quantEstoque
      })
      .then(res => {
        res.data
        toast.success('Produto editado com sucesso')
      })
      .catch(error => toast.error(error.response.data.message))
  }

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem('token')

    axios
      .get('http://localhost:3333/product', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setProducts(res.data)
      })
    setIsLoading(false)
  }, [products])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }

    const token = localStorage.getItem('token')
    const decifredTokenInfos: PayLoad = jwtdecode(String(token))

    setIsAdmin(decifredTokenInfos.isAdmin)
  }, [])

  return (
    <>
      <Header />
      <div className="px-32 py-20 flex gap-7 flex-wrap">
        <div className="w-screen flex items-center justify-between">
          <div className="text-white font-bold text-5xl">Produtos</div>
          <div>
            <CreateProduct />
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="flex gap-7 flex-wrap">
            {products.map(product => (
              <li
                key={product.id}
                className="relative w-[270px] h-[340px] bg-[#202024]"
              >
                <div>
                  <img
                    className="w-[280px] h-[187px]"
                    src={product.image}
                    alt=""
                  />
                </div>

                <div className="text-white font-bold mt-3 text-center">
                  <div className="flex px-7 items-center justify-between">
                    {product.name}
                    {isAdmin ? (
                      <Popover.Root>
                        <Popover.Trigger>
                          <DotsThreeOutlineVertical
                            weight="fill"
                            className="w-5 h-5 text-blue-350 rounded-full"
                          />
                        </Popover.Trigger>
                        <Popover.Portal>
                          <Popover.Content className="flex flex-col bg-red items-center justify-center w-[120px] h-[120px] bg-zinc-800">
                            <Dialog.Root open={open} onOpenChange={setOpen}>
                              <Dialog.Trigger className="flex items-center justify-center p-2 text-white gap-2 delay-75 hover:bg-[#212124]">
                                <Pencil
                                  className="text-blue-350 "
                                  weight="bold"
                                />
                                Editar
                              </Dialog.Trigger>
                              <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                                <Dialog.Content className="fixed bg-[#202024] py-8 px-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25s">
                                  <div className="text-xl mb-7">
                                    Digite a quantidade de produtos vendidos
                                  </div>
                                  <form
                                    onSubmit={async e =>
                                      handleEditProduct(product.id, e).then(
                                        () => setOpen(false)
                                      )
                                    }
                                    className="flex flex-col gap-9 items-center justify-center"
                                  >
                                    <TextInput.Root>
                                      <TextInput.Input
                                        type="number"
                                        id="quantEstoque"
                                        name="quantEstoque"
                                        placeholder="Ex: 9"
                                        onChange={e =>
                                          setQuantEstoque(
                                            Number(e.target.value)
                                          )
                                        }
                                      />
                                    </TextInput.Root>

                                    <Button children="confirmar" />
                                  </form>
                                </Dialog.Content>
                              </Dialog.Portal>
                            </Dialog.Root>
                            <button
                              onClick={() => {
                                handleDelete(product.id)
                              }}
                              className="flex items-center justify-center p-2 text-white gap-2 delay-75 hover:bg-[#212124]"
                            >
                              <Trash className="text-blue-350 " weight="bold" />
                              Deletar
                            </button>
                            <Popover.Close className="absolute top-[5px] right-[5px] w-4 h-4 text-gray-250">
                              <X className="" weight="bold" />
                            </Popover.Close>
                          </Popover.Content>
                        </Popover.Portal>
                      </Popover.Root>
                    ) : null}
                  </div>
                </div>
                <div className="text-white mt-3 text-center text-sm">
                  {product.description}
                </div>

                <div className="absolute gap-2 bottom-0 flex mt-7 items-center justify-between text-center">
                  <span className="flex items-center justify-center w-[130px] h-[35px] bg-blue-250 px-6 py-1 rounded text-sm ">
                    R$ {product.price}
                  </span>
                  <span className="flex items-center justify-center w-[130px] h-[35px] bg-blue-250 px-6 py-1 rounded text-sm">
                    {product.quantEstoque} Estoque
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <ToastContainer />
      </div>
    </>
  )
}
