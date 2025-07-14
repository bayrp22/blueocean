import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialProof from "@/components/SocialProof";
import GalleryCarousel from "@/components/GalleryCarousel";
import PricingBooking from "@/components/PricingBooking";
import FAQs from "@/components/FAQs";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <WhyChooseUs />
        <SocialProof />
        <GalleryCarousel />
        <PricingBooking />
        <FAQs />
      </Layout>
      <StickyCTA />
    </>
  );
};

export default Index;
