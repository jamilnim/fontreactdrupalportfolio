const baseFromEnv = import.meta.env.VITE_DRUPAL_BASE?.trim();
export const BASE = baseFromEnv || "https://dev-jamilportfolio.pantheonsite.io";

export async function fetchArticles() {
  // ✅ Include image relationship (even if null, safe)
  const response = await fetch(
    `${BASE}/jsonapi/node/article?include=field_image`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  const included = data.included || [];

  const articles = data.data.map((a) => {
    // Title
    const title = a.attributes.title || "";

    // Summary (field_summary.processed)
    const summary = a.attributes.field_summary?.processed || "";

    // Body (full content - processed HTML)
    const body = a.attributes.body?.processed || "";

    // Image (relationship)
    const imgId = a.relationships.field_image?.data?.id;
    const imgData = included.find((item) => item.id === imgId);
    const imageUrl = imgData ? `${BASE}${imgData.attributes.uri.url}` : null;

    return {
      id: a.id,
      title,
      summary,
      body,
      image: imageUrl,
    };
  });

  return articles;
}
