import { Link, QrCode, Globe, Unlink } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const items = [
    { width: "w-16", height: "h-16", bgColor: "#FFFDC8", icon: <Unlink className="size-10" /> },
    { width: "w-20", height: "h-20", bgColor: "#FFF953", icon: <Link className="size-10" /> },
    { width: "w-20", height: "h-20", bgColor: "#FFF953", icon: <QrCode className="size-10" /> },
    { width: "w-16", height: "h-16", bgColor: "#FFFDC8", icon: <Globe className="size-10" /> },
];

export const Hero = () => {
    return (
        <section className="w-full bg-[#E0F1FE] h-96">
            <div className="max-w-[1300px] mx-auto px-2 py-8 text-center space-y-4">
                <h1 className="md:text-4xl text-2xl font-bold text-black font-mono">Build stronger digital connections</h1>
                <p className="text-black md:text-2xl text-md font-medium font-mono">
                    Free URL shortener & QR code generator
                </p>

                <div className="flex items-center justify-center gap-x-6 pt-10">
                    <div className="md:flex hidden items-center justify-center gap-x-6">
                        {items.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center ${item.width} ${item.height} rounded-md`}
                                style={{ backgroundColor: item.bgColor }} // Apply bgColor dynamically
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 max-w-3xl relative flex flex-col">
                        <Input
                            placeholder="Type or paste a link (URL)"
                            className="mx-auto p-6"
                            style={{ padding: '1.5rem' }}
                        />
                        <div className="absolute md:right-2 md:top-3 top-[110%] w-full md:w-auto">
                            <Button
                                className="bg-gray-200 hover:bg-gray-100 w-full md:w-auto"
                                size="lg"
                            >
                                <p className="text-lg text-black">Shorten Link</p>
                            </Button>
                        </div>
                    </div>
                    <div className="md:flex hidden items-center justify-center gap-x-6">
                        {items.slice(2).map((item, index) => (
                            <div
                                key={index + 2}
                                className={`flex items-center justify-center ${item.width} ${item.height} rounded-md`}
                                style={{ backgroundColor: item.bgColor }} // Apply bgColor dynamically
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
