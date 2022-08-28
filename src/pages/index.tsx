import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'

import { ButtonSubmit } from '../components/ButtonSubmit'
import { Input } from '../components/Input'
import { auth } from '../services/firebaseConfig'

const signInFormSchema = z.object({
  email: z.string().email('Deve ser um email.'),
  password: z.string().min(6, 'A senha precisa ter mais do que 6 caracteres.'),
})

type SignInForm = z.infer<typeof signInFormSchema>

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState<User>({} as User)

  const { register, handleSubmit } = useForm<SignInForm>()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const onSubmit = async (data: SignInForm) => {
    if (isLogin) {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        )
      } catch (error) {
        console.log('error signin', error)
      }
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        )
        console.log('user', user)
      } catch (error) {
        console.log('error register', error)
      }
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="h-screen w-screen">
      <main className="flex flex-col items-center justify-center text-center mx-auto h-full max-w-[500px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-8 w-4/5"
        >
          <h1 className="font-bold text-2xl">Entrar</h1>
          <Input
            register={register}
            name="email"
            placeholder="Email da empresa"
          />
          <Input
            type="password"
            register={register}
            name="password"
            placeholder="Senha da empresa"
          />
          <ButtonSubmit description="CRIAR" />
        </form>
        <button className="mt-10" onClick={() => setIsLogin((old) => !old)}>
          <p className="text-zinc-800 text-xs">
            {isLogin ? 'QUERO CADASTRAR.' : 'JÁ TENHO CONTA.'}
          </p>
        </button>
      </main>
    </div>
  )
}
