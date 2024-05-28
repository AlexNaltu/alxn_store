"use client";
import React from "react";
import { IoPerson } from "react-icons/io5";
import Wrapper from "../wrapper/wrapper";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "~/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Slider from "react-slick";
import ReactStars from "react-stars";

const TestimonialsCarousel = () => {
  let settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="mb-10  text-2xl font-black uppercase lg:text-4xl">
        Testimonials
      </h1>
      <div>
        <Slider {...settings} className="mb-10 max-w-[80vw] overflow-hidden">
          {testimonials.map((testimonials) => (
            <div key={testimonials.name} className="flex">
              <Card className="mx-auto flex h-full w-[280px] flex-col items-center justify-center lg:w-[260px] xl:w-[300px]">
                <CardHeader>
                  <IoPerson size={100} />
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                  <CardTitle>{testimonials.name}</CardTitle>
                  <p className="line-clamp-5">{testimonials.description}</p>
                  <ReactStars
                    count={5}
                    value={testimonials.rating}
                    color2={"#ffd700"}
                    size={24}
                    edit={false}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialsCarousel;

/* */
