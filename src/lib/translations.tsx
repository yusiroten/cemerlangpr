'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  en: {
    navBeranda: 'Home',
    navTentangKami: 'About Us',
    navDireksi: 'Directors',
    navProduk: 'Products',
    navLisensi: 'Licenses',
    navProyek: 'Projects',
    navKlien: 'Clients',
    navKegiatan: 'Activities',
    navKontak: 'Contact',
    hubungiKami: 'Contact Us',
    heroTitle1: 'Leading Solutions for Resilient Roads',
    heroSubtitle1: 'Modern technology and sustainable strategies for safe and durable infrastructure.',
    heroTitle2: 'The Latest in Road Maintenance Innovation',
    heroSubtitle2: 'Combining efficiency, quality, and sustainability to support national mobility.',
    heroTitle3: 'Quality Road Infrastructure, Seamless Mobility',
    heroSubtitle3: 'Integrated maintenance services to ensure smooth daily transportation.',
    heroTitle4: 'From Maintenance to Enhancement',
    heroSubtitle4: 'Proactive solutions to keep roads in prime condition while increasing infrastructure value.',
    heroTitle5: 'Strong Roads, Stronger Economy',
    heroSubtitle5: 'Infrastructure maintenance as the foundation for regional growth and connectivity.',
    heroTitle6: 'Smart Road Maintenance',
    heroSubtitle6: 'Digital systems and intelligent analytics for more effective road maintenance.',
    heroTitle7: 'Maintaining Roads, Ensuring Safety',
    heroSubtitle7: 'Maintenance solutions focused on user safety and travel quality.',
    heroTitle8: 'Sustainable Road Infrastructure',
    heroSubtitle8: 'Eco-friendly materials and innovative methods for the future of green transportation.',
    heroTitle9: 'Integrated Solutions for Road Maintenance',
    heroSubtitle9: 'From inspection to repair, all in one integrated system.',
    heroTitle10: 'Prime Roads, Optimal Mobility',
    heroSubtitle10: 'Maintenance services that ensure your comfort and travel efficiency.',
    lihatProdukKami: 'See Our Products',
    tentangKamiTitle: 'About Us',
    tentangKamiDesc1: 'Cemerlang Group is a leading company dedicated to excellence and innovation. Since our establishment, we have built a solid reputation for providing high-quality solutions across various sectors, especially in road infrastructure and construction materials.',
    tentangKamiDesc2: 'Our vision is to be a trusted partner in building a sustainable future. With an experienced team of experts, we continue to push the boundaries of possibility to create value for our clients, society, and all stakeholders.',
    tentangKamiDesc3: 'We believe the foundation of any great project is quality materials and uncompromising integrity. Therefore, we are committed to providing superior products that not only meet but exceed industry standards.',
    direksiTitle: 'Board of Directors',
    direksiSubtitle: 'Our dedicated and experienced leadership team.',
    produkTitle: 'Products & Services',
    produkSubtitle: 'Offering a variety of innovative solutions to meet your needs.',
    semua: 'All',
    lisensiTitle: 'Product Licenses',
    lisensiSubtitle: 'Our products have been tested and certified by various leading institutions.',
    proyekTitle: 'Our Projects',
    proyekSubtitle: 'A portfolio of projects that demonstrates our commitment to quality and excellence.',
    klienTitle: 'Our Clients',
    klienSubtitle: 'Trusted by various leading companies and institutions in Indonesia.',
    kegiatanTitle: 'Blog & Activities',
    kegiatanSubtitle: 'Documentation of activities and audiences we have conducted.',
    selengkapnya: 'Read More',
    kegiatanNotFound: 'Activity not found.',
    kembaliKeKegiatan: 'Back to Activities',
    produkNotFound: 'Product not found.',
    kembaliKeProduk: 'Back to Products',
    kontakTitle: 'Ready to Build With Us?',
    kontakSubtitle: 'Contact us today to discuss your next project. Our team is ready to help turn your vision into reality.',
    alamat: 'PLAZA MEBEL #31-35 Jl. RS Fatmawati Kav 5, Cipete Utara, Kebayoran Baru, RT.1/RW.2, Gandaria Selatan, RT.1/RW.2, Gandaria Sel., Kec. Cilandak, South Jakarta City, Special Capital Region of Jakarta 12420 - Indonesia',
    terhubungDenganKami: 'Connect with Us',
    terhubungSubtitle: 'Follow us on social media for the latest updates.',
    footerText: '© {year} Cemerlang Group. All rights reserved.',
    hubungiViaWa: 'Contact Us',

    // Product Translations
    microsurfacing_ch_15_title: 'Microsurfacing CH-15&trade;',
    microsurfacing_ch_15_desc: 'A thin layer for preserving low-traffic roads, maintaining the durability of the road surface.',
    microsurfacing_ch_15_detailed_desc: 'Microsurfacing CH-15™ is a polymer-modified emulsion asphalt mix specially designed for the preservation of roads with light to medium traffic volumes. This product serves as an effective and economical protective layer to fill small cracks, repair surface damage from oxidation, and provide a new, durable wearing course. Its rapid application minimizes traffic disruption, making it an ideal solution for preventive road maintenance programs.\n\nBy using high-quality fine aggregates and a specially formulated polymer emulsion, CH-15™ can restore road surface texture, improve slip resistance, and enhance the aesthetic appearance of the road. This mixture is applied cold, meaning it requires no heating, making it more environmentally friendly and energy-efficient. This technology ensures strong adhesion to the old road surface, preventing delamination and extending the life of the pavement.\n\nThis product is very suitable for application on residential roads, local collector roads, and parking areas. By extending the service life of the road by 5-7 years, Microsurfacing CH-15™ delays the need for expensive structural repairs, making it a smart investment for road infrastructure asset management. It is a proactive step in maintaining road quality and ensuring safety and comfort for users.',

    microsurfacing_ch_17_title: 'Microsurfacing CH-17&trade;',
    microsurfacing_ch_17_desc: 'An ideal solution for roads with medium traffic volume, enhancing durability and driving comfort.',
    microsurfacing_ch_17_detailed_desc: 'Microsurfacing CH-17™ offers the perfect balance of cost and performance for secondary arterial roads and major collectors that carry medium traffic loads. This product is designed to provide a thicker and stronger surface layer compared to CH-15, enabling it to address more significant surface damage such as light rutting and more extensive cracking.\n\nThe CH-17™ formula uses a combination of aggregates with a slightly coarser gradation and a high-performance polymer emulsion. This results in a surface with better macro-texture, significantly improving skid resistance in wet conditions and enhancing driving comfort by reducing noise. Its higher structural strength also provides superior resistance to deformation from repeated traffic loads.\n\nIdeal applications for Microsurfacing CH-17™ include busy urban roads and inter-city connecting roads. This solution not only repairs existing damage but also provides a tough protective layer against weather elements and traffic-induced wear. It is a highly efficient surface rehabilitation method, substantially extending road life and improving public safety without requiring a total reconstruction.',

    microsurfacing_ch_19_title: 'Microsurfacing CH-19&trade;',
    microsurfacing_ch_19_desc: 'Provides maximum protection for highways and main arteries with heavy traffic.',
    microsurfacing_ch_19_detailed_desc: 'Specially designed to tackle the toughest challenges on highways, toll roads, and main arteries with high traffic volumes and heavy loads. Microsurfacing CH-19™ is a heavy-duty preservation solution that provides an extremely strong and durable surface layer, capable of withstanding extreme pressure from commercial traffic and heavy vehicles.\n\nThe superiority of CH-19™ lies in its use of premium quality, specially graded aggregates and an extensively polymer-modified asphalt emulsion. This combination creates a very tough and flexible matrix, providing outstanding resistance to permanent rutting, fatigue cracking, and abrasion. The resulting surface has high friction resistance, ensuring the highest safety standards even at high speeds.\n\nThis product is the top choice for critical infrastructure projects where long-term performance and minimal maintenance intervention are priorities. Microsurfacing CH-19™ significantly extends the life cycle of the most vital road pavements, protecting large infrastructure investments, and ensuring the smooth flow of traffic that is the lifeblood of the economy.',

    microsurfacing_ch_21_title: 'Microsurfacing CH-21&trade;',
    microsurfacing_ch_21_desc: 'Specially formulated for extreme weather conditions and heavy loads, such as in industrial areas.',
    microsurfacing_ch_21_detailed_desc: 'Microsurfacing CH-21™ is a heavy-duty solution formulated for areas with the most extreme conditions, such as industrial zones, ports, container terminals, and warehousing areas. This mix is designed to withstand very heavy static loads, slow-moving traffic with sharp turns, and exposure to chemical and oil spills.\n\nThe product uses extremely hard and wear-resistant aggregates with a specific gradation, combined with a polymer emulsion system designed for ultimate strength and chemical resistance. The result is a nearly impervious, very dense surface layer capable of resisting plastic deformation under high pressure, even at high ambient temperatures. This prevents structural damage to the road foundation from heavy loads and fluid penetration.\n\nWith CH-21™, industrial operational areas can maintain a safe and efficient surface condition for a longer time, reducing downtime due to repairs, and protecting pavement assets from premature failure. It is an advanced engineering solution for the most demanding industrial infrastructure challenges, providing unmatched durability and reliability.',

    microsurfacing_ch_23_title: 'Microsurfacing CH-23&trade;',
    microsurfacing_ch_23_desc: 'The premium choice for projects requiring high precision, like airport runways and racing circuits.',
    microsurfacing_ch_23_detailed_desc: 'For applications demanding the highest levels of precision, safety, and performance, Microsurfacing CH-23™ is the answer. Specially formulated for airport runways and taxiways, as well as professional racing circuits, this product meets the most stringent international standards. Its purpose is to create a very smooth, wear-resistant surface with superior grip.\n\nCH-23™ uses 100% crushed choice aggregates and a polymer emulsion with tightly controlled rheology to ensure quick-setting and high early strength development. This is crucial for minimizing downtime at vital facilities like airports. Its dense surface also prevents damage from jet fuel and hydraulic fluid spills.\n\nOn racing circuits, the precise micro and macro texture of CH-23™ provides consistent and reliable grip for high-speed vehicles, while on runways, it ensures safe aircraft braking in all weather conditions. This is the pinnacle of microsurfacing technology, where material engineering meets the need for extreme safety and performance.',

    coldmix_ch_24_title: 'Coldmix CH-24&trade;',
    coldmix_ch_24_desc: 'Premium cold mix asphalt for quick repairs on medium-traffic roads.',
    coldmix_ch_24_detailed_desc: 'Coldmix CH-24™ is a practical and efficient ready-to-use cold mix asphalt solution for road repairs. Formulated for better strength and durability, this product allows for the quick and permanent repair of potholes, cracks, and worn areas on asphalt pavements, even in less-than-ideal weather conditions like dampness or cold.\n\nThe product is made with high-quality clean aggregates and a specially modified asphalt binder, which ensures a strong bond to the existing pothole without needing a tack coat in many cases. CH-24™ remains workable at ambient temperatures, eliminating the hazards and costs associated with hot mix asphalt, and can be stored for long periods, so it\'s always ready when needed.\n\nIdeal for city road maintenance crews, property managers, and contractors, Coldmix CH-24™ drastically reduces repair time and traffic disruption. Simply pour, level, and compact, and the repaired area can be immediately opened to traffic. It is a reliable solution for keeping roads safe and smooth in the most efficient way.',

    coldmix_ch_28_title: 'Coldmix CH-28&trade;',
    coldmix_ch_28_desc: 'Heavy-duty cold mix asphalt solution for repairing industrial areas and heavy-traffic roads.',
    coldmix_ch_28_detailed_desc: 'Coldmix CH-28™ is specially designed as a heavy-duty cold mix asphalt patching material capable of withstanding heavy traffic loads and extreme conditions. This product is a superior repair solution for highways, toll roads, port areas, industrial zones, and weighbridges where conventional patching materials often fail.\n\nThe CH-28™ formula combines very hard, specially-graded aggregates with a high-performance, polymer-modified asphalt binder. The result is a patch that, once compacted, has strength and stability comparable to hot mix asphalt. It can resist shear forces from heavy truck maneuvers and deformation from continuous loads.\n\nDespite its high strength, Coldmix CH-28™ remains easy to apply at ambient temperatures, providing a quick and safe repair solution for critical areas. Its ability to be used in various weather conditions, including in water-filled potholes, makes it a highly versatile and reliable product for the most demanding infrastructure maintenance.',

    ecobeton_chrono_title: 'Ecobeton Chrono&trade;',
    ecobeton_chrono_desc: 'Fast-setting concrete for efficient repairs and projects with tight schedules.',
    ecobeton_chrono_detailed_desc: 'Ecobeton Chrono™ is a non-shrinkage, rapid-setting cement mortar. This product is a breakthrough for concrete repair projects that require minimal work time and a quick return to service. Within just a few hours of application, Chrono™ achieves sufficient compressive strength to be trafficked by light vehicles.\n\nDesigned for ease of use, Chrono™ only needs to be mixed with water to produce a mortar with the ideal consistency for patching potholes, repairing damaged joint edges, or leveling concrete surfaces. Its ability to bond strongly to old concrete and its non-shrink properties ensure a durable, crack-free repair.\n\nIts main applications include quick repairs on factory floors, warehouses, airport runways, concrete roads, and parking areas. Ecobeton Chrono™ is the go-to solution when project schedules are very tight or when operational downtime must be minimized, delivering strong and reliable structural repairs in a short amount of time.',

    ecobeton_paveshield_chrono_title: 'Ecobeton Paveshield Chrono&trade;',
    ecobeton_paveshield_chrono_desc: 'A fast-drying and durable protective coating for pavement surfaces.',
    ecobeton_paveshield_chrono_detailed_desc: 'Ecobeton Paveshield Chrono™ is a water-based transparent protective coating designed to protect and extend the life of concrete pavements. This product penetrates the concrete surface, reacting chemically to form a protective layer that is resistant to abrasion, stains, de-icing salts, and damage from freeze-thaw cycles.\n\nUnlike traditional surface coatings that form a film, Paveshield Chrono™ becomes an integral part of the concrete itself, so it will not peel or flake. Its "chrono" or fast-drying formula allows the treated area to be returned to service quickly. The product also enhances aesthetics by providing a slight sheen while preserving the natural look and texture of the concrete.\n\nIt is ideal for sidewalks, urban plazas, footpaths, parking areas, and garages. Paveshield Chrono™ makes concrete surfaces easier to clean, reduces moss and mold growth, and provides long-term protection against degradation from weather and pedestrian or light vehicle traffic.',

    ecobeton_vetrofluid_title: 'Ecobeton Vetrofluid&trade;',
    ecobeton_vetrofluid_desc: 'Multifunctional coating for concrete protection, hardening, and waterproofing.',
    ecobeton_vetrofluid_detailed_desc: 'Ecobeton Vetrofluid™ is a specially modified sodium silicate solution that acts as a lifetime waterproofing and hardening agent for concrete. When applied, Vetrofluid™ penetrates deep into the capillary matrix of the concrete and reacts with calcium hydroxide (lime) to form a stable, insoluble calcium silicate hydrate.\n\nThis reaction permanently seals the pores and micro-cracks within the concrete, making it impervious to water and water vapor from any direction, both positive and negative pressure. Additionally, this process significantly increases the density and hardness of the concrete surface, making it much more resistant to abrasion, dusting, and chemical attack. Vetrofluid™ is transparent, does not alter the appearance of the concrete, and allows the concrete to "breathe".\n\nThis product is the definitive solution for moisture problems in concrete structures such as basements, tunnels, water tanks, and foundations. Vetrofluid™ provides permanent protection from within, stopping damage from water penetration and corrosion of steel reinforcement, and ensuring the maximum durability of the concrete structure.',

    sabda_seal_ch_27_title: 'Sabda Seal CH-27&trade;',
    sabda_seal_ch_27_desc: 'Versatile waterproof coating for medium-duty protection on various surfaces.',
    sabda_seal_ch_27_detailed_desc: 'Sabda Seal CH-27™ is a flexible waterproofing coating based on acrylic polymer, designed for versatile applications. This product provides a seamless and elastic waterproof membrane layer, very effective for protecting concrete roof decks, exterior walls, gutters, and wet areas like bathrooms from water seepage and moisture.\n\nOnce dry, CH-27™ forms a tough yet flexible layer, capable of bridging hairline cracks and accommodating minor structural movements. This product is resistant to UV rays and weather changes, so it does not easily get damaged or brittle when exposed to direct sunlight, making it a reliable choice for exterior applications.\n\Its ease of application—simply by brush, roller, or spray—makes it suitable for both professional and do-it-yourself projects. Sabda Seal CH-27™ provides an economical and reliable waterproofing solution, keeping buildings dry, preventing mold growth, and protecting structural integrity from water damage.',

    sabda_seal_ch_29_title: 'Sabda Seal CH-29&trade;',
    sabda_seal_ch_29_desc: 'Heavy-duty waterproof coating for areas needing extra protection, like swimming pools.',
    sabda_seal_ch_29_detailed_desc: 'Sabda Seal CH-29™ is a heavy-duty, two-component waterproofing system based on cement and polymer, designed for constantly submerged areas or those subject to hydrostatic pressure. Its superior formula provides an extremely strong and durable waterproof layer, ideal for critical applications such as swimming pools, ground water tanks, basements, and dams.\n\nWhen mixed, the two components form a slurry that is easy to apply and has excellent adhesion to concrete substrates. Once cured, this layer becomes an integral part of the structure, able to withstand both positive and negative water pressure. Its resistance to chemicals, such as chlorine in swimming pools, ensures long-term performance without degradation.\n\nCH-29™ is non-toxic and safe for contact with drinking water after it has fully cured, making it a suitable choice for clean water reservoirs. For areas that require maximum waterproofing protection and uncompromising reliability, Sabda Seal CH-29™ is the industry standard that provides peace of mind.',

    sabda_seal_ch_31_title: 'Sabda Seal CH-31&trade;',
    sabda_seal_ch_31_desc: 'A premium, high-elasticity solution for structures subject to movement.',
    sabda_seal_ch_31_detailed_desc: 'Sabda Seal CH-31™ is a premium waterproofing coating with extremely high elasticity and flexibility. It is specially designed for structures prone to movement, vibration, or thermal expansion and contraction, such as large flat roofs, expansion joints, and bridges. Its ability to stretch and return to its original shape allows it to bridge dynamic cracks without tearing.\n\nThe product is based on an advanced hybrid polymer that combines the advantages of strength and weather resistance. CH-31™ forms a very tough waterproof membrane, resistant to ponding water, extreme UV exposure, and industrial pollution. This layer maintains its integrity over a wide temperature range, from freezing cold to scorching heat.\n\nIts application results in a seamless protective layer without joints, eliminating the weak points commonly found in conventional membrane systems. For projects where structural movement is a major concern and waterproofing failure is not an option, Sabda Seal CH-31™ provides the most reliable and durable dynamic protection solution.',

    atomized_microseal_title: 'Atomized Microseal',
    atomized_microseal_desc: 'Atomized microseal technology for maximum surface protection against weather and abrasion.',
    atomized_microseal_detailed_desc: 'Atomized Microseal represents a revolution in protective coating technology. Using a high-pressure atomization process, this product is applied as an ultra-fine mist that penetrates deep into the micro-pores of concrete or asphalt surfaces. This creates a protective layer that not only adheres to the surface but fuses with the substrate itself.\n\nThis technology results in a very thin yet extremely dense and durable protective layer. It effectively seals the surface from the penetration of water, oil, salts, and other pollutants, while dramatically increasing resistance to abrasion and traffic wear. Because the layer is so thin, the original texture and color of the surface are preserved, making it ideal for decorative or architectural pavements.\n\nThe application of Atomized Microseal is very fast and efficient, covering large areas in a short amount of time with minimal disruption. It is highly suitable for the protection of highways, bridges, multi-story parking garages, and pedestrian plazas. This is an advanced method to significantly extend the life of infrastructure while maintaining its original aesthetics.',

    coldplast_title: 'Coldplast',
    coldplast_desc: 'Thermoplastic cold-applied pavement marking material for roads, parking areas, and pedestrian zones.',
    coldplast_detailed_desc: 'Coldplast is a high-performance, two-component road marking material applied at ambient temperature (cold). It offers a safer, faster, and often more durable alternative to hot-applied thermoplastics. The material consists of a reactive resin and a hardening powder which, when mixed, undergo a chemical reaction to form a very hard and strongly adhered marking on the road surface.\n\nThe main advantage of Coldplast is its outstanding durability against traffic wear, oil, fuel, and extreme weather conditions. The product can be applied in various thicknesses to create profile or anti-skid aggregate effects, thus enhancing safety for drivers and pedestrians. Its visibility, both day and night (retroreflectivity), is very high and long-lasting.\n\nColdplast is ideal for applications in high-traffic areas where durability is key, such as crosswalks, stop lines, symbols (e.g., arrows or bike logos), and markings at busy intersections. Its application, which does not require large heating equipment, makes it more efficient for small to medium-sized projects.',

    sami_waterproofing_title: 'SAMI Waterproofing',
    sami_waterproofing_desc: 'Stress-absorbing membrane interlayer system for waterproofing roads and bridges.',
    sami_waterproofing_detailed_desc: 'SAMI, or Stress Absorbing Membrane Interlayer, is an advanced engineering system designed to protect pavement structures from their two greatest enemies: water and stress. The system consists of the application of a thick, elastic polymer-modified asphalt, followed by the broadcasting of hot aggregate, which is placed between the foundation layer and the asphalt surface course.\n\nThe primary function of SAMI is to act as a tough waterproof layer, preventing surface water from seeping into the foundation and subgrade layers, which can cause severe structural damage. Secondly, its elastic properties allow it to absorb and dissipate stresses caused by movement at joints or cracks in the underlying layer, thereby effectively preventing reflective cracking from reaching the surface.\n\nThis system is crucial for pavements over concrete bridge decks, where thermal movement and deflection are very common. By isolating the surface layer from underlying movements and keeping the structural layers dry, SAMI dramatically extends the service life of roads and bridges, reduces life-cycle costs, and increases infrastructure reliability.',

    coating_title: 'Coating',
    coating_desc: 'Various types of industrial protective coatings for extra durability on concrete and steel.',
    coating_detailed_desc: 'We offer a comprehensive range of industrial coating solutions designed to protect your valuable assets from the most corrosive and demanding environments. Our solutions include various technologies, such as epoxy, polyurethane, and polyurea, each with unique advantages for specific applications.\n\nOur epoxy coatings provide a hard, abrasion-resistant, and chemically resistant surface, ideal for factory floors, warehouses, and garages. Polyurethane coatings offer excellent flexibility and superior UV resistance, making them the right choice for exterior areas and structures exposed to sunlight. For ultimate protection, our polyurea coatings provide super-fast curing, outstanding elasticity, and unmatched impact resistance, suitable for tank linings, secondary containment, and parking decks.\n\nOur expert team will help you select the most suitable coating system for your project\'s operational needs, chemical exposure, and aesthetic requirements. With proper surface preparation and professional application, our coatings deliver a finish that is not only functional and durable but also enhances the appearance of your facility.',

    geone_title: 'Geone',
    geone_desc: 'Geosynthetic products for soil stabilization and reinforcement in construction projects.',
    geone_detailed_desc: 'Geone is our brand for a complete range of geosynthetic products, polymeric engineering materials used to solve a variety of geotechnical and civil engineering problems. These products, when used with soil or rock, can significantly improve the performance and reliability of construction projects while often reducing costs and environmental impact.\n\nOur product range includes Geotextiles (non-woven and woven) for separation, filtration, and reinforcement functions; Geogrids (biaxial and uniaxial) for road base stabilization and reinforcement of slopes and retaining walls; and Geocomposites for subsurface drainage functions. These materials are designed to work underground, increasing the bearing capacity of soft soils, preventing erosion, and managing water flow.\n\nBy using Geone products, engineers can design steeper walls, build roads over poor soil, and create more efficient drainage systems. It is an innovative solution that enables construction in previously unfeasible locations, accelerates construction time, and creates more durable and sustainable structures.',

    marka_jalan_title: 'Road Marking',
    marka_jalan_desc: 'High-quality thermoplastic and coldplastic road marking paint for visibility and safety.',
    marka_jalan_detailed_desc: 'Road safety heavily relies on clear and visible road markings in all conditions. We provide comprehensive road marking solutions that include thermoplastic (hot-applied) and coldplastic (cold-applied) materials, both of which meet the highest standards of safety and durability.\n\nOur thermoplastic material is applied in a molten state at high temperatures, forming a strong fusion bond with the asphalt surface. It is the industry-standard choice for highway markings due to its excellent durability and ability to hold glass beads for night-time retroreflectivity. This material dries quickly, allowing traffic to be reopened swiftly.\n\nAlternatively, our two-component coldplastic material offers even superior durability, especially in high-friction areas like crosswalks and intersections. Applied at ambient temperature, coldplastic is safer for workers and can be used to create structured or profiled markings to increase driver awareness. Both solutions ensure long-lasting, highly visible road markings that contribute directly to improved road safety.',

    // Project Translations
    project_1_title: 'Microsurfacing & Paint Marking Work at Rampi Airport',
    project_1_category: 'Airport',
    project_2_title: 'Microsurfacing Work in Balapan & Tugu Malang',
    project_2_category: 'Infrastructure',
    project_3_title: 'Paint Marking Work at Soekarno-Hatta Airport Terminal 3 Ultimate',
    project_3_category: 'Airport',
    project_4_title: 'Microsurfacing Work at Gelora Bung Karno Stadium Area Jakarta',
    project_4_category: 'Sports Facility',
    project_5_title: 'Microsurfacing Work on Bali Toll Road',
    project_5_category: 'Toll Road',
    project_6_title: 'Microsurfacing Work at the Presidential Palace of the Republic of Indonesia',
    project_6_category: 'Government Building',
    project_7_title: 'Microsurfacing Work at Sentul Circuit A and B',
    project_7_category: 'Race Circuit',
    project_8_title: 'Barrier Painting Work on Manado-Bitung Toll Road',
    project_8_category: 'Toll Road',
    project_9_title: 'Microsurfacing Work at the Jakarta High Prosecutor\'s Office Area',
    project_9_category: 'Government Building',
    project_10_title: 'Microsurfacing Work on Becakayu Toll Road Jakarta',
    project_10_category: 'Toll Road',
    project_11_title: 'Microsurfacing Work on Halim Perdana Kusuma Runway Jakarta',
    project_11_category: 'Airport',
    project_12_title: 'Microsurfacing Work at YONPOMAD Church Jonggol West Java',
    project_12_category: 'Place of Worship',

    // Activity Translations
    activity_1_title: 'Audience at the PUPR Office of Bogor City',
    activity_1_desc: 'The Cemerlang Group team held an audience with representatives from the Public Works and Spatial Planning (PUPR) Office of Bogor City to discuss potential collaborations on road infrastructure projects in the Bogor City area.',
    activity_2_title: 'Audience at the PUPR Office of Tangerang City',
    activity_2_desc: 'A strategic meeting with the PUPR Office of Tangerang City to present our innovative solutions in city road maintenance and quality improvement, as well as to explore future cooperation opportunities.',
    activity_3_title: 'Audience at the DKI Jakarta PUPR Office',
    activity_3_desc: 'An in-depth discussion with the DKI Jakarta PUPR Office regarding the application of microsurfacing technology and high-quality asphalt products to support the Capital\'s infrastructure program.',
    activity_4_title: 'Audience at the Central PUPR Ministry in Jakarta',
    activity_4_desc: 'Cemerlang Group had the opportunity to dialogue with officials at the central Ministry of Public Works and Housing (PUPR), conveying our vision to support sustainable national infrastructure development.',
    activity_5_title: 'Microsurfacing Mock-Up on Becakayu Toll Road',
    activity_5_desc: 'Demonstration and trial (mock-up) of the Microsurfacing layer application on the Bekasi-Cawang-Kampung Melayu (Becakayu) Toll Road to showcase the quality and advantages of our product directly in the field.',
    activity_6_title: 'Mock-Up at Revo Mall Bekasi City',
    activity_6_desc: 'A pilot application of our pavement products in the parking area of Revo Mall, Bekasi. This project aims to demonstrate the durability and aesthetics of our solutions for commercial areas.',
    activity_7_title: 'Mock-Up at Patimban Port, Subang',
    activity_7_desc: 'Trial application of our heavy-duty products in the Patimban Port area, Subang, which has heavy vehicle traffic, to prove the product\'s durability under extreme conditions.',
    activity_8_title: 'Audience at the PUPR Office of Sawahlunto City',
    activity_8_desc: 'Conducted a presentation and discussion with the PUPR Office of Sawahlunto City, West Sumatra, to introduce Cemerlang Group\'s flagship products and explore their application in regional projects.',

  },
  id: {
    navBeranda: 'Beranda',
    navTentangKami: 'Tentang Kami',
    navDireksi: 'Direksi',
    navProduk: 'Produk',
    navLisensi: 'Lisensi',
    navProyek: 'Proyek',
    navKlien: 'Klien',
    navKegiatan: 'Kegiatan',
    navKontak: 'Kontak',
    hubungiKami: 'Hubungi Kami',
    heroTitle1: 'Solusi Terdepan untuk Jalan yang Tangguh',
    heroSubtitle1: 'Teknologi modern dan strategi berkelanjutan demi infrastruktur yang aman dan tahan lama.',
    heroTitle2: 'Inovasi Pemeliharaan Jalan Masa Kini',
    heroSubtitle2: 'Menggabungkan efisiensi, kualitas, dan keberlanjutan untuk mendukung mobilitas nasional.',
    heroTitle3: 'Infrastruktur Jalan Berkualitas, Mobilitas Tanpa Hambatan',
    heroSubtitle3: 'Layanan pemeliharaan terintegrasi untuk memastikan kelancaran transportasi setiap hari.',
    heroTitle4: 'Dari Perawatan ke Peningkatan',
    heroSubtitle4: 'Solusi proaktif menjaga jalan tetap prima sekaligus meningkatkan nilai infrastruktur.',
    heroTitle5: 'Jalan Kuat, Ekonomi Maju',
    heroSubtitle5: 'Pemeliharaan infrastruktur sebagai fondasi pertumbuhan dan konektivitas daerah.',
    heroTitle6: 'Smart Road Maintenance',
    heroSubtitle6: 'Sistem digital dan analitik cerdas untuk pemeliharaan jalan yang lebih efektif.',
    heroTitle7: 'Menjaga Jalan, Menjaga Keselamatan',
    heroSubtitle7: 'Solusi pemeliharaan yang berfokus pada keamanan pengguna dan kualitas perjalanan.',
    heroTitle8: 'Infrastruktur Jalan Berkelanjutan',
    heroSubtitle8: 'Material ramah lingkungan dan metode inovatif untuk masa depan transportasi hijau.',
    heroTitle9: 'Solusi Terintegrasi untuk Pemeliharaan Jalan',
    heroSubtitle9: 'Dari inspeksi hingga perbaikan, semua dalam satu sistem terpadu.',
    heroTitle10: 'Jalan Prima, Mobilitas Optimal',
    heroSubtitle10: 'Layanan pemeliharaan yang memastikan kenyamanan dan efisiensi perjalanan Anda.',
    lihatProdukKami: 'Lihat Produk Kami',
    tentangKamiTitle: 'Tentang Kami',
    tentangKamiDesc1: 'Cemerlang Group adalah perusahaan terdepan yang berdedikasi pada keunggulan dan inovasi. Sejak didirikan, kami telah membangun reputasi yang kokoh dalam memberikan solusi berkualitas tinggi di berbagai sektor, khususnya dalam bidang infrastruktur jalan dan material konstruksi.',
    tentangKamiDesc2: 'Visi kami adalah menjadi mitra terpercaya dalam pembangunan masa depan yang berkelanjutan. Dengan tim ahli yang berpengalaman, kami terus mendorong batas-batas kemungkinan untuk menciptakan nilai bagi klien, masyarakat, dan seluruh pemangku kepentingan.',
    tentangKamiDesc3: 'Kami percaya bahwa fondasi dari setiap proyek besar adalah material berkualitas dan integritas tanpa kompromi. Oleh karena itu, kami berkomitmen untuk menyediakan produk-produk unggulan yang tidak hanya memenuhi, tetapi juga melampaui standar industri.',
    direksiTitle: 'Dewan Direksi',
    direksiSubtitle: 'Tim kepemimpinan kami yang berdedikasi dan berpengalaman.',
    produkTitle: 'Produk & Layanan',
    produkSubtitle: 'Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.',
    semua: 'Semua',
    lisensiTitle: 'Lisensi Produk',
    lisensiSubtitle: 'Produk kami telah teruji dan disertifikasi oleh berbagai lembaga terkemuka.',
    proyekTitle: 'Proyek Kami',
    proyekSubtitle: 'Portofolio proyek yang menunjukkan komitmen kami pada kualitas dan keunggulan.',
    klienTitle: 'Klien Kami',
    klienSubtitle: 'Dipercaya oleh berbagai perusahaan dan institusi terkemuka di Indonesia.',
    kegiatanTitle: 'Blog & Kegiatan',
    kegiatanSubtitle: 'Dokumentasi kegiatan dan audiensi yang telah kami lakukan.',
    selengkapnya: 'Selengkapnya',
    kegiatanNotFound: 'Kegiatan tidak ditemukan.',
    kembaliKeKegiatan: 'Kembali ke Kegiatan',
    produkNotFound: 'Produk tidak ditemukan.',
    kembaliKeProduk: 'Kembali ke Produk',
    kontakTitle: 'Siap Membangun Bersama Kami?',
    kontakSubtitle: 'Hubungi kami hari ini untuk mendiskusikan proyek Anda berikutnya. Tim kami siap membantu mewujudkan visi Anda menjadi kenyataan.',
    alamat: 'PLAZA MEBEL #31-35 Jl. RS Fatmawati Kav 5, Cipete Utara, Kebayoran Baru, RT.1/RW.2, Gandaria Selatan, RT.1/RW.2, Gandaria Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12420 - Indonesia',
    terhubungDenganKami: 'Terhubung dengan Kami',
    terhubungSubtitle: 'Ikuti kami di media sosial untuk mendapatkan pembaruan terbaru.',
    footerText: '© {year} Cemerlang Group. All rights reserved.',
    hubungiViaWa: 'Hubungi Kami',

    // Product Translations
    microsurfacing_ch_15_title: 'Microsurfacing CH-15&trade;',
    microsurfacing_ch_15_desc: 'Lapisan tipis untuk preservasi jalan dengan lalu lintas rendah, menjaga keawetan permukaan jalan.',
    microsurfacing_ch_15_detailed_desc: 'Microsurfacing CH-15™ adalah campuran aspal emulsi polimer yang dirancang khusus untuk preservasi jalan dengan volume lalu lintas ringan hingga sedang. Produk ini berfungsi sebagai lapisan pelindung ekonomis yang efektif untuk mengisi retakan-retakan kecil, memperbaiki kerusakan permukaan akibat oksidasi, dan memberikan lapisan aus baru yang tahan lama. Aplikasinya yang cepat meminimalkan gangguan lalu lintas, menjadikannya solusi ideal untuk program pemeliharaan jalan preventif.\n\nDengan menggunakan agregat halus berkualitas tinggi dan emulsi polimer yang diformulasi secara khusus, CH-15™ mampu mengembalikan tekstur permukaan jalan, meningkatkan ketahanan slip, dan memperbaiki penampilan estetika jalan. Campuran ini diaplikasikan dalam keadaan dingin, yang berarti tidak memerlukan proses pemanasan sehingga lebih ramah lingkungan dan hemat energi. Teknologi ini memastikan adhesi yang kuat pada permukaan jalan lama, mencegah delaminasi dan memperpanjang umur perkerasan.\n\nProduk ini sangat cocok diaplikasikan pada jalan perumahan, jalan kolektor lokal, dan area parkir. Dengan memperpanjang umur layanan jalan hingga 5-7 tahun, Microsurfacing CH-15™ menunda kebutuhan akan perbaikan struktural yang mahal, menjadikannya investasi cerdas untuk pengelolaan aset infrastruktur jalan. Ini adalah langkah proaktif dalam menjaga kualitas jalan dan memastikan keselamatan serta kenyamanan bagi para pengguna.',

    microsurfacing_ch_17_title: 'Microsurfacing CH-17&trade;',
    microsurfacing_ch_17_desc: 'Solusi ideal untuk jalan dengan volume lalu lintas sedang, meningkatkan daya tahan dan kenyamanan berkendara.',
    microsurfacing_ch_17_detailed_desc: 'Microsurfacing CH-17™ menawarkan keseimbangan sempurna antara biaya dan kinerja untuk jalan-jalan arteri sekunder dan kolektor utama yang menanggung beban lalu lintas sedang. Produk ini dirancang untuk memberikan lapisan permukaan yang lebih tebal dan lebih kuat dibandingkan CH-15, sehingga mampu mengatasi tingkat kerusakan permukaan yang lebih signifikan seperti alur (rutting) ringan dan retak yang lebih banyak.\n\nFormula CH-17™ menggunakan kombinasi agregat dengan gradasi yang sedikit lebih kasar dan emulsi polimer dengan kinerja tinggi. Hal ini menghasilkan permukaan dengan tekstur makro yang lebih baik, secara signifikan meningkatkan daya cengkeram (skid resistance) dalam kondisi basah, dan meningkatkan kenyamanan berkendara dengan mengurangi kebisingan. Kekuatan strukturalnya yang lebih tinggi juga memberikan daya tahan superior terhadap deformasi akibat beban lalu lintas yang berulang.\n\nAplikasi ideal untuk Microsurfacing CH-17™ mencakup jalan-jalan perkotaan yang sibuk dan jalan penghubung antar kota. Solusi ini tidak hanya memperbaiki kerusakan yang ada tetapi juga memberikan lapisan pelindung yang tangguh terhadap elemen cuaca dan aus akibat lalu lintas. Ini adalah metode rehabilitasi permukaan yang sangat efisien, memperpanjang umur jalan secara substansial dan meningkatkan keselamatan publik tanpa memerlukan rekonstruksi total.',

    microsurfacing_ch_19_title: 'Microsurfacing CH-19&trade;',
    microsurfacing_ch_19_desc: 'Memberikan perlindungan maksimal untuk jalan raya dan arteri utama dengan lalu lintas padat.',
    microsurfacing_ch_19_detailed_desc: 'Dirancang khusus untuk menghadapi tantangan terberat di jalan raya, jalan tol, dan arteri utama dengan volume lalu lintas tinggi dan beban berat. Microsurfacing CH-19™ adalah solusi preservasi heavy-duty yang memberikan lapisan permukaan yang sangat kuat dan tahan lama, mampu menahan tekanan ekstrem dari lalu lintas komersial dan kendaraan berat.\n\nKeunggulan CH-19™ terletak pada penggunaan agregat berkualitas premium dengan gradasi yang dirancang khusus serta emulsi aspal yang dimodifikasi polimer secara ekstensif. Kombinasi ini menciptakan matriks yang sangat tangguh dan fleksibel, memberikan ketahanan luar biasa terhadap alur permanen (rutting), retak lelah (fatigue cracking), dan abrasi. Permukaannya yang dihasilkan memiliki daya tahan gesek yang tinggi, memastikan standar keselamatan tertinggi bahkan pada kecepatan tinggi.\n\nProduk ini adalah pilihan utama untuk proyek-proyek infrastruktur kritis di mana kinerja jangka panjang dan minimalnya intervensi pemeliharaan adalah prioritas. Microsurfacing CH-19™ secara signifikan memperpanjang siklus hidup perkerasan jalan yang paling vital, melindungi investasi infrastruktur yang besar, dan memastikan kelancaran arus lalu lintas yang menjadi urat nadi perekonomian.',

    microsurfacing_ch_21_title: 'Microsurfacing CH-21&trade;',
    microsurfacing_ch_21_desc: 'Diformulasikan khusus untuk kondisi cuaca ekstrem dan beban berat, seperti pada area industri.',
    microsurfacing_ch_21_detailed_desc: 'Microsurfacing CH-21™ adalah solusi heavy-duty yang diformulasikan untuk area dengan kondisi paling ekstrem, seperti kawasan industri, pelabuhan, terminal peti kemas, dan area pergudangan. Campuran ini dirancang untuk menahan beban statis yang sangat berat, lalu lintas kendaraan lambat yang sering berbelok tajam, serta paparan terhadap tumpahan bahan kimia dan minyak.\n\nProduk ini menggunakan agregat yang sangat keras dan tahan aus dengan gradasi spesifik, dipadukan dengan sistem emulsi polimer yang dirancang untuk kekuatan ultimate dan ketahanan kimia. Hasilnya adalah lapisan permukaan yang hampir kedap air, sangat padat, dan mampu menahan deformasi plastis di bawah tekanan tinggi, bahkan pada suhu lingkungan yang tinggi. Ini mencegah kerusakan struktural pada pondasi jalan akibat beban berat dan penetrasi cairan.\n\nDengan CH-21™, area operasional industri dapat mempertahankan kondisi permukaan yang aman dan efisien untuk waktu yang lebih lama, mengurangi downtime akibat perbaikan, dan melindungi aset perkerasan dari kerusakan dini. Ini adalah solusi rekayasa canggih untuk tantangan infrastruktur industri yang paling menuntut, memberikan ketahanan dan keandalan yang tak tertandingi.',

    microsurfacing_ch_23_title: 'Microsurfacing CH-23&trade;',
    microsurfacing_ch_23_desc: 'Pilihan premium untuk proyek yang membutuhkan presisi tinggi seperti landasan pacu bandara dan sirkuit balap.',
    microsurfacing_ch_23_detailed_desc: 'Untuk aplikasi yang menuntut tingkat presisi, keselamatan, dan kinerja tertinggi, Microsurfacing CH-23™ adalah jawabannya. Diformulasikan secara khusus untuk landasan pacu (runway) dan jalur taksi (taxiway) bandara, serta sirkuit balap profesional, produk ini memenuhi standar internasional yang paling ketat. Tujuannya adalah menciptakan permukaan yang sangat rata, tahan aus, dan memiliki daya cengkeram superior.\n\nCH-23™ menggunakan agregat pilihan yang 100% hasil pemecahan mesin (crushed) dan emulsi polimer dengan reologi yang terkontrol ketat untuk memastikan pengeringan cepat (quick-setting) dan pengembangan kekuatan dini yang tinggi. Hal ini krusial untuk meminimalkan waktu penutupan (downtime) pada fasilitas vital seperti bandara. Permukaannya yang padat juga mencegah kerusakan akibat tumpahan bahan bakar jet dan cairan hidrolik.\n\nPada sirkuit balap, tekstur mikro dan makro yang presisi dari CH-23™ memberikan grip yang konsisten dan dapat diandalkan bagi kendaraan berkecepatan tinggi, sementara pada landasan pacu, ia memastikan pengereman pesawat yang aman dalam segala kondisi cuaca. Ini adalah puncak teknologi microsurfacing, di mana rekayasa material bertemu dengan kebutuhan akan keselamatan dan performa ekstrem.',

    coldmix_ch_24_title: 'Coldmix CH-24&trade;',
    coldmix_ch_24_desc: 'Campuran aspal dingin premium untuk perbaikan cepat pada jalan dengan lalu lintas sedang.',
    coldmix_ch_24_detailed_desc: 'Coldmix CH-24™ adalah solusi perbaikan jalan berupa campuran aspal dingin siap pakai yang praktis dan efisien. Diformulasikan untuk kekuatan dan daya tahan yang lebih baik, produk ini memungkinkan perbaikan lubang, retakan, dan area aus pada perkerasan aspal secara cepat dan permanen, bahkan dalam kondisi cuaca yang kurang ideal seperti lembab atau dingin.\n\nProduk ini dibuat dengan agregat bersih berkualitas tinggi dan bahan pengikat aspal yang dimodifikasi secara khusus, yang memastikan ikatan kuat pada lubang yang ada tanpa memerlukan tack coat dalam banyak kasus. CH-24™ tetap dapat dikerjakan pada suhu lingkungan, menghilangkan bahaya dan biaya yang terkait dengan aspal panas, serta dapat disimpan dalam jangka waktu yang lama sehingga selalu siap digunakan saat dibutuhkan.\n\nIdeal untuk tim pemeliharaan jalan kota, pengelola properti, dan kontraktor, Coldmix CH-24™ secara drastis mengurangi waktu perbaikan dan gangguan lalu lintas. Cukup tuangkan, ratakan, dan padatkan, area yang diperbaiki dapat segera dibuka untuk lalu lintas. Ini adalah solusi andal untuk menjaga jalan tetap aman dan mulus dengan cara yang paling efisien.',

    coldmix_ch_28_title: 'Coldmix CH-28&trade;',
    coldmix_ch_28_desc: 'Solusi aspal dingin heavy-duty untuk perbaikan area industri dan jalan dengan lalu lintas berat.',
    coldmix_ch_28_detailed_desc: 'Coldmix CH-28™ dirancang khusus sebagai material tambalan aspal dingin heavy-duty yang mampu menahan beban lalu lintas berat dan kondisi ekstrem. Produk ini merupakan solusi perbaikan superior untuk jalan raya, jalan tol, area pelabuhan, kawasan industri, dan jembatan timbang di mana material tambalan konvensional seringkali gagal.\n\nFormula CH-28™ menggabungkan agregat yang sangat keras dan bergradasi khusus dengan pengikat aspal berperforma tinggi yang dimodifikasi polimer. Hasilnya adalah tambalan yang setelah dipadatkan, memiliki kekuatan dan stabilitas yang sebanding dengan hot mix asphalt. Ia mampu menahan gaya geser dari manuver truk berat dan deformasi akibat beban yang terus-menerus.\n\nMeskipun memiliki kekuatan tinggi, Coldmix CH-28™ tetap mudah diaplikasikan pada suhu lingkungan, memberikan solusi perbaikan yang cepat dan aman untuk area kritis. Kemampuannya untuk digunakan dalam berbagai kondisi cuaca, termasuk lubang yang tergenang air, menjadikannya produk yang sangat serbaguna dan andal untuk pemeliharaan infrastruktur yang paling menuntut.',

    ecobeton_chrono_title: 'Ecobeton Chrono&trade;',
    ecobeton_chrono_desc: 'Beton cepat kering untuk perbaikan yang efisien dan proyek dengan jadwal ketat.',
    ecobeton_chrono_detailed_desc: 'Ecobeton Chrono™ adalah mortar semen non-penyusutan (non-shrinkage) dengan waktu pengeringan ultra cepat (rapid-setting). Produk ini merupakan terobosan untuk proyek-proyek perbaikan beton yang memerlukan waktu pengerjaan minimal dan pengembalian fungsi area yang cepat. Dalam waktu hanya beberapa jam setelah aplikasi, Chrono™ mencapai kekuatan tekan yang cukup untuk dilalui lalu lintas ringan.\n\nDirancang untuk kemudahan penggunaan, Chrono™ hanya perlu dicampur dengan air untuk menghasilkan mortar dengan konsistensi yang ideal untuk menambal lubang, memperbaiki tepian sambungan yang rusak, atau meratakan permukaan beton. Kemampuannya untuk mengikat kuat pada beton lama dan sifatnya yang tidak menyusut memastikan perbaikan yang tahan lama dan tidak retak.\n\nAplikasi utamanya meliputi perbaikan cepat pada lantai pabrik, gudang, landasan pacu bandara, jalan beton, dan area parkir. Ecobeton Chrono™ adalah solusi andalan ketika jadwal proyek sangat ketat atau ketika downtime operasional harus diminimalkan, memberikan hasil perbaikan struktural yang kuat dan andal dalam waktu singkat.',

    ecobeton_paveshield_chrono_title: 'Ecobeton Paveshield Chrono&trade;',
    ecobeton_paveshield_chrono_desc: 'Pelindung permukaan perkerasan yang cepat kering dan tahan lama.',
    ecobeton_paveshield_chrono_detailed_desc: 'Ecobeton Paveshield Chrono™ adalah pelapis pelindung transparan berbahan dasar air yang dirancang untuk melindungi dan memperpanjang umur perkerasan beton. Produk ini meresap ke dalam permukaan beton, bereaksi secara kimia untuk membentuk lapisan pelindung yang tahan terhadap abrasi, noda, garam de-icing, dan kerusakan akibat siklus beku-cair (freeze-thaw).\n\nTidak seperti pelapis permukaan tradisional yang membentuk film, Paveshield Chrono™ menjadi bagian integral dari beton itu sendiri, sehingga tidak akan mengelupas atau terkelupas. Formulanya yang \'chrono\' atau cepat kering memungkinkan area yang dilapisi dapat digunakan kembali dengan cepat. Produk ini juga meningkatkan estetika dengan memberikan sedikit efek kilap (sheen) sambil mempertahankan tampilan alami dan tekstur beton.\n\nSangat ideal untuk trotoar, plaza perkotaan, jalan setapak, area parkir, dan garasi. Paveshield Chrono™ membuat permukaan beton lebih mudah dibersihkan, mengurangi pertumbuhan lumut dan jamur, serta memberikan perlindungan jangka panjang terhadap degradasi akibat cuaca dan lalu lintas pejalan kaki maupun kendaraan ringan.',

    ecobeton_vetrofluid_title: 'Ecobeton Vetrofluid&trade;',
    ecobeton_vetrofluid_desc: 'Pelapis multifungsi untuk proteksi, pengerasan, dan waterproofing beton.',
    ecobeton_vetrofluid_detailed_desc: 'Ecobeton Vetrofluid™ adalah larutan silikat natrium yang dimodifikasi secara khusus, yang berfungsi sebagai agen waterproofing dan pengeras beton seumur hidup (lifetime waterproofing and hardener). Ketika diaplikasikan, Vetrofluid™ meresap jauh ke dalam matriks kapiler beton dan bereaksi dengan kalsium hidroksida (lime) untuk membentuk kalsium silikat hidrat yang stabil dan tidak larut.\n\nReaksi ini secara permanen menyegel pori-pori dan retakan mikro di dalam beton, membuatnya kedap air dan uap air dari segala arah, baik tekanan positif maupun negatif. Selain itu, proses ini secara signifikan meningkatkan kepadatan dan kekerasan permukaan beton, membuatnya jauh lebih tahan terhadap abrasi, debu, dan serangan kimia. Vetrofluid™ bersifat transparan, tidak mengubah penampilan beton, dan memungkinkan beton untuk \'bernapas\'.\n\nProduk ini adalah solusi definitif untuk masalah kelembaban pada struktur beton seperti basement, terowongan, tangki air, dan fondasi. Vetrofluid™ memberikan perlindungan permanen dari dalam, menghentikan kerusakan akibat penetrasi air dan korosi pada tulangan baja, serta memastikan durabilitas maksimal dari struktur beton.',

    sabda_seal_ch_27_title: 'Sabda Seal CH-27&trade;',
    sabda_seal_ch_27_desc: 'Pelapis kedap air serbaguna untuk perlindungan menengah pada berbagai permukaan.',
    sabda_seal_ch_27_detailed_desc: 'Sabda Seal CH-27™ adalah pelapis waterproofing fleksibel berbahan dasar akrilik polimer yang dirancang untuk aplikasi serbaguna. Produk ini memberikan lapisan membran kedap air yang mulus (seamless) dan elastis, sangat efektif untuk melindungi atap dak beton, dinding luar, talang, dan area basah seperti kamar mandi dari rembesan air dan kelembaban.\n\nSetelah mengering, CH-27™ membentuk lapisan yang tangguh namun tetap fleksibel, mampu menjembatani retak-retak rambut dan menahan pergerakan minor pada struktur. Produk ini tahan terhadap sinar UV dan perubahan cuaca, sehingga tidak mudah rusak atau getas saat terpapar sinar matahari langsung, menjadikannya pilihan yang andal untuk aplikasi eksterior.\n\nKemudahan aplikasinya—cukup dengan kuas, rol, atau spray—membuatnya cocok untuk proyek profesional maupun do-it-yourself. Sabda Seal CH-27™ memberikan solusi waterproofing yang ekonomis dan andal, menjaga bangunan tetap kering, mencegah pertumbuhan jamur, dan melindungi integritas struktural dari kerusakan akibat air.',

    sabda_seal_ch_29_title: 'Sabda Seal CH-29&trade;',
    sabda_seal_ch_29_desc: 'Pelapis kedap air heavy-duty untuk area yang membutuhkan proteksi ekstra seperti kolam renang.',
    sabda_seal_ch_29_detailed_desc: 'Sabda Seal CH-29™ adalah sistem waterproofing dua komponen heavy-duty berbahan dasar semen dan polimer, yang dirancang untuk area terendam air secara konstan atau yang mengalami tekanan hidrostatik. Formulanya yang superior memberikan lapisan kedap air yang sangat kuat dan tahan lama, ideal untuk aplikasi kritis seperti kolam renang, tangki air (ground water tank), basement, dan bendungan.\n\nKetika dicampur, kedua komponen tersebut membentuk adukan yang mudah diaplikasikan dan memiliki daya lekat luar biasa pada substrat beton. Setelah mengering, lapisan ini menjadi bagian integral dari struktur, mampu menahan tekanan air positif maupun negatif. Sifatnya yang tahan terhadap bahan kimia, seperti klorin di kolam renang, memastikan kinerja jangka panjang tanpa degradasi.\n\nCH-29™ tidak beracun dan aman untuk kontak dengan air minum setelah kering sempurna, menjadikannya pilihan yang sesuai untuk reservoir air bersih. Untuk area yang membutuhkan perlindungan waterproofing maksimal dan keandalan tanpa kompromi, Sabda Seal CH-29™ adalah standar industri yang memberikan ketenangan pikiran.',

    sabda_seal_ch_31_title: 'Sabda Seal CH-31&trade;',
    sabda_seal_ch_31_desc: 'Solusi premium dengan elastisitas tinggi untuk struktur yang mengalami pergerakan.',
    sabda_seal_ch_31_detailed_desc: 'Sabda Seal CH-31™ adalah pelapis waterproofing premium dengan tingkat elastisitas dan fleksibilitas yang sangat tinggi. Dirancang khusus untuk struktur yang rentan terhadap pergerakan, getaran, atau ekspansi dan kontraksi termal, seperti atap datar yang luas, sambungan dilatasi (expansion joints), dan jembatan. Kemampuannya untuk meregang dan kembali ke bentuk semula memungkinkannya menjembatani retakan dinamis tanpa sobek.\n\nProduk ini berbahan dasar hybrid polymer canggih yang menggabungkan keunggulan kekuatan dan ketahanan cuaca. CH-31™ membentuk membran kedap air yang sangat tangguh, tahan terhadap genangan air, paparan UV ekstrem, dan polusi industri. Lapisan ini menjaga integritasnya dalam rentang suhu yang luas, dari dingin membeku hingga panas terik.\n\nAplikasinya menghasilkan lapisan pelindung yang mulus tanpa sambungan, menghilangkan titik lemah yang biasa ditemukan pada sistem membran konvensional. Untuk proyek-proyek di mana pergerakan struktural menjadi perhatian utama dan kegagalan waterproofing bukanlah pilihan, Sabda Seal CH-31™ memberikan solusi perlindungan dinamis yang paling andal dan tahan lama.',

    atomized_microseal_title: 'Atomized Microseal',
    atomized_microseal_desc: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal terhadap cuaca dan abrasi.',
    atomized_microseal_detailed_desc: 'Atomized Microseal merupakan sebuah revolusi dalam teknologi pelapisan pelindung. Menggunakan proses atomisasi bertekanan tinggi, produk ini diaplikasikan sebagai kabut ultra-halus yang mampu menembus jauh ke dalam pori-pori mikro permukaan beton atau aspal. Ini menciptakan lapisan pelindung yang bukan hanya menempel di permukaan, tetapi menyatu dengan substrat itu sendiri.\n\nTeknologi ini menghasilkan lapisan pelindung yang sangat tipis namun sangat padat dan tahan lama. Ia secara efektif menyegel permukaan dari penetrasi air, minyak, garam, dan polutan lainnya, sekaligus secara dramatis meningkatkan ketahanan terhadap abrasi dan aus akibat lalu lintas. Karena lapisannya yang tipis, tekstur dan warna asli permukaan tetap terjaga, menjadikannya ideal untuk perkerasan dekoratif atau arsitektural.\n\nAplikasi Atomized Microseal sangat cepat dan efisien, mencakup area yang luas dalam waktu singkat dengan gangguan minimal. Sangat cocok untuk proteksi jalan raya, jembatan, area parkir bertingkat, dan plaza pejalan kaki. Ini adalah metode canggih untuk memperpanjang umur infrastruktur secara signifikan sambil mempertahankan estetika aslinya.',

    coldplast_title: 'Coldplast',
    coldplast_desc: 'Material perkerasan dingin termoplastik untuk marka jalan, area parkir, dan zona pejalan kaki.',
    coldplast_detailed_desc: 'Coldplast adalah material marka jalan dua komponen berperforma tinggi yang diaplikasikan pada suhu lingkungan (dingin). Ini menawarkan alternatif yang lebih aman, cepat, dan seringkali lebih tahan lama dibandingkan termoplastik yang diaplikasikan secara panas. Material ini terdiri dari resin reaktif dan bubuk pengeras yang, ketika dicampur, mengalami reaksi kimia untuk membentuk marka yang sangat keras dan melekat kuat pada permukaan jalan.\n\nKeunggulan utama Coldplast adalah daya tahannya yang luar biasa terhadap aus akibat lalu lintas, minyak, bahan bakar, dan kondisi cuaca ekstrem. Produk ini dapat diaplikasikan dengan ketebalan yang bervariasi untuk menciptakan efek profil atau agregat anti-selip, sehingga meningkatkan keselamatan bagi pengendara dan pejalan kaki. Visibilitasnya, baik siang maupun malam (retroreflektivitas), sangat tinggi dan bertahan lama.\n\nColdplast sangat ideal untuk aplikasi di area dengan lalu lintas padat di mana daya tahan adalah kunci, seperti zebra cross, garis berhenti, simbol (misalnya, panah atau logo sepeda), dan marka di persimpangan sibuk. Aplikasinya yang tidak memerlukan peralatan pemanas yang besar membuatnya lebih efisien untuk proyek-proyek kecil hingga menengah.',

    sami_waterproofing_title: 'SAMI Waterproofing',
    sami_waterproofing_desc: 'Sistem membran interlayer penyerap stres untuk waterproofing jalan dan jembatan.',
    sami_waterproofing_detailed_desc: 'SAMI, atau Stress Absorbing Membrane Interlayer, adalah sistem rekayasa canggih yang dirancang untuk melindungi struktur perkerasan dari dua musuh terbesarnya: air dan stres. Sistem ini terdiri dari aplikasi aspal polimer elastis yang tebal, diikuti dengan penaburan agregat panas, yang ditempatkan di antara lapisan pondasi dan lapisan permukaan aspal.\n\nFungsi utama SAMI adalah sebagai lapisan kedap air yang tangguh, mencegah air permukaan meresap ke dalam lapisan pondasi dan subgrade, yang dapat menyebabkan kerusakan struktural parah. Kedua, sifatnya yang elastis memungkinkannya menyerap dan meredam stres yang disebabkan oleh pergerakan pada sambungan atau retakan di lapisan bawah, sehingga secara efektif mencegah retak reflektif (reflective cracking) mencapai permukaan.\n\nSistem ini sangat krusial untuk perkerasan di atas dek jembatan beton, di mana pergerakan termal dan lendutan sangat umum terjadi. Dengan mengisolasi lapisan permukaan dari pergerakan di bawahnya dan menjaga lapisan struktural tetap kering, SAMI secara dramatis memperpanjang umur layanan jalan dan jembatan, mengurangi biaya siklus hidup, dan meningkatkan keandalan infrastruktur.',

    coating_title: 'Coating',
    coating_desc: 'Berbagai jenis pelapis pelindung industrial untuk daya tahan ekstra pada beton dan baja.',
    coating_detailed_desc: 'Kami menawarkan rangkaian lengkap solusi pelapisan (coating) industrial yang dirancang untuk melindungi aset berharga Anda dari lingkungan yang paling korosif dan menuntut. Solusi kami mencakup berbagai teknologi, termasuk epoxy, polyurethane, dan polyurea, masing-masing dengan keunggulan unik untuk aplikasi spesifik.\n\nPelapis epoxy kami memberikan permukaan yang keras, tahan abrasi, dan tahan kimia, ideal untuk lantai pabrik, gudang, dan garasi. Pelapis polyurethane menawarkan fleksibilitas yang sangat baik dan ketahanan UV yang superior, menjadikannya pilihan tepat untuk area eksterior dan struktur yang terpapar sinar matahari. Untuk perlindungan ultimate, pelapis polyurea kami memberikan pengeringan super cepat, elastisitas luar biasa, dan ketahanan benturan yang tak tertandingi, cocok untuk lapisan tangki, containment sekunder, dan dek parkir.\n\nTim ahli kami akan membantu Anda memilih sistem pelapisan yang paling sesuai dengan kebutuhan operasional, paparan kimia, dan persyaratan estetika proyek Anda. Dengan persiapan permukaan yang tepat dan aplikasi profesional, coating kami memberikan hasil akhir yang tidak hanya fungsional dan tahan lama tetapi juga meningkatkan penampilan fasilitas Anda.',

    geone_title: 'Geone',
    geone_desc: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah pada proyek konstruksi.',
    geone_detailed_desc: 'Geone adalah merek kami untuk rangkaian lengkap produk geosintetik, material rekayasa polimerik yang digunakan untuk memecahkan berbagai masalah geoteknik dan sipil. Produk-produk ini, ketika digunakan bersama tanah atau batuan, mampu meningkatkan kinerja dan keandalan proyek konstruksi secara signifikan sambil seringkali mengurangi biaya dan dampak lingkungan.\n\nRangkaian produk kami meliputi Geotekstil (non-woven dan woven) untuk fungsi separasi, filtrasi, dan perkuatan; Geogrid (biaxial dan uniaxial) untuk stabilisasi dasar jalan dan perkuatan lereng serta dinding penahan tanah; dan Geokomposit untuk fungsi drainase bawah permukaan. Material-material ini dirancang untuk bekerja di bawah tanah, meningkatkan daya dukung tanah lunak, mencegah erosi, dan mengelola aliran air.\n\nDengan menggunakan produk Geone, para insinyur dapat merancang dinding yang lebih curam, membangun jalan di atas tanah yang buruk, dan membuat sistem drainase yang lebih efisien. Ini adalah solusi inovatif yang memungkinkan pembangunan di lokasi yang sebelumnya dianggap tidak memungkinkan, mempercepat waktu konstruksi, dan menciptakan struktur yang lebih tahan lama dan berkelanjutan.',

    marka_jalan_title: 'Marka Jalan',
    marka_jalan_desc: 'Cat marka jalan termoplastik dan coldplastic berkualitas tinggi untuk visibilitas dan keselamatan.',
    marka_jalan_detailed_desc: 'Keselamatan jalan sangat bergantung pada marka jalan yang jelas dan terlihat dalam segala kondisi. Kami menyediakan solusi marka jalan komprehensif yang mencakup material termoplastik (hot-applied thermoplastic) dan coldplastic (cold-applied plastic), yang keduanya memenuhi standar keselamatan dan durabilitas tertinggi.\n\nMaterial termoplastik kami diaplikasikan dalam keadaan leleh pada suhu tinggi, membentuk ikatan fusi yang kuat dengan permukaan aspal. Ini adalah pilihan standar industri untuk marka jalan raya karena daya tahannya yang sangat baik dan kemampuan untuk menahan manik-manik kaca (glass beads) untuk retroreflektivitas malam hari. Material ini cepat kering, memungkinkan lalu lintas dibuka kembali dengan cepat.\n\nSebagai alternatif, material coldplastic dua komponen kami menawarkan daya tahan yang lebih superior, terutama di area dengan gesekan tinggi seperti zebra cross dan persimpangan. Diaplikasikan pada suhu lingkungan, coldplastic lebih aman bagi pekerja dan dapat digunakan untuk membuat marka struktural atau berprofil untuk meningkatkan kewaspadaan pengendara. Kedua solusi ini memastikan marka jalan yang tahan lama, sangat terlihat, dan berkontribusi langsung pada peningkatan keselamatan di jalan.',

    // Project Translations
    project_1_title: 'Pekerjaan Lapisan Microsurfacing & Cat Marka di Bandara Rampi',
    project_1_category: 'Bandara',
    project_2_title: 'Pekerjaan Lapisan Microsurfacing di Balapan & Tugu Malang',
    project_2_category: 'Infrastruktur',
    project_3_title: 'Pekerjaan Pengecatan Marka di Bandara Soekarno-Hatta Ultima 3',
    project_3_category: 'Bandara',
    project_4_title: 'Pekerjaan Lapisan Microsurfacing di Area Stadion Gelora Bung Karno Jakarta',
    project_4_category: 'Fasilitas Olahraga',
    project_5_title: 'Pekerjaan Lapisan Microsurfacing Tol Road Bali',
    project_5_category: 'Jalan Tol',
    project_6_title: 'Pekerjaan Lapisan Microsurfacing di Istana Kepresidenan Republik Indonesia',
    project_6_category: 'Gedung Pemerintahan',
    project_7_title: 'Pekerjaan Lapisan Microsurfacing di Sentul Circuit A dan B',
    project_7_category: 'Sirkuit Balap',
    project_8_title: 'Pekerjaan Cat Barrier di Tol Manado Bitung',
    project_8_category: 'Jalan Tol',
    project_9_title: 'Pekerjaan Lapisan Microsurfacing di Area Halaman Kejaksaan Tinggi Jakarta',
    project_9_category: 'Gedung Pemerintahan',
    project_10_title: 'Pekerjaan Lapisan Microsurfacing di Tol Becakayu Jakarta',
    project_10_category: 'Jalan Tol',
    project_11_title: 'Pekerjaan Lapisan Microsurfacing di Landasan Pacu Halim Perdana Kusuma Jakarta',
    project_11_category: 'Bandara',
    project_12_title: 'Pekerjaan Lapisan Microsurfacing di Gereja YONPOMAD Jonggol Jawa Barat',
    project_12_category: 'Tempat Ibadah',
    
    // Activity Translations
    activity_1_title: 'Audiensi di Dinas PUPR Kota Bogor',
    activity_1_desc: 'Tim Cemerlang Group melakukan audiensi dengan perwakilan dari Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kota Bogor untuk membahas potensi kolaborasi dalam proyek infrastruktur jalan di wilayah Kota Bogor.',
    activity_2_title: 'Audiensi di Dinas PUPR Kota Tangerang',
    activity_2_desc: 'Pertemuan strategis dengan Dinas PUPR Kota Tangerang untuk mempresentasikan solusi inovatif kami dalam pemeliharaan dan peningkatan kualitas jalan kota, serta menjajaki peluang kerjasama di masa depan.',
    activity_3_title: 'Audiensi di Dinas PUPR DKI Jakarta',
    activity_3_desc: 'Diskusi mendalam bersama Dinas PUPR DKI Jakarta mengenai penerapan teknologi microsurfacing dan produk aspal berkualitas tinggi untuk mendukung program infrastruktur Ibukota.',
    activity_4_title: 'Audiensi di Kementerian PUPR Pusat Jakarta',
    activity_4_desc: 'Cemerlang Group berkesempatan untuk berdialog dengan pejabat di Kementerian PUPR tingkat pusat, menyampaikan visi kami dalam mendukung pembangunan infrastruktur nasional yang berkelanjutan.',
    activity_5_title: 'Mock Up Microsurfacing di Tol Becakayu',
    activity_5_desc: 'Demonstrasi dan uji coba (mock up) aplikasi lapisan Microsurfacing di ruas Tol Bekasi-Cawang-Kampung Melayu (Becakayu) untuk menunjukkan kualitas dan keunggulan produk kami secara langsung di lapangan.',
    activity_6_title: 'Mock Up di Revo Mall Kota Bekasi',
    activity_6_desc: 'Aplikasi percontohan produk perkerasan kami di area parkir Revo Mall, Bekasi. Proyek ini bertujuan untuk menunjukkan daya tahan dan estetika solusi kami untuk area komersial.',
    activity_7_title: 'Mock Up di Pelabuhan Patimbang Subang',
    activity_7_desc: 'Uji coba aplikasi produk heavy-duty kami di area Pelabuhan Patimban, Subang, yang memiliki lalu lintas kendaraan berat, untuk membuktikan ketahanan produk dalam kondisi ekstrem.',
    activity_8_title: 'Audiensi di Dinas PUPR Kota Sawahlunto',
    activity_8_desc: 'Melakukan presentasi dan diskusi dengan Dinas PUPR Kota Sawahlunto, Sumatera Barat, untuk memperkenalkan produk-produk unggulan Cemerlang Group dan menjajaki penerapan di proyek-proyek daerah.',

  },
};

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations['id'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
