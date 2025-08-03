import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Share2, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.8-1.59-1.84-2.44-4.38-2.3-6.91.15-2.5 1.51-4.72 3.55-6.21 2.04-1.49 4.67-2.14 7.21-1.84.06.58.11 1.16.18 1.73.01.07.01.14.02.21.08-1.02.1-2.06.01-3.08-.02-.27-.04-.54-.05-.81-.02-.2-.04-.4-.05-.6-.11-1.32-.44-2.63-1.15-3.81-.7-.94-1.6-1.74-2.6-2.32-.2-.12-.4-.23-.6-.33-.2-.11-.4-.21-.6-.31C12.72.32 12.62.17 12.525.02z" />
    </svg>
);

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 md:py-24 relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-secondary-foreground">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Siap Membangun Bersama Kami?</h2>
                    <p className="mt-4 text-lg text-secondary-foreground/80">
                        Hubungi kami hari ini untuk mendiskusikan proyek Anda berikutnya. Tim kami siap membantu mewujudkan visi Anda menjadi kenyataan.
                    </p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                            <span>PLAZA MEBEL #31-35 Jl. RS Fatmawati Kav 5, Cipete Utara, Kebayoran Baru, RT.1/RW.2, Gandaria Selatan, RT.1/RW.2, Gandaria Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12420 - Indonesia</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                            <span>(021) 38805294</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                            <span>info@cemerlang.pro</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Card className="w-full max-w-md p-8 shadow-2xl">
                        <CardContent className="flex flex-col items-center text-center p-0">
                            <div className="p-4 bg-primary/20 rounded-full mb-4">
                                <Share2 className="w-12 h-12 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Terhubung dengan Kami</h3>
                            <p className="text-muted-foreground mb-6">Ikuti kami di media sosial untuk mendapatkan pembaruan terbaru.</p>
                            <div className="flex justify-center gap-4">
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="Facebook">
                                        <Facebook className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="Instagram">
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="YouTube">
                                        <Youtube className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="TikTok">
                                        <TikTokIcon className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="LinkedIn">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}
