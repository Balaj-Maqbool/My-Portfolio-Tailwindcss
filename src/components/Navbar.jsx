import { Link } from "react-router-dom"
import ThemeToggler from "../components/ThemeToggler.jsx"
import { Contact2, Home, Laptop2, Menu, Code2, X } from "lucide-react"
import { GoPerson } from "react-icons/go";
import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "../context/ScrollContext.jsx";


const navItems = [
    { id: "home", name: "Home", path: "#hero", icon: <Home size={20} /> },
    { id: "about", name: "About", path: "#about", icon: <GoPerson size={20} /> },
    { id: "skills", name: "Skills", path: "#skills", icon: <Code2 size={20} /> },
    { id: "projects", name: "Projects", path: "#projects", icon: <Laptop2 size={20} /> },
    { id: "contact", name: "Contact", path: "#contact", icon: <Contact2 size={20} /> },
];


const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { hasScrolled } = useContext(ScrollContext)

    useEffect(() => {
        if (isMenuOpen)
            document.documentElement.classList.add("no-scroll")
        else
            document.documentElement.classList.remove("no-scroll")
    }, [isMenuOpen])

    return (
        <nav className={`  ${hasScrolled ? "bg-primary/90 " : ""} fixed z-100 flex items-center justify-around w-full h-auto top-0 py-3 xl:gap-x-50 animate-fade-in-delay-7 `} >
            <Link className="cursor-default text-[1.3rem] md:text-2xl lg:text-[1.7rem] xl:text-[1.9rem] 2xl:text-3xl" to={"/"}>
                <span className="text-text font-medium ">Balaj's</span>
                <span className="font-[750] text-glow" style={{
                    background: "linear-gradient(150deg, rgb(103, 243, 224), rgb(25, 81, 81), rgb(23, 101, 101), rgb(5, 227, 243))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                }}>Portfolio<span className="text-2xl" style={{ color: "oklch(57.7% 0.245 27.325)" }}>.</span></span>
            </Link>

            {/* {Desktop Navbar} */}
            <div className="hidden md:flex lg:space-x-7 sm:space-x-5 text-sm  lg:text-[.98rem] xl:text-[1rem] 2xl:text-[1.1rem] ">
                {

                    navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.path}
                            onClick={() => setActiveLink(item.id)} // use `id`, not `name`
                            className={`border-b-2   p-1 transition-all duration-300 ease-in-out hover:scale-110 focus:scale-150 
      ${activeLink === item.id ? "border-b-accent " : "border-transparent gradient-text-grey "}`}
                        >
                            {item.name}
                        </a>
                    ))


                }
            </div>

            <div className="flex justify-center items-center space-x-1">
                <ThemeToggler />
                <button className="md:hidden z-110" onClick={() => { setIsMenuOpen(prev => !prev) }}>{isMenuOpen ? <X size={25} /> : <Menu />}</button>
            </div>

            {/* {Mobile Menu} */}
            <div className={`mobile-menu ${isMenuOpen ? "z-100 opacity-100 bg-primary/10 backdrop-blur-sm pointer-events-auto  " : " opacity-0 pointer-events-none z-30 -translate-y-full"}`}>

                {
                    navItems.map((item, key) => {
                        return <a
                            onClick={() => { setIsMenuOpen(prev => !prev) }}
                            key={key}
                            href={item.path}
                            className="  w-full flex flex-center space-x-1.5 focus:text-accent focus:scale-[1.1]  text-text  transition-colors duration-75 ease-in-out"
                        >
                            <span className=" w-[47%] h-full flex justify-end items-center text-[oklch(57.7%_0.245_27.325)] ">{item.icon}</span>
                            <span className=" w-[53%]  h-full flex justify-start items-center">{item.name}</span></a>
                    })
                }
            </div>
        </nav >
    )
}

export default Navbar

