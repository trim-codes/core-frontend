import { RegistrationForm } from "../components/auth/registration-form"
import { Welcome } from "../components/auth/welcome"

const SignUpScreen = () => {
    return (
        <main className="flex flex-row justify-center md:h-screen h-max w-full">
            <Welcome />
            <RegistrationForm />
        </main>
    )
}

export default SignUpScreen