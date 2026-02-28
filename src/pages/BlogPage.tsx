import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Blog</h1>
            <Button variant="outline" asChild>
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Gerador de Sites TensorFlow.js</h2>
              <p className="mb-4">Este projeto demonstra um gerador de imagem usando TensorFlow.js para criar imagens diretamente no navegador.</p>
              <Link 
                to="/image-generator" 
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
              >
                Acessar Gerador
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Outros Artigos</h2>
              <p className="mb-4">Confira nossos outros artigos sobre inteligência artificial e desenvolvimento web.</p>
              <button className="bg-muted text-muted-foreground px-4 py-2 rounded-md cursor-not-allowed" disabled>
                Em breve
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;