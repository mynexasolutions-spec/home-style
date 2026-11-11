import { site } from '@/data/site';

export type QuoteLead = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  details?: string;
};

/** Builds a wa.me link that opens WhatsApp with the lead pre-written, addressed to Home Style. */
export function buildQuoteLink(lead: QuoteLead): string {
  const lines = [
    'Hello Home Style, I would like a free quote.',
    '',
    `*Name:* ${lead.name}`,
    `*Phone:* ${lead.phone}`,
    lead.email ? `*Email:* ${lead.email}` : '',
    `*Service:* ${lead.service}`,
    lead.details ? `*Project details:* ${lead.details}` : '',
  ].filter((l, i, all) => l !== '' || (i === 1 && all[0]));

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
