import React from 'react';

export interface Product {
  slug: string;
  title: React.ReactNode;
  description: string;
  detailedDescription: string;
  imgSrc: string;
  hint: string;
}

export const productCategories: { [key: string]: Product[] } = {
  'Microsurfacing': [
    { 
      slug: 'microsurfacing-ch-15',
      title: <>Microsurfacing CH-15&trade;</>, 
      description: 'Lapisan tipis untuk preservasi jalan dengan lalu lintas rendah, menjaga keawetan permukaan jalan.', 
      detailedDescription: 'Microsurfacing CH-15™ adalah campuran aspal emulsi polimer yang dirancang khusus untuk jalan dengan volume lalu lintas ringan hingga sedang. Produk ini efektif untuk mengisi retak-retak kecil, memperbaiki kerusakan permukaan, dan memberikan lapisan aus baru yang tahan lama, sehingga memperpanjang umur jalan dan meningkatkan keselamatan.',
      imgSrc: 'https://i.ibb.co/tPw1vW2Q/Microsurfacing-CH-15.png', 
      hint: 'road paving' 
    },
    { 
      slug: 'microsurfacing-ch-17',
      title: <>Microsurfacing CH-17&trade;</>, 
      description: 'Solusi ideal untuk jalan dengan volume lalu lintas sedang, meningkatkan daya tahan dan kenyamanan berkendara.',
      detailedDescription: 'Microsurfacing CH-17™ menawarkan keseimbangan sempurna antara biaya dan kinerja untuk jalan-jalan kolektor dan arteri sekunder. Dengan agregat yang sedikit lebih besar dari CH-15, produk ini memberikan tekstur permukaan yang lebih baik, meningkatkan ketahanan slip, dan secara signifikan meningkatkan daya tahan terhadap deformasi akibat lalu lintas sedang.',
      imgSrc: 'https://i.ibb.co/6JBSzqKn/Microsurfacing-CH-17.png', 
      hint: 'road construction' 
    },
    { 
      slug: 'microsurfacing-ch-19',
      title: <>Microsurfacing CH-19&trade;</>, 
      description: 'Memberikan perlindungan maksimal untuk jalan raya dan arteri utama dengan lalu lintas padat.',
      detailedDescription: 'Dirancang untuk jalan raya, jalan tol, dan arteri utama dengan volume lalu lintas tinggi, Microsurfacing CH-19™ menggunakan agregat berkualitas tinggi dan emulsi polimer yang dimodifikasi secara khusus. Hasilnya adalah lapisan permukaan yang sangat kuat, tahan terhadap alur (rutting), dan mampu menahan beban berat, memastikan kinerja jangka panjang di bawah kondisi paling berat sekalipun.',
      imgSrc: 'https://i.ibb.co/sJwDTtDt/Microsurfacing-CH-19.png', 
      hint: 'highway maintenance' 
    },
    { 
      slug: 'microsurfacing-ch-21',
      title: <>Microsurfacing CH-21&trade;</>, 
      description: 'Diformulasikan khusus untuk kondisi cuaca ekstrem dan beban berat, seperti pada area industri.',
      detailedDescription: 'Microsurfacing CH-21™ adalah solusi heavy-duty yang diformulasikan untuk area dengan beban sangat berat dan kondisi ekstrem, seperti kawasan industri, pelabuhan, dan area pergudangan. Campuran ini memiliki ketahanan superior terhadap tumpahan bahan kimia, beban statis yang berat, dan lalu lintas kendaraan lambat yang berbelok tajam.',
      imgSrc: 'https://i.ibb.co/rGcJ9XvP/Microsurfacing-CH-21.png', 
      hint: 'heavy duty road' 
    },
    { 
      slug: 'microsurfacing-ch-23',
      title: <>Microsurfacing CH-23&trade;</>, 
      description: 'Pilihan premium untuk proyek yang membutuhkan presisi tinggi seperti landasan pacu bandara dan sirkuit balap.',
      detailedDescription: 'Untuk aplikasi yang menuntut presisi dan kinerja tertinggi, Microsurfacing CH-23™ adalah jawabannya. Produk ini digunakan pada landasan pacu bandara, taxiway, dan sirkuit balap, di mana permukaan yang sangat rata, daya cengkeram tinggi, dan ketahanan terhadap gaya geser ekstrem sangat penting. Formulanya memastikan pengeringan cepat untuk meminimalkan waktu penutupan.',
      imgSrc: 'https://i.ibb.co/3mbNxhrq/Microsurfacing-CH-23.png', 
      hint: 'airport runway' 
    },
  ],
  'Coldmix': [
    { 
      slug: 'coldmix-ch-24',
      title: <>Coldmix CH-24&trade;</>, 
      description: 'Campuran aspal dingin premium untuk perbaikan cepat pada jalan dengan lalu lintas sedang.',
      detailedDescription: 'Coldmix CH-24™ adalah solusi perbaikan jalan yang efisien untuk area dengan lalu lintas sedang. Diformulasikan untuk kekuatan dan daya tahan yang lebih baik, produk ini memungkinkan perbaikan lubang dan retakan yang cepat dan tahan lama, bahkan dalam kondisi cuaca yang kurang ideal.',
      imgSrc: 'https://i.ibb.co/36xmmf9/Coldmix-CH-24-e.png', 
      hint: 'asphalt patch' 
    },
    { 
      slug: 'coldmix-ch-28',
      title: <>Coldmix CH-28&trade;</>, 
      description: 'Solusi aspal dingin heavy-duty untuk perbaikan area industri dan jalan dengan lalu lintas berat.',
      detailedDescription: 'Coldmix CH-28™ dirancang khusus untuk menangani beban berat dan lalu lintas padat. Sebagai solusi perbaikan yang sangat kuat, produk ini ideal untuk jalan raya, kawasan industri, dan area lain yang membutuhkan daya tahan ekstra tanpa proses pemanasan.',
      imgSrc: 'https://i.ibb.co/93ZZhzVw/Coldmix-CH-28-e.png', 
      hint: 'industrial asphalt' 
    },
  ],
  'Ecobeton': [
    { 
      slug: 'ecobeton-chrono',
      title: <>Ecobeton Chrono&trade;</>, 
      description: 'Beton cepat kering untuk perbaikan yang efisien dan proyek dengan jadwal ketat.',
      detailedDescription: 'Ecobeton Chrono™ adalah solusi beton inovatif yang dirancang untuk pengeringan super cepat, memungkinkan area yang diperbaiki dapat digunakan kembali dalam hitungan jam. Ideal untuk perbaikan jalan, lantai industri, dan proyek yang memerlukan waktu pengerjaan minimal.',
      imgSrc: 'https://i.ibb.co/xKj96XXZ/Ecobeton-Chrono-e.png', 
      hint: 'fast setting concrete' 
    },
    { 
      slug: 'ecobeton-paveshield-chrono',
      title: <>Ecobeton Paveshield Chrono&trade;</>, 
      description: 'Pelindung permukaan perkerasan yang cepat kering dan tahan lama.',
      detailedDescription: 'Ecobeton Paveshield Chrono™ adalah pelapis pelindung transparan yang cepat kering untuk perkerasan beton. Produk ini meningkatkan ketahanan terhadap abrasi, noda, dan cuaca, sekaligus mempertahankan tampilan alami beton. Cocok untuk trotoar, area parkir, dan plaza.',
      imgSrc: 'https://i.ibb.co/qLbfb8sM/Ecobeton-Paveshield.png', 
      hint: 'pavement shield' 
    },
    { 
      slug: 'ecobeton-vetrofluid',
      title: <>Ecobeton Vetrofluid&trade;</>, 
      description: 'Pelapis multifungsi untuk proteksi, pengerasan, dan waterproofing beton.',
      detailedDescription: 'Ecobeton Vetrofluid™ adalah larutan berbasis silikat yang meresap ke dalam beton, memberikan perlindungan permanen dari dalam. Produk ini mengeraskan permukaan, membuatnya kedap air, dan melindunginya dari kerusakan akibat siklus beku-cair serta bahan kimia. Solusi lengkap untuk durabilitas beton jangka panjang.',
      imgSrc: 'https://i.ibb.co/BVdRHxCf/Ecobeton-vetrofluid.png', 
      hint: 'concrete protection' 
    },
  ],
  'Sabda Seal': [
    { 
      slug: 'sabda-seal-ch-27',
      title: <>Sabda Seal CH-27&trade;</>, 
      description: 'Pelapis kedap air serbaguna untuk perlindungan menengah pada berbagai permukaan.',
      detailedDescription: 'Sabda Seal CH-27™ adalah pelapis waterproofing fleksibel yang dirancang untuk aplikasi pada atap, dinding, dan area basah dengan tingkat paparan sedang. Produk ini memberikan lapisan pelindung yang efektif terhadap rembesan air dan kelembaban, serta tahan terhadap perubahan cuaca.',
      imgSrc: 'https://i.ibb.co/RGNgLbH9/Sabda-Seal-CH-27.png', 
      hint: 'waterproofing sealant' 
    },
    { 
      slug: 'sabda-seal-ch-29',
      title: <>Sabda Seal CH-29&trade;</>, 
      description: 'Pelapis kedap air heavy-duty untuk area yang membutuhkan proteksi ekstra seperti kolam renang.',
      detailedDescription: 'Sabda Seal CH-29™ menawarkan perlindungan waterproofing superior untuk area kritis seperti kolam renang, tangki air, dan basement. Formulanya yang lebih kuat memberikan ketahanan tinggi terhadap tekanan air dan bahan kimia, memastikan perlindungan jangka panjang.',
      imgSrc: 'https://i.ibb.co/jZbJ79Lk/Sabda-Seal-CH-29.png', 
      hint: 'heavy duty waterproofing' 
    },
    { 
      slug: 'sabda-seal-ch-31',
      title: <>Sabda Seal CH-31&trade;</>, 
      description: 'Solusi premium dengan elastisitas tinggi untuk struktur yang mengalami pergerakan.',
      detailedDescription: 'Sabda Seal CH-31™ adalah produk waterproofing premium dengan elastisitas superior, ideal untuk sambungan konstruksi, atap datar yang luas, dan struktur lain yang rentan terhadap pergerakan atau getaran. Produk ini mampu menahan retak dan menjaga integritas lapisan kedap air dalam kondisi dinamis.',
      imgSrc: 'https://i.ibb.co/YBbpdZ2m/Sabda-Seal-CH-31.png', 
      hint: 'flexible waterproofing' 
    },
  ],
  'Produk Spesial': [
    { 
      slug: 'atomized-microseal',
      title: 'Atomized Microseal', 
      description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal terhadap cuaca dan abrasi.',
      detailedDescription: 'Atomized Microseal adalah pelapis pelindung ultra-tipis yang diaplikasikan dengan teknologi atomisasi. Produk ini menembus ke dalam pori-pori permukaan beton atau aspal, menciptakan penghalang yang sangat tahan terhadap air, minyak, dan abrasi. Ini secara signifikan memperpanjang umur permukaan sambil mempertahankan penampilan aslinya.',
      imgSrc: 'https://i.ibb.co/xtCFdDSf/Atomized-Microseal.png', 
      hint: 'surface protection' 
    },
    { 
      slug: 'coldplast',
      title: 'Coldplast', 
      description: 'Material perkerasan dingin termoplastik untuk marka jalan, area parkir, dan zona pejalan kaki.',
      detailedDescription: 'Coldplast adalah material marka jalan dua komponen yang diaplikasikan dingin, memberikan daya tahan dan visibilitas yang luar biasa. Tidak seperti termoplastik panas, produk ini tidak memerlukan pemanasan, sehingga lebih aman dan lebih cepat diaplikasikan. Ideal untuk zebra cross, garis berhenti, dan simbol marka jalan lainnya.',
      imgSrc: 'https://i.ibb.co/twD3rX7s/Coldplast-CH-33.png', 
      hint: 'road marking' 
    },
    { 
      slug: 'sami-waterproofing',
      title: 'SAMI Waterproofing', 
      description: 'Sistem membran interlayer penyerap stres untuk waterproofing jalan dan jembatan.',
      detailedDescription: 'SAMI (Stress Absorbing Membrane Interlayer) adalah sistem waterproofing canggih untuk perkerasan aspal, terutama pada jembatan. Ini berfungsi sebagai lapisan peredam stres dan penghalang air antara lapisan pondasi dan lapisan permukaan, mencegah retak reflektif dan kerusakan akibat penetrasi air, sehingga memperpanjang umur infrastruktur secara signifikan.',
      imgSrc: 'https://i.ibb.co/B2rzprWy/S-A-M-I-Waterproofing.png', 
      hint: 'waterproofing membrane' 
    },
    { 
      slug: 'coating',
      title: 'Coating', 
      description: 'Berbagai jenis pelapis pelindung industrial untuk daya tahan ekstra pada beton dan baja.',
      detailedDescription: 'Kami menyediakan berbagai solusi coating industrial, termasuk epoxy, polyurethane, dan polyurea, yang dirancang untuk melindungi permukaan beton dan baja dari korosi, abrasi, bahan kimia, dan benturan. Aplikasi meliputi lantai pabrik, area parkir, tangki penyimpanan, dan struktur baja, memberikan hasil akhir yang tahan lama dan estetis.',
      imgSrc: 'https://i.ibb.co/DgLG0882/Coating-CH-34.png', 
      hint: 'protective coating' 
    },
    { 
      slug: 'geone',
      title: 'Geone', 
      description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah pada proyek konstruksi.',
      detailedDescription: 'Geone adalah rangkaian produk geosintetik kami, termasuk geotekstil, geogrid, dan geokomposit. Produk-produk ini digunakan dalam aplikasi teknik sipil untuk perkuatan tanah, stabilisasi lereng, drainase bawah permukaan, dan filtrasi. Geone membantu meningkatkan kinerja struktur tanah dan mengurangi biaya konstruksi.',
      imgSrc: 'https://i.ibb.co/zVZP1FMG/geone.png', 
      hint: 'geosynthetics material' 
    },
    { 
      slug: 'marka-jalan',
      title: 'Marka Jalan', 
      description: 'Cat marka jalan termoplastik dan coldplastic berkualitas tinggi untuk visibilitas dan keselamatan.',
      detailedDescription: 'Kami menawarkan solusi lengkap untuk marka jalan, termasuk cat termoplastik yang diaplikasikan panas dan cat coldplastic. Kedua jenis produk ini memberikan retroreflektivitas tinggi untuk visibilitas malam hari, daya tahan yang sangat baik, dan waktu pengeringan yang cepat untuk meminimalkan gangguan lalu lintas. Tersedia dalam berbagai warna sesuai standar.',
      imgSrc: 'https://i.ibb.co/9kWqnrhN/Marka-CH-32.png', 
      hint: 'road paint' 
    },
  ]
};

export const allProducts: Product[] = Object.values(productCategories).flat();

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(p => p.slug === slug);
}
