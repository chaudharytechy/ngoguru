export const CONTACT = {
  email: "ngoguru@carkverma.com",
  phone: "+91 99104 03151",
  phoneHref: "+919910403151",
  address: "D-58, Second Floor, Near Metro Pillar No-58, Shakarpur, Delhi-110092",
  addressShort: "D-58, Second Floor, Near Metro Pillar No-58, Shakarpur, Delhi",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Founder", to: "/founder" },
  { label: "Services", to: "/services" },
  { label: "Blogs", to: "/blogs" },
  { label: "NGO News", to: "/news" },
  { label: "NGO Laws", to: "/laws" },
  { label: "Grants & Funding", to: "/grants" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const TICKER = [
  "Breaking News: NGOGURU unveils a groundbreaking digital transformation platform for NGOs",
  "NGOGURU announces India's largest NGO seminar in Delhi",
  "NGOs plant 19 lakh trees with partner organisations",
];

export const STATS = [
  { value: "300+", label: "NGOs guided to success" },
  { value: "100", label: "Expert team members" },
  { value: "9+ yrs", label: "Serving the development sector" },
  { value: "19 lakh", label: "Trees planted with partner NGOs" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  highlights: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  process: { step: string; title: string; body: string }[];
};

const commonFaqs = [
  {
    q: "Is our data secure?",
    a: "All records are held on access-controlled, encrypted systems with monthly backups.",
  },
  {
    q: "How quickly can we start?",
    a: "Most engagements begin within two working days of the discovery call and document checklist.",
  },
];

const commonProcess = [
  { step: "01", title: "Discovery Call", body: "We review your current records and processes." },
  {
    step: "02",
    title: "Scoping & Drafting",
    body: "We recommend the right approach and prepare the required documents.",
  },
  {
    step: "03",
    title: "Filing & Liaison",
    body: "We file with the relevant authority and follow up on queries.",
  },
  {
    step: "04",
    title: "Handover & Setup",
    body: "You receive certificates, reports and a compliance starter kit.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "ngo-registration",
    title: "NGO Registration",
    summary:
      "Registration of NGOs as a Trust/Society/Section-8 Company under the structure best suited to your mission.",
    intro:
      "Registration of NGOs as a Trust, Society or Section-8 Company — structured around your mission, your funding plans and your long-term governance needs.",
    highlights: [
      {
        title: "Right Structure, First Time",
        body: "We assess your objectives, funding sources and state of operation to recommend Trust, Society or Section-8.",
      },
      {
        title: "End-to-End Drafting",
        body: "Memorandum, Trust Deed or Articles of Association drafted to withstand regulatory scrutiny.",
      },
      {
        title: "Government Liaison",
        body: "Direct coordination with Registrar offices to keep your filing on schedule.",
      },
      {
        title: "Post-Registration Setup",
        body: "PAN, TAN, bank account guidance and initial compliance calendar included.",
      },
    ],
    faqs: [
      {
        q: "Which structure is right for us?",
        a: "Trusts suit family-led charitable work, Societies suit membership-based organisations, and Section-8 Companies suit NGOs planning larger-scale, investor-style governance.",
      },
      ...commonFaqs,
    ],
    process: commonProcess,
  },
  {
    slug: "ngo-process-outsourcing",
    title: "NGO Process Outsourcing",
    summary:
      "End-to-end outsourced advisory covering accounting, HR, payroll, audit, assurance and taxation compliance.",
    intro:
      "A complete back-office for your organisation — accounting, HR, payroll, audit support and taxation handled by a dedicated specialist team.",
    highlights: [
      {
        title: "Dedicated Finance Team",
        body: "A named accountant and reviewer who understand your grant conditions and donor reporting.",
      },
      {
        title: "Payroll & HR Compliance",
        body: "PF, ESI, TDS and statutory registers maintained accurately every month.",
      },
      {
        title: "Donor-Ready Reporting",
        body: "Project-wise utilisation statements prepared in the formats funders expect.",
      },
      {
        title: "Audit Coordination",
        body: "We prepare schedules and respond to auditor queries on your behalf.",
      },
    ],
    faqs: commonFaqs,
    process: commonProcess,
  },
  {
    slug: "training-workshops",
    title: "Training & Workshops",
    summary:
      "Seminars and workshops that equip NGO teams with practical, up-to-date operational knowledge.",
    intro:
      "Hands-on sessions delivered by practising CAs, CS and advocates — designed for programme staff, not just finance teams.",
    highlights: [
      {
        title: "Practical Curriculum",
        body: "Built around real filings, real formats and the mistakes we see most often.",
      },
      {
        title: "On-Site or Online",
        body: "Delivered at your office, at our Delhi seminar hall, or as a live online cohort.",
      },
      {
        title: "Role-Based Tracks",
        body: "Separate modules for boards, finance staff and programme managers.",
      },
      {
        title: "Takeaway Toolkits",
        body: "Templates, checklists and compliance calendars your team keeps.",
      },
    ],
    faqs: commonFaqs,
    process: commonProcess,
  },
  {
    slug: "funding-for-ngos",
    title: "Funding For NGOs",
    summary:
      "Consulting for grant proposals, budgeting and fundraising strategy — matched to project needs.",
    intro:
      "From identifying the right funder to drafting a proposal that survives due diligence — including NSDC funding support.",
    highlights: [
      {
        title: "Funder Matching",
        body: "We map your programme themes against active CSR, government and institutional funders.",
      },
      {
        title: "Proposal Drafting",
        body: "Narrative, logframe and budget written to the funder's own evaluation criteria.",
      },
      {
        title: "Due Diligence Prep",
        body: "Legal and financial readiness checked before you submit, not after.",
      },
      {
        title: "NSDC Funding Support",
        body: "Job-role finalisation, project proposal drafting and liaison with NSDC.",
      },
    ],
    faqs: commonFaqs,
    process: commonProcess,
  },
  {
    slug: "accounting-audit-assurance",
    title: "Accounting, Audit & Assurance",
    summary: "Statutory financial audits, bookkeeping and compliant, transparent reporting systems.",
    intro:
      "Clean books and audit-ready systems — so statutory deadlines and donor reviews stop being stressful events.",
    highlights: [
      {
        title: "Statutory Audit",
        body: "Independent financial audits completed within agreed timelines.",
      },
      {
        title: "Bookkeeping",
        body: "Grant-wise and project-wise ledgers maintained with supporting documentation.",
      },
      {
        title: "Internal Controls",
        body: "Approval matrices and cash controls sized to your organisation.",
      },
      {
        title: "Transparent Reporting",
        body: "Annual reports and utilisation certificates funders can rely on.",
      },
    ],
    faqs: commonFaqs,
    process: commonProcess,
  },
  {
    slug: "registration-affiliation-approvals",
    title: "Registration, Affiliation & Approvals",
    summary:
      "Support for FCRA registration, Section 12A/80G and other statutory approvals and filings.",
    intro:
      "FCRA, 12A, 80G, CSR-1, NITI Aayog and departmental affiliations — applied for, followed up and renewed on time.",
    highlights: [
      {
        title: "FCRA Registration & Renewal",
        body: "Eligibility review, application, and annual return filing discipline.",
      },
      {
        title: "12A & 80G",
        body: "Tax exemption registration and re-validation handled end to end.",
      },
      {
        title: "CSR-1 & NITI Aayog",
        body: "Registrations that unlock corporate and government funding eligibility.",
      },
      {
        title: "Renewal Tracking",
        body: "We monitor validity dates and start renewals well before deadlines.",
      },
    ],
    faqs: commonFaqs,
    process: commonProcess,
  },
];

export const GRANTS = [
  {
    title: "EOI for Selection of Partners — BIRSU Campus",
    closes: "Closes 31 Dec 2026",
    location: "Gurdaspur, Punjab, India",
    deadline: "Deadline: 31 Dec 2026, 5:00 PM",
  },
  {
    title: "EOI/RFP for Selection of Partners to Deliver Digital Skilling",
    closes: "Closes 31 Dec 2026",
    location: "Pan-India (Online / Digital Mode)",
    deadline: "Deadline: 31 Dec 2026",
  },
  {
    title: "Expression of Interest (EOI) / Request for Proposal",
    closes: "Closes 6 January 2026",
    location: "Karnataka, India",
    deadline: "Deadline: 6 January 2026",
  },
  {
    title: "EOI for Empanelment of Training Agencies",
    closes: "Closes 31 December 2026",
    location: "Karnataka, India",
    deadline: "Deadline: 31 December 2026",
  },
  {
    title: "EOI for Empanelment of Individuals/Agencies for Community Training",
    closes: "Closes 21 Dec 2026",
    location: "Bihar, India",
    deadline: "Deadline: 21 Dec 2026",
  },
  {
    title: "EOI for Empanelment of Agencies for Community Development",
    closes: "Closes 18 Dec 2026",
    location: "Madhya Pradesh, India",
    deadline: "Deadline: 18 Dec 2026",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Highly educated, informed and well-organised team — we are extremely thankful to NGOGURU for driving our foreign contribution management with steady discipline.",
    name: "P Rakesh Angadi Naik",
    role: "NGO Director, Karnataka",
    initials: "RN",
  },
  {
    quote:
      "Working with an accessible and knowledgeable consultancy team made all the difference. This partnership brought clarity to compliance that we can build on for years.",
    name: "Machhindra",
    role: "Founder, Trust",
    initials: "M",
  },
];

export const BLOGS = [
  {
    slug: "fcra-registration-validity-2026",
    category: "Compliance",
    title: "How to Maintain FCRA Registration Validity in 2026",
    excerpt: "A field guide to renewal timelines, reporting duties and common pitfalls.",
  },
  {
    slug: "understanding-csr-funds",
    category: "Funding",
    title: "Understanding CSR Funds: A Guide for Small NGOs",
    excerpt: "How corporate social responsibility budgets are allocated, and how to apply.",
  },
  {
    slug: "board-governance-essentials",
    category: "Governance",
    title: "Board Governance Essentials Every Trust Should Know",
    excerpt: "Practical steps for accountable, transparent leadership structures.",
  },
  {
    slug: "section-12a-80g-changes",
    category: "Compliance",
    title: "Section 12A & 80G: What Changed This Year",
    excerpt: "Key amendments NGOs need to know for tax exemption continuity.",
  },
  {
    slug: "grant-proposal-that-gets-funded",
    category: "Funding",
    title: "Writing a Grant Proposal That Gets Funded",
    excerpt: "Structure, tone and data points that make reviewers respond.",
  },
  {
    slug: "annual-filing-checklist-societies",
    category: "Compliance",
    title: "Annual Filing Checklist for Registered Societies",
    excerpt: "Every form, deadline and authority you need to track in one place.",
  },
  {
    slug: "measuring-impact-metrics",
    category: "Governance",
    title: "Measuring Impact: Metrics That Matter to Funders",
    excerpt: "Choosing indicators that are credible, fundable and honest.",
  },
  {
    slug: "foreign-contribution-rules-simplified",
    category: "Compliance",
    title: "Foreign Contribution Rules Simplified",
    excerpt: "A plain-language walkthrough of FCRA do's and don'ts.",
  },
  {
    slug: "audit-ready-finance-function",
    category: "Governance",
    title: "Building an Audit-Ready Finance Function",
    excerpt: "Systems and controls that make statutory audits painless.",
  },
];

export const NEWS = [
  {
    title: "NGO Rewards Relationship Policing For South Asia",
    body: "A new leadership initiative recognises collaborative work strengthening cross-border NGO alliances across South Asia.",
  },
  {
    title: "46 Trainee Volunteers Cross Reforestation Milestone In Tripura",
    body: "Volunteers and forestry teams tracked a better milestone in Tripura's long-running community reforestation drive.",
  },
  {
    title: "Esaan Utsav Celebrates The Season Of Giving Across India",
    body: "The nationwide Joy of Giving Week welcomed thousands of new volunteers and donors this cycle.",
  },
  {
    title: "Income Tax Scrutiny On NGO Sparks Public Debate",
    body: "Coverage of a recent scrutiny action has drawn attention to the sector's regulatory landscape.",
  },
  {
    title: "Tax Exemption Rules Ease For NGOs In Housing & Funding Space",
    body: "Recent notifications simplify eligibility paperwork for community housing initiatives.",
  },
  {
    title: "Delhi High Court Upholds Validity Of FCRA Suspension Provisions",
    body: "The verdict reaffirms procedural rules that NGOs must follow for registration renewal.",
  },
  {
    title: "Skilling Sector Gains Momentum Through 2026 Fiscal Cycle",
    body: "New employment-linked skilling programmes are drawing expanded NGO participation this year.",
  },
  {
    title: "Nagarjuna Lodges Complaint Against Encroachment Near Village",
    body: "The NGO president filed a formal complaint alleging illegal land encroachment near a protected village boundary.",
  },
  {
    title: "Community Housing Grants Open For Rural Partners",
    body: "A fresh round of grants targets rural housing and sanitation delivery partners across five states.",
  },
];

export const LAWS = [
  {
    no: "01",
    title: "Indian Trust Act 1882",
    body: "The Indian Trusts Act of 1882 is the legislation that oversees trust law within India. Established on March 1, 1882, it lays down guidelines for the formation and administration of trusts, and defines key terms such as 'trust', 'trustee' and 'beneficiary'.",
  },
  {
    no: "02",
    title: "Society Registration Act 1860",
    body: "The Societies Registration Act of 1860 establishes a legal structure for the registration of societies engaged in cultural, charitable, religious and educational purposes, and defines rights and responsibilities of members.",
  },
  {
    no: "03",
    title: "Foreign Contribution (Regulation) Act 2010",
    body: "The FCRA oversees the receipt and utilisation of foreign contributions by individuals, associations and companies, supervising inflows in a manner that is not detrimental to the national interest.",
  },
  {
    no: "04",
    title: "Bombay Public Trusts Act 1950",
    body: "The Bombay Public Trusts Act of 1950 governs public trusts within Maharashtra and Gujarat, ensuring the responsible allocation of trust funds towards charitable endeavours.",
  },
];

export const TEAM = [
  { initials: "RV", name: "CA Rajesh Kumar Verma", role: "Founder" },
  { initials: "GA", name: "Gunjankit Anand", role: "CEO" },
  { initials: "AV", name: "Atul Verma", role: "Consultant" },
];

export const VALUES = [
  { title: "Integrity & Commitment", body: "We uphold ethical integrity in our promises." },
  { title: "Client-Centric", body: "Client interests lead; accountability is paramount." },
  { title: "Growth Catalyst", body: "We drive growth for clients, people and society." },
  {
    title: "Innovation & Quality",
    body: "Embracing innovation, collaboration and high standards.",
  },
];

export type SupportDesk = {
  id: string;
  label: string;
  tagline: string;
  person: string;
  designation: string;
  phone: string;
  phoneHref: string;
  altPhone?: string;
  email: string;
  hours: string;
  handles: string[];
};

export const SUPPORT_DESKS: SupportDesk[] = [
  {
    id: "ca",
    label: "CA / Accounting Support",
    tagline: "Audit, bookkeeping, taxation & statutory filings",
    person: "CA Rajesh Kumar Verma",
    designation: "Founder · Chartered Accountant",
    phone: "+91 99104 03151",
    phoneHref: "+919910403151",
    altPhone: "+91 11 4503 0058",
    email: "accounts@carkverma.com",
    hours: "Mon–Sat · 10:00 AM – 6:30 PM IST",
    handles: [
      "Statutory & internal audits",
      "Monthly bookkeeping and payroll",
      "Income tax, TDS and GST filings",
    ],
  },
  {
    id: "it",
    label: "IT Support",
    tagline: "Portals, e-filing, digital signatures & platform help",
    person: "Atul Verma",
    designation: "IT & Digital Systems Desk",
    phone: "+91 99104 03152",
    phoneHref: "+919910403152",
    email: "itsupport@carkverma.com",
    hours: "Mon–Sat · 9:30 AM – 7:00 PM IST",
    handles: [
      "FCRA / Income tax portal issues",
      "Digital signature (DSC) setup",
      "Client dashboard & login support",
    ],
  },
  {
    id: "csr",
    label: "CSR Support",
    tagline: "CSR-1, corporate partnerships & utilisation reporting",
    person: "Gunjankit Anand",
    designation: "CEO · CSR Partnerships",
    phone: "+91 99104 03153",
    phoneHref: "+919910403153",
    email: "csr@carkverma.com",
    hours: "Mon–Fri · 10:00 AM – 6:00 PM IST",
    handles: [
      "CSR-1 registration and renewals",
      "Corporate funder matching",
      "Utilisation certificates & impact reports",
    ],
  },
  {
    id: "registration",
    label: "NGO Registration Support",
    tagline: "Trust, Society, Section-8, 12A & 80G",
    person: "Registration Desk",
    designation: "Legal & Compliance Team",
    phone: "+91 99104 03154",
    phoneHref: "+919910403154",
    email: "registration@carkverma.com",
    hours: "Mon–Sat · 10:00 AM – 6:30 PM IST",
    handles: [
      "Entity formation and drafting",
      "12A / 80G / FCRA applications",
      "Registrar liaison and follow-up",
    ],
  },
  {
    id: "funding",
    label: "Grants & Funding Support",
    tagline: "Grant proposals, EOIs, RFPs and NSDC funding",
    person: "Funding Advisory Desk",
    designation: "Grants & Proposals Team",
    phone: "+91 99104 03155",
    phoneHref: "+919910403155",
    email: "funding@carkverma.com",
    hours: "Mon–Sat · 10:00 AM – 6:00 PM IST",
    handles: [
      "Grant proposal drafting",
      "EOI / RFP submissions",
      "NSDC funding applications",
    ],
  },
];