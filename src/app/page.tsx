import Link from "next/link";
import ImageCarousel from "~/components/carousel/carousel";
import { CreatePost } from "~/components/forms/create-post";
import { ProductsGrid } from "~/components/products/products-grid";
import Wrapper from "~/components/wrapper/wrapper";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Home(props: PageProps) {
  return (
    <div>
      <ImageCarousel />
      <Wrapper className="mt-4 flex items-center justify-between  sm:mt-8 lg:mt-20">
        <h1 className="text-center text-2xl font-black uppercase  lg:text-4xl">
          Featured Products
        </h1>
        <Link href={"/products"} className="underline">
          View All Products
        </Link>
      </Wrapper>
      <ProductsGrid {...props} />
    </div>
  );
}
