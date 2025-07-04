import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, WineOff, X } from "lucide-react";
import { Moon, Sun } from 'lucide-react';

const navItems = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#Aboutme"},
    {name:"Skills", href:"#Skills"},
    {name:"Projects", href:"#Projects"},
    {name:"Contact", href:"#Contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);


    const ToggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    
    useEffect(() => {
    // Handle scroll for navbar style change
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 10);
      }
    };
    // Set initial theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, [isMenuOpen]); // Add `isMenuOpen` as a dependency
    
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10 ">
                        <span className="text-glow text-foreground">PadroTech</span> Portfolio
                    </span>
                </a>
                {/* desktop-version */}
                
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                    <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name}
                    </a>

                    ))}
                </div>
                <div>
                    <button onClick={ToggleTheme} className={cn("hidden md:flex p-2 rounded-full transition-colors duration-300",
                        "focus:outline-hidden hover:cursor-pointer"
                        )}>
                        {isDarkMode? <Sun className='h-6 w-6 text-yellow-300'/> 
                        : <Moon className='h-6 w-6 text-blue-400'/>}
                    </button>
                </div>
                <button onClick={()=>setIsMenuOpen((prev) => !prev)} className="md:hidden text-foreground z-50" aria-label={isMenuOpen?"close Menu" : "open Menu"}>
                    {isMenuOpen? <X size = {24}/> : <Menu size={24}/>}</button>
                {/* mobile-version */}
                <div className={cn("fixed inset-0 bg-background/2 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl ">
                    {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                    onClick={()=>setIsMenuOpen(false)}>{item.name}</a>

                    ))}
                    </div>
                </div>
            </div>
    </nav>
    )
}