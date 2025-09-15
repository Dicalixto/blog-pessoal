import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Sobre o projeto</h2>
      <p className="text-gray-700">
        Viajar pra mim é reencontro: silêncios de floresta, banhos de cachoeira
        e conversas ao redor do fogareiro. Este blog guarda memórias curtas das
        trilhas e acampamentos.
      </p>
      <Link href="/sobre" className="inline-block mt-4 underline">
        Ler mais
      </Link>
    </section>
  );
}
