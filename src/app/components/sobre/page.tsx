// src/app/sobre/page.tsx
export const metadata = {
  title: 'Sobre mim — Mochilando por Aí',
  description:
    'Relatos sinceros, dicas práticas e roteiros para inspirar sua próxima aventura.',
};

export default function SobrePage() {
  return (
    <section className="max-w-5xl mx-auto">
      {/* eyebrow */}
      <p className="text-xs uppercase tracking-wider text-[--color-muted] mb-3">
        sobre mim
      </p>

      {/* título + subtítulo */}
      <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[--color-foreground]">
        Viajar é reencontro — e este é o meu diário de estrada
      </h1>
      <p className="mt-3 text-[--color-muted] max-w-3xl">
        Olá! Eu sou a{' '}
        <span className="font-medium text-[--color-foreground]">Ednéia</span>.
        Viajar, pra mim, é respirar fundo no silêncio da floresta, sentir a água
        fria das cachoeiras e voltar pra casa mais leve. Este blog nasceu pra
        guardar essas memórias — e inspirar quem sonha em colocar a mochila nas
        costas e seguir caminho.
      </p>

      {/* grade responsiva: texto + callout */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* coluna principal */}
        <div className="md:col-span-2 space-y-6">
          {/* citação */}
          <figure className="rounded-2xl border border-[--color-border] bg-[--color-card] p-6 shadow-sm">
            <blockquote className="text-lg leading-relaxed text-[--color-foreground]">
              “A cada trilha, um pedaço de mim encontra lugar. A aventura começa
              no primeiro passo — e continua em tudo que a gente aprende pelo
              caminho.”
            </blockquote>
          </figure>

          {/* o que você vai encontrar */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[--color-border] bg-[--color-card] p-5">
              <div className="text-2xl">📖</div>
              <h3 className="mt-2 font-semibold text-[--color-foreground]">
                Relatos sinceros
              </h3>
              <p className="mt-1 text-sm text-[--color-muted]">
                Histórias curtas, do jeitinho que aconteceram — com barro,
                risadas e céu estrelado.
              </p>
            </div>
            <div className="rounded-2xl border border-[--color-border] bg-[--color-card] p-5">
              <div className="text-2xl">🧭</div>
              <h3 className="mt-2 font-semibold text-[--color-foreground]">
                Dicas que funcionam
              </h3>
              <p className="mt-1 text-sm text-[--color-muted]">
                O que levo na mochila, perrengues evitáveis e aprendizados que
                facilitam a jornada.
              </p>
            </div>
            <div className="rounded-2xl border border-[--color-border] bg-[--color-card] p-5">
              <div className="text-2xl">🌄</div>
              <h3 className="mt-2 font-semibold text-[--color-foreground]">
                Roteiros com afeto
              </h3>
              <p className="mt-1 text-sm text-[--color-muted]">
                Caminhos pensados para quem busca natureza, cultura e encontros
                de verdade.
              </p>
            </div>
          </div>

          {/* CTA suave */}
          <div className="rounded-2xl border border-[--color-accent] bg-[--color-accent-soft] p-6">
            <h2 className="text-xl font-semibold text-[--color-foreground]">
              Bora caminhar junto? ✨
            </h2>
            <p className="mt-2 text-[--color-foreground]/85">
              A próxima aventura pode começar numa página — e continuar no
              mundo. Dê uma olhada nos relatos e escolha seu primeiro destino.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center rounded-xl border border-transparent bg-[--color-accent] text-[--color-accent-contrast] px-4 py-2 text-sm hover:opacity-90"
              >
                Ver relatos
              </a>
              <a
                href="/post/dia-1"
                className="inline-flex items-center rounded-xl border border-[--color-border] bg-[--color-card] px-4 py-2 text-sm hover:bg-[--color-accent-soft]/60"
              >
                Começar pelo Dia 1
              </a>
            </div>
          </div>
        </div>

        {/* callout lateral: contato/links rápidos */}
        <aside className="rounded-2xl border border-[--color-border] bg-[--color-card] p-6 h-fit">
          <h3 className="font-semibold text-[--color-foreground]">
            Fale comigo
          </h3>
          <p className="mt-1 text-sm text-[--color-muted]">
            Dúvidas, parcerias ou dicas de trilha? Me chama.
          </p>
          <a
            href="mailto:di.calixto@outlook.com"
            className="mt-3 inline-flex items-center rounded-xl border border-[--color-border] px-3 py-2 text-sm hover:bg-[--color-accent-soft]/60"
          >
            di.calixto@outlook.com
          </a>

          <div className="mt-6">
            <h4 className="font-semibold text-[--color-foreground]">Atalhos</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/" className="underline hover:opacity-80">
                  Todos os relatos
                </a>
              </li>
              <li>
                <a href="/post/dia-3" className="underline hover:opacity-80">
                  Subida desafiadora
                </a>
              </li>
              <li>
                <a href="/post/dia-5" className="underline hover:opacity-80">
                  Céu estrelado no acampamento
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
  