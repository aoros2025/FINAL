import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CREAR Lab | University of Pittsburgh',
  description:
    'The CREAR Lab conducts research on resilience, violence, and mental health across Latin America to advance health equity and well-being in historically excluded communities.',
  keywords:
    'CREAR Lab, University of Pittsburgh, Latinx Psychology, Resilience, Violence, Mental Health, Latin America, Research, Andrea Medrano',
  authors: [{ name: 'CREAR Lab' }],
  creator: 'CREAR Lab',
  publisher: 'University of Pittsburgh',
  robots: { index: true, follow: true },
  metadataBase: new URL('https://thecrearlab.com'),
  alternates: {
    canonical: 'https://thecrearlab.com',
  },
  openGraph: {
    title: 'CREAR Lab | University of Pittsburgh',
    description:
      'Advancing mental health equity through research on resilience, violence, and well-being across Latin America.',
    url: 'https://thecrearlab.com',
    siteName: 'CREAR Lab',
    images: [
      {
        url: '/images/CREAR_Logo.png',
        width: 800,
        height: 600,
        alt: 'CREAR Lab Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CREAR Lab | University of Pittsburgh',
    description:
      'Community Research Exploring Adolescent Resilience and mental health equity across Latin America.',
    images: ['/images/CREAR_Logo.png'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE', // Add this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fallback meta tags for non-Next crawlers */}
        <meta
          name="description"
          content="The CREAR Lab conducts research on resilience, violence, and mental health across Latin America."
        />
        <meta
          name="keywords"
          content="CREAR Lab, University of Pittsburgh, Latinx Psychology, Resilience, Violence, Mental Health, Latin America, Research"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecrearlab.com" />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Main content starts below navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}