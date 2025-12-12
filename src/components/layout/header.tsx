'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
import LanguageSwitcher from '@/components/language-switcher';
import { useLanguage } from '@/lib/translations';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('navBeranda'), href: '#beranda' },
    { name: t('navTentangKami'), href: '#tentang-kami' },
    { name: t('navDireksi'), href: '#direksi' },
    { name: t('navProduk'), href: '#produk' },
    { name: t('navLisensi'), href: '#lisensi' },
    { name: t('navProyek'), href: '#proyek' },
    { name: t('navKlien'), href: '#klien' },
    { name: t('navKegiatan'), href: '#kegiatan' },
    { name: t('navKontak'), href: '#kontak' },
  ];

=======

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang-kami' },
  { name: 'Direksi', href: '#direksi' },
  { name: 'Produk', href: '#produk' },
  { name: 'Lisensi', href: '#lisensi' },
  { name: 'Proyek', href: '#proyek' },
  { name: 'Klien', href: '#klien' },
  { name: 'Kegiatan', href: '#kegiatan' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="https://i.ibb.co/SX8LnnF1/Logo-cemerlang-Ok-removebg-preview.png" alt="Cemerlang Group Logo" width={200} height={50} className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
<<<<<<< HEAD
        <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
=======
        <div className="hidden md:flex items-center">
            <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <a href="#kontak">Hubungi Kami</a>
            </Button>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
        </div>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="https://i.ibb.co/SX8LnnF1/Logo-cemerlang-Ok-removebg-preview.png" alt="Cemerlang Group Logo" width={180} height={45} className="h-10 w-auto" />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.name}
                    </a>
                  ))}
<<<<<<< HEAD
                   <div className="mt-4">
                     <LanguageSwitcher />
                   </div>
=======
                   <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Hubungi Kami</a>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
