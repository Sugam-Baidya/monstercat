import { Facebook, Instagram, Twitch, X, Music2, Menu, X as XIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 bg-black/80 backdrop-blur-md text-white xl:hidden",
          className
        )}
      >
        <div className="shrink-0">
          <img src="/favicon.ico" alt="logo" className="h-8 w-8" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Instagram className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Music2 className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <X className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Twitch className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Facebook className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
        </div>

        <button onClick={openMenu} className="shrink-0 z-50 cursor-pointer">
          <Menu className="h-7 w-7" />
        </button>
      </div>

      
      <div
        className={cn(
          "hidden xl:flex xl:fixed xl:top-0 xl:right-0 xl:bottom-0 xl:z-50 xl:flex-col xl:items-center xl:justify-start xl:w-20 xl:pt-8 xl:gap-20 text-white bg-transparent",
          className
        )}
      >
        
        <button onClick={openMenu} className="shrink-0 hover:text-gray-300 transition cursor-pointer">
          <Menu className="h-7 w-7" />
        </button>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-8">
          <Instagram className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Music2 className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <X className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Twitch className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          <Facebook className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
        </div>
      </div>

     
      <div
        className={cn(
          "fixed inset-0 z-50 flex justify-end transition-opacity duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/*  */}
        <div
          className={cn(
            "relative w-100 max-w-full bg-black text-white flex flex-col transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
         
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-1 cursor-pointer">
                
              <img src="/favicon.ico" alt="logo" className="h-12 w-12" />
              <span className="text-md  tracking-wider">monstercat</span>
            </div>
            <button onClick={closeMenu} className="hover:text-gray-300 transition cursor-pointer">
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-6 text-md font-light">
            <a href="#" className="block hover:text-gray-300 transition">MUSIC ›</a>
            <a href="#" className="block hover:text-gray-300 transition">ARTISTS</a>
            <a href="#" className="block hover:text-gray-300 transition">ABOUT ›</a>
            <a href="#" className="block hover:text-gray-300 transition">NEWS</a>
            <a href="#" className="block hover:text-gray-300 transition">EVENTS ›</a>
            <a href="#" className="block hover:text-gray-300 transition">PROGRAMMING ›</a>
            <a href="#" className="block hover:text-gray-300 transition">GOLD</a>
            <a href="#" className="block hover:text-gray-300 transition">PARTNERS</a>
            <a href="#" className="block hover:text-gray-300 transition">PRESS</a>
            <a href="#" className="block hover:text-gray-300 transition">PLAYER</a>
            <a href="#" className="block hover:text-gray-300 transition">SHOP</a>
            <a href="#" className="block hover:text-gray-300 transition">LOST CIVILIZATION</a>
          </nav>

          
          <div className="px-6 py-8 flex gap-6">
            <Instagram className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
            <Music2 className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
            <X className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
            <Twitch className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
            <Facebook className="h-5 w-5 hover:text-gray-300 transition cursor-pointer" />
          </div>

          
          <div className="px-6 pb-8 flex gap-6 text-sm font-medium mb-2">
            <button className="border border-white px-6 hover:bg-white hover:text-black transition cursor-pointer">
              SIGN IN
            </button>
            <button className="px-6 py-3 hover:text-gray-300 transition cursor-pointer">
              OR SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;