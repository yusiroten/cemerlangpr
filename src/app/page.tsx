"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getProductDetails, ProductDetails } from "@/ai/flows/product-details-flow";
import { getBlogPostContent, BlogPostContent } from "@/ai/flows/blog-post-flow";
import { Skeleton } from "@/components/ui/skeleton";

const products = {
  microsurfacing: [
    { name: "MICROSURFACING CH15", image: "https://i.ibb.co/NgN9zdWZ/Microsurfacing-CH-15.png", hint: "road construction" },
    { name: "MICROSURFACING CH17", image: "https://i.ibb.co/hxqs2Sq6/Microsurfacing-CH-17.png", hint: "asphalt layer" },
    { name: "MICROSURFACING CH19", image: "https://i.ibb.co/vxcCyRQW/Microsurfacing-CH-19.png", hint: "road pavement" },
    { name: "MICROSURFACING CH21", image: "https://i.ibb.co/5WWdp67x/Microsurfacing-CH-21.png", hint: "surface treatment" },
    { name: "MICROSURFACING CH23", image: "https://i.ibb.co/LDFkPNrT/Microsurfacing-CH-23.png", hint: "road maintenance" },
  ],
  ecobeton: [
    { name: "ECOBETON CHRONO", image: "https://i.ibb.co/DfrHjSPp/Ecobeton-Chrono-e.png", hint: "concrete treatment" },
    { name: "ECOBETON PAVESHIELD", image: "https://i.ibb.co/rfsVNwwZ/Ecobeton-Paveshield.png", hint: "pavement protection" },
    { name: "ECOBETON VETROFLUID", image: "https://i.ibb.co/yBZX1GWw/Ecobeton-vetrofluid.png", hint: "concrete sealer" },
  ],
  coldmix: [
    { name: "COLDMIX CH24", image: "https://i.ibb.co/S4mxVfrR/Coldmix-CH-24-e.png", hint: "cold asphalt" },
    { name: "COLDMIX CH28", image: "https://i.ibb.co/mLGGf3P/Coldmix-CH-28-e.png", hint: "asphalt patch" },
  ],
  specialty: [
    { name: "COATING CH34", image: "https://i.ibb.co/4wrPCgJy/Coating-CH-34.png", hint: "protective coating" },
    { name: "ATOMIZED MICROSEAL CH25", image: "https://i.ibb.co/h1Y5F3Xn/Atomized-Microseal.png", hint: "sealant spray" },
    { name: "MARKA CH-32", image: "https://i.ibb.co/4nTNJ3cN/Marka-CH-32.png", hint: "road marking" },
    { name: "GEONE", image: "https://i.ibb.co/jPHvG039/geone.png", hint: "geosynthetic material" },
    { name: "COLDPLAST CH33", image: "https://i.ibb.co/VYmPJBnN/Coldplast-CH-33.png", hint: "plastic asphalt" },
    { name: "SABDA SEAL CH27", image: "https://i.ibb.co/q3mDrt14/Sabda-Seal-CH-27.png", hint: "joint sealant" },
    { name: "SABDA SEAL CH29", image: "https://i.ibb.co/mVBFLdZq/Sabda-Seal-CH-29.png", hint: "crack sealer" },
    { name: "SABDA SEAL CH31", image: "https://i.ibb.co/Q7Z9DsGk/Sabda-Seal-CH-31.png", hint: "waterproof sealant" },
    { name: "SAMI WATERPROOFING", image: "https://i.ibb.co/jPQ465NX/S-A-M-I-Waterproofing.png", hint: "waterproofing membrane" },
  ],
};

const licenses = [
  { name: "Sertifikat Standar", image: "https://i.ibb.co/gMQQRD5Z/20.png" },
  { name: "Sertifikat Merek", image: "https://i.ibb.co/WWbjgNxk/21.png" },
  { name: "TKDN", image: "https://i.ibb.co/FQRp7MP/22.png" },
  { name: "ISO 9001:2015", image: "https://i.ibb.co/mrkZDhmC/23.png" },
  { name: "Green Label Indonesia", image: "https://i.ibb.co/N6jz4tfd/24.png" },
  { name: "Lisensi Produsen", image: "https://i.ibb.co/RpBTpHT1/25.png" },
  { name: "Sertifikat Laik Fungsi", image: "https://i.ibb.co/tFbpbqq/26.png" },
  { name: "KBLI", image: "https://i.ibb.co/cKQy8FX2/KP14.png" }
];

const clients = [
  { name: "Adhi Karya", image: "https://i.ibb.co/nq0tk9t3/adhi-karya.jpg" },
  { name: "Angkasa Pura II", image: "https://i.ibb.co/MxXHW94p/Angkasa-Pura-II.jpg" },
  { name: "Angkasa Pura", image: "https://i.ibb.co/VYR7gnzD/angkasa-pura.png" },
  { name: "Hutama Karya", image: "https://i.ibb.co/NdTyLQhN/hutama-karya.png" },
  { name: "Jasamarga Balikpapan", image: "https://i.ibb.co/WWYN8C5n/jasamarga-balikpapan.png" },
  { name: "Jasamarga Manado", image: "https://i.ibb.co/LhstD3Kz/jasamarga-manado.png" },
  { name: "Jasamarga", image: "https://i.ibb.co/Df6WLVwF/jasamarga.jpg" },
  { name: "Jasa Marga Bali", image: "https://i.ibb.co/Ld3N2wXZ/jassa-marga-bali.jpg" },
  { name: "Jaya Konstruksi", image: "https://i.ibb.co/TxF3QdgN/jaya-konstruksi.png" },
  { name: "Marga Sarana Jabar", image: "https://i.ibb.co/F4SjCXXK/marga-sarana-jabar.jpg" },
  { name: "Nindya Karya", image: "https://i.ibb.co/rWLwwhR/nindya-karya.png" },
  { name: "PP", image: "https://i.ibb.co/LDGD4HVV/PP.png" },
  { name: "Sirkuit Sentul", image: "https://i.ibb.co/0jd7pJkj/sentul-cirkuit.jpg" },
  { name: "Sentul", image: "https://i.ibb.co/XZDJVZ02/sentul.jpg" },
  { name: "STIN", image: "https://i.ibb.co/nNqb1bdJ/STIN.jpg" },
  { name: "Total Bangun Persada", image: "https://i.ibb.co/xq4SnGXY/total-bangun-persada.jpg" },
  { name: "Waskita", image: "https://i.ibb.co/qL3McJx1/waskita.png" },
];

const portfolio = [
    { image: "https://i.ibb.co/v6j2HWRt/1.png", title: "Pelapisan Aspal dan Marka di Bandara Rampi", description: "Penerapan teknologi canggih untuk konstruksi jalan." },
    { image: "https://i.ibb.co/wrQ2LHtC/2.png", title: "Pelapisan Aspal di Simpang Balapan dan Tugu Malang", description: "Solusi durabilitas tinggi untuk jalan tol utama." },
    { image: "https://i.ibb.co/qMFVBWtc/3.png", title: "Pekerjaan Sealant di Bandara Internasional Soekarno-Hatta - Ultimate 3", description: "Infrastruktur pendukung konektivitas udara." },
    { image: "https://i.ibb.co/JwS31d7Q/4.png", title: "Pelapisan Aspal di Stadion Gelora Bung Karno, Jakarta", description: "Pelapisan aspal berkualitas untuk area komersial." },
    { image: "https://i.ibb.co/SD5G5dKk/5.png", title: "Pekerjaan Sealant dan Sealcoat di Jalan Tol Bali", description: "Konstruksi jalan lingkungan yang nyaman dan aman." },
    { image: "https://i.ibb.co/nNx4kZrR/6.png", title: "Pelapisan Aspal di Istana Kepresidenan Republik Indonesia", description: "Program pemeliharaan rutin jalan arteri." },
    { image: "https://i.ibb.co/1txmS3H9/7.png", title: "Pemeliharaan Sirkuit Sentul A dan B", description: "Konstruksi jalan layang untuk mengatasi kemacetan." },
    { image: "https://i.ibb.co/XZMZPW2m/8.png", title: "Pengecatan Barrier di Jalan Tol Manado-Bitung", description: "Pembangunan jalan di kawasan industri terpadu." },
    { image: "https://i.ibb.co/SzBhzCr/9.png", title: "Renovasi Halaman di Mahkamah Agung Jakarta", description: "Aspal khusus untuk sirkuit balap berstandar tinggi." },
    { image: "https://i.ibb.co/1f4jxcCY/10.png", title: "Pekerjaan Pelapisan Aspal di Jalan Tol Becakayu", description: "Meningkatkan aksesibilitas di wilayah pedesaan." },
    { image: "https://i.ibb.co/CZhtQHj/12.png", title: "Renovasi Gereja POUK Immanuel, Yonpomad, Jonggol, Jawa Barat", description: "Pembangunan jalan di lingkungan pendidikan." },
    { image: "https://i.ibb.co/CK6F8PHZ/11.png", title: "Pekerjaan Pelapisan Landasan Pacu di Bandara Halim", description: "Permukaan jalan yang kuat untuk lalu lintas berat." }
];

const blogPosts = [
  {
    title: "Kunjungan Audiensi ke Dinas PUPR Kota Bogor",
    image: "https://i.ibb.co/1Jd15wh4/IMG-1125.jpg",
    hint: "official meeting",
    date: "15 Agu 2024"
  },
  {
    title: "Kunjungan Audiensi ke Dinas PUPR Kota Tangerang",
    image: "https://i.ibb.co/GQ784K0k/IMG-1132.jpg",
    hint: "government building",
    date: "12 Agu 2024"
  },
  {
    title: "Kunjungan Audiensi ke PUPR Kabupaten Bekasi",
    image: "https://i.ibb.co/1xy6KfL/IMG-1136.jpg",
    hint: "official handshake",
    date: "10 Agu 2024"
  },
  {
    title: "Kunjungan dan Mockup Produk Microsurfacing ke Pelabuhan Patimban Subang",
    image: "https://i.ibb.co/RG94rysv/313d5026-6c23-4040-b301-bdd04944237a.jpg",
    hint: "port construction",
    date: "08 Agu 2024"
  },
  {
    title: "Kunjungan Audiensi ke Kantor Kementrian PUPR Jakarta",
    image: "https://i.ibb.co/wZYBcXjX/PUPR-PUSAT-ZOOM-AUDENSI-230625-1.jpg",
    hint: "road technology",
    date: "05 Agu 2024"
  },
  {
    title: "Kunjungan Audiensi dengan PEMDA Dinas PUPR Jakarta",
    image: "https://i.ibb.co/XfSzcZ6q/MEETING-DKI-21-04-25-3.jpg",
    hint: "concrete technology",
    date: "02 Agu 2024"
  },
  {
    title: "Proyek Revo Mall Bekasi",
    image: "https://i.ibb.co/VWWSVcv4/REVO-MALL-BEKASI-SURVEY-28-05-25-7.jpg",
    hint: "sealant application",
    date: "28 Jul 2024"
  },
  {
    title: "Kunjungan & Mockup ke Dinas PUPR Kota Sawahlunto Sumatera Barat",
    image: "https://i.ibb.co/ks2ZS5M3/baad090f-c599-47f6-b831-4c4aca7dafa2.jpg",
    hint: "asphalt application",
    date: "25 Jul 2024"
  },
];

const CemerlangLogo = () => (
  <Image src="https://i.ibb.co/239J7jyC/Logo-cemerlang-Ok-removebg-preview.png" alt="Cemerlang Group Logo" width={180} height={40} priority />
);

const ProductDetailDialog = ({ open, onOpenChange, product, details, isLoading }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[525px]">
      <DialogHeader>
        <DialogTitle>{product?.name}</DialogTitle>
        <DialogDescription>Detail informasi untuk produk {product?.name}.</DialogDescription>
      </DialogHeader>
      {isLoading ? (
        <div className="space-y-4 py-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ) : (
        details && (
          <div className="grid gap-4 py-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Kandungan Bahan</h3>
              <p className="text-muted-foreground">{details.ingredients}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cara Pemakaian</h3>
              <p className="text-muted-foreground">{details.usage}</p>
            </div>
          </div>
        )
      )}
    </DialogContent>
  </Dialog>
);

const BlogDetailDialog = ({ open, onOpenChange, post, content, isLoading }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{post?.title}</DialogTitle>
        <DialogDescription>
            <span className="text-sm text-muted-foreground">{post?.date}</span>
        </DialogDescription>
      </DialogHeader>
      {isLoading ? (
        <div className="space-y-4 py-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <div className="pt-4"/>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      ) : (
        content && (
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
            {content.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )
      )}
    </DialogContent>
  </Dialog>
);

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isProductLoading, setIsProductLoading] = useState(false);

  const [selectedPost, setSelectedPost] = useState(null);
  const [blogContent, setBlogContent] = useState<BlogPostContent | null>(null);
  const [isBlogDialogOpen, setIsBlogDialogOpen] = useState(false);
  const [isBlogLoading, setIsBlogLoading] = useState(false);

  const handleProductClick = async (product) => {
    setSelectedProduct(product);
    setIsProductDialogOpen(true);
    setIsProductLoading(true);
    setProductDetails(null);
    try {
      const details = await getProductDetails(product.name);
      setProductDetails(details);
    } catch (error) {
      console.error("Failed to get product details:", error);
    } finally {
      setIsProductLoading(false);
    }
  };
  
  const handleBlogPostClick = async (post) => {
    setSelectedPost(post);
    setIsBlogDialogOpen(true);
    setIsBlogLoading(true);
    setBlogContent(null);
    try {
      const content = await getBlogPostContent(post.title);
      setBlogContent(content);
    } catch (error) {
      console.error("Failed to get blog post content:", error);
    } finally {
      setIsBlogLoading(false);
    }
  };

  const renderProductCard = (product) => (
    <Card key={product.name} className="flex flex-col">
      <CardContent className="p-0">
        <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint={product.hint} />
      </CardContent>
      <CardHeader className="flex-grow">
        <CardTitle className="font-headline text-lg uppercase">{product.name}</CardTitle>
      </CardHeader>
      <div className="p-6 pt-0">
         <Button variant="outline" className="w-full" onClick={() => handleProductClick(product)}>
           Selengkapnya
         </Button>
      </div>
    </Card>
  );

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <ProductDetailDialog 
        open={isProductDialogOpen}
        onOpenChange={setIsProductDialogOpen}
        product={selectedProduct}
        details={productDetails}
        isLoading={isProductLoading}
      />
      <BlogDetailDialog
        open={isBlogDialogOpen}
        onOpenChange={setIsBlogDialogOpen}
        post={selectedPost}
        content={blogContent}
        isLoading={isBlogLoading}
      />
      <header className="fixed top-0 z-50 w-full transition-colors duration-300 bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" aria-label="Home">
            <CemerlangLogo />
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors uppercase">TENTANG KAMI</Link>
            <Link href="#products" className="text-sm font-medium text-white hover:text-primary transition-colors uppercase">PRODUK</Link>
            <Link href="#portfolio" className="text-sm font-medium text-white hover:text-primary transition-colors uppercase">PORTOFOLIO</Link>
            <Link href="#clients" className="text-sm font-medium text-white hover:text-primary transition-colors uppercase">KLIEN</Link>
            <Link href="#blog" className="text-sm font-medium text-white hover:text-primary transition-colors uppercase">BLOG</Link>
          </nav>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary uppercase">
            <Link href="#contact-us">HUBUNGI KAMI</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://i.ibb.co/1fLgDsLJ/hero-section-beranda.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="road construction background"
          />
          <div className="container px-4 md:px-6 z-20 relative">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-shadow-lg">
              Inovasi Konstruksi, Kualitas Teruji
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
              Cemerlang Group menyediakan solusi material konstruksi jalan terdepan untuk membangun masa depan infrastruktur Indonesia.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="#products">
                Lihat Produk Kami
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h2>
                <p className="text-muted-foreground mb-4">
                  Kami memulai perjalanan dengan keyakinan bahwa infrastruktur yang kokoh adalah fondasi bagi kemajuan bangsa. Dengan dedikasi pada inovasi, kami secara konsisten mengembangkan dan menyediakan material konstruksi jalan berkualitas premium yang telah teruji di berbagai proyek vital skala nasional.
                </p>
                <p className="text-muted-foreground mb-6">
                  Keunggulan kami tidak hanya terletak pada produk, tetapi juga pada tim ahli yang solid dan dukungan teknis yang komprehensif. Kami berkomitmen untuk menjadi mitra terpercaya bagi setiap proyek, memastikan kesuksesan dari perencanaan hingga implementasi.
                </p>
              </div>
              <div className="w-full h-full">
                <Image src="https://i.ibb.co/jvbYHZsY/ilustrasi-pabrik.png" alt="Company overview" width={600} height={400} className="rounded-lg shadow-lg object-cover w-full h-full" data-ai-hint="factory illustration" />
              </div>
            </div>
            <div className="mt-16 md:mt-24">
              <h3 className="font-headline text-3xl font-bold text-center mb-12">Dipimpin oleh Visi, Digerakkan oleh Pengalaman</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Image src="https://i.ibb.co/0yLHvKX0/Screenshot-2025-05-22-123913.png" alt="Lois Josca Danoes" width={150} height={150} className="rounded-full mx-auto mb-4 object-cover" data-ai-hint="female portrait" />
                    <CardTitle className="font-headline text-xl">Lois Josca Danoes</CardTitle>
                    <CardDescription>Chief Executive Officer</CardDescription>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Image src="https://i.ibb.co/d4SHnsrB/Screenshot-2025-07-25-105823.png" alt="Kasih M.M. Danoes" width={150} height={150} className="rounded-full mx-auto mb-4 object-cover" data-ai-hint="female portrait" />
                    <CardTitle className="font-headline text-xl">Kasih M.M. Danoes</CardTitle>
                    <CardDescription>Chief Operating Officer</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Katalog Produk Kami</h2>
              <p className="text-muted-foreground mb-12">
                Temukan solusi yang tepat untuk setiap kebutuhan proyek konstruksi Anda dari beragam produk berkualitas kami.
              </p>
            </div>
            <Tabs defaultValue="microsurfacing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="microsurfacing">MICROSURFACING</TabsTrigger>
                <TabsTrigger value="ecobeton">ECOBETON</TabsTrigger>
                <TabsTrigger value="coldmix">COLDMIX</TabsTrigger>
                <TabsTrigger value="specialty">SPESIALIS</TabsTrigger>
              </TabsList>
              <TabsContent value="microsurfacing" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.microsurfacing.map(renderProductCard)}
                </div>
              </TabsContent>
              <TabsContent value="ecobeton" className="mt-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.ecobeton.map(renderProductCard)}
                </div>
              </TabsContent>
              <TabsContent value="coldmix" className="mt-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.coldmix.map(renderProductCard)}
                </div>
              </TabsContent>
              <TabsContent value="specialty" className="mt-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.specialty.map(renderProductCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="licenses" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Lisensi & Sertifikasi</h2>
              <p className="text-muted-foreground mb-12">
                Kami bangga memiliki lisensi dan sertifikasi yang menunjukkan komitmen kami terhadap standar kualitas dan keamanan tertinggi.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {licenses.map((license) => (
                <div key={license.name} className="flex flex-col items-center text-center">
                  <div className="flex justify-center items-center h-24 bg-white rounded-lg p-2 shadow-sm">
                    <Image src={license.image} alt={license.name} width={150} height={80} className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Proyek Kami</h2>
              <p className="text-muted-foreground mb-12">
                Beberapa proyek sukses yang menggunakan produk dari Cemerlang Group.
              </p>
            </div>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {portfolio.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardContent className="p-0">
                        <Image src={item.image} alt={item.title} width={600} height={400} className="rounded-lg object-cover" data-ai-hint="road project" />
                      </CardContent>
                       <CardHeader>
                        <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </section>

        <section id="clients" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Klien Kami</h2>
              <p className="text-muted-foreground mb-12">
                Kami telah bekerjasama dengan berbagai perusahaan dan institusi terkemuka di Indonesia.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div key={client.name} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm h-24 w-full">
                  <Image 
                    src={client.image} 
                    alt={client.name} 
                    width={150} 
                    height={60} 
                    className="object-contain max-h-full"
                    data-ai-hint="company logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="blog" className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Blog &amp; Kegiatan</h2>
              <p className="text-muted-foreground mb-12">
                Ikuti berita terbaru, inovasi produk, dan kegiatan kami.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {blogPosts.map((post, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="p-0">
                    <Image src={post.image} alt={post.title} width={400} height={300} className="rounded-t-lg object-cover w-full aspect-[4/3]" data-ai-hint={post.hint} />
                  </CardContent>
                  <CardHeader>
                    <CardDescription>{post.date}</CardDescription>
                    <CardTitle className="font-headline text-lg h-12 mb-2">{post.title}</CardTitle>
                  </CardHeader>
                  <div className="p-6 pt-0">
                    <Button variant="link" className="p-0" onClick={() => handleBlogPostClick(post)}>
                      Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="relative py-16 md:py-24 text-white text-center">
          <div className="absolute inset-0 bg-black/60 z-10" />
           <Image
            src="https://i.ibb.co/1fLgDsLJ/hero-section-beranda.png"
            alt="CTA background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="road construction background"
          />
          <div className="container px-4 md:px-6 z-20 relative">
             <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Siap Membangun Masa Depan?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan temukan bagaimana produk kami dapat menjadi solusi untuk proyek infrastruktur Anda.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="#contact-us">
                Hubungi Kami
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section id="contact-us" className="py-16 md:py-24 bg-accent text-accent-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="opacity-90 mb-12">
                Hubungi kami melalui WhatsApp atau kunjungi kantor kami langsung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col items-center text-center">
                <h3 className="font-headline text-2xl font-bold mb-4">Scan QR Code WhatsApp</h3>
                <div className="bg-white p-4 rounded-lg">
                  <Image 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/087880571288"
                    alt="WhatsApp QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    data-ai-hint="qr code"
                  />
                </div>
                 <Button asChild className="mt-6" variant="secondary">
                  <Link href="https://wa.me/087880571288" target="_blank">
                    Chat di WhatsApp
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-center md:text-left">Informasi Kontak</h3>
                <Card className="bg-background/80 text-foreground">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Alamat Kantor</h4>
                        <p className="text-muted-foreground">PLAZA MEBEL #31-35<br/>Jl. RS Fatmawati KAV 5 Cipete<br/>Kebayoran Baru, Jakarta Selatan 10420<br/>Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">No. Telp</h4>
                        <p className="text-muted-foreground">021-38805294</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">E-Mail</h4>
                        <p className="text-muted-foreground">info@cemerlang.pro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
