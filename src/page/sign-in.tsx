import { LoginForm } from '../components/auth/login-form'
import { Welcome } from '../components/auth/welcome'

const SignInScreen = () => {
  return (
    <main className="flex flex-row justify-center md:h-screen h-max w-full">
      <Welcome />
      <LoginForm />
    </main>

  )
}

export default SignInScreen