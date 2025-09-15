// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-[--color-border]">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[--color-foreground]">
              Mochilando por Aí
            </p>
            <p className="text-sm text-[--color-muted] leading-relaxed">
              Relatos de trilhas, cachoeiras e caminhadas com afeto.
            </p>
          </div>

          {/* placeholder de navegação — oculto até você adicionar links */}
          <nav className="hidden text-sm sm:block">
            <ul className="flex flex-wrap items-center gap-3 text-[--color-muted]" />
          </nav>
        </div>

        <div className="mt-6 text-center sm:text-left text-xs text-[--color-muted]">
          © {new Date().getFullYear()} Mochilando por Aí — feito com Next.js.
        </div>
      </div>
    </footer>
  );
}
