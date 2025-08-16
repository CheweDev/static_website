export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://fitprotrainers.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
