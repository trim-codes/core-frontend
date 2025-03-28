import { Globe } from 'lucide-react';
import React from 'react';
import { StatisticsItems } from '../../data';


interface Props {
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    subTitle: string;
};

export const Statistics = () => {
    return (
        <section className="w-full bg-white py-10 ">
            <div className="max-w-[1300px] mx-auto px-2 py-8 text-center space-y-8">
                <h1 className='md:text-4xl text-xl font-extrabold text-[#031F39] max-w-3xl mx-auto'>
                    Adopted and loved by millions of users for over a decade
                </h1>

                <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {StatisticsItems.map((item, idx) => (
                        <StatisticsCard
                            key={idx}
                            image={item.image}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// StatisticsCard component
export const StatisticsCard = ({
    image: Image,
    title,
    subTitle
}: Props) => {
    return (
        <div className="min-h-[300px] bg-[#EEEAE3] w-full rounded-md md:p-6 p-3 flex flex-col justify-around">
            <Image className="text-black w-12 h-12" />
            <h3 className="md:text-5xl text-2xl text-start font-bold text-[#031F39]">{title}</h3>
            <p className="md:text-lg text-md text-start text-[#031F39]">{subTitle}</p>
        </div>
    );
};
