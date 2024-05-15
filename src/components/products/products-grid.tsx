"use server";

import { db } from "~/server/db";
import React from "react";
import { PageProps } from "~/app/page";

import { Pagination } from "../pagination/pagination";
import { revalidatePath } from "next/cache";
import ProductsCard from "./products-card";
import Wrapper from "../wrapper/wrapper";

// type of fetchFeed
export type FetchFeedType = typeof fetchFeed;

// PAGE_SIZE
const PAGE_SIZE = 8;

// fetchFeed function to fetch the feed data
const fetchFeed = async ({ take = PAGE_SIZE, skip = 0 }) => {
  "use server";

  // Fetch the data from the database
  const results = await db.post.findMany({
    take,
    skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  // Get the total number of posts
  const total = await db.post.count();

  // Revalidate the path
  revalidatePath("/");

  // Return the data and metadata
  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
    },
  };
};

// Feed component to display the feed
export const ProductsGrid = async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.

  // Calculate the take and skip values
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.

  // Fetch the feed data
  const { data, metadata } = await fetchFeed({ take, skip });

  return (
    <Wrapper className="my-5 flex flex-col justify-center gap-4 sm:my-10 lg:my-14 lg:gap-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((listing, i) => (
          <ProductsCard {...listing} key={i} />
        ))}
      </div>

      <Pagination {...props.searchParams} {...metadata} />
    </Wrapper>
  );
};
