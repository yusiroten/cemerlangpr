'use client';
import Image from 'next/image';
import { useLanguage } from '@/lib/translations';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="tentang-kami" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.ibb.co/gMY7DwBY/hero-3.png"
              alt="About Cemerlang Group"
              fill
              className="object-cover"
              data-ai-hint="modern office"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('tentangKamiTitle')}</h2>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc1')}
            </p>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc2')}
            </p>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
