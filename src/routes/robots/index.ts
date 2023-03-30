import type { RequestHandler } from "@builder.io/qwik-city";

const Robots = () => {
  return null;
};

export const onGet: RequestHandler = async ({
  headers,
  text,
  exit,
  request,
}): Promise<any> => {
  console.log();
  const baseUrl = `https://${
    request.headers.get("host") || request.headers.get("x-forwarded-host")
  }`;

  const robots = `# *
  User-agent: *
  Allow: /
  
  # Host
  Host: ${baseUrl}
  
  # Sitemaps
  Sitemap: ${baseUrl}/sitemap/
  `;

  headers.set("Content-Type", "text/plain");
  headers.set("Cache-Control", `max-age=${60 * 60 * 1}`);
  text(200, robots);
  exit();

  return {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
    robots,
  };
};

export default Robots;
