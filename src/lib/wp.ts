export async function fetchWP(query: string, { variables }: { variables?: any } = {}) {
  const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!WP_API_URL) {
    console.warn("⚠️ WordPress API URL is not set in .env.local yet!");
    // Return empty mock data to prevent the app from crashing until they set it up
    return null; 
  }

  try {
    const res = await fetch(WP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Next.js caching optimization (revalidate every 60 seconds)
      next: { revalidate: 60 } 
    });

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL Error:", json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error("Failed fetching WordPress Data:", error);
    return null;
  }
}
