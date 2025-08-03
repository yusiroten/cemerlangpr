'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { productCategories, allProducts } from '@/lib/product-data';

// A simple type guard for our product titles
function isReactElement(value: any): value is React.ReactElement {
    return value && typeof value === 'object' && 'props' in value;
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('Semua');

  const productsToShow = activeTab === 'Semua' ? allProducts : productCategories[activeTab as keyof typeof productCategories] || [];

  return (
    <section id="produk" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Produk &amp; Layanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.</p>
        </div>

        <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="Semua">Semua</TabsTrigger>
            {Object.keys(productCategories).map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {productsToShow.map((product, index) => (
                <Card key={isReactElement(product.title) ? `product-${index}` : product.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48">
                      <Image src={product.imgSrc} alt={isReactElement(product.title) ? `Image for product ${index}` : product.title as string} fill className="object-cover" data-ai-hint={product.hint} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl mb-2 text-primary">{product.title}</CardTitle>
                    <CardDescription className="text-justify">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href={`/produk/${product.slug}`}>
                        Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
