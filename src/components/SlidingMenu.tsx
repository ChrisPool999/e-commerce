"use client"

import { useMenu } from "@context/MenuContext";
import React from "react";
import { zIndex } from "@styles/zIndex";
import ExitButton from "./ExitButton";

interface SlidingMenuProps {
  IdName?: string;
  fromLeft?: boolean;
  overlay?: boolean;
  screenWidth?: string;
  content?: React.ReactNode; 
}

export default function SlidingMenu( {content, fromLeft=true, overlay=true, screenWidth="70"}: SlidingMenuProps ) {
  const {menuId, isOpen, closeMenu} = useMenu();

  return (
    <nav>
      <div 
        style={{ width : `${screenWidth}vw` }}
        id={menuId} 
        className={`menu fixed top-0 left-0 h-full bg-gray-800 
          transition-transform duration-500 ease-in-out z-[400]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <ExitButton extraClass={`absolute top-[20px] right-[-45px] transiton-all ease-in-out duration-300 
          ${!isOpen ? "opacity-0 pointer-events-none" : ""}`}  
        />
        {content}
      </div>
      
      <div className={`overlay fixed inset-0 w-full h-full z-[10] bg-black transition-opacity duration-300 ease-in-out
        ${isOpen ? "opacity-70" : "opacity-0"}`
      }></div>
    </nav>
  )
}