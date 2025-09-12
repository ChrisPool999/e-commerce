import { Product } from "@interfaces/product"
import Image from "next/image";

interface ProductProps {
  product: Product;
};

export default function ProductCard( {product}: ProductProps ) {
  console.log(product.photos[0]);

  return (
    <article>
      <div className="flex">
        <Image 
          alt="product photo" 
          src={`${product.photos[0]}`}
          width={300}
          height={300}
        ></Image>
        <div>
          <header></header>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <button></button>
    </article>
  )
}