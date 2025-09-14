import { Product } from "@interfaces/product"
import Image from "next/image";
import Button from "@components/ui/Button"
import RatingStars from "@components/ui/RatingStars";

interface ProductProps {
  product: Product;
};

export default function ProductCard( {product}: ProductProps ) {
  return (
    <article className="w-60 h-156 outline-1 outline-gray-200 spacing-left-m spacing-top-m">
      <div className="relative w-full h-60 bg-gray-100">
        <Image 
          alt="product photo" 
          src={`${product.photos[0]}`}
          fill
          className="object-contain mix-blend-multiply"
        ></Image>
      </div>
      <section className="spacing-left-s">
        <h2 aria-label={product.name}></h2>
        <span className="line-clamp-3 spacing-top-s">{product.name}</span>
        <div className="spacing-top-s">
          <span>{product.rating}</span>
          <RatingStars rating={product.rating}></RatingStars>
          <span>{product.reviews}</span>
        </div>
        <span className="block spacing-top-s">${product.price}</span>
        <div className="spacing-top-s">
          <Button>
            <span>Add to cart</span>
          </Button>
        </div>
      </section>
    </article>
  )
}