import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/lib/types/navigation";

const NavLink = ({ title, url, description }: NavItem) => (
  <li>
    <Link
      href={url}
      className="text-muted-foreground main-hover inline-flex items-center"
      aria-label={`${title} - ${description}`}
    >
      <span>{title}</span>
      <ArrowTopRightIcon className="ml-1" aria-hidden="true" />
    </Link>
  </li>
);

export default function Home() {
  return (
    <nav aria-label="Personal content navigation">
      <ul className="space-y-12">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            title={item.title}
            url={item.url}
            description={item.description}
          />
        ))}
      </ul>
    </nav>
  );
}
