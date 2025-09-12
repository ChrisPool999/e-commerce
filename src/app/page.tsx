import NavBar from "@/components/Navigation/NavBar"
import SlidingMenu from "@/components/Navigation/SlidingMenu"
import ProductCard from "@/components/search/ProductCard";
import { MenuProvider }  from "@/context/MenuContext"
import { Product } from "@interfaces/product"
import Image from "next/image";

export default async function Page() {
  const res = await fetch("http://localhost:3001/products");
  const products: Product[] = await res.json();

  return (
    <MenuProvider menuId="nav-sliding-menu">
      <NavBar></NavBar>
      <SlidingMenu></SlidingMenu>
      <ProductCard product={products[0]}></ProductCard>
    </MenuProvider>
  )
}
