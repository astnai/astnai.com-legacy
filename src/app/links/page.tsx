import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import { socialLinks } from "@/data/links";
import type { SocialLink } from "@/lib/types/link";

export const metadata: Metadata = {
  title: "links",
  description: "Social links and profiles of Agustín Arias",
};

const LinkCard = ({ linkItem }: { linkItem: SocialLink }) => {
  const isExternalLink = !linkItem.url.startsWith("mailto:");
  return (
    <div className="group">
      <Link
        href={linkItem.url}
        className="flex items-center gap-1 text-muted-foreground main-hover"
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        aria-label={linkItem.description}
      >
        {linkItem.title}
        <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  );
};

const LinksPage = () => {
  return (
    <>
      <div>
        <div className="space-y-12">
          {socialLinks.map((linkItem) => (
            <LinkCard key={linkItem.title} linkItem={linkItem} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-balance">
          <span className="text-blue-500/60">*</span>
          personally, i&apos;m not very active on social media, you&apos;ll only find me online on twitter, the <span className="italic">everything</span> app.
        </p>
      </div>
    </>
  );
};

export default LinksPage;
