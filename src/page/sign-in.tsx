import { LoginForm } from '../components/auth/login-form'
import { Welcome } from '../components/auth/welcome'

const SignInScreen = () => {
  return (
    <main className="">
      <main className="flex flex-row  items-center justify-center md:h-screen h-max w-full">
        <Welcome />
        <LoginForm />
      </main>
    </main >
  )
}

export default SignInScreen