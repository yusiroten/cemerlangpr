'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD
import { useLanguage } from '@/lib/translations';

const activities = [
  { titleKey: 'activity_1_title', slug: 'audiensi-dinas-pupr-bogor', imgSrc: 'https://i.ibb.co/snGhLx9/Bogor.jpg', hint: 'official meeting' },
  { titleKey: 'activity_2_title', slug: 'audiensi-dinas-pupr-tangerang', imgSrc: 'https://i.ibb.co/m5knHvDB/Tangerang.jpg', hint: 'government building' },
  { titleKey: 'activity_3_title', slug: 'audiensi-dinas-pupr-dki-jakarta', imgSrc: 'https://i.ibb.co/cK2GKjVQ/PUPR-DKI.jpg', hint: 'city hall' },
  { titleKey: 'activity_4_title', slug: 'audiensi-kementerian-pupr-pusat', imgSrc: 'https://i.ibb.co/0ydK6jmg/PUPR-Pusat.jpg', hint: 'ministry building' },
  { titleKey: 'activity_5_title', slug: 'mockup-microsurfacing-tol-becakayu', imgSrc: 'https://i.ibb.co/Fbcyf5Rj/MOCKUP-BECAKAYU-24-4-25-6.jpg', hint: 'road work' },
  { titleKey: 'activity_6_title', slug: 'mockup-revo-mall-bekasi', imgSrc: 'https://i.ibb.co/cSggnBKs/REVO-MALL-BEKASI-SURVEY-28-05-25-7.jpg', hint: 'shopping mall' },
  { titleKey: 'activity_7_title', slug: 'mockup-pelabuhan-patimbang-subang', imgSrc: 'https://i.ibb.co/BKdXpB3b/Patimban-Subang.jpg', hint: 'seaport' },
  { titleKey: 'activity_8_title', slug: 'audiensi-dinas-pupr-sawahlunto', imgSrc: 'https://i.ibb.co/nMLq9NQ1/Sawahlunto.jpg', hint: 'official discussion' },
];

export default function ActivitiesSection() {
  const { t } = useLanguage();
=======

const activities = [
  { title: 'Audiensi di Dinas PUPR Kota Bogor', slug: 'audiensi-dinas-pupr-bogor', imgSrc: 'https://i.ibb.co/snGhLx9/Bogor.jpg', hint: 'official meeting' },
  { title: 'Audiensi di Dinas PUPR Kota Tangerang', slug: 'audiensi-dinas-pupr-tangerang', imgSrc: 'https://i.ibb.co/m5knHvDB/Tangerang.jpg', hint: 'government building' },
  { title: 'Audiensi di Dinas PUPR DKI Jakarta', slug: 'audiensi-dinas-pupr-dki-jakarta', imgSrc: 'https://i.ibb.co/cK2GKjVQ/PUPR-DKI.jpg', hint: 'city hall' },
  { title: 'Audiensi di Kementerian PUPR Pusat Jakarta', slug: 'audiensi-kementerian-pupr-pusat', imgSrc: 'https://i.ibb.co/0ydK6jmg/PUPR-Pusat.jpg', hint: 'ministry building' },
  { title: 'Mock Up Microsurfacing di Tol Becakayu', slug: 'mockup-microsurfacing-tol-becakayu', imgSrc: 'https://i.ibb.co/Fbcyf5Rj/MOCKUP-BECAKAYU-24-4-25-6.jpg', hint: 'road work' },
  { title: 'Mock Up di Revo Mall Kota Bekasi', slug: 'mockup-revo-mall-bekasi', imgSrc: 'https://i.ibb.co/cSggnBKs/REVO-MALL-BEKASI-SURVEY-28-05-25-7.jpg', hint: 'shopping mall' },
  { title: 'Mock Up di Pelabuhan Patimbang Subang', slug: 'mockup-pelabuhan-patimbang-subang', imgSrc: 'https://i.ibb.co/BKdXpB3b/Patimban-Subang.jpg', hint: 'seaport' },
  { title: 'Audiensi di Dinas PUPR Kota Sawahlunto', slug: 'audiensi-dinas-pupr-sawahlunto', imgSrc: 'https://i.ibb.co/nMLq9NQ1/Sawahlunto.jpg', hint: 'official discussion' },
];

export default function ActivitiesSection() {
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
  return (
    <section id="kegiatan" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('kegiatanTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t('kegiatanSubtitle')}</p>
=======
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Blog &amp; Kegiatan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Dokumentasi kegiatan dan audiensi yang telah kami lakukan.</p>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <Card key={activity.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
<<<<<<< HEAD
                    <Image src={activity.imgSrc} alt={t(activity.titleKey as any)} fill className="object-cover" data-ai-hint={activity.hint}/>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-lg text-primary text-center w-full flex-grow flex items-center justify-center">{t(activity.titleKey as any)}</CardTitle>
=======
                    <Image src={activity.imgSrc} alt={activity.title} fill className="object-cover" data-ai-hint={activity.hint}/>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-lg text-primary text-center w-full flex-grow flex items-center justify-center">{activity.title}</CardTitle>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="link" className="p-0 h-auto text-primary mx-auto">
                  <Link href={`/kegiatan/${activity.slug}`}>
<<<<<<< HEAD
                    {t('selengkapnya')} <ArrowRight className="ml-2 h-4 w-4" />
=======
                    Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
