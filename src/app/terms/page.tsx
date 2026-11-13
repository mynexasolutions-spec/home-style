import { pageMetadata } from '@/lib/seo';
import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: 'The terms that apply to using the Home Style website and requesting our services.',
  path: '/terms',
});

// NOTE: starter text only – have it reviewed and adapted before launch.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The basics of using this website and working with us."
      updated="2026"
      sections={[
        {
          heading: 'Using this website',
          body: [
            'The information on this website is provided for general guidance. Photos are illustrative and the actual finish of any project depends on the materials, site conditions and design agreed with you.',
          ],
        },
        {
          heading: 'Quotations',
          body: [
            'Quotations are free and without obligation. A quotation is valid for the period stated on it and is based on the scope discussed at the site visit. Changes to the scope may change the price and timeline.',
          ],
        },
        {
          heading: 'Projects & payments',
          body: [
            'Project scope, timeline, payment schedule and warranty terms are confirmed in writing before work begins. Warranty terms vary by service.',
          ],
        },
        {
          heading: 'Contact',
          body: [`Questions about these terms? Email ${site.email} or call ${site.phone}.`],
        },
      ]}
    />
  );
}
