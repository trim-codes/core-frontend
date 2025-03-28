import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { UserAction } from "./user-action";
import { Menu, ChevronDown } from "lucide-react"; // Importing the ChevronDown icon
import { useMobileSidebar } from "../hooks/use-mobile-sidebar";

export const Navbar = () => {
    const { onOpen } = useMobileSidebar();

    // Define the navigation links
    const navLinks = [
        { label: "Platform", path: "/sign-in" },
        { label: " Pricing", path: "/platform" },
        { label: "Resources", path: "/resources" }
    ];

    return (
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50 h-16">
            <div className="max-w-[1300px] mx-auto px-2 pt-3">
                <section className="flex items-center justify-between">
                    <Logo />
                    <div className="md:flex hidden items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="text-gray-700 font-medium text-sm py-2 px-4 rounded-md hover:bg-[#D4E5F2] hover:text-black transition-all duration-300"
                            >
                                {link.label}
                                {(index === 0 || index === navLinks.length - 1) && (
                                    <ChevronDown className="inline ml-2" size={16} />
                                )}
                            </Link>
                        ))}
                    </div>
                    <UserAction />
                    <div
                        onClick={onOpen}
                        className="md:hidden flex cursor-pointer w-10 h-10 hover:bg-slate-200 items-center justify-center rounded-md"
                    >
                        <Menu />
                    </div>
                </section>
            </div>
        </nav>
    );
};
