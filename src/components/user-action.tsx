import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const buttonLinks = [
    {
        label: "Login",
        path: "/sign-in",
        bgColor: "bg-transparent",
        hoverColor: "hover:text-gray-500 hover:bg-transparent",
        borderColor: "border-none",
        textColor: "text-black"
    },
    {
        label: "Talk to sales",
        path: "/quote",
        bgColor: "bg-transparent",
        hoverColor: "hover:bg-black hover:text-white",
        borderColor: "border-[1px]",
        textColor: "text-black"
    },
    {
        label: "Try for Free",
        path: "/sign-up",
        bgColor: "bg-black",
        hoverColor: "hover:bg-gray-700",
        borderColor: "border-none",
        textColor: "text-white"
    }
];

export const UserAction = () => {


    return (
        <div className='md:flex hidden items-center justify-between gap-x-8'>
            {buttonLinks.map((button, index) => (
                <Button
                    key={index}
                    className={`fonb-fold text-sm ${button.bgColor} ${button.borderColor} ${button.textColor} ${button.hoverColor} border-2 px-4 py-2 rounded-md`}
                    asChild
                >
                    <Link to={button.path}>
                        {button.label}
                    </Link>
                </Button>
            ))}
        </div>
    );
}
