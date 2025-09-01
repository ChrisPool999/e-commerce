"use client"

import { zIndex } from "@/styles/zIndex";
import { useMenu } from "@context/MenuContext";

interface HamburgerButtonProps {
  sizeClass?: string;
  onClick?: () => void;
  ariaControls?: string;
  extraClass?: string;
}

export default function HamburgerButton( {sizeClass = "h-8 w-8", extraClass = ''}: HamburgerButtonProps ) {
  const {menuId, isOpen, openMenu} = useMenu();

  return ( 
    <button 
    type="button"
    onClick={openMenu}
    className={`hamburger-btn flex relative ${sizeClass} cursor-pointer group ${extraClass} z-[100]`}
    aria-label="open menu"
    aria-haspopup="menu"
    aria-expanded={isOpen}
    aria-controls={menuId}>
      
      <div className="hamburger-btn__overlay absolute w-[180%] h-[180%] inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 group-hover:bg-gray-500  transition-all duration-300 ease-in-out"></div>
      
      <div className="hamburger-btn__bar-wrapper absolute flex inset-0 flex-col justify-between z-2">
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
        <span className="hamburger-btn__bar w-full h-1/5 bg-white"></span>
      </div>
    </button>
  )
}