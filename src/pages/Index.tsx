import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  );
};

export default Index;
