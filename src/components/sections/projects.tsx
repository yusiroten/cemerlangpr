import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  { title: 'Cemerlang Tower Jakarta', category: 'Gedung Tinggi', imgSrc: 'https://placehold.co/600x400.png', hint: 'skyscraper city' },
  { title: 'Jalan Tol Trans-Java', category: 'Infrastruktur', imgSrc: 'https://placehold.co/600x400.png', hint: 'highway bridge' },
  { title: 'Pembangkit Listrik Tenaga Surya Bali', category: 'Energi', imgSrc: 'https://placehold.co/600x400.png', hint: 'solar panels' },
  { title: 'Kawasan Residensial Cemerlang City', category: 'Properti', imgSrc: 'https://placehold.co/600x400.png', hint: 'modern housing' },
];

export default function ProjectsSection() {
  return (
    <section id="proyek" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Proyek Unggulan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Portofolio proyek yang menunjukkan komitmen kami pada kualitas dan keunggulan.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row bg-card">
              <div className="relative w-full md:w-1/3 h-60 md:h-auto min-h-[200px]">
                <Image src={project.imgSrc} alt={project.title} fill className="object-cover" data-ai-hint={project.hint} />
              </div>
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-2 bg-primary/20 text-primary">{project.category}</Badge>
                <CardTitle className="text-2xl mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription>Proyek ini merupakan bukti nyata dari dedikasi kami untuk memberikan hasil terbaik dengan teknologi mutakhir dan manajemen proyek yang efisien.</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
