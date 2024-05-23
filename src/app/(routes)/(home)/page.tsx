import Link from "next/link";
import ImageCarousel from "~/components/carousel/carousel";
import FeaturedProducts from "~/components/products/featured-products";
import Searchbar from "~/components/searchbar/search-input";
import Wrapper from "~/components/wrapper/wrapper";

export default async function Home() {
  return (
    <div>
   
      <ImageCarousel />
      <Wrapper className="mt-4 flex flex-col items-start justify-between sm:mt-8 sm:flex-row sm:items-center lg:mt-20">
        <h1 className="text-center text-2xl font-black uppercase  lg:text-4xl">
          Featured Products
        </h1>
        <Link href={"/products"} className="underline">
          View All Products
        </Link>
      </Wrapper>
      <FeaturedProducts />
    </div>
  );
}
