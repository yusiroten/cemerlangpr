import React from 'react';

export interface Product {
  slug: string;
  title: React.ReactNode;
  titleKey: any;
  description: string;
  descriptionKey: any;
  detailedDescription: string;
  detailedDescriptionKey: any;
  imgSrc: string;
  hint: string;
}

export const productCategories: { [key: string]: Product[] } = {
  'Microsurfacing': [
    { 
      slug: 'microsurfacing-ch-15',
      title: <>Microsurfacing CH-15&trade;</>,
      titleKey: 'microsurfacing_ch_15_title',
      description: 'Lapisan tipis untuk preservasi jalan dengan lalu lintas rendah, menjaga keawetan permukaan jalan.',
      descriptionKey: 'microsurfacing_ch_15_desc',
      detailedDescription: `Microsurfacing CH-15™ adalah campuran aspal emulsi polimer yang dirancang khusus untuk preservasi jalan dengan volume lalu lintas ringan hingga sedang. Produk ini berfungsi sebagai lapisan pelindung ekonomis yang efektif untuk mengisi retakan-retakan kecil, memperbaiki kerusakan permukaan akibat oksidasi, dan memberikan lapisan aus baru yang tahan lama. Aplikasinya yang cepat meminimalkan gangguan lalu lintas, menjadikannya solusi ideal untuk program pemeliharaan jalan preventif.

Dengan menggunakan agregat halus berkualitas tinggi dan emulsi polimer yang diformulasi secara khusus, CH-15™ mampu mengembalikan tekstur permukaan jalan, meningkatkan ketahanan slip, dan memperbaiki penampilan estetika jalan. Campuran ini diaplikasikan dalam keadaan dingin, yang berarti tidak memerlukan proses pemanasan sehingga lebih ramah lingkungan dan hemat energi. Teknologi ini memastikan adhesi yang kuat pada permukaan jalan lama, mencegah delaminasi dan memperpanjang umur perkerasan.

Produk ini sangat cocok diaplikasikan pada jalan perumahan, jalan kolektor lokal, dan area parkir. Dengan memperpanjang umur layanan jalan hingga 5-7 tahun, Microsurfacing CH-15™ menunda kebutuhan akan perbaikan struktural yang mahal, menjadikannya investasi cerdas untuk pengelolaan aset infrastruktur jalan. Ini adalah langkah proaktif dalam menjaga kualitas jalan dan memastikan keselamatan serta kenyamanan bagi para pengguna.`,
      detailedDescriptionKey: 'microsurfacing_ch_15_detailed_desc',
      imgSrc: 'https://i.ibb.co/tPw1vW2Q/Microsurfacing-CH-15.png', 
      hint: 'road paving' 
    },
    { 
      slug: 'microsurfacing-ch-17',
      title: <>Microsurfacing CH-17&trade;</>, 
      titleKey: 'microsurfacing_ch_17_title',
      description: 'Solusi ideal untuk jalan dengan volume lalu lintas sedang, meningkatkan daya tahan dan kenyamanan berkendara.',
      descriptionKey: 'microsurfacing_ch_17_desc',
      detailedDescription: `Microsurfacing CH-17™ menawarkan keseimbangan sempurna antara biaya dan kinerja untuk jalan-jalan arteri sekunder dan kolektor utama yang menanggung beban lalu lintas sedang. Produk ini dirancang untuk memberikan lapisan permukaan yang lebih tebal dan lebih kuat dibandingkan CH-15, sehingga mampu mengatasi tingkat kerusakan permukaan yang lebih signifikan seperti alur (rutting) ringan dan retak yang lebih banyak.

Formula CH-17™ menggunakan kombinasi agregat dengan gradasi yang sedikit lebih kasar dan emulsi polimer dengan kinerja tinggi. Hal ini menghasilkan permukaan dengan tekstur makro yang lebih baik, secara signifikan meningkatkan daya cengkeram (skid resistance) dalam kondisi basah, dan meningkatkan kenyamanan berkendara dengan mengurangi kebisingan. Kekuatan strukturalnya yang lebih tinggi juga memberikan daya tahan superior terhadap deformasi akibat beban lalu lintas yang berulang.

Aplikasi ideal untuk Microsurfacing CH-17™ mencakup jalan-jalan perkotaan yang sibuk dan jalan penghubung antar kota. Solusi ini tidak hanya memperbaiki kerusakan yang ada tetapi juga memberikan lapisan pelindung yang tangguh terhadap elemen cuaca dan aus akibat lalu lintas. Ini adalah metode rehabilitasi permukaan yang sangat efisien, memperpanjang umur jalan secara substansial dan meningkatkan keselamatan publik tanpa memerlukan rekonstruksi total.`,
      detailedDescriptionKey: 'microsurfacing_ch_17_detailed_desc',
      imgSrc: 'https://i.ibb.co/6JBSzqKn/Microsurfacing-CH-17.png', 
      hint: 'road construction' 
    },
    { 
      slug: 'microsurfacing-ch-19',
      title: <>Microsurfacing CH-19&trade;</>, 
      titleKey: 'microsurfacing_ch_19_title',
      description: 'Memberikan perlindungan maksimal untuk jalan raya dan arteri utama dengan lalu lintas padat.',
      descriptionKey: 'microsurfacing_ch_19_desc',
      detailedDescription: `Dirancang khusus untuk menghadapi tantangan terberat di jalan raya, jalan tol, dan arteri utama dengan volume lalu lintas tinggi dan beban berat. Microsurfacing CH-19™ adalah solusi preservasi heavy-duty yang memberikan lapisan permukaan yang sangat kuat dan tahan lama, mampu menahan tekanan ekstrem dari lalu lintas komersial dan kendaraan berat.

Keunggulan CH-19™ terletak pada penggunaan agregat berkualitas premium dengan gradasi yang dirancang khusus serta emulsi aspal yang dimodifikasi polimer secara ekstensif. Kombinasi ini menciptakan matriks yang sangat tangguh dan fleksibel, memberikan ketahanan luar biasa terhadap alur permanen (rutting), retak lelah (fatigue cracking), dan abrasi. Permukaannya yang dihasilkan memiliki daya tahan gesek yang tinggi, memastikan standar keselamatan tertinggi bahkan pada kecepatan tinggi.

Produk ini adalah pilihan utama untuk proyek-proyek infrastruktur kritis di mana kinerja jangka panjang dan minimalnya intervensi pemeliharaan adalah prioritas. Microsurfacing CH-19™ secara signifikan memperpanjang siklus hidup perkerasan jalan yang paling vital, melindungi investasi infrastruktur yang besar, dan memastikan kelancaran arus lalu lintas yang menjadi urat nadi perekonomian.`,
      detailedDescriptionKey: 'microsurfacing_ch_19_detailed_desc',
      imgSrc: 'https://i.ibb.co/sJwDTtDt/Microsurfacing-CH-19.png', 
      hint: 'highway maintenance' 
    },
    { 
      slug: 'microsurfacing-ch-21',
      title: <>Microsurfacing CH-21&trade;</>, 
      titleKey: 'microsurfacing_ch_21_title',
      description: 'Diformulasikan khusus untuk kondisi cuaca ekstrem dan beban berat, seperti pada area industri.',
      descriptionKey: 'microsurfacing_ch_21_desc',
      detailedDescription: `Microsurfacing CH-21™ adalah solusi heavy-duty yang diformulasikan untuk area dengan kondisi paling ekstrem, seperti kawasan industri, pelabuhan, terminal peti kemas, dan area pergudangan. Campuran ini dirancang untuk menahan beban statis yang sangat berat, lalu lintas kendaraan lambat yang sering berbelok tajam, serta paparan terhadap tumpahan bahan kimia dan minyak.

Produk ini menggunakan agregat yang sangat keras dan tahan aus dengan gradasi spesifik, dipadukan dengan sistem emulsi polimer yang dirancang untuk kekuatan ultimate dan ketahanan kimia. Hasilnya adalah lapisan permukaan yang hampir kedap air, sangat padat, dan mampu menahan deformasi plastis di bawah tekanan tinggi, bahkan pada suhu lingkungan yang tinggi. Ini mencegah kerusakan struktural pada pondasi jalan akibat beban berat dan penetrasi cairan.

Dengan CH-21™, area operasional industri dapat mempertahankan kondisi permukaan yang aman dan efisien untuk waktu yang lebih lama, mengurangi downtime akibat perbaikan, dan melindungi aset perkerasan dari kerusakan dini. Ini adalah solusi rekayasa canggih untuk tantangan infrastruktur industri yang paling menuntut, memberikan ketahanan dan keandalan yang tak tertandingi.`,
      detailedDescriptionKey: 'microsurfacing_ch_21_detailed_desc',
      imgSrc: 'https://i.ibb.co/rGcJ9XvP/Microsurfacing-CH-21.png', 
      hint: 'heavy duty road' 
    },
    { 
      slug: 'microsurfacing-ch-23',
      title: <>Microsurfacing CH-23&trade;</>, 
      titleKey: 'microsurfacing_ch_23_title',
      description: 'Pilihan premium untuk proyek yang membutuhkan presisi tinggi seperti landasan pacu bandara dan sirkuit balap.',
      descriptionKey: 'microsurfacing_ch_23_desc',
      detailedDescription: `Untuk aplikasi yang menuntut tingkat presisi, keselamatan, dan kinerja tertinggi, Microsurfacing CH-23™ adalah jawabannya. Diformulasikan secara khusus untuk landasan pacu (runway) dan jalur taksi (taxiway) bandara, serta sirkuit balap profesional, produk ini memenuhi standar internasional yang paling ketat. Tujuannya adalah menciptakan permukaan yang sangat rata, tahan aus, dan memiliki daya cengkeram superior.

CH-23™ menggunakan agregat pilihan yang 100% hasil pemecahan mesin (crushed) dan emulsi polimer dengan reologi yang terkontrol ketat untuk memastikan pengeringan cepat (quick-setting) dan pengembangan kekuatan dini yang tinggi. Hal ini krusial untuk meminimalkan waktu penutupan (downtime) pada fasilitas vital seperti bandara. Permukaannya yang padat juga mencegah kerusakan akibat tumpahan bahan bakar jet dan cairan hidrolik.

Pada sirkuit balap, tekstur mikro dan makro yang presisi dari CH-23™ memberikan grip yang konsisten dan dapat diandalkan bagi kendaraan berkecepatan tinggi, sementara pada landasan pacu, ia memastikan pengereman pesawat yang aman dalam segala kondisi cuaca. Ini adalah puncak teknologi microsurfacing, di mana rekayasa material bertemu dengan kebutuhan akan keselamatan dan performa ekstrem.`,
      detailedDescriptionKey: 'microsurfacing_ch_23_detailed_desc',
      imgSrc: 'https://i.ibb.co/3mbNxhrq/Microsurfacing-CH-23.png', 
      hint: 'airport runway' 
    },
  ],
  'Coldmix': [
    { 
      slug: 'coldmix-ch-24',
      title: <>Coldmix CH-24&trade;</>, 
      titleKey: 'coldmix_ch_24_title',
      description: 'Campuran aspal dingin premium untuk perbaikan cepat pada jalan dengan lalu lintas sedang.',
      descriptionKey: 'coldmix_ch_24_desc',
      detailedDescription: `Coldmix CH-24™ adalah solusi perbaikan jalan berupa campuran aspal dingin siap pakai yang praktis dan efisien. Diformulasikan untuk kekuatan dan daya tahan yang lebih baik, produk ini memungkinkan perbaikan lubang, retakan, dan area aus pada perkerasan aspal secara cepat dan permanen, bahkan dalam kondisi cuaca yang kurang ideal seperti lembab atau dingin.

Produk ini dibuat dengan agregat bersih berkualitas tinggi dan bahan pengikat aspal yang dimodifikasi secara khusus, yang memastikan ikatan kuat pada lubang yang ada tanpa memerlukan tack coat dalam banyak kasus. CH-24™ tetap dapat dikerjakan pada suhu lingkungan, menghilangkan bahaya dan biaya yang terkait dengan aspal panas, serta dapat disimpan dalam jangka waktu yang lama sehingga selalu siap digunakan saat dibutuhkan.

Ideal untuk tim pemeliharaan jalan kota, pengelola properti, dan kontraktor, Coldmix CH-24™ secara drastis mengurangi waktu perbaikan dan gangguan lalu lintas. Cukup tuangkan, ratakan, dan padatkan, area yang diperbaiki dapat segera dibuka untuk lalu lintas. Ini adalah solusi andal untuk menjaga jalan tetap aman dan mulus dengan cara yang paling efisien.`,
      detailedDescriptionKey: 'coldmix_ch_24_detailed_desc',
      imgSrc: 'https://i.ibb.co/36xmmf9/Coldmix-CH-24-e.png', 
      hint: 'asphalt patch' 
    },
    { 
      slug: 'coldmix-ch-28',
      title: <>Coldmix CH-28&trade;</>, 
      titleKey: 'coldmix_ch_28_title',
      description: 'Solusi aspal dingin heavy-duty untuk perbaikan area industri dan jalan dengan lalu lintas berat.',
      descriptionKey: 'coldmix_ch_28_desc',
      detailedDescription: `Coldmix CH-28™ dirancang khusus sebagai material tambalan aspal dingin heavy-duty yang mampu menahan beban lalu lintas berat dan kondisi ekstrem. Produk ini merupakan solusi perbaikan superior untuk jalan raya, jalan tol, area pelabuhan, kawasan industri, dan jembatan timbang di mana material tambalan konvensional seringkali gagal.

Formula CH-28™ menggabungkan agregat yang sangat keras dan bergradasi khusus dengan pengikat aspal berperforma tinggi yang dimodifikasi polimer. Hasilnya adalah tambalan yang setelah dipadatkan, memiliki kekuatan dan stabilitas yang sebanding dengan hot mix asphalt. Ia mampu menahan gaya geser dari manuver truk berat dan deformasi akibat beban yang terus-menerus.

Meskipun memiliki kekuatan tinggi, Coldmix CH-28™ tetap mudah diaplikasikan pada suhu lingkungan, memberikan solusi perbaikan yang cepat dan aman untuk area kritis. Kemampuannya untuk digunakan dalam berbagai kondisi cuaca, termasuk lubang yang tergenang air, menjadikannya produk yang sangat serbaguna dan andal untuk pemeliharaan infrastruktur yang paling menuntut.`,
      detailedDescriptionKey: 'coldmix_ch_28_detailed_desc',
      imgSrc: 'https://i.ibb.co/93ZZhzVw/Coldmix-CH-28-e.png', 
      hint: 'industrial asphalt' 
    },
  ],
  'Ecobeton': [
    { 
      slug: 'ecobeton-chrono',
      title: <>Ecobeton Chrono&trade;</>, 
      titleKey: 'ecobeton_chrono_title',
      description: 'Beton cepat kering untuk perbaikan yang efisien dan proyek dengan jadwal ketat.',
      descriptionKey: 'ecobeton_chrono_desc',
      detailedDescription: `Ecobeton Chrono™ adalah mortar semen non-penyusutan (non-shrinkage) dengan waktu pengeringan ultra cepat (rapid-setting). Produk ini merupakan terobosan untuk proyek-proyek perbaikan beton yang memerlukan waktu pengerjaan minimal dan pengembalian fungsi area yang cepat. Dalam waktu hanya beberapa jam setelah aplikasi, Chrono™ mencapai kekuatan tekan yang cukup untuk dilalui lalu lintas ringan.

Dirancang untuk kemudahan penggunaan, Chrono™ hanya perlu dicampur dengan air untuk menghasilkan mortar dengan konsistensi yang ideal untuk menambal lubang, memperbaiki tepian sambungan yang rusak, atau meratakan permukaan beton. Kemampuannya untuk mengikat kuat pada beton lama dan sifatnya yang tidak menyusut memastikan perbaikan yang tahan lama dan tidak retak.

Aplikasi utamanya meliputi perbaikan cepat pada lantai pabrik, gudang, landasan pacu bandara, jalan beton, dan area parkir. Ecobeton Chrono™ adalah solusi andalan ketika jadwal proyek sangat ketat atau ketika downtime operasional harus diminimalkan, memberikan hasil perbaikan struktural yang kuat dan andal dalam waktu singkat.`,
      detailedDescriptionKey: 'ecobeton_chrono_detailed_desc',
      imgSrc: 'https://i.ibb.co/xKj96XXZ/Ecobeton-Chrono-e.png', 
      hint: 'fast setting concrete' 
    },
    { 
      slug: 'ecobeton-paveshield-chrono',
      title: <>Ecobeton Paveshield Chrono&trade;</>, 
      titleKey: 'ecobeton_paveshield_chrono_title',
      description: 'Pelindung permukaan perkerasan yang cepat kering dan tahan lama.',
      descriptionKey: 'ecobeton_paveshield_chrono_desc',
      detailedDescription: `Ecobeton Paveshield Chrono™ adalah pelapis pelindung transparan berbahan dasar air yang dirancang untuk melindungi dan memperpanjang umur perkerasan beton. Produk ini meresap ke dalam permukaan beton, bereaksi secara kimia untuk membentuk lapisan pelindung yang tahan terhadap abrasi, noda, garam de-icing, dan kerusakan akibat siklus beku-cair (freeze-thaw).

Tidak seperti pelapis permukaan tradisional yang membentuk film, Paveshield Chrono™ menjadi bagian integral dari beton itu sendiri, sehingga tidak akan mengelupas atau terkelupas. Formulanya yang 'chrono' atau cepat kering memungkinkan area yang dilapisi dapat digunakan kembali dengan cepat. Produk ini juga meningkatkan estetika dengan memberikan sedikit efek kilap (sheen) sambil mempertahankan tampilan alami dan tekstur beton.

Sangat ideal untuk trotoar, plaza perkotaan, jalan setapak, area parkir, dan garasi. Paveshield Chrono™ membuat permukaan beton lebih mudah dibersihkan, mengurangi pertumbuhan lumut dan jamur, serta memberikan perlindungan jangka panjang terhadap degradasi akibat cuaca dan lalu lintas pejalan kaki maupun kendaraan ringan.`,
      detailedDescriptionKey: 'ecobeton_paveshield_chrono_detailed_desc',
      imgSrc: 'https://i.ibb.co/qLbfb8sM/Ecobeton-Paveshield.png', 
      hint: 'pavement shield' 
    },
    { 
      slug: 'ecobeton-vetrofluid',
      title: <>Ecobeton Vetrofluid&trade;</>, 
      titleKey: 'ecobeton_vetrofluid_title',
      description: 'Pelapis multifungsi untuk proteksi, pengerasan, dan waterproofing beton.',
      descriptionKey: 'ecobeton_vetrofluid_desc',
      detailedDescription: `Ecobeton Vetrofluid™ adalah larutan silikat natrium yang dimodifikasi secara khusus, yang berfungsi sebagai agen waterproofing dan pengeras beton seumur hidup (lifetime waterproofing and hardener). Ketika diaplikasikan, Vetrofluid™ meresap jauh ke dalam matriks kapiler beton dan bereaksi dengan kalsium hidroksida (lime) untuk membentuk kalsium silikat hidrat yang stabil dan tidak larut.

Reaksi ini secara permanen menyegel pori-pori dan retakan mikro di dalam beton, membuatnya kedap air dan uap air dari segala arah, baik tekanan positif maupun negatif. Selain itu, proses ini secara signifikan meningkatkan kepadatan dan kekerasan permukaan beton, membuatnya jauh lebih tahan terhadap abrasi, debu, dan serangan kimia. Vetrofluid™ bersifat transparan, tidak mengubah penampilan beton, dan memungkinkan beton untuk 'bernapas'.

Produk ini adalah solusi definitif untuk masalah kelembaban pada struktur beton seperti basement, terowongan, tangki air, dan fondasi. Vetrofluid™ memberikan perlindungan permanen dari dalam, menghentikan kerusakan akibat penetrasi air dan korosi pada tulangan baja, serta memastikan durabilitas maksimal dari struktur beton.`,
      detailedDescriptionKey: 'ecobeton_vetrofluid_detailed_desc',
      imgSrc: 'https://i.ibb.co/BVdRHxCf/Ecobeton-vetrofluid.png', 
      hint: 'concrete protection' 
    },
  ],
  'Sabda Seal': [
    { 
      slug: 'sabda-seal-ch-27',
      title: <>Sabda Seal CH-27&trade;</>, 
      titleKey: 'sabda_seal_ch_27_title',
      description: 'Pelapis kedap air serbaguna untuk perlindungan menengah pada berbagai permukaan.',
      descriptionKey: 'sabda_seal_ch_27_desc',
      detailedDescription: `Sabda Seal CH-27™ adalah pelapis waterproofing fleksibel berbahan dasar akrilik polimer yang dirancang untuk aplikasi serbaguna. Produk ini memberikan lapisan membran kedap air yang mulus (seamless) dan elastis, sangat efektif untuk melindungi atap dak beton, dinding luar, talang, dan area basah seperti kamar mandi dari rembesan air dan kelembaban.

Setelah mengering, CH-27™ membentuk lapisan yang tangguh namun tetap fleksibel, mampu menjembatani retak-retak rambut dan menahan pergerakan minor pada struktur. Produk ini tahan terhadap sinar UV dan perubahan cuaca, sehingga tidak mudah rusak atau getas saat terpapar sinar matahari langsung, menjadikannya pilihan yang andal untuk aplikasi eksterior.

Kemudahan aplikasinya—cukup dengan kuas, rol, atau spray—membuatnya cocok untuk proyek profesional maupun do-it-yourself. Sabda Seal CH-27™ memberikan solusi waterproofing yang ekonomis dan andal, menjaga bangunan tetap kering, mencegah pertumbuhan jamur, dan melindungi integritas struktural dari kerusakan akibat air.`,
      detailedDescriptionKey: 'sabda_seal_ch_27_detailed_desc',
      imgSrc: 'https://i.ibb.co/RGNgLbH9/Sabda-Seal-CH-27.png', 
      hint: 'waterproofing sealant' 
    },
    { 
      slug: 'sabda-seal-ch-29',
      title: <>Sabda Seal CH-29&trade;</>, 
      titleKey: 'sabda_seal_ch_29_title',
      description: 'Pelapis kedap air heavy-duty untuk area yang membutuhkan proteksi ekstra seperti kolam renang.',
      descriptionKey: 'sabda_seal_ch_29_desc',
      detailedDescription: `Sabda Seal CH-29™ adalah sistem waterproofing dua komponen heavy-duty berbahan dasar semen dan polimer, yang dirancang untuk area terendam air secara konstan atau yang mengalami tekanan hidrostatik. Formulanya yang superior memberikan lapisan kedap air yang sangat kuat dan tahan lama, ideal untuk aplikasi kritis seperti kolam renang, tangki air (ground water tank), basement, dan bendungan.

Ketika dicampur, kedua komponen tersebut membentuk adukan yang mudah diaplikasikan dan memiliki daya lekat luar biasa pada substrat beton. Setelah mengering, lapisan ini menjadi bagian integral dari struktur, mampu menahan tekanan air positif maupun negatif. Sifatnya yang tahan terhadap bahan kimia, seperti klorin di kolam renang, memastikan kinerja jangka panjang tanpa degradasi.

CH-29™ tidak beracun dan aman untuk kontak dengan air minum setelah kering sempurna, menjadikannya pilihan yang sesuai untuk reservoir air bersih. Untuk area yang membutuhkan perlindungan waterproofing maksimal dan keandalan tanpa kompromi, Sabda Seal CH-29™ adalah standar industri yang memberikan ketenangan pikiran.`,
      detailedDescriptionKey: 'sabda_seal_ch_29_detailed_desc',
      imgSrc: 'https://i.ibb.co/jZbJ79Lk/Sabda-Seal-CH-29.png', 
      hint: 'heavy duty waterproofing' 
    },
    { 
      slug: 'sabda-seal-ch-31',
      title: <>Sabda Seal CH-31&trade;</>, 
      titleKey: 'sabda_seal_ch_31_title',
      description: 'Solusi premium dengan elastisitas tinggi untuk struktur yang mengalami pergerakan.',
      descriptionKey: 'sabda_seal_ch_31_desc',
      detailedDescription: `Sabda Seal CH-31™ adalah pelapis waterproofing premium dengan tingkat elastisitas dan fleksibilitas yang sangat tinggi. Dirancang khusus untuk struktur yang rentan terhadap pergerakan, getaran, atau ekspansi dan kontraksi termal, seperti atap datar yang luas, sambungan dilatasi (expansion joints), dan jembatan. Kemampuannya untuk meregang dan kembali ke bentuk semula memungkinkannya menjembatani retakan dinamis tanpa sobek.

Produk ini berbahan dasar hybrid polymer canggih yang menggabungkan keunggulan kekuatan dan ketahanan cuaca. CH-31™ membentuk membran kedap air yang sangat tangguh, tahan terhadap genangan air, paparan UV ekstrem, dan polusi industri. Lapisan ini menjaga integritasnya dalam rentang suhu yang luas, dari dingin membeku hingga panas terik.

Aplikasinya menghasilkan lapisan pelindung yang mulus tanpa sambungan, menghilangkan titik lemah yang biasa ditemukan pada sistem membran konvensional. Untuk proyek-proyek di mana pergerakan struktural menjadi perhatian utama dan kegagalan waterproofing bukanlah pilihan, Sabda Seal CH-31™ memberikan solusi perlindungan dinamis yang paling andal dan tahan lama.`,
      detailedDescriptionKey: 'sabda_seal_ch_31_detailed_desc',
      imgSrc: 'https://i.ibb.co/YBbpdZ2m/Sabda-Seal-CH-31.png', 
      hint: 'flexible waterproofing' 
    },
  ],
  'Produk Spesial': [
    { 
      slug: 'atomized-microseal',
      title: 'Atomized Microseal',
      titleKey: 'atomized_microseal_title',
      description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal terhadap cuaca dan abrasi.',
      descriptionKey: 'atomized_microseal_desc',
      detailedDescription: `Atomized Microseal merupakan sebuah revolusi dalam teknologi pelapisan pelindung. Menggunakan proses atomisasi bertekanan tinggi, produk ini diaplikasikan sebagai kabut ultra-halus yang mampu menembus jauh ke dalam pori-pori mikro permukaan beton atau aspal. Ini menciptakan lapisan pelindung yang bukan hanya menempel di permukaan, tetapi menyatu dengan substrat itu sendiri.

Teknologi ini menghasilkan lapisan pelindung yang sangat tipis namun sangat padat dan tahan lama. Ia secara efektif menyegel permukaan dari penetrasi air, minyak, garam, dan polutan lainnya, sekaligus secara dramatis meningkatkan ketahanan terhadap abrasi dan aus akibat lalu lintas. Karena lapisannya yang tipis, tekstur dan warna asli permukaan tetap terjaga, menjadikannya ideal untuk perkerasan dekoratif atau arsitektural.

Aplikasi Atomized Microseal sangat cepat dan efisien, mencakup area yang luas dalam waktu singkat dengan gangguan minimal. Sangat cocok untuk proteksi jalan raya, jembatan, area parkir bertingkat, dan plaza pejalan kaki. Ini adalah metode canggih untuk memperpanjang umur infrastruktur secara signifikan sambil mempertahankan estetika aslinya.`,
      detailedDescriptionKey: 'atomized_microseal_detailed_desc',
      imgSrc: 'https://i.ibb.co/xtCFdDSf/Atomized-Microseal.png', 
      hint: 'surface protection' 
    },
    { 
      slug: 'coldplast',
      title: 'Coldplast', 
      titleKey: 'coldplast_title',
      description: 'Material perkerasan dingin termoplastik untuk marka jalan, area parkir, dan zona pejalan kaki.',
      descriptionKey: 'coldplast_desc',
      detailedDescription: `Coldplast adalah material marka jalan dua komponen berperforma tinggi yang diaplikasikan pada suhu lingkungan (dingin). Ini menawarkan alternatif yang lebih aman, cepat, dan seringkali lebih tahan lama dibandingkan termoplastik yang diaplikasikan secara panas. Material ini terdiri dari resin reaktif dan bubuk pengeras yang, ketika dicampur, mengalami reaksi kimia untuk membentuk marka yang sangat keras dan melekat kuat pada permukaan jalan.

Keunggulan utama Coldplast adalah daya tahannya yang luar biasa terhadap aus akibat lalu lintas, minyak, bahan bakar, dan kondisi cuaca ekstrem. Produk ini dapat diaplikasikan dengan ketebalan yang bervariasi untuk menciptakan efek profil atau agregat anti-selip, sehingga meningkatkan keselamatan bagi pengendara dan pejalan kaki. Visibilitasnya, baik siang maupun malam (retroreflektivitas), sangat tinggi dan bertahan lama.

Coldplast sangat ideal untuk aplikasi di area dengan lalu lintas padat di mana daya tahan adalah kunci, seperti zebra cross, garis berhenti, simbol (misalnya, panah atau logo sepeda), dan marka di persimpangan sibuk. Aplikasinya yang tidak memerlukan peralatan pemanas yang besar membuatnya lebih efisien untuk proyek-proyek kecil hingga menengah.`,
      detailedDescriptionKey: 'coldplast_detailed_desc',
      imgSrc: 'https://i.ibb.co/twD3rX7s/Coldplast-CH-33.png', 
      hint: 'road marking' 
    },
    { 
      slug: 'sami-waterproofing',
      title: 'SAMI Waterproofing', 
      titleKey: 'sami_waterproofing_title',
      description: 'Sistem membran interlayer penyerap stres untuk waterproofing jalan dan jembatan.',
      descriptionKey: 'sami_waterproofing_desc',
      detailedDescription: `SAMI, atau Stress Absorbing Membrane Interlayer, adalah sistem rekayasa canggih yang dirancang untuk melindungi struktur perkerasan dari dua musuh terbesarnya: air dan stres. Sistem ini terdiri dari aplikasi aspal polimer elastis yang tebal, diikuti dengan penaburan agregat panas, yang ditempatkan di antara lapisan pondasi dan lapisan permukaan aspal.

Fungsi utama SAMI adalah sebagai lapisan kedap air yang tangguh, mencegah air permukaan meresap ke dalam lapisan pondasi dan subgrade, yang dapat menyebabkan kerusakan struktural parah. Kedua, sifatnya yang elastis memungkinkannya menyerap dan meredam stres yang disebabkan oleh pergerakan pada sambungan atau retakan di lapisan bawah, sehingga secara efektif mencegah retak reflektif (reflective cracking) mencapai permukaan.

Sistem ini sangat krusial untuk perkerasan di atas dek jembatan beton, di mana pergerakan termal dan lendutan sangat umum terjadi. Dengan mengisolasi lapisan permukaan dari pergerakan di bawahnya dan menjaga lapisan struktural tetap kering, SAMI secara dramatis memperpanjang umur layanan jalan dan jembatan, mengurangi biaya siklus hidup, dan meningkatkan keandalan infrastruktur.`,
      detailedDescriptionKey: 'sami_waterproofing_detailed_desc',
      imgSrc: 'https://i.ibb.co/B2rzprWy/S-A-M-I-Waterproofing.png', 
      hint: 'waterproofing membrane' 
    },
    { 
      slug: 'coating',
      title: 'Coating', 
      titleKey: 'coating_title',
      description: 'Berbagai jenis pelapis pelindung industrial untuk daya tahan ekstra pada beton dan baja.',
      descriptionKey: 'coating_desc',
      detailedDescription: `Kami menawarkan rangkaian lengkap solusi pelapisan (coating) industrial yang dirancang untuk melindungi aset berharga Anda dari lingkungan yang paling korosif dan menuntut. Solusi kami mencakup berbagai teknologi, termasuk epoxy, polyurethane, dan polyurea, masing-masing dengan keunggulan unik untuk aplikasi spesifik.

Pelapis epoxy kami memberikan permukaan yang keras, tahan abrasi, dan tahan kimia, ideal untuk lantai pabrik, gudang, dan garasi. Pelapis polyurethane menawarkan fleksibilitas yang sangat baik dan ketahanan UV yang superior, menjadikannya pilihan tepat untuk area eksterior dan struktur yang terpapar sinar matahari. Untuk perlindungan ultimate, pelapis polyurea kami memberikan pengeringan super cepat, elastisitas luar biasa, dan ketahanan benturan yang tak tertandingi, cocok untuk lapisan tangki, containment sekunder, dan dek parkir.

Tim ahli kami akan membantu Anda memilih sistem pelapisan yang paling sesuai dengan kebutuhan operasional, paparan kimia, dan persyaratan estetika proyek Anda. Dengan persiapan permukaan yang tepat dan aplikasi profesional, coating kami memberikan hasil akhir yang tidak only fungsional dan tahan lama tetapi juga meningkatkan penampilan fasilitas Anda.`,
      detailedDescriptionKey: 'coating_detailed_desc',
      imgSrc: 'https://i.ibb.co/DgLG0882/Coating-CH-34.png', 
      hint: 'protective coating' 
    },
    { 
      slug: 'geone',
      title: 'Geone', 
      titleKey: 'geone_title',
      description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah pada proyek konstruksi.',
      descriptionKey: 'geone_desc',
      detailedDescription: `Geone adalah merek kami untuk rangkaian lengkap produk geosintetik, material rekayasa polimerik yang digunakan untuk memecahkan berbagai masalah geoteknik dan sipil. Produk-produk ini, ketika digunakan bersama tanah atau batuan, mampu meningkatkan kinerja dan keandalan proyek konstruksi secara signifikan sambil seringkali mengurangi biaya dan dampak lingkungan.

Rangkaian produk kami meliputi Geotekstil (non-woven dan woven) untuk fungsi separasi, filtrasi, dan perkuatan; Geogrid (biaxial dan uniaxial) untuk stabilisasi dasar jalan dan perkuatan lereng serta dinding penahan tanah; dan Geokomposit untuk fungsi drainase bawah permukaan. Material-material ini dirancang untuk bekerja di bawah tanah, meningkatkan daya dukung tanah lunak, mencegah erosi, dan mengelola aliran air.

Dengan menggunakan produk Geone, para insinyur dapat merancang dinding yang lebih curam, membangun jalan di atas tanah yang buruk, dan membuat sistem drainase yang lebih efisien. Ini adalah solusi inovatif yang memungkinkan pembangunan di lokasi yang sebelumnya dianggap tidak memungkinkan, mempercepat waktu konstruksi, dan menciptakan struktur yang lebih tahan lama dan berkelanjutan.`,
      detailedDescriptionKey: 'geone_detailed_desc',
      imgSrc: 'https://i.ibb.co/zVZP1FMG/geone.png', 
      hint: 'geosynthetics material' 
    },
    { 
      slug: 'marka-jalan',
      title: 'Marka Jalan', 
      titleKey: 'marka_jalan_title',
      description: 'Cat marka jalan termoplastik dan coldplastic berkualitas tinggi untuk visibilitas dan keselamatan.',
      descriptionKey: 'marka_jalan_desc',
      detailedDescription: `Keselamatan jalan sangat bergantung pada marka jalan yang jelas dan terlihat dalam segala kondisi. Kami menyediakan solusi marka jalan komprehensif yang mencakup material termoplastik (hot-applied thermoplastic) dan coldplastic (cold-applied plastic), yang keduanya memenuhi standar keselamatan dan durabilitas tertinggi.

Material termoplastik kami diaplikasikan dalam keadaan leleh pada suhu tinggi, membentuk ikatan fusi yang kuat dengan permukaan aspal. Ini adalah pilihan standar industri untuk marka jalan raya karena daya tahannya yang sangat baik dan kemampuan untuk menahan manik-manik kaca (glass beads) untuk retroreflektivitas malam hari. Material ini cepat kering, memungkinkan lalu lintas dibuka kembali dengan cepat.

Sebagai alternatif, material coldplastic dua komponen kami menawarkan daya tahan yang lebih superior, terutama di area dengan gesekan tinggi seperti zebra cross dan persimpangan. Diaplikasikan pada suhu lingkungan, coldplastic lebih aman bagi pekerja dan dapat digunakan untuk membuat marka struktural atau berprofil untuk meningkatkan kewaspadaan pengendara. Kedua solusi ini memastikan marka jalan yang tahan lama, sangat terlihat, dan berkontribusi langsung pada peningkatan keselamatan di jalan.`,
      detailedDescriptionKey: 'marka_jalan_detailed_desc',
      imgSrc: 'https://i.ibb.co/9kWqnrhN/Marka-CH-32.png', 
      hint: 'road paint' 
    },
  ]
};

export const allProducts: Product[] = Object.values(productCategories).flat();

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(p => p.slug === slug);
}
