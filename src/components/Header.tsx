"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ExternalIcon from "@/components/icons/external-icon";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="mx-auto flex py-12 mt-8 max-w-screen-sm items-center justify-between">
      <Link
        href="/"
        className="group inline-flex items-center font-medium"
        aria-label="Go to homepage"
        tabIndex={0}
      >
        <h1>
          <span className="group-hover:text-muted-foreground">astnai</span>
          {!isHome && (
            <span aria-label={`Current page: ${pathname.slice(1)}`}>
              {pathname}
            </span>
          )}
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        <a
          href="https://agustinarias.com"
          target="_self"
          rel="noopener noreferrer"
          className="text-muted-foreground dark:text-muted-foreground hover:text-primary flex items-center gap-1"
          aria-label="Visit the personal website of Agustin Arias (opens in new tab)"
        >
          blog
          <ExternalIcon className="w-4 h-4 align-middle" />
        </a>
      </div>
    </div>
  );
};

export default Header;
