import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/WhyChooseUs";
import SocialProof from "@/components/SocialProof";
import GalleryCarousel from "@/components/GalleryCarousel";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <GalleryCarousel />
        <SocialProof />
        <FAQs />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
