import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Maps from "@/components/Maps";
import mapConfig from "@/components/static-data/mapConfig";
import Carousel from "@/components/Carousel";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];
  

export const metadata: Metadata = {
  title: "Connecting Minds Heading need to be chnaged",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/**<Brands />*/}
      <Feature />
      <Carousel autoSlide={true} autoSlideInterval={6000} slides={slides} />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Blog />
      <Maps googleMapUrl={mapConfig.googleMapUrl1} />
      <Contact />
    </main>
  );
}
