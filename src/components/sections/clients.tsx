
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from '@/lib/translations';

const clients = [
  { name: 'PT. Adhi Karya', imgSrc: 'https://i.ibb.co/Ndw0pNVd/adhi-karya.jpg', hint: 'construction company logo' },
  { name: 'Angkasa Pura II', imgSrc: 'https://i.ibb.co/G3FfzDZw/Angkasa-Pura-II.jpg', hint: 'airport authority logo' },
  { name: 'Angkasa Pura Airport', imgSrc: 'https://i.ibb.co/S73p5WPn/angkasa-pura.png', hint: 'airport logo' },
  { name: 'PT. Hutama Karya', imgSrc: 'https://i.ibb.co/gF7HFjfg/hutama-karya.png', hint: 'construction company logo' },
  { name: 'Jasa Marga Balikpapan', imgSrc: 'https://i.ibb.co/Kp9RC5Rj/jasamarga-balikpapan.png', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Manado-Bitung', imgSrc: 'https://i.ibb.co/CpqHTX2b/jasamarga-manado.png', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Indonesia', imgSrc: 'https://i.ibb.co/0R4KVW4W/jasamarga.jpg', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Bali', imgSrc: 'https://i.ibb.co/0p0nHsT0/jassa-marga-bali.jpg', hint: 'toll road operator logo' },
  { name: 'Jaya Konstruksi', imgSrc: 'https://i.ibb.co/fhqzThP/jaya-konstruksi.png', hint: 'construction company logo' },
  { name: 'Marga Sarana Jabar', imgSrc: 'https://i.ibb.co/BVY27qxS/marga-sarana-jabar.jpg', hint: 'regional infrastructure company logo' },
  { name: 'Nindya Karya', imgSrc: 'https://i.ibb.co/Fbcv0SWS/nindya-karya.png', hint: 'construction company logo' },
  { name: 'PP', imgSrc: 'https://i.ibb.co/JFbk57h7/PP.png', hint: 'construction company logo' },
  { name: 'Sentul International Circuit', imgSrc: 'https://i.ibb.co/Z1vYQsMT/sentul-cirkuit.jpg', hint: 'racetrack logo' },
  { name: 'Sentul Karting Circuit', imgSrc: 'https://i.ibb.co/q4z0pR2/sentul.jpg', hint: 'racetrack logo' },
  { name: 'Sekolah Tinggi Intelijen Negara', imgSrc: 'https://i.ibb.co/35s804cZ/STIN.jpg', hint: 'intelligence agency logo' },
  { name: 'Total Bangun Persada', imgSrc: 'https://i.ibb.co/S46vS515/total-bangun-persada.jpg', hint: 'construction company logo' },
  { name: 'Waskita', imgSrc: 'https://i.ibb.co/dsrL4gc7/waskita.png', hint: 'construction company logo' },
];

export default function ClientsSection() {
  const { t } = useLanguage();
  return (
    <section id="klien" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('klienTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t('klienSubtitle')}
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="flex flex-col items-center justify-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <div className="relative w-36 h-20 mb-4">
                        <Image
                          src={client.imgSrc}
                          alt={client.name}
                          fill
                          className="object-contain"
                          data-ai-hint={client.hint}
                        />
                      </div>
                      <p className="font-semibold text-center text-primary h-12 flex items-center">{client.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
