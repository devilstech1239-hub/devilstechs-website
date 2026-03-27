export default function DynamicSchema({ type, data, url }: { type: "Article" | "Portfolio", data: any, url: string }) {
  let schemaData = {};

  if (type === "Article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://devilstechs.com${url}`
      },
      "headline": data.title,
      "datePublished": data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": data.author || "DevilsTechs Editorial"
      },
      "publisher": {
        "@type": "Organization",
        "name": "DevilsTechs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://devilstechs.com/logo.png"
        }
      },
      "description": data.content ? data.content.substring(0, 150) + "..." : "DevilsTechs insight article."
    };
  }

  if (type === "Portfolio") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": data.title || data.client,
      "description": data.description || "A DevilsTechs premium portfolio project.",
      "url": `https://devilstechs.com${url}`,
      "author": {
        "@type": "Organization",
        "name": "DevilsTechs"
      },
      "genre": data.category || "Web Development & Design",
      "keywords": data.stats ? Object.keys(data.stats).join(", ") : "Growth, Web, Marketing"
    };
  }

  return (
    <>
      <title>{`${data.title || data.client} | DevilsTechs`}</title>
      <meta name="description" content={data.content ? data.content.substring(0, 150) + "..." : data.description || "DevilsTechs premium case study."} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
