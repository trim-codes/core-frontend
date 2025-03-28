import { Footer } from '../components/footer'
import { Features } from '../components/home/features'
import { Hero } from '../components/home/hero'
import { Statistics } from '../components/home/statistics'
import { Testimonies } from '../components/home/testimonies'
import { UseCases } from '../components/home/use-cases'
import { Navbar } from '../components/navbar'

const HomeScreen = () => {
    return (
        <main className="w-full bg-[#E0F1FE]">
            {/* // <main className="w-full"> */}
            <Navbar />
            <div className="pt-[120px]">
                <Hero />
                <Features />
                <Statistics />
                <Testimonies />
                <UseCases />
                {/* <Overview /> */}
                <Footer />
            </div>
        </main>
    )
}

export default HomeScreen;
