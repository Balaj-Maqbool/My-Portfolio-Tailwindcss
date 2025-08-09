import { MailIcon, Linkedin, Github } from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa'
import { ImFire } from "react-icons/im";


const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/balaj-maqbool",
        icon: <Github className="social-icon-hover" />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/balaj-maqbool",
        icon: <Linkedin className="social-icon-hover" />,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/923252624261",
        icon: <FaWhatsapp className="social-icon-hover" />,
    },
    {
        label: "Email",
        href: "mailto:balajmaqbool54@gmail.com",
        icon: <MailIcon className="social-icon-hover" />,
    },
];


const Footer = () => {
    return (
        <div id="footer" className={` w-full  pt-2  pb-10 flex flex-col ' id="footer" `}>
            <div className="flex flex-center space-x-5">
                {
                    socialLinks.map((link, index) => {
                        return (
                            <a key={index} href={link.href} target="blank">{link.icon}</a>
                        )
                    })
                }
            </div>
            <h3 className=" mt-3  lg:mt-4 text-[.8rem] sm:text-sm md:text-[1rem] xl:text-xl text-text/60 ">
                <p> &copy; 2025 Balaj Maqbool. All rights reserved.</p>
                <p className="flex flex-center gap-x-1">Designed and built with <ImFire className=" text-red-500 z-50 text-[1rem] md:text-xl" />passion.</p>
            </h3>

        </div>
    )
}

export default Footer
