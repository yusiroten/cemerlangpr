'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useLanguage } from '@/lib/translations';

interface Activity {
  title: string;
  titleKey: any;
  slug: string;
  imgSrc: string;
  hint: string;
  description: string;
  descriptionKey: any;
}

const activitiesData: Activity[] = [
    { title: 'Audiensi di Dinas PUPR Kota Bogor', titleKey: 'activity_1_title', slug: 'audiensi-dinas-pupr-bogor', imgSrc: 'https://i.ibb.co/snGhLx9/Bogor.jpg', hint: 'official meeting', description: 'Tim Cemerlang Group melakukan audiensi dengan perwakilan dari Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kota Bogor untuk membahas potensi kolaborasi dalam proyek infrastruktur jalan di wilayah Kota Bogor.', descriptionKey: 'activity_1_desc' },
    { title: 'Audiensi di Dinas PUPR Kota Tangerang', titleKey: 'activity_2_title', slug: 'audiensi-dinas-pupr-tangerang', imgSrc: 'https://i.ibb.co/m5knHvDB/Tangerang.jpg', hint: 'government building', description: 'Pertemuan strategis dengan Dinas PUPR Kota Tangerang untuk mempresentasikan solusi inovatif kami dalam pemeliharaan dan peningkatan kualitas jalan kota, serta menjajaki peluang kerjasama di masa depan.', descriptionKey: 'activity_2_desc' },
    { title: 'Audiensi di Dinas PUPR DKI Jakarta', titleKey: 'activity_3_title', slug: 'audiensi-dinas-pupr-dki-jakarta', imgSrc: 'https://i.ibb.co/cK2GKjVQ/PUPR-DKI.jpg', hint: 'city hall', description: 'Diskusi mendalam bersama Dinas PUPR DKI Jakarta mengenai penerapan teknologi microsurfacing dan produk aspal berkualitas tinggi untuk mendukung program infrastruktur Ibukota.', descriptionKey: 'activity_3_desc' },
    { title: 'Audiensi di Kementerian PUPR Pusat Jakarta', titleKey: 'activity_4_title', slug: 'audiensi-kementerian-pupr-pusat', imgSrc: 'https://i.ibb.co/0ydK6jmg/PUPR-Pusat.jpg', hint: 'ministry building', description: 'Cemerlang Group berkesempatan untuk berdialog dengan pejabat di Kementerian PUPR tingkat pusat, menyampaikan visi kami dalam mendukung pembangunan infrastruktur nasional yang berkelanjutan.', descriptionKey: 'activity_4_desc' },
    { title: 'Mock Up Microsurfacing di Tol Becakayu', titleKey: 'activity_5_title', slug: 'mockup-microsurfacing-tol-becakayu', imgSrc: 'https://i.ibb.co/Fbcyf5Rj/MOCKUP-BECAKAYU-24-4-25-6.jpg', hint: 'road work', description: 'Demonstrasi dan uji coba (mock up) aplikasi lapisan Microsurfacing di ruas Tol Bekasi-Cawang-Kampung Melayu (Becakayu) untuk menunjukkan kualitas dan keunggulan produk kami secara langsung di lapangan.', descriptionKey: 'activity_5_desc' },
    { title: 'Mock Up di Revo Mall Kota Bekasi', titleKey: 'activity_6_title', slug: 'mockup-revo-mall-bekasi', imgSrc: 'https://i.ibb.co/cSggnBKs/REVO-MALL-BEKASI-SURVEY-28-05-25-7.jpg', hint: 'shopping mall', description: 'Aplikasi percontohan produk perkerasan kami di area parkir Revo Mall, Bekasi. Proyek ini bertujuan untuk menunjukkan daya tahan dan estetika solusi kami untuk area komersial.', descriptionKey: 'activity_6_desc' },
    { title: 'Mock Up di Pelabuhan Patimbang Subang', titleKey: 'activity_7_title', slug: 'mockup-pelabuhan-patimbang-subang', imgSrc: 'https://i.ibb.co/BKdXpB3b/Patimban-Subang.jpg', hint: 'seaport', description: 'Uji coba aplikasi produk heavy-duty kami di area Pelabuhan Patimban, Subang, yang memiliki lalu lintas kendaraan berat, untuk membuktikan ketahanan produk dalam kondisi ekstrem.', descriptionKey: 'activity_7_desc' },
    { title: 'Audiensi di Dinas PUPR Kota Sawahlunto', titleKey: 'activity_8_title', slug: 'audiensi-dinas-pupr-sawahlunto', imgSrc: 'https://i.ibb.co/nMLq9NQ1/Sawahlunto.jpg', hint: 'official discussion', description: 'Melakukan presentasi dan diskusi dengan Dinas PUPR Kota Sawahlunto, Sumatera Barat, untuk memperkenalkan produk-produk unggulan Cemerlang Group dan menjajaki penerapan di proyek-proyek daerah.', descriptionKey: 'activity_8_desc' },
];

const getActivityBySlug = (slug: string): Activity | undefined => {
  return activitiesData.find(a => a.slug === slug);
}

export default function ActivityDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [activity, setActivity] = useState<Activity | null>(null);
  const { language, t } = useLanguage();
  
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  useEffect(() => {
    if (slug) {
      const foundActivity = getActivityBySlug(slug);
      if(foundActivity) {
        const translatedActivity = {
            ...foundActivity,
            title: t(foundActivity.titleKey),
            description: t(foundActivity.descriptionKey),
        }
        setActivity(translatedActivity);
      } else {
        setActivity(null);
      }
    }
  }, [slug, language, t]);

  if (!activity) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <p>{t('kegiatanNotFound')}</p>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="outline" onClick={() => router.push('/#kegiatan')} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('kembaliKeKegiatan')}
          </Button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={activity.imgSrc}
                alt={activity.title}
                fill
                className="object-cover"
                data-ai-hint={activity.hint}
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline">{activity.title}</h1>
              <p className="text-muted-foreground text-justify text-lg">
                {activity.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
