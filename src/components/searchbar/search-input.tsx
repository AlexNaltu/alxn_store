"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { trpc } from "~/app/_trpc/client";
import { Input } from "../ui/input";
import SearchResults from "./search-results";
import Fuse from "fuse.js";
import { Post } from "@prisma/client";
import debounce from "lodash.debounce";

const Searchbar = () => {
  // fetch products from the server
  const products = trpc.post.getProducts.useQuery();
  // state to store the search query
  const [queryText, setQueryText] = useState("");
  // state to store the search results
  const [searchResults, setSearchResults] = useState<Post[] | undefined>(
    products.data,
  );

  // handle search input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);
  };

  useEffect(() => {
    // if !queryText, set searchResults to an empty array
    if (!queryText) {
      setSearchResults([]);
      return;
    }

    // creates a new Fuse instance with the products data and search options
    const fuse = new Fuse(products.data || [], {
      keys: ["name", "description"],
      includeScore: true,
    });

    // search for the query text in the products data
    const result = fuse.search(queryText);
    console.log(result);

    // transform the search results to only include the item
    const transformedResults = result.map((r) => r.item);
    setSearchResults(transformedResults);
  }, [queryText, products.data]);

  return (
    <div>
      <Input
        type="text"
        value={queryText}
        onChange={handleChange}
        placeholder="Search Products"
      />
      {queryText && (
        <div className="flex flex-col border-2 border-t-0 border-black ">
          {searchResults?.map((result) => (
            <SearchResults
              key={result.id}
              id={result.id}
              name={result.name}
              price={result.price}
              quantity={result.quantity}
              description={result.description}
              image_url={result.image_url}
              isInStock={result.isInStock}
              createdAt={result.createdAt}
              updatedAt={result.updatedAt}
              category={result.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
