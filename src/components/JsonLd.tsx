/**
 * Renders structured data (schema.org JSON-LD) for search engines.
 * "<" is escaped so no value can ever close the script tag early.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
