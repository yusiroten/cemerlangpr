'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import { productCategories, allProducts, Product } from '@/lib/product-data';
import { useLanguage } from '@/lib/translations';
=======
import { productCategories, allProducts } from '@/lib/product-data';
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38

// A simple type guard for our product titles
function isReactElement(value: any): value is React.ReactElement {
    return value && typeof value === 'object' && 'props' in value;
}

export default function ProductsSection() {
<<<<<<< HEAD
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('Semua');

  const getTranslatedProduct = (product: Product) => {
    return {
      ...product,
      title: t(product.titleKey),
      description: t(product.descriptionKey),
    };
  };

  const productsToShow = (activeTab === 'Semua' ? allProducts : productCategories[activeTab as keyof typeof productCategories] || []).map(getTranslatedProduct);
=======
  const [activeTab, setActiveTab] = useState('Semua');

  const productsToShow = activeTab === 'Semua' ? allProducts : productCategories[activeTab as keyof typeof productCategories] || [];
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38

  return (
    <section id="produk" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('produkTitle')}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t('produkSubtitle')}</p>
=======
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Produk &amp; Layanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.</p>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
        </div>

        <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
<<<<<<< HEAD
            <TabsTrigger value="Semua">{t('semua')}</TabsTrigger>
=======
            <TabsTrigger value="Semua">Semua</TabsTrigger>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
            {Object.keys(productCategories).map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
<<<<<<< HEAD
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {productsToShow.map((product, index) => (
                <Card key={product.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <CardHeader className="p-4">
                    <div className="relative w-full aspect-square rounded-md overflow-hidden border border-white">
                      <Image 
                        src={product.imgSrc} 
                        alt={isReactElement(product.title) ? `Image for product ${index}` : product.title as string}
                        fill 
                        className="object-cover rounded-md"
                        data-ai-hint={product.hint} 
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-grow flex flex-col">
                    <CardTitle className="text-lg mb-2 text-primary h-12 flex items-center justify-center text-center" dangerouslySetInnerHTML={{ __html: product.title as string}}></CardTitle>
                    <CardDescription className="text-justify text-sm h-24 overflow-hidden">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-primary mx-auto">
                      <Link href={`/produk/${product.slug}`}>
                        {t('selengkapnya')} <ArrowRight className="ml-2 h-4 w-4" />
=======
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
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
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
