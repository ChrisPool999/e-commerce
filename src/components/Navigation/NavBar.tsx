import HamburgerButton from "@/components/ui/HamburgerButton";
import SearchBar from "@/components/Navigation/SearchBar";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function NavBar() {

  return (
    <nav className={`flex justify-between items-center w-full h-20 bg-black gap-20 z-[200]`}>
      <HamburgerButton extraClass="ml-5"></HamburgerButton>  
      <SearchBar></SearchBar>
      <ShoppingCart fontSize="large" className="mr-5 text-white cursor-pointer z-1000 transparent"/>
    </nav>
  )
}
