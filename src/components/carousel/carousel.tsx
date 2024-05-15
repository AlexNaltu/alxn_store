"use client";

import Image from "next/image";
import React from "react";
import { carouselImages } from "~/lib/data";
import Wrapper from "../wrapper/wrapper";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  return (
    <Wrapper>
      <Carousel
        autoPlay={true}
        swipeable={true}
        infiniteLoop={true}
        interval={3500}
        transitionTime={2000}
      >
        {carouselImages.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={"/"}
            width={3000}
            height={1000}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default ImageCarousel;