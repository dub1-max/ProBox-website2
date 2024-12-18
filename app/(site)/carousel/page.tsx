import Carousel from "@/components/Carousel";
import { Metadata } from "next";
import React from "react";

const slides = [
"https://i.ibb.co/ncrXc2V/1.png",
"https://i.ibb.co/B3s7v4h/2.png",
"https://i.ibb.co/XXR8kzF/3.png"
];

export const metadata: Metadata = {
  title: "Carousel",
  description: "This is Support page for Solid Pro",
  // other metadata
};

export default function CarouselPage() {
  return (
    <>
      <section className="pt-10">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <div style={{
        paddingTop: "80px",
        
      }}>
        <Carousel autoSlide={true} autoSlideInterval={6000} slides={slides} />
      </div>
      </section>
    </>
  );
}