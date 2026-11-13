import { pageMetadata } from '@/lib/seo';
import LegalPage from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Home Style collects, uses and protects your personal information.',
  path: '/privacy',
});

// NOTE: starter text only – have it reviewed and adapted before launch.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect your information."
      updated="2026"
      sections={[
        {
          heading: 'Information we collect',
          body: [
            'When you request a quote or contact us, we collect the details you give us: your name, phone number, email address, the service you need and any project details you choose to share.',
          ],
        },
        {
          heading: 'How we use it',
          body: [
            'We use your details only to respond to your enquiry, arrange site visits, prepare quotations and keep in touch about your project. We do not sell your personal information.',
          ],
        },
        {
          heading: 'Sharing',
          body: [
            'We share information only with people who help us deliver your project or run our business (for example, our own site teams or software providers), and where the law requires it.',
          ],
        },
        {
          heading: 'Cookies & analytics',
          body: [
            'This website does not use advertising cookies. If analytics are added in future, this policy will be updated to describe them.',
          ],
        },
        {
          heading: 'Your choices',
          body: [
            `You can ask us to correct or delete the information we hold about you at any time by emailing ${site.email} or calling ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
