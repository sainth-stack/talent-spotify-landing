import type { Post } from "@/app/blog/data";

const SITE = "https://www.talentspotify.com";

interface Props {
  post: Post;
}

/** Renders a BlogPosting JSON-LD script for a blog article.
 *  Author is always mapped to the #aneel Person entity defined on the homepage,
 *  so the founder and article author are recognised as the same entity across the site. */
export function ArticleSchema({ post }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE}/blog/${post.slug}`,
    ...(post.cover ? { image: `${SITE}${post.cover}` } : {}),
    author: {
      "@type": "Person",
      "@id": `${SITE}/#aneel`,
      name: "Aneel Kumar Bonu",
      url: `${SITE}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "TalentSpotify",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
