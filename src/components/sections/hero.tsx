'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from '@/lib/translations';

export default function HeroSection() {
  const { t } = useLanguage();

  const heroSlides = [
    { title: t('heroTitle1'), subtitle: t('heroSubtitle1') },
    { title: t('heroTitle2'), subtitle: t('heroSubtitle2') },
    { title: t('heroTitle3'), subtitle: t('heroSubtitle3') },
    { title: t('heroTitle4'), subtitle: t('heroSubtitle4') },
    { title: t('heroTitle5'), subtitle: t('heroSubtitle5') },
    { title: t('heroTitle6'), subtitle: t('heroSubtitle6') },
    { title: t('heroTitle7'), subtitle: t('heroSubtitle7') },
    { title: t('heroTitle8'), subtitle: t('heroSubtitle8') },
    { title: t('heroTitle9'), subtitle: t('heroSubtitle9') },
    { title: t('heroTitle10'), subtitle: t('heroSubtitle10') },
  ];

  return (
    <section id="beranda" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://i.ibb.co/hxYpV9Cz/hero-section-beranda.png"
        alt="Hero background"
        fill
        priority
        className="object-cover z-0"
        data-ai-hint="winding road"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 md:px-6 text-center z-20">
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-headline animate-fade-in-down" style={{animationDelay: '0.2s'}}>
                        {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        {slide.subtitle}
                    </p>
                </div>
              </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#produk">{t('lihatProdukKami')}</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <a href="#kontak">{t('hubungiKami')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
