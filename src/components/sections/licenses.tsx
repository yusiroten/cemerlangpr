'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/translations';

const licenses = [
  { name: 'ICAO-OACI-NKAO', imgSrc: 'https://i.ibb.co/CpWYGByZ/20.png', hint: 'aviation logo' },
  { name: 'Federation Aviation Administration', imgSrc: 'https://i.ibb.co/bRyfyJHW/21.png', hint: 'aviation logo' },
  { name: 'Kementerian Perhubungan Indonesia', imgSrc: 'https://i.ibb.co/ZRq0vz6X/22.png', hint: 'government logo' },
  { name: 'PADI UMKM', imgSrc: 'https://i.ibb.co/7xzfWMWb/23.png', hint: 'business logo' },
  { name: 'LKPP INAPROC', imgSrc: 'https://i.ibb.co/WNGPFynV/Logo-LKPP-Inaproc.png', hint: 'government logo' },
  { name: 'ISO 9001 : 2015', imgSrc: 'https://i.ibb.co/QvrZhxpC/25.png', hint: 'certification logo' },
  { name: 'Eco Friendly', imgSrc: 'https://i.ibb.co/d0HCDLXb/26.png', hint: 'eco logo' },
  { name: 'KP14', imgSrc: 'https://i.ibb.co/Kj55wt3s/KP14.png', hint: 'certification logo' },
];

export default function LicensesSection() {
  const { t } = useLanguage();
  return (
    <section id="lisensi" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('lisensiTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t('lisensiSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {licenses.map((license) => (
            <Card key={license.name} className="flex flex-col items-center justify-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="relative w-36 h-20 mb-4">
                  <Image
                    src={license.imgSrc}
                    alt={license.name}
                    fill
                    className="object-contain"
                    data-ai-hint={license.hint}
                  />
                </div>
                <p className="font-semibold text-center text-primary h-12 flex items-center">{license.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
