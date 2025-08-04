'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface Activity {
  title: string;
  slug: string;
  imgSrc: string;
  hint: string;
  description: string;
}

const activitiesData: Activity[] = [
    { title: 'Audiensi di Dinas PUPR Kota Bogor', slug: 'audiensi-dinas-pupr-bogor', imgSrc: 'https://i.ibb.co/snGhLx9/Bogor.jpg', hint: 'official meeting', description: 'Tim Cemerlang Group melakukan audiensi dengan perwakilan dari Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kota Bogor untuk membahas potensi kolaborasi dalam proyek infrastruktur jalan di wilayah Kota Bogor.' },
    { title: 'Audiensi di Dinas PUPR Kota Tangerang', slug: 'audiensi-dinas-pupr-tangerang', imgSrc: 'https://i.ibb.co/m5knHvDB/Tangerang.jpg', hint: 'government building', description: 'Pertemuan strategis dengan Dinas PUPR Kota Tangerang untuk mempresentasikan solusi inovatif kami dalam pemeliharaan dan peningkatan kualitas jalan kota, serta menjajaki peluang kerjasama di masa depan.' },
    { title: 'Audiensi di Dinas PUPR DKI Jakarta', slug: 'audiensi-dinas-pupr-dki-jakarta', imgSrc: 'https://i.ibb.co/cK2GKjVQ/PUPR-DKI.jpg', hint: 'city hall', description: 'Diskusi mendalam bersama Dinas PUPR DKI Jakarta mengenai penerapan teknologi microsurfacing dan produk aspal berkualitas tinggi untuk mendukung program infrastruktur Ibukota.' },
    { title: 'Audiensi di Kementerian PUPR Pusat Jakarta', slug: 'audiensi-kementerian-pupr-pusat', imgSrc: 'https://i.ibb.co/0ydK6jmg/PUPR-Pusat.jpg', hint: 'ministry building', description: 'Cemerlang Group berkesempatan untuk berdialog dengan pejabat di Kementerian PUPR tingkat pusat, menyampaikan visi kami dalam mendukung pembangunan infrastruktur nasional yang berkelanjutan.' },
    { title: 'Mock Up Microsurfacing di Tol Becakayu', slug: 'mockup-microsurfacing-tol-becakayu', imgSrc: 'https://i.ibb.co/Fbcyf5Rj/MOCKUP-BECAKAYU-24-4-25-6.jpg', hint: 'road work', description: 'Demonstrasi dan uji coba (mock up) aplikasi lapisan Microsurfacing di ruas Tol Bekasi-Cawang-Kampung Melayu (Becakayu) untuk menunjukkan kualitas dan keunggulan produk kami secara langsung di lapangan.' },
    { title: 'Mock Up di Revo Mall Kota Bekasi', slug: 'mockup-revo-mall-bekasi', imgSrc: 'https://i.ibb.co/cSggnBKs/REVO-MALL-BEKASI-SURVEY-28-05-25-7.jpg', hint: 'shopping mall', description: 'Aplikasi percontohan produk perkerasan kami di area parkir Revo Mall, Bekasi. Proyek ini bertujuan untuk menunjukkan daya tahan dan estetika solusi kami untuk area komersial.' },
    { title: 'Mock Up di Pelabuhan Patimbang Subang', slug: 'mockup-pelabuhan-patimbang-subang', imgSrc: 'https://i.ibb.co/BKdXpB3b/Patimban-Subang.jpg', hint: 'seaport', description: 'Uji coba aplikasi produk heavy-duty kami di area Pelabuhan Patimban, Subang, yang memiliki lalu lintas kendaraan berat, untuk membuktikan ketahanan produk dalam kondisi ekstrem.' },
    { title: 'Audiensi di Dinas PUPR Kota Sawahlunto', slug: 'audiensi-dinas-pupr-sawahlunto', imgSrc: 'https://i.ibb.co/nMLq9NQ1/Sawahlunto.jpg', hint: 'official discussion', description: 'Melakukan presentasi dan diskusi dengan Dinas PUPR Kota Sawahlunto, Sumatera Barat, untuk memperkenalkan produk-produk unggulan Cemerlang Group dan menjajaki penerapan di proyek-proyek daerah.' },
];

const getActivityBySlug = (slug: string): Activity | undefined => {
  return activitiesData.find(a => a.slug === slug);
}

export default function ActivityDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [activity, setActivity] = useState<Activity | null>(null);
  
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  useEffect(() => {
    if (slug) {
      const foundActivity = getActivityBySlug(slug);
      setActivity(foundActivity || null);
    }
  }, [slug]);

  if (!activity) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <p>Kegiatan tidak ditemukan.</p>
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
            Kembali ke Kegiatan
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
