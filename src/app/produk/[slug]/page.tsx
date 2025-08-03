'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, Product } from '@/lib/product-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct || null);
    }
  }, [slug]);

  if (!product) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <p>Produk tidak ditemukan.</p>
            </main>
            <Footer />
        </div>
    );
  }

  // A simple type guard for our product titles
  function isReactElement(value: any): value is React.ReactElement {
    return value && typeof value === 'object' && 'props' in value;
  }
  
  const productTitle = isReactElement(product.title) ? `Image for product` : product.title;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="outline" onClick={() => router.back()} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Produk
          </Button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.imgSrc}
                alt={productTitle}
                fill
                className="object-cover"
                data-ai-hint={product.hint}
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline">{product.title}</h1>
              <p className="text-muted-foreground text-justify text-lg">
                {product.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
