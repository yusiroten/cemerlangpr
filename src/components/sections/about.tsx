<<<<<<< HEAD
'use client';
import Image from 'next/image';
import { useLanguage } from '@/lib/translations';

export default function AboutSection() {
  const { t } = useLanguage();
=======
import Image from 'next/image';

export default function AboutSection() {
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
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
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('tentangKamiTitle')}</h2>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc1')}
            </p>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc2')}
            </p>
            <p className="text-muted-foreground text-justify">
              {t('tentangKamiDesc3')}
=======
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Tentang Kami</h2>
            <p className="text-muted-foreground text-justify">
              Cemerlang Group adalah perusahaan terdepan yang berdedikasi pada keunggulan dan inovasi. Sejak didirikan, kami telah membangun reputasi yang kokoh dalam memberikan solusi berkualitas tinggi di berbagai sektor.
            </p>
            <p className="text-muted-foreground text-justify">
              Visi kami adalah menjadi mitra terpercaya dalam pembangunan masa depan yang berkelanjutan. Dengan tim ahli yang berpengalaman, kami terus mendorong batas-batas kemungkinan untuk menciptakan nilai bagi klien, masyarakat, dan pemangku kepentingan kami.
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
