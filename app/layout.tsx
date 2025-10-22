import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CREAR Lab',
  description: 'Community Research Exploring Adolescent Resilience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Main content starts below navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
