import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-headline animate-fade-in-down" style={{animationDelay: '0.2s'}}>
          Solusi Terdepan untuk Infrastruktur Jalan
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Menyediakan material berkualitas tinggi mulai dari microsurfacing, coldmix, hingga marka jalan untuk konektivitas yang andal dan tahan lama.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#produk">Lihat Produk Kami</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
