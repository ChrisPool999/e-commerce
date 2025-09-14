import NavBar from "@/components/Navigation/NavBar"
import SlidingMenu from "@/components/Navigation/SlidingMenu"
import ProductCard from "@/components/search/ProductCard";
import { MenuProvider }  from "@/context/MenuContext"
import { Product } from "@interfaces/product"

export default async function Page() {
  const res = await fetch("http://localhost:3001/products");
  const products: Product[] = await res.json();

  return (
    <MenuProvider menuId="nav-sliding-menu">
      <NavBar></NavBar>
      <SlidingMenu></SlidingMenu>
      <div className="flex">
        <ProductCard product={products[0]}></ProductCard>
        <ProductCard product={products[1]}></ProductCard>
        <ProductCard product={products[2]}></ProductCard>
        <ProductCard product={products[3]}></ProductCard>
        <ProductCard product={products[4]}></ProductCard>
      </div>
    </MenuProvider>
  )
}
