import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  { title: 'Tren Konstruksi Berkelanjutan 2024', date: '15 Juli 2024', imgSrc: 'https://placehold.co/600x400.png', hint: 'green building' },
  { title: 'Dampak Teknologi AI pada Manajemen Proyek', date: '10 Juli 2024', imgSrc: 'https://placehold.co/600x400.png', hint: 'AI technology' },
  { title: 'Investasi Properti: Prospek di Era Digital', date: '5 Juli 2024', imgSrc: 'https://placehold.co/600x400.png', hint: 'digital investment' },
];

export default function ArticlesSection() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Blog &amp; Wawasan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Tetap terinformasi dengan berita dan analisis industri terbaru dari para ahli kami.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                    <Image src={article.imgSrc} alt={article.title} fill className="object-cover" data-ai-hint={article.hint}/>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                <CardTitle className="text-xl mb-2 text-primary hover:text-accent transition-colors"><Link href="#">{article.title}</Link></CardTitle>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#">
                    Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
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
