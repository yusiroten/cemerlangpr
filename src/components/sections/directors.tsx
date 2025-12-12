'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/lib/translations';

const directors = [
  { name: 'Lois Josca Danoes', title: 'CEO', imgSrc: 'https://i.ibb.co/HfYMcwhc/Josca.png', hint: 'person headshot' },
  { name: 'Kasih M.M Danoes', title: 'COO', imgSrc: 'https://i.ibb.co/KPMZrSw/Kasih.png', hint: 'person headshot' },
];

export default function DirectorsSection() {
  const { t } = useLanguage();
  return (
    <section id="direksi" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <Image
        src="https://i.ibb.co/gMY7DwBY/hero-3.png"
        alt="background"
        fill
        className="object-cover z-0 opacity-10"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('direksiTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t('direksiSubtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {directors.map((director) => (
            <Card key={director.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center pt-6">
                <Avatar className="w-40 h-40 mb-4 border-4 border-primary">
                  <AvatarImage src={director.imgSrc} alt={director.name} data-ai-hint={director.hint} className="object-cover"/>
                  <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-primary">{director.name}</h3>
                <p className="text-muted-foreground font-medium">{director.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
