import Link from "next/link";
import { fallbackDocs } from "./fallback";
import type { FederalRegisterDocument, FederalRegisterResponse } from "./types";

const FEDERAL_REGISTER_API = "https://www.federalregister.gov/api/v1/documents";

export const revalidate = 3600; // cache for an hour

function sanitizePresidentParam(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return undefined;
  return trimmed;
}

async function fetchFederalRegisterDocs(options: {
  limit?: number;
  president?: string;
}): Promise<{ docs: FederalRegisterDocument[]; description?: string }> {
  const { limit = 10, president } = options;
  const params = new URLSearchParams();
  params.set("per_page", String(limit));
  params.set("order", "desc");
  params.append("conditions[type][]", "RULE");
  params.append("conditions[type][]", "PRESDOCU");
  params.append("conditions[presidential_document_type][]", "executive_order");
  if (president) {
    params.append("conditions[president][]", president);
  }

  const response = await fetch(`${FEDERAL_REGISTER_API}?${params.toString()}`, {
    headers: { Accept: "application/json" }
  });

  if (!response.ok) {
    throw new Error(`Federal Register request failed: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    throw new Error("Federal Register response was not JSON.");
  }

  const data = (await response.json()) as FederalRegisterResponse;
  return { docs: data.results, description: data.description };
}

export default async function DataPlayPage({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const presidentFilter = sanitizePresidentParam(searchParams.president);
  let docs: FederalRegisterDocument[] = [];
  let description: string | undefined;
  let error: string | null = null;
  let usedFallback = false;

  try {
    const payload = await fetchFederalRegisterDocs({ limit: 12, president: presidentFilter });
    docs = payload.docs;
    description = payload.description;
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error";
    docs = fallbackDocs;
    usedFallback = true;
    description = "Fallback sample of executive orders previously cached.";
  }

  const filterSummary = presidentFilter
    ? `Rules + executive orders signed by ${presidentFilter.replaceAll("-", " ")}`
    : "Newest federal rules plus any executive orders";

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-300">Data lab</p>
        <h1 className="text-3xl font-semibold text-white">Federal Register sampler</h1>
        <p className="text-sm text-slate-300">
          Live query against <code>api.federalregister.gov</code> using the public filters for document type and
          presidency.
        </p>
        <p className="text-xs text-slate-400">{filterSummary}</p>
        <div className="flex flex-wrap gap-3 text-xs text-accent">
          <Link href="/data-play">All admins</Link>
          <Link href="/data-play?president=joe-biden">Biden feed</Link>
          <Link href="/data-play?president=donald-trump">Trump feed</Link>
          <a
            href="https://www.federalregister.gov/documents"
            target="_blank"
            className="text-slate-300 hover:text-white"
            rel="noreferrer"
          >
            Explore full filters ↗
          </a>
        </div>
        <Link href="/" className="text-xs font-semibold text-accent">
          ← Back to stories prototype
        </Link>
      </header>

      {description && (
        <p className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200">{description}</p>
      )}

      {error && (
        <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
          Couldn&apos;t load documents: {error}
        </div>
      )}
      {usedFallback && (
        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-xs text-amber-100">
          Showing fallback sample data while the live feed is unavailable.
        </div>
      )}

      <section className="space-y-4">
        {docs.map((doc) => (
          <article key={doc.document_number} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <header className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">{doc.publication_date}</p>
              <h2 className="text-xl font-semibold text-white">{doc.title}</h2>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-400">
                <span className="rounded-full bg-white/10 px-3 py-1">{doc.type}</span>
                {doc.presidential_document_type && (
                  <span className="rounded-full bg-white/5 px-3 py-1">
                    {doc.presidential_document_type.replaceAll("_", " ")}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {(doc.topics ?? []).slice(0, 4).map((topic) => (
                  <span key={`${doc.document_number}-${topic}`} className="rounded-full bg-white/10 px-3 py-1">
                    {topic}
                  </span>
                ))}
              </div>
            </header>
            <p className="mt-3 text-sm text-slate-200">{doc.abstract ?? "No abstract provided."}</p>
            {doc.action && (
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Action: {doc.action}</p>
            )}
            {doc.agencies?.length ? (
              <p className="mt-1 text-xs text-slate-400">
                Agencies: {doc.agencies.map((agency) => agency.name).join(", ")}
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-accent">
              <Link href={doc.html_url} target="_blank">
                View notice ↗
              </Link>
              {doc.pdf_url && (
                <Link href={doc.pdf_url} target="_blank">
                  PDF ↗
                </Link>
              )}
            </div>
            <details className="mt-4 rounded-xl bg-black/40 p-3 text-sm text-slate-100">
              <summary className="cursor-pointer text-xs uppercase tracking-wide text-slate-400">
                Raw JSON
              </summary>
              <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-black/60 p-3 text-[11px] text-slate-200">
                {JSON.stringify(doc, null, 2)}
              </pre>
            </details>
          </article>
        ))}
      </section>
    </div>
  );
}
