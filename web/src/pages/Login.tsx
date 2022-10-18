import EstoqueImg from '../assets/login-image.svg'
import Logo from '../assets/LogoEstoque.svg'
import { TextInput } from '../components/Input'
import { User } from 'phosphor-react'
import { LockSimple } from 'phosphor-react'
import { Button } from '../components/Button'
import { createRef, FormEvent, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginUser } from '../functions/User/loginUser'
import { InputError } from '../components/InputError'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const schema = yup.object().shape({
    username: yup.string(),
    password: yup.string()
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  async function onSub(event: FormEvent) {
    event.preventDefault()

    await loginUser(username, password)
      .then(response => {
        toast.success('Login realizado com sucesso')
        localStorage.setItem('token', response.token)

        navigate('/dashboard')
      })
      .catch(() => {
        toast.error('Usuário ou senha incorretos')
      })
  }

  return (
    <div className="flex">
      <div className="w-[1200px] bg-gray-750">
        <form
          className="flex items-center flex-col gap-8 justify-center h-screen"
          onSubmit={onSub}
        >
          <img src={Logo} alt="" />

          <TextInput.Root>
            <TextInput.Icon>
              <User weight="fill" color="#00B4CC" />
            </TextInput.Icon>

            <TextInput.Input
              placeholder="User"
              id="username"
              name="username"
              onChange={event => {
                setUsername(event.target.value)
              }}
              ref={ref}
            />
          </TextInput.Root>

          <TextInput.Root>
            <TextInput.Icon>
              <LockSimple weight="fill" color="#00B4CC" />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={event => {
                setPassword(event.target.value)
              }}
              ref={ref}
            />
          </TextInput.Root>

          <Button children="Enviar" />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </form>
      </div>
      <img className="max-h-screen" src={EstoqueImg} alt="" />
    </div>
  )
}
