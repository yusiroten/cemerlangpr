'use client';
import Image from 'next/image';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/translations';

const projects = [
  { titleKey: 'project_1_title', categoryKey: 'project_1_category', imgSrc: 'https://i.ibb.co/TxskkmXB/1.png', hint: 'airport runway' },
  { titleKey: 'project_2_title', categoryKey: 'project_2_category', imgSrc: 'https://i.ibb.co/GQR6sHfx/2.png', hint: 'city road' },
  { titleKey: 'project_3_title', categoryKey: 'project_3_category', imgSrc: 'https://i.ibb.co/XxGBwwkp/3.png', hint: 'airport markings' },
  { titleKey: 'project_4_title', categoryKey: 'project_4_category', imgSrc: 'https://i.ibb.co/YF2q4xBd/4.png', hint: 'stadium complex' },
  { titleKey: 'project_5_title', categoryKey: 'project_5_category', imgSrc: 'https://i.ibb.co/yFbTHhPr/5.png', hint: 'toll road' },
  { titleKey: 'project_6_title', categoryKey: 'project_6_category', imgSrc: 'https://i.ibb.co/LzpxSDp8/6.png', hint: 'presidential palace' },
  { titleKey: 'project_7_title', categoryKey: 'project_7_category', imgSrc: 'https://i.ibb.co/TMLSQrk7/7.png', hint: 'race track' },
  { titleKey: 'project_8_title', categoryKey: 'project_8_category', imgSrc: 'https://i.ibb.co/27GWBmfb/8.png', hint: 'road barrier' },
  { titleKey: 'project_9_title', categoryKey: 'project_9_category', imgSrc: 'https://i.ibb.co/KcLqPg5f/9.png', hint: 'courthouse' },
  { titleKey: 'project_10_title', categoryKey: 'project_10_category', imgSrc: 'https://i.ibb.co/d4B1bBLg/10.png', hint: 'elevated highway' },
  { titleKey: 'project_11_title', categoryKey: 'project_11_category', imgSrc: 'https://i.ibb.co/rfKwz7pB/11.png', hint: 'military airbase' },
  { titleKey: 'project_12_title', categoryKey: 'project_12_category', imgSrc: 'https://i.ibb.co/vCrRbjhQ/12.png', hint: 'church building' },
];

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="proyek" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('proyekTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t('proyekSubtitle')}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.titleKey} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row bg-card">
              <div className="relative w-full md:w-1/3 h-60 md:h-auto min-h-[200px]">
                <Image src={project.imgSrc} alt={t(project.titleKey as any)} fill className="object-cover" data-ai-hint={project.hint} />
              </div>
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-2 bg-primary/20 text-primary">{t(project.categoryKey as any)}</Badge>
                <CardTitle className="text-xl mb-2 text-primary">{t(project.titleKey as any)}</CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
