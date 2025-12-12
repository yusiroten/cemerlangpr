import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
<<<<<<< HEAD
import { LanguageProvider } from '@/lib/translations';
import WhatsAppButton from '@/components/whatsapp-button';
=======
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38

export const metadata: Metadata = {
  title: 'Cemerlang Gateway',
  description: 'Landing Page for Cemerlang Group',
};

<<<<<<< HEAD
=======
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.2-97.2-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c.1 101.8-82.8 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.8-16.2-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);


>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
<<<<<<< HEAD
        <LanguageProvider>
          {children}
          <Toaster />
          <WhatsAppButton />
        </LanguageProvider>
=======
        {children}
        <Toaster />
        <Link 
          href="https://wa.me/6287880571288"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center group"
          aria-label="Chat on WhatsApp"
        >
          <div className="bg-green-500 text-white p-3 rounded-full shadow-lg group-hover:bg-green-600 transition-colors">
            <WhatsAppIcon className="w-8 h-8" />
          </div>
          <span className="mt-2 text-xs bg-black/70 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hubungi Admin
          </span>
        </Link>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
      </body>
    </html>
  );
}
