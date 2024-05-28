import Link from "next/link";
import ImageCarousel from "~/components/carousel/carousel";
import FeaturedProducts from "~/components/sections/featured-products-section";
import Searchbar from "~/components/searchbar/search-input";
import BestFoodSection from "~/components/sections/best-food-section";
import BestSellersSection from "~/components/sections/best-sellers-section";
import TestimonialsCarousel from "~/components/carousel/testimonials-carousel";
import AccordionSection from "~/components/sections/accordion-section";

export default async function Home() {
  return (
    <div>
      <ImageCarousel />
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex flex-col items-start justify-between sm:mt-8 sm:flex-row sm:items-center lg:mt-20">
          <h1 className="text-center text-2xl font-black uppercase  lg:text-4xl">
            Featured Products
          </h1>
          <Link href={"/products"} className="underline">
            View All Products
          </Link>
        </div>
        <FeaturedProducts />
        <BestFoodSection />
        <BestSellersSection />
        <TestimonialsCarousel />
        <AccordionSection />
      </div>
    </div>
  );
}
