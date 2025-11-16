import type { FederalRegisterDocument } from "./types";

export const fallbackDocs: FederalRegisterDocument[] = [
  {
    document_number: "2017-10004",
    title: "Strengthening the Cybersecurity of Federal Networks and Critical Infrastructure",
    abstract:
      "Orders every agency head to modernize cybersecurity practices, adopt risk management frameworks, and report back on top vulnerabilities within 90 days.",
    action: "Executive order",
    type: "Presidential Document",
    topics: ["Cybersecurity", "Infrastructure"],
    html_url: "https://www.federalregister.gov/documents/2017/05/16/2017-10004/strengthening-the-cybersecurity-of-federal-networks-and-critical-infrastructure",
    pdf_url: "https://www.govinfo.gov/content/pkg/FR-2017-05-16/pdf/2017-10004.pdf",
    publication_date: "2017-05-16",
    presidential_document_type: "executive_order",
    agencies: [{ name: "Executive Office of the President", slug: "executive-office-of-the-president" }]
  },
  {
    document_number: "2017-08311",
    title: "Buy American and Hire American",
    abstract:
      "Directs agencies to tighten waivers on federal procurement and recommend reforms that expand American-made requirements while reviewing employment-based visa programs.",
    action: "Executive order",
    type: "Presidential Document",
    topics: ["Labor", "Trade"],
    html_url: "https://www.federalregister.gov/documents/2017/04/21/2017-08311/buy-american-and-hire-american",
    pdf_url: "https://www.govinfo.gov/content/pkg/FR-2017-04-21/pdf/2017-08311.pdf",
    publication_date: "2017-04-21",
    presidential_document_type: "executive_order",
    agencies: [{ name: "Executive Office of the President", slug: "executive-office-of-the-president" }]
  }
];
