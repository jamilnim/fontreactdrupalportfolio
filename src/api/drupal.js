const baseFromEnv = import.meta.env.VITE_DRUPAL_BASE?.trim();
export const BASE = baseFromEnv || "https://dev-jamilportfolio.pantheonsite.io";
console.log("🔗 Using Drupal API base:", BASE);


function extractUrl(linkField) {
  if (!linkField) return "";
  if (typeof linkField === "string") return linkField;
  if (Array.isArray(linkField) && linkField.length > 0) return extractUrl(linkField[0]);
  if (typeof linkField === "object") {
    if (linkField.uri) {
      const uri = linkField.uri;
      if (typeof uri === "string" && uri.startsWith("internal:")) {
        const path = uri.replace(/^internal:/, "");
        return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
      }
      return uri;
    }
    if (linkField.url) return linkField.url;
    if (linkField.value) return linkField.value;
    if (linkField.target) return linkField.target;
  }
  return "";
}

export async function fetchProjects() {
  const response = await fetch(`${BASE}/jsonapi/node/project?include=field_image`);
  if (!response.ok) throw new Error("Failed to fetch projects");
  const data = await response.json();
  const included = data.included || [];

  return data.data.map((p) => {
    const attrs = p.attributes || {};
    let imgId = Array.isArray(p.relationships?.field_image?.data)
      ? p.relationships.field_image.data[0]?.id
      : p.relationships?.field_image?.data?.id;

    const imgData = included.find((i) => i.id === imgId);
    const imageUrl = imgData?.attributes?.uri?.url
      ? imgData.attributes.uri.url.startsWith("http")
        ? imgData.attributes.uri.url
        : `${BASE}${imgData.attributes.uri.url}`
      : null;

    return {
      id: p.id,
      title: attrs.title || "Untitled",
      summary: attrs.field_project_summary?.processed || "",
      github: extractUrl(attrs.field_github_link) || "",
      deploy: extractUrl(attrs.field_deploy_link) || "",
      body: attrs.body?.processed || "",
      image: imageUrl,
    };
  });
}

export async function fetchGallery() {
  const response = await fetch(`${BASE}/jsonapi/node/gallery_item?include=field_image`);
  if (!response.ok) throw new Error("Failed to fetch gallery");
  const data = await response.json();
  const included = data.included || [];

  return data.data.map((item) => {
    let imgId = Array.isArray(item.relationships?.field_image?.data)
      ? item.relationships.field_image.data[0]?.id
      : item.relationships?.field_image?.data?.id;

    const imgData = included.find((i) => i.id === imgId);
    const imageUrl = imgData?.attributes?.uri?.url
      ? imgData.attributes.uri.url.startsWith("http")
        ? imgData.attributes.uri.url
        : `${BASE}${imgData.attributes.uri.url}`
      : null;

    return {
      id: item.id,
      title: item.attributes.title || "Untitled",
      description: item.attributes.field_description || "",
      image: imageUrl,
    };
  });
}

export async function fetchArticles() {
  const response = await fetch(`${BASE}/jsonapi/node/article?include=field_image`);
  if (!response.ok) throw new Error("Failed to fetch articles");
  const data = await response.json();
  const included = data.included || [];

  return data.data.map((a) => {
    const title = a.attributes.title || "Untitled";
    const summary = a.attributes.field_summary?.processed || "";
    const body = a.attributes.body?.processed || "";
    const imgId = a.relationships.field_image?.data?.id;
    const imgData = included.find((i) => i.id === imgId);
    const imageUrl = imgData ? `${BASE}${imgData.attributes.uri.url}` : null;

    return { id: a.id, title, summary, body, image: imageUrl };
  });
}
