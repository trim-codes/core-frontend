import { ChevronRight } from 'lucide-react';
import React from 'react';

interface Props {
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    subTitle: string;
};

export const FeatureCard = ({
    image: Image,
    title,
    subTitle
}: Props) => {
    return (
        <div className="min-h-[500px] bg-white w-full rounded-md md:p-6 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-center w-full min-h-[200px] rounded-md bg-[#67BFFA]">
                <Image
                    className="text-black"
                    size={48}
                />
            </div>
            <h3 className="font-normal text-xl text-start max-w-60">{title}</h3>
            <div className="flex items-center justify-between">
                <p className="text-md text-gray-600 text-start max-w-[230px]">{subTitle}</p>
                <div className="w-16 h-16 border-2 rounded-md flex items-center justify-center group hover:bg-black cursor-pointer">
                    <ChevronRight className="text-gray-500 group-hover:text-white" />
                </div>
            </div>
        </div>
    );
};
