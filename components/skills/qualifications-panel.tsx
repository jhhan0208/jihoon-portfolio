import {
  Certification,
  LanguageScore,
  certifications,
  certificationsSectionDescription,
  languageScores,
  languageSectionDescription,
} from "@/config/qualifications";

function IssuerLink({ issuer, issuerUrl }: { issuer: string; issuerUrl: string }) {
  return (
    <a
      href={issuerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
    >
      {issuer}
    </a>
  );
}

function LanguageItem({ item }: { item: LanguageScore }) {
  return (
    <div className="rounded-lg border bg-background p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">{item.name}</h3>
          {item.issuer && item.issuerUrl && (
            <IssuerLink issuer={item.issuer} issuerUrl={item.issuerUrl} />
          )}
          {item.detail && item.score && (
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          )}
        </div>
        <span className="shrink-0 text-lg font-heading">
          {item.score || "—"}
        </span>
      </div>
    </div>
  );
}

function CertificationItem({ item }: { item: Certification }) {
  return (
    <div className="rounded-lg border bg-background p-3">
      <h3 className="font-semibold">{item.name}</h3>
      {item.issuer && item.issuerUrl && (
        <IssuerLink issuer={item.issuer} issuerUrl={item.issuerUrl} />
      )}
      {item.date && (
        <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
      )}
    </div>
  );
}

export default function QualificationsPanel() {
  return (
    <div className="space-y-8">
      <section>
        <div className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="font-heading text-2xl">Language</h2>
          <span className="text-sm text-muted-foreground" aria-hidden="true">
            |
          </span>
          <p className="text-sm text-muted-foreground">
            {languageSectionDescription}
          </p>
        </div>
        <div className="space-y-3">
          {languageScores.map((item) => (
            <LanguageItem key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="font-heading text-2xl">Certifications</h2>
          <span className="text-sm text-muted-foreground" aria-hidden="true">
            |
          </span>
          <p className="text-sm text-muted-foreground">
            {certificationsSectionDescription}
          </p>
        </div>
        <div className="space-y-3">
          {certifications.map((item) => (
            <CertificationItem key={item.name} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
