import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "Softify",
    default: "Softify - Premium Software Solutions Provider",
  },
  description: "Softify is your trusted source for genuine software licenses from Microsoft, Adobe, Autodesk, V-Ray, and SketchUp. We provide premium software solutions with expert support.",
  keywords: [
    "software distribution",
    "Microsoft licenses",
    "Adobe licenses",
    "Autodesk licenses",
    "V-Ray licenses",
    "SketchUp licenses",
    "software solutions",
    "business software",
    "software licensing",
    "enterprise software"
  ],
  openGraph: {
    title: 'Softify - Premium Software Solutions Provider',
    description: 'Your trusted partner for genuine software licenses and solutions. Authorized distributor for Microsoft, Adobe, Autodesk, V-Ray, and SketchUp.',
    url: 'https://softify.com.pk',
    siteName: 'Softify',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softify - Premium Software Solutions Provider',
    description: 'Your trusted partner for genuine software licenses and solutions. Authorized distributor for Microsoft, Adobe, Autodesk, V-Ray, and SketchUp.',
    images: ['/og-image.jpg'],
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
