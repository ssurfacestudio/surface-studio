import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import BestSellers from "@/components/home/BestSellers";
import WhySurfaceStudio from "@/components/home/WhySurfaceStudio";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import Testimonials from "@/components/home/Testimonials";
import GlobalExport from "@/components/home/GlobalExport";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/Newsletter";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <WhySurfaceStudio />
      <ManufacturingProcess />
      <Testimonials />
      <GlobalExport />
      <InstagramGallery />
      <Newsletter />
      <ContactCTA />
    </>
  );
}
