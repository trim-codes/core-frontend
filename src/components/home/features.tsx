import { Button } from '../ui/button'
import { featureItems } from '../../data'

import { FeatureCard } from './feature-card'

export const Features = () => {
    return (
        <section className="w-full bg-[#C6E9FF] h-max py-10">
            <div className="max-w-[1300px] mx-auto px-2 py-8 text-center space-y-8">
                <h1 className='md:text-4xl text-2xl font-bold text-black font-mono'>
                    The #1 platform for branded short links
                </h1>
                <p className='max-w-2xl mx-auto text-black md:text-lg text-md font-normal'>
                    Scale your brand, business, data, and systems with the industry's most reliable link management tools.
                </p>

                <Button
                    size="lg"
                    className='text-lg'
                >
                    Get Started For Free
                </Button>

                <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featureItems.map((item, idx) => (
                        <FeatureCard
                            key={idx}
                            image={item.image}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

