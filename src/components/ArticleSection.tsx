import { Star, Gamepad2, Sparkles, Trophy, Heart } from "lucide-react";

const ArticleSection = () => {
  return (
    <section id="artigo" className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <article className="space-y-8">
          {/* Title */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-sm font-bold text-secondary-foreground">
              <Star className="h-4 w-4" /> Análise Completa
            </span>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
              Por que Mario Wonder é uma Obra-Prima?
            </h2>
            <p className="mt-2 font-body text-muted-foreground">
              Publicado em 27 de fevereiro de 2026 · 8 min de leitura
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              <strong className="text-primary">Super Mario Bros. Wonder</strong> é, sem sombra de dúvidas, um dos maiores marcos da história dos jogos 2D da Nintendo. Lançado em outubro de 2023 para o Nintendo Switch, esse título conseguiu algo que parecia impossível: reinventar completamente a fórmula de um jogo de plataforma que existe há quase 40 anos. E fez isso com uma criatividade absurda, um charme visual irresistível e mecânicas que te fazem sorrir do início ao fim.
            </p>

            <div className="rounded-xl bg-secondary/50 p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="font-display text-2xl text-foreground">A Wonder Flower: O Coração do Jogo</h3>
              </div>
              <p>
                A grande estrela de Mario Wonder é, sem dúvida, a <strong>Wonder Flower</strong>. Quando você toca nela durante uma fase, o jogo inteiro se transforma. Literalmente. Os canos começam a se mover, o cenário muda de perspectiva, Mario pode virar um Goomba, as estrelas começam a cantar, o chão derrete... Cada fase tem uma surpresa diferente, e essa imprevisibilidade é o que torna o jogo absolutamente viciante. Você nunca sabe o que vai acontecer quando tocar naquela flor brilhante, e isso cria uma sensação de maravilhamento constante.
              </p>
            </div>

            <div className="rounded-xl bg-secondary/50 p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <h3 className="font-display text-2xl text-foreground">Jogabilidade Reinventada</h3>
              </div>
              <p>
                A Nintendo mostrou que ainda é a rainha dos jogos de plataforma. Cada poder novo — como o Elefante Mario, o Mario Bolha, o Mario Furadeira — adiciona uma camada completamente nova de gameplay. O <strong>Elefante Mario</strong>, por exemplo, não é só uma skin bonita: ele pode quebrar blocos, guardar água na tromba e regar sementes para criar plataformas. Isso muda totalmente a forma como você interage com as fases.
              </p>
              <p className="mt-4">
                Além disso, os <strong>Badges</strong> (emblemas) são outra adição brilhante. Você pode equipar habilidades especiais como planagem, pulo de parede automático, agarrar em trepadeiras e muito mais. Isso dá ao jogador uma liberdade incrível para personalizar seu estilo de jogo e abordar as fases de maneiras totalmente diferentes.
              </p>
            </div>

            <p>
              O level design de Mario Wonder é simplesmente impecável. Cada fase é construída como uma pequena obra de arte, com segredos escondidos, caminhos alternativos e desafios perfeitamente calibrados. A dificuldade vai subindo de forma orgânica, e as fases especiais no final do jogo vão testar até os jogadores mais experientes. Mas o jogo nunca é injusto — ele te desafia de forma justa e sempre te recompensa por explorar.
            </p>

            <div className="rounded-xl bg-secondary/50 p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="font-display text-2xl text-foreground">Visual e Som: Pura Magia</h3>
              </div>
              <p>
                Visualmente, Mario Wonder é deslumbrante. A Nintendo abandonou o estilo "New Super Mario Bros." que já estava cansativo e adotou um visual totalmente novo, com animações fluidas, expressões faciais nos personagens e cenários vibrantes cheios de detalhes. Cada mundo tem uma identidade visual única, e as animações do Mario e dos inimigos são incrivelmente expressivas.
              </p>
              <p className="mt-4">
                A trilha sonora é outra pérola. As músicas são alegres, cativantes e se adaptam ao que está acontecendo na tela. Em alguns momentos Wonder, os próprios inimigos começam a cantar em sincronia com a música — é simplesmente genial. A atenção aos detalhes sonoros é algo que só a Nintendo consegue entregar nesse nível.
              </p>
            </div>

            <div className="rounded-xl bg-secondary/50 p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="font-display text-2xl text-foreground">Multiplayer e Rejogabilidade</h3>
              </div>
              <p>
                O multiplayer local para até 4 jogadores é uma festa. Diferente de jogos anteriores, aqui os jogadores não atrapalham uns aos outros — há personagens como Nabbit e Yoshi que não tomam dano, tornando o jogo acessível para jogadores de todos os níveis. O sistema online assíncrono, onde você vê "fantasmas" de outros jogadores, é uma adição sutil mas brilhante que faz o mundo parecer mais vivo.
              </p>
              <p className="mt-4">
                A rejogabilidade é enorme. Coletar todas as Wonder Seeds, encontrar todos os segredos, completar as fases especiais e experimentar diferentes combinações de Badges vai te manter jogando por muitas e muitas horas. É o tipo de jogo que você volta a jogar meses depois e ainda se diverte como se fosse a primeira vez.
              </p>
            </div>

            <h3 className="font-display text-3xl text-foreground pt-4">Minha Opinião Sincera</h3>

            <p>
              Na minha opinião, <strong className="text-primary">Super Mario Bros. Wonder é o melhor jogo 2D do Mario já feito</strong>. Sim, eu sei que é uma declaração ousada considerando clássicos como Super Mario World e Super Mario Bros. 3, mas Wonder consegue algo que nenhum outro jogo da franquia fez antes: ele te surpreende a cada fase. Você entra achando que já viu de tudo, e então uma Wonder Flower transforma o jogo inteiro de cabeça pra baixo.
            </p>

            <p>
              O que mais me impressionou foi a coragem da Nintendo em arriscar. Depois de anos lançando jogos "New Super Mario Bros." que, embora bons, já pareciam formuláicos, eles finalmente decidiram quebrar todas as regras. E o resultado é um jogo que transborda criatividade em cada pixel, cada nota musical, cada mecânica.
            </p>

            <p>
              A Wonder Flower é uma das melhores mecânicas já criadas em um jogo de plataforma. Ela transforma cada fase em duas experiências completamente diferentes. Você joga a fase "normal" e depois joga a fase "Wonder", e são praticamente dois jogos em um. Isso é brilhante em termos de design.
            </p>

            <p>
              Os novos power-ups são todos fantásticos. O Elefante Mario é hilário e útil ao mesmo tempo. O Mario Furadeira adiciona verticalidade ao gameplay. O Mario Bolha tem aplicações criativas que você vai descobrindo conforme joga. Nenhum poder parece desnecessário ou jogado ali sem propósito.
            </p>

            <p>
              Se eu tivesse que apontar algum ponto negativo, talvez diria que o jogo poderia ser um pouco mais longo. Mas honestamente, a qualidade é tão alta do início ao fim que prefiro um jogo mais curto e impecável do que um jogo longo e com fases de enchimento. E mesmo assim, com todas as Wonder Seeds para coletar e fases secretas para desbloquear, há bastante conteúdo aqui.
            </p>

            <p>
              <strong className="text-primary">Nota final: 10/10.</strong> Mario Wonder é uma obra-prima absoluta. É o tipo de jogo que lembra por que amamos videogames. É pura diversão, pura criatividade, pura magia Nintendo. Se você tem um Switch, você PRECISA jogar esse jogo. É uma experiência que vai te fazer sorrir do começo ao fim, e provavelmente vai te fazer querer jogar tudo de novo assim que os créditos rolarem.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 pt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-8 w-8 fill-accent text-accent" />
              ))}
              <span className="ml-3 font-display text-3xl text-foreground">10/10</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleSection;
