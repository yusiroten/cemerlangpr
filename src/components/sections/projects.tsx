import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  { title: 'Pekerjaan Lapisan Microsurfacing & Cat Marka di Bandara Rampi', category: 'Bandara', imgSrc: 'https://i.ibb.co/TxskkmXB/1.png', hint: 'airport runway' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Balapan & Tugu Malang', category: 'Infrastruktur', imgSrc: 'https://i.ibb.co/GQR6sHfx/2.png', hint: 'city road' },
  { title: 'Pekerjaan Pengecatan Marka di Bandara Soekarno-Hatta Ultima 3', category: 'Bandara', imgSrc: 'https://i.ibb.co/XxGBwwkp/3.png', hint: 'airport markings' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Area Stadion Gelora Bung Karno Jakarta', category: 'Fasilitas Olahraga', imgSrc: 'https://i.ibb.co/YF2q4xBd/4.png', hint: 'stadium complex' },
  { title: 'Pekerjaan Lapisan Microsurfacing Tol Road Bali', category: 'Jalan Tol', imgSrc: 'https://i.ibb.co/yFbTHhPr/5.png', hint: 'toll road' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Istana Kepresidenan Republik Indonesia', category: 'Gedung Pemerintahan', imgSrc: 'https://i.ibb.co/LzpxSDp8/6.png', hint: 'presidential palace' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Sentul Circuit A dan B', category: 'Sirkuit Balap', imgSrc: 'https://i.ibb.co/TMLSQrk7/7.png', hint: 'race track' },
  { title: 'Pekerjaan Cat Barrier di Tol Manado Bitung', category: 'Jalan Tol', imgSrc: 'https://i.ibb.co/27GWBmfb/8.png', hint: 'road barrier' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Area Halaman Kejaksaan Tinggi Jakarta', category: 'Gedung Pemerintahan', imgSrc: 'https://i.ibb.co/KcLqPg5f/9.png', hint: 'courthouse' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Tol Becakayu Jakarta', category: 'Jalan Tol', imgSrc: 'https://i.ibb.co/d4B1bBLg/10.png', hint: 'elevated highway' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Landasan Pacu Halim Perdana Kusuma Jakarta', category: 'Bandara', imgSrc: 'https://i.ibb.co/rfKwz7pB/11.png', hint: 'military airbase' },
  { title: 'Pekerjaan Lapisan Microsurfacing di Gereja YONPOMAD Jonggol Jawa Barat', category: 'Tempat Ibadah', imgSrc: 'https://i.ibb.co/vCrRbjhQ/12.png', hint: 'church building' },
];

export default function ProjectsSection() {
  return (
    <section id="proyek" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Proyek Kami</h2>
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
                <CardTitle className="text-xl mb-2 text-primary">{project.title}</CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
