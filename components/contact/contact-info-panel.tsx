import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { SocialLinks } from "@/config/socials";

const CONTACT_EMAIL = "jhhan0208@gmail.com";
const githubLink = SocialLinks.find((link) => link.name === "Github");

export default function ContactInfoPanel() {
  return (
    <div className="flex h-full flex-col justify-center rounded-lg border border-border bg-background p-5 sm:p-6">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Han Jihoon</h2>

        <div className="space-y-1">
          <p className="text-lg font-bold leading-snug text-foreground">
            Kyung Hee University
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Software Convergence, Data Science Track
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Email
          </p>
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 break-all text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <Icons.gmail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </Link>
        </div>

        {githubLink ? (
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              GitHub
            </p>
            <Link
              href={githubLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Icons.gitHub className="h-4 w-4" />
              {githubLink.username}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
