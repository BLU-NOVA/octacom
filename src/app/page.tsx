import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductsShowcase";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChoosUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyChooseUs />
      <ProductShowcase />
      <Reviews />
    </div>
  );
}
