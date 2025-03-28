import React from 'react'
import { footerItems } from '../data'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="w-full bg-black py-10">
            <div className="max-w-[1300px] mx-auto px-2 py-8 text-center space-y-8">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
                    {footerItems.map((footer, idx) => (
                        <div key={idx} className="w-full md:w-3/5">
                            <h4 className="text-xl font-semibold mb-4 text-white">{footer.title}</h4>
                            <div className="flex flex-col space-y-2">
                                {footer.subTitle.map((item, subIdx) => (
                                    <Link
                                        key={subIdx}
                                        to="#"
                                        className="text-sm text-white hover:text-blue-600 transition duration-300"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Separator className='my-4' />
                <span className="text-white mt-6 block">
                    © {currentYear} Trim.Codes | Handmade in New York City, Denver, Berlin, and all over the world.
                </span>
            </div>
        </section>
    )
}
