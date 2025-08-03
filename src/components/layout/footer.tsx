import Link from 'next/link';
import { Building2, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.8-1.59-1.84-2.44-4.38-2.3-6.91.15-2.5 1.51-4.72 3.55-6.21 2.04-1.49 4.67-2.14 7.21-1.84.06.58.11 1.16.18 1.73.01.07.01.14.02.21.08-1.02.1-2.06.01-3.08-.02-.27-.04-.54-.05-.81-.02-.2-.04-.4-.05-.6-.11-1.32-.44-2.63-1.15-3.81-.7-.94-1.6-1.74-2.6-2.32-.2-.12-.4-.23-.6-.33-.2-.11-.4-.21-.6-.31C12.72.32 12.62.17 12.525.02z" />
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Building2 className="h-7 w-7" />
            <span className="text-xl font-bold font-headline">Cemerlang Group</span>
          </div>
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="YouTube"><Youtube className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="TikTok"><TikTokIcon className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></Link>
          </div>
          <p className="text-sm text-secondary-foreground/70">&copy; {new Date().getFullYear()} Cemerlang Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
