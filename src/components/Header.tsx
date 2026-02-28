import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dicas BR" className="h-10 w-auto" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="font-body text-sm font-bold text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/blog" className="font-body text-sm font-bold text-foreground hover:text-primary transition-colors">
            Artigo
          </Link>
          <Link to="/game-generator" className="font-body text-sm font-bold text-foreground hover:text-primary transition-colors">
            
          </Link>
          <a href="#sobre" className="font-body text-sm font-bold text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
