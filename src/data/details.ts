import { BLOGS, GRANTS, LAWS, NEWS } from "./site";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

export const BLOG_BODIES: Record<string, string[]> = {
  "fcra-registration-validity-2026": [
    "FCRA registration is not a one-time event. Validity runs for five years, and the renewal window opens six months before expiry — miss it and foreign contributions must stop the day the certificate lapses.",
    "The most common reasons for rejection are mismatched FC-4 annual returns, an inactive designated SBI New Delhi Main Branch account, and office bearers whose details are not updated on the FCRA portal.",
    "Build a simple internal calendar: FC-4 by 31 December each year, quarterly bank disclosures, and a renewal file opened twelve months before expiry containing audited accounts, activity reports and board resolutions.",
  ],
  "understanding-csr-funds": [
    "Companies crossing the turnover, net worth or profit thresholds under Section 135 of the Companies Act must spend 2% of average net profits on CSR activities each year.",
    "To receive those funds your NGO must hold a valid CSR-1 registration with the MCA, along with 12A and 80G. Without CSR-1 a company legally cannot count its contribution to you as CSR spend.",
    "Small NGOs win CSR budgets by presenting a tightly scoped project with measurable outputs, a clean utilisation reporting format, and evidence of past delivery — not by asking for general support.",
  ],
  "board-governance-essentials": [
    "A trust or society board is legally accountable for everything the organisation does — funds, employment practices and programme claims alike.",
    "Minimum practice: quarterly minuted board meetings, a documented conflict-of-interest policy, an approval matrix for expenditure, and annual review of audited financials before filing.",
    "Funders increasingly ask for board composition, attendance records and policy documents at due diligence stage. Maintaining them from day one saves months later.",
  ],
  "section-12a-80g-changes": [
    "All charitable institutions must now hold registration under the re-validation regime, with provisional registrations converting to regular status through Form 10AB.",
    "Late filing of Form 10AB, or a mismatch between Form 10BD donation statements and donor claims, is the leading cause of exemption cancellation notices.",
    "Keep donor PANs, issue Form 10BE certificates on time, and file Form 10B/10BB audit reports before the due date to protect continuity of exemption.",
  ],
  "grant-proposal-that-gets-funded": [
    "Reviewers read for fit first. Before writing a word, map your programme against the funder's stated priorities and eligibility rules.",
    "A fundable proposal has a clear problem statement backed by data, a logframe linking activities to outcomes, a realistic line-item budget, and a named delivery team.",
    "Attach compliance documents proactively — registration certificates, 12A/80G, FCRA where applicable, audited accounts for three years and an annual report.",
  ],
  "annual-filing-checklist-societies": [
    "Registered societies file annually with the Registrar of Societies in their state — typically a list of governing body members, audited accounts and an annual activity report.",
    "Alongside state filings, income tax obligations include ITR-7, Form 10B/10BB audit reports, Form 10BD donation statements and quarterly TDS returns.",
    "Set reminders 30 days before each deadline and keep one master folder per financial year containing every acknowledgement receipt.",
  ],
  "measuring-impact-metrics": [
    "Funders distinguish outputs (people trained) from outcomes (people employed six months later). Most proposals only report the former.",
    "Choose three to five indicators you can genuinely collect, define how each is measured, and record baseline values before the project starts.",
    "Honest reporting of shortfalls, with analysis, builds more credibility with institutional donors than uniformly perfect numbers.",
  ],
  "foreign-contribution-rules-simplified": [
    "Foreign contribution means any donation from a foreign source — including Indian-registered subsidiaries of foreign companies and foreign nationals.",
    "It must be received only in the designated FCRA account at SBI New Delhi Main Branch, may not be transferred to another organisation, and administrative expenses are capped at 20%.",
    "Every FCRA holder files FC-4 annually with audited FCRA-specific accounts, and discloses receipts on the public portal quarterly.",
  ],
  "audit-ready-finance-function": [
    "Audit stress is almost always a documentation problem, not an accounting problem. Vouchers, approvals and bank narrations should reconcile without explanation.",
    "Maintain grant-wise and project-wise ledgers from day one so utilisation certificates can be produced from the books rather than reconstructed.",
    "Run a quarterly internal review covering bank reconciliation, statutory dues, fixed asset register and pending advances — the same checklist your auditor will use.",
  ],
};

export function getBlog(slug: string) {
  const blog = BLOGS.find((b) => b.slug === slug);
  if (!blog) return null;
  return { ...blog, body: BLOG_BODIES[slug] ?? [blog.excerpt] };
}

export const NEWS_ITEMS = NEWS.map((n) => ({ ...n, slug: slugify(n.title) }));

export function getNews(slug: string) {
  const item = NEWS_ITEMS.find((n) => n.slug === slug);
  if (!item) return null;
  return {
    ...item,
    body: [
      item.body,
      "Our editorial desk tracks regulatory notifications, court judgments and funding announcements that change how Indian NGOs operate day to day. This update is summarised for practitioners rather than for legal specialists.",
      "If this development affects your registration, reporting or funding position, our compliance team can review your specific case and outline the actions required, with deadlines.",
    ],
  };
}

export const LAW_ITEMS = LAWS.map((l) => ({ ...l, slug: slugify(l.title) }));

export function getLaw(slug: string) {
  const law = LAW_ITEMS.find((l) => l.slug === slug);
  if (!law) return null;
  return {
    ...law,
    sections: [
      {
        title: "Who it applies to",
        body: "Organisations constituted under this statute, together with their trustees, governing body members and office bearers, are bound by its provisions from the date of registration.",
      },
      {
        title: "Key obligations",
        body: "Maintenance of accounts and registers, timely filings with the prescribed authority, disclosure of changes in governing body or objects, and application of funds strictly towards stated charitable purposes.",
      },
      {
        title: "Common compliance failures",
        body: "Lapsed filings, unrecorded changes in office bearers, funds applied outside the objects clause, and missing supporting documentation at audit.",
      },
      {
        title: "How NGO Guru helps",
        body: "We map your organisation's obligations under this Act into a dated compliance calendar, prepare the filings, and represent you in correspondence with the concerned authority.",
      },
    ],
  };
}

export const GRANT_ITEMS = GRANTS.map((g) => ({ ...g, slug: slugify(g.title) }));

export function getGrant(slug: string) {
  const grant = GRANT_ITEMS.find((g) => g.slug === slug);
  if (!grant) return null;
  return {
    ...grant,
    eligibility: [
      "Registered Trust, Society or Section-8 Company with valid 12A and 80G",
      "Minimum three years of audited financial statements",
      "Demonstrated delivery experience in the stated thematic area",
      "Valid CSR-1 or NITI Aayog Darpan registration where required by the issuer",
    ],
    documents: [
      "Registration certificate and constitutional documents",
      "Audited accounts and annual reports for the last three years",
      "PAN, TAN and bank details of the organisation",
      "Technical proposal, work plan and line-item budget",
    ],
    overview:
      "This opportunity invites qualified organisations to submit an expression of interest against the issuer's published scope of work. Shortlisted applicants are typically asked for a detailed technical and financial proposal, followed by due diligence on governance and financial systems.",
  };
}
