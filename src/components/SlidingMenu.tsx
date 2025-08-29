"use client"

import { useMenu } from "@context/MenuContext";
import React from "react";
import { zIndex } from "@styles/zIndex";

interface SlidingMenuProps {
  IdName?: string;
  fromLeft?: boolean;
  screenWidth?: string;
  content?: React.ReactNode; 
}

export default function SlidingMenu( {content, fromLeft=true, screenWidth="70"}: SlidingMenuProps ) {
  const {menuId, isOpen, closeMenu} = useMenu();

  return (
    <div 
      id={menuId} 
      className={`fixed top-0 left-0 h-full w-[80vw]  bg-gray-800 
        transition-transform duration-500 ease-in-out z-[300]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      {content}
    </div>
  )
}