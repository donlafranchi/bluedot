export type FederalRegisterAgency = {
  name: string;
  slug: string;
};

export type FederalRegisterDocument = {
  document_number: string;
  title: string;
  abstract: string | null;
  action: string | null;
  type: string;
  topics?: string[];
  html_url: string;
  pdf_url?: string;
  publication_date: string;
  presidential_document_type?: string | null;
  agencies: FederalRegisterAgency[];
};

export type FederalRegisterResponse = {
  description?: string;
  count: number;
  next_page_url?: string;
  results: FederalRegisterDocument[];
};
