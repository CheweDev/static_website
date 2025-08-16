import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Leadlift | Personal Trainer Marketing Agency - Get More Clients with SEO & Digital Marketing",
  description:
    "We help boxing trainers, yoga instructors, prenatal specialists, and 35+ fitness specialties get found online. Proven SEO, website design, and digital marketing strategies for personal trainers nationwide.",
  keywords:
    "personal trainer marketing, fitness SEO, personal trainer website design, boxing trainer marketing, yoga instructor SEO, prenatal trainer marketing, fitness marketing agency",
  authors: [{ name: "Leadlift" }],
  creator: "Leadlift",
  publisher: "Leadlift",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitprotrainers.com",
    title: "Leadlift - Marketing Agency for Personal Trainers",
    description:
      "Get more clients with proven digital marketing strategies designed specifically for personal trainers. We help 35+ fitness specialties dominate their local markets.",
    siteName: "Leadlift",
    images: [
      {
        url: "/placeholder.png",
        width: 1200,
        height: 630,
        alt: "Leadlift - Personal Trainer Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadlift - Marketing Agency for Personal Trainers",
    description:
      "Get more clients with proven digital marketing strategies designed specifically for personal trainers.",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@leadlift",
  },
  alternates: {
    canonical: "https://fitprotrainers.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://fitprotrainers.com" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FitPro Trainers",
              description:
                "Marketing agency specializing in helping personal trainers get more clients through SEO, website design, and digital marketing.",
              url: "https://fitprotrainers.com",
              logo: "https://fitprotrainers.com/placeholder.svg?height=60&width=60",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Marketing Avenue, Suite 456",
                addressLocality: "Your City",
                addressRegion: "ST",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/fitprotrainers",
                "https://www.linkedin.com/company/fitprotrainers",
                "https://twitter.com/fitprotrainers",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "SEO for Personal Trainers",
                  description:
                    "Local SEO optimization to help personal trainers get found online",
                },
                {
                  "@type": "Service",
                  name: "Personal Trainer Website Design",
                  description:
                    "Professional websites that convert visitors into paying clients",
                },
                {
                  "@type": "Service",
                  name: "Google Ads for Personal Trainers",
                  description:
                    "Targeted advertising campaigns for fitness professionals",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
