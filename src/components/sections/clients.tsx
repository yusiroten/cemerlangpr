'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  { name: 'PT. Adhi Karya', hint: 'construction company logo' },
  { name: 'Angkasa Pura II', hint: 'airport authority logo' },
  { name: 'Angkasa Pura Airport', hint: 'airport logo' },
  { name: 'PT. Hutama Karya', hint: 'construction company logo' },
  { name: 'Jasa Marga Balikpapan', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Manado-Bitung', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Indonesia', hint: 'toll road operator logo' },
  { name: 'Jasa Marga Bali', hint: 'toll road operator logo' },
  { name: 'Jaya Konstruksi', hint: 'construction company logo' },
  { name: 'Marga Sarana Jabar', hint: 'regional infrastructure company logo' },
  { name: 'Nindya Karya', hint: 'construction company logo' },
  { name: 'PP', hint: 'construction company logo' },
  { name: 'Sentul International Circuit', hint: 'racetrack logo' },
  { name: 'Sentul Karting Circuit', hint: 'racetrack logo' },
  { name: 'Sekolah Tinggi Intelijen Negara', hint: 'intelligence agency logo' },
  { name: 'Total Bangun Persada', hint: 'construction company logo' },
  { name: 'Waskita', hint: 'construction company logo' },
];

export default function ClientsSection() {
  return (
    <section id="klien" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Klien Kami</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Dipercaya oleh berbagai perusahaan dan institusi terkemuka di Indonesia.
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
                          src="https://placehold.co/150x80.png"
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
