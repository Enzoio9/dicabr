import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Background pattern */}

      <div className="container relative mx-auto px-4 text-center">
        {/* Logo centered */}
        <img
          src={logo}
          alt="Dicas BR"
          className="mx-auto mb-8 h-32 w-auto drop-shadow-2xl md:h-44"
        />

        <h1 className="mb-4 font-display text-4xl text-foreground md:text-6xl">
          Super Mario Bros. Wonder
        </h1>
        <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-foreground md:text-xl">
          O jogo que revolucionou a franquia com mecânicas nunca vistas e surpreendeu o mundo inteiro!
        </p>

        {/* Hero image */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={heroImg}
            alt="Super Mario Bros. Wonder - Mario alcançando a Wonder Flower"
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Acessar Blog
          </Link>
          <Link
            to="/image-generator"
            className="rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Gerador de Sites
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
