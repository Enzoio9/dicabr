import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="sobre" className="border-t border-border bg-secondary/30 py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="Dicas BR" className="mx-auto mb-4 h-16 w-auto" />
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Dicas BR é o seu blog brasileiro sobre games, trazendo análises, novidades e opiniões sobre os melhores jogos do mundo.
        </p>
        <p className="mt-6 font-body text-sm text-muted-foreground">
          © 2026 Dicas BR. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
