import NavBar from "@/components/NavBar"
import SlidingMenu from "@/components/SlidingMenu"
import { MenuProvider } from "@/context/MenuContext"

export default function Page() {
  return (
    <MenuProvider menuId="nav-sliding-menu">
      <NavBar></NavBar>
      <SlidingMenu></SlidingMenu>
    </MenuProvider>
  )
}

// onClick, aria-controls