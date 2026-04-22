import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { navItems } from '@/data/navItems';

import { Logo } from './Logo';

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return router.pathname === href;
  };

  const isChildActive = (children?: { href: string }[]) => {
    return children?.some((c) => router.pathname === c.href);
  };

  return (
    <div className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white">
          <Logo xl />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href) || isChildActive(item.children);

            return (
              <li key={item.label} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`transition ${
                      active
                        ? 'text-primary-400'
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`cursor-pointer transition ${
                      active
                        ? 'text-primary-400'
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.label}
                  </span>
                )}

                {/* DROPDOWN */}
                {item.children && (
                  <ul className="absolute left-0 top-full hidden min-w-[220px] rounded bg-black p-3 shadow-lg group-hover:block">
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);

                      return (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={`block px-3 py-2 transition ${
                              childActive
                                ? 'text-primary-400'
                                : 'text-white hover:bg-white/10'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active =
                isActive(item.href) || isChildActive(item.children);

              return (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`transition ${
                          active ? 'text-primary-400' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={`transition ${
                          active ? 'text-primary-400' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                    )}

                    {item.children && (
                      <button
                        onClick={() => toggle(item.label)}
                        className="text-white"
                      >
                        {expanded === item.label ? '−' : '+'}
                      </button>
                    )}
                  </div>

                  {/* CHILDREN */}
                  {item.children && expanded === item.label && (
                    <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-white/10 pl-3">
                      {item.children.map((child) => {
                        const childActive = isActive(child.href);

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={`text-sm transition ${
                              childActive
                                ? 'text-primary-400'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Navbar };
