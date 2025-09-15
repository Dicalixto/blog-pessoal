// src/app/sobre/page.tsx
// (opcional) metadados da página
export const metadata = {
  title: 'Sobre mim — Mochilando por Aí',
  description: 'Quem sou eu e a ideia do blog.',
};

// Importa o componente que você já tem em components/sobre/page.tsx
// Use o que funcionar no seu tsconfig: alias "@" ou relativo.
import Sobre from '@/app/components/sobre/page';
// import Sobre from "../components/sobre/page"; // <- alternativa sem alias

export default function SobreRoute() {
  // Dá um container bonitinho à página
  return (
    <section className="max-w-3xl">
      <Sobre />
    </section>
  );
}
