// src/app/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * NavLink: link com estado "ativo".
 * - Normaliza barra final ("/sobre" == "/sobre/")
 * - Pode ativar por match exato (home) ou por prefixo (subrotas)
 */
function NavLink({
  href,
  children,
  exact = false,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (!pathname) return false;
    const norm = (s: string) =>
      s.endsWith('/') && s !== '/' ? s.slice(0, -1) : s;
    const current = norm(pathname);
    const target = norm(href);
    return exact
      ? current === target
      : current === target || current.startsWith(target + '/');
  }, [pathname, href, exact]);

  return (
    <Link
      href={href}
      prefetch
      aria-current={isActive ? 'page' : undefined}
      className={[
        'px-3 py-2 rounded-xl text-sm transition-colors',
        isActive
          ? 'bg-slate-200 text-slate-900'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo/título do site leva para a Home */}
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Mochilando por Aí
        </Link>

        {/* Navegação principal */}
        <nav className="flex items-center gap-1">
          {/* Home: match exato */}
          <NavLink href="/" exact>
            Início
          </NavLink>
          {/* Sobre: ativa também em subrotas como /sobre/time */}
          <NavLink href="/sobre">Sobre</NavLink>
        </nav>
      </div>
    </header>
  );
}
