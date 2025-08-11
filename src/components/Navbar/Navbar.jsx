import { Link } from "react-router-dom"
import { Contact2, Home, Laptop2, Menu, Code2, X, } from "lucide-react"
import { GoPerson } from "react-icons/go";
import { RiLinksFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "../../context/ScrollContext.jsx";

// Navigation items with ids, labels, anchor paths, and icons
const navItems = [
    { id: "home", name: "Home", path: "#hero", icon: <Home size={20} /> },
    { id: "about", name: "About", path: "#about", icon: <GoPerson size={20} /> },
    { id: "skills", name: "Skills", path: "#skills", icon: <Code2 size={20} /> },
    { id: "projects", name: "Projects", path: "#projects", icon: <Laptop2 size={20} /> },
    { id: "contact", name: "Contact", path: "#contact", icon: <Contact2 size={20} /> },
];

const Navbar = () => {
    // State for currently active nav link and mobile menu open/close
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Context to detect if page is scrolled beyond threshold
    const { hasScrolled } = useContext(ScrollContext)

    // Add or remove no-scroll class on document when menu toggled (to disable background scroll)
    useEffect(() => {
        if (isMenuOpen)
            document.documentElement.classList.add("no-scroll")
        else
            document.documentElement.classList.remove("no-scroll")
    }, [isMenuOpen])

    return (
        // Navbar container, fixed top, responsive styling, fade-in animation
        <nav className={` px-7 sm:px-10 md:px-16 lg:px-24 xl:px-28  ${hasScrolled ? "bg-background/90 " : ""} fixed z-100 flex items-center justify-between  w-full h-auto top-0 py-3 xl:gap-x-50 animate-fade-in-delay-7 `} >

            {/* Logo and branding linking to homepage */}
            <Link className="cursor-default text-[1.3rem]   md:text-2xl lg:text-[1.7rem] xl:text-[1.9rem] 2xl:text-3xl" to={"/"}>
                <span className="text-text font-medium ">Balaj's</span>
                <span className="font-[750] text-glow" style={{
                    background: "linear-gradient(150deg, rgb(103, 243, 224), rgb(25, 81, 81), rgb(23, 101, 101), rgb(5, 227, 243))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                }}>Portfolio<span className="text-xl md:text-2xl text-accent" >.</span></span>
            </Link>

            {/* Desktop navigation links (hidden on small screens) */}
            <div className=" ">
                <div className="hidden sm2:flex  px-4 lg:space-x-7 sm:space-x-5 sm2:space-x-2 md:space-x-4 text-sm  xl:space-x-9  lg:text-[.98rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                    {
                        navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.path}
                                onClick={() => setActiveLink(item.id)} // set active link by id on click
                                className={`border-b-2   p-1 transition-all duration-300 ease-in-out hover:scale-110 focus:scale-150 
      ${activeLink === item.id ? "border-b-secondary " : "border-transparent gradient-text-grey "}`}
                            >
                                {item.name}
                            </a>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center space-x-1">
                    <button className="sm2:hidden sm2:z-0 z-200" onClick={() => { setIsMenuOpen(prev => !prev) }}>
                        {isMenuOpen ? <X size={25} /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Right side controls: theme toggler and mobile menu toggle button */}


            {/* Mobile menu dropdown, toggled visibility and styles */}
            <div className={`mobile-menu sm2:hidden ${isMenuOpen ? "z-100 opacity-100 bg-background/10 backdrop-blur-sm pointer-events-auto  " : " opacity-0 pointer-events-none z-30 -translate-y-full"}`}>
                {
                    navItems.map((item, key) => {
                        return <a
                            onClick={() => { setIsMenuOpen(prev => !prev) }} // close menu on click
                            key={key}
                            href={item.path}
                            className="  w-full flex flex-center space-x-1.5  focus:scale-[1.1]  text-text  transition-colors duration-75 ease-in-out"
                        >
                            <span className=" w-[47%] h-full flex justify-end items-center text-accent ">{item.icon}</span>
                            <span className=" w-[53%]  h-full flex justify-start items-center">{item.name}</span></a>
                    })
                }
                {/* Social Links entry at bottom of mobile menu */}
                <a
                    onClick={() => { setIsMenuOpen(prev => !prev) }}
                    href="#footer"
                    className="  w-full flex flex-center space-x-1.5    text-text  transition-colors duration-75 ease-in-out">
                    <span className=" w-[47%] h-full flex justify-end items-center text-accent "><RiLinksFill size={20} /></span>
                    <span className=" w-[53%]  h-full flex justify-start items-center">Social Links</span>
                </a>
            </div>
        </nav >
    )
}

export default Navbar
