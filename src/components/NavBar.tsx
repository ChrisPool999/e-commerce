import HamburgerButton from "@components/HamburgerButton"
import { zIndex } from "@styles/zIndex"

export default function NavBar() {

  return (
    <nav className={`flex w-full h-20 bg-black gap-20 z-[200]`}>
      <HamburgerButton extraClass="ml-5 mt-5"></HamburgerButton>  
    </nav>
  )
}
