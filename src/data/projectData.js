const BASE = import.meta.env.BASE_URL;

export const projectData = {
  name: "YOO ONE",
  tagline: "Tower 2 – Serenity | NIBM, Pune",
  eyebrow: "NIBM's Only Global Address",
  reraPhase1: "P52100045735 (Sold Out)",
  reraPhase2: "PR1262022600430",
  possession: "Dec 2029",
  status: "Under Construction (Show Flat Ready)",
  phone: "+91 83088 85555",
  phoneFormatted: "+91 83088 85555",
  whatsappNumber: "918308885555",
  address: "YOO ONE Sales Lounge, NIBM Road, Pune – 411048",
  
  heroSlides: [
    {
      image: `${BASE}assets/hero-forest.jpg`,
      title: "Forest View 3.5 & 4.5 Bed Homes",
      subtitle: "Surrounded by 200 Acres of Protected Reserved Forest",
      alt: "YOO ONE Towers amidst 200 acres forest view"
    },
    {
      image: `${BASE}assets/building-exterior.jpg`,
      title: "Iconic Architectural Presence",
      subtitle: "Master Planned by Morphogenesis & Tricon",
      alt: "YOO ONE building exterior elevation"
    },
    {
      image: `${BASE}assets/rooftop-pool.jpg`,
      title: "Infinity-Edge Horizon Pool",
      subtitle: "Where Water, Sky and Forest Horizon Merge",
      alt: "Rooftop infinity edge swimming pool"
    },
    {
      image: `${BASE}assets/rooftop-terrace.jpg`,
      title: "1.5-Acre Rooftop Sky Bar & Terrace",
      subtitle: "Pune's Most Exclusive Sky-High Entertainment Realm",
      alt: "1.5 Acre Rooftop Sky Bar & Terrace"
    }
  ],

  stats: [
    { num: "6.75", label: "Acres", desc: "Expansive gated private enclave" },
    { num: "200", label: "Acres Forest", desc: "Protected green views forever" },
    { num: "4", label: "Towers (21 Fl.)", desc: "Low density, just 4 homes per floor" },
    { num: "1.5", label: "Acre Sky Realm", desc: "Rooftop terrace, pool & sky bar" },
    { num: "8,500", label: "Sq.Ft Clubhouse", desc: "Curated lifestyle & wellness" },
    { num: "294", label: "Exclusive Units", desc: "Private community living" }
  ],

  configurations: [
    {
      id: "3.5bhk-s03",
      type: "3.5 BHK",
      series: "Series 03 & 04 (Tower 2 Serenity)",
      tag: "Signature Residence",
      carpet: "1,544 sq.ft (143.42 sqm)",
      balcony: "Dedicated Balcony & Utility",
      price: "₹3.01 Cr* Onwards",
      priceNote: "All Inclusive CLP Scheme",
      bedrooms: "3 Bedrooms + Study",
      toilets: "3 Bathrooms",
      view: "Forest & Valley View",
      planImg: `${BASE}assets/plan-3bhk-s03.png`,
      description: "Thoughtfully configured layout featuring expansive living-dining space, dedicated study/work room, master bedroom with panoramic balcony, and complete privacy."
    },
    {
      id: "3.5bhk-s01",
      type: "3.5 BHK (Grande)",
      series: "Series 01 & 02 (Tower 2 Serenity)",
      tag: "Expanded Luxury",
      carpet: "1,689 – 1,901 sq.ft (176.58 sqm)",
      balcony: "Extended Living Deck & Dry Balcony",
      price: "₹3.25 Cr* Onwards",
      priceNote: "All Inclusive CLP Scheme",
      bedrooms: "3.5 Bed + Powder Room",
      toilets: "4 Bathrooms",
      view: "Sahyadri Hills & Central Podium",
      planImg: `${BASE}assets/plan-3bhk-s01.png`,
      description: "Generously proportioned residences offering expansive double-balcony layouts, personal lounge area, walk-in dresser provisions, and floor-to-ceiling French windows."
    },
    {
      id: "4.5bhk-s01",
      type: "4.5 BHK",
      series: "Series 01 & 02 (Tower 2 Serenity)",
      tag: "Palatial Reserve",
      carpet: "2,138 – 2,333 sq.ft (198.66 sqm)",
      balcony: "Wrap-around Horizon Deck",
      price: "₹3.69 Cr* Onwards",
      priceNote: "All Inclusive CLP Scheme",
      bedrooms: "4 Bedrooms + Servant/Study",
      toilets: "5 Bathrooms",
      view: "270° Forest & Skyline Panorama",
      planImg: `${BASE}assets/plan-4bhk-s01.png`,
      description: "Our crowning residences with grand entrance foyer, massive master suite, dedicated staff quarters, and floor-to-ceiling glass providing seamless forest panoramas."
    }
  ],

  realms: [
    {
      level: "Level 03 — Sky Realm",
      title: "Above the Ordinary",
      subtitle: "1.5 Acres of Rooftop Luxury in the Sky",
      image: `${BASE}assets/rooftop-terrace.jpg`,
      desc: "Rise above the city's chaos into an elevated world of fresh mountain air, endless sunsets and peaceful moments overlooking 200 acres of forest greens.",
      amenities: [
        "Infinity-Edge Horizon Swimming Pool",
        "Rooftop Restaurant & Sunset Sky Bar",
        "Stargazing Deck & Sky Promenade",
        "Open-Air Yoga & Meditation Deck",
        "Barbecue Party Decks & Private Lounges",
        "Jacuzzi & Temperature Controlled Spa"
      ]
    },
    {
      level: "Level 02 — Podium Realm",
      title: "Wellness & Togetherness",
      subtitle: "Where Every Evening Becomes a Memory",
      image: `${BASE}assets/amenities-overview.jpg`,
      desc: "A vehicle-free realm dedicated to healthy holistic living, community interaction, and natural play spaces surrounded by oxygen-generating plantations.",
      amenities: [
        "Globally-Inspired Luxury Wellness Spa",
        "Hi-Tech Indoor & Outdoor Fitness Gym",
        "Pod Seating & Shaded Cabanas",
        "Open-Air Amphitheatre for Performances",
        "Acupressure Reflexology Walkway",
        "Skating Arena & Natural Play Zones"
      ]
    },
    {
      level: "Level 01 — Ground Realm",
      title: "8,500 Sq.Ft Clubhouse & Sport",
      subtitle: "Where Childhood and Community Flourish",
      image: `${BASE}assets/hero-forest.jpg`,
      desc: "An expansive ground oasis featuring grand clubhouse lounges, professional sporting facilities, pet parks, and lush botanical gardens.",
      amenities: [
        "8,500 sq.ft International Designer Clubhouse",
        "Pickleball Court & Multipurpose Sports Turf",
        "Lush Landscaped Party Lawn & Gazebos",
        "Children's Sensory Adventure Arena",
        "Senior Citizens' Tranquility Enclave",
        "Tensile Canopy Walkway & Jogging Track"
      ]
    }
  ],

  gallery: [
    {
      image: `${BASE}assets/hero-forest.jpg`,
      title: "Forest Backdrop",
      category: "Exterior & Nature",
      caption: "Panoramic views of 200 acres of reserved forest and Sahyadri Hills"
    },
    {
      image: `${BASE}assets/building-exterior.jpg`,
      title: "Tower Elevation",
      category: "Exterior & Nature",
      caption: "Contemporary international facade designed by Morphogenesis"
    },
    {
      image: `${BASE}assets/rooftop-pool.jpg`,
      title: "Infinity Pool",
      category: "Rooftop Realm",
      caption: "Infinity-edge pool dissolving boundaries between water and forest"
    },
    {
      image: `${BASE}assets/rooftop-terrace.jpg`,
      title: "1.5-Acre Sky Bar",
      category: "Rooftop Realm",
      caption: "Exclusive rooftop terrace and sunset dining lounge"
    },
    {
      image: `${BASE}assets/living-hall.jpg`,
      title: "Grand Living Hall",
      category: "Interiors",
      caption: "Interior styling inspiration by Sussanne Khan for YOO"
    },
    {
      image: `${BASE}assets/french-windows.jpg`,
      title: "Floor-to-Ceiling Windows",
      category: "Interiors",
      caption: "Seamless light and uninterrupted green perspective"
    }
  ],

  connectivity: {
    schools: [
      { name: "The Bishop's School (NIBM)", time: "3 mins" },
      { name: "EuroKids Preschool", time: "5 mins" },
      { name: "Sanskriti School", time: "7 mins" },
      { name: "Vibgyor High School", time: "10 mins" },
      { name: "Delhi Public School (DPS)", time: "12 mins" }
    ],
    healthcare: [
      { name: "Ruby Hall Clinic (Wanowrie)", time: "10 mins" },
      { name: "Inamdar Multispeciality Hospital", time: "12 mins" },
      { name: "Noble Hospital, Hadapsar", time: "15 mins" },
      { name: "Command Hospital", time: "15 mins" }
    ],
    business: [
      { name: "Magarpatta Cybercity", time: "20 mins" },
      { name: "SP Infocity (Phursungi)", time: "18 mins" },
      { name: "Cerebrum IT Park, Kalyani Nagar", time: "25 mins" },
      { name: "Kharadi EON Free Zone", time: "30 mins" }
    ],
    leisure: [
      { name: "Corinthians Club & Resort", time: "5 mins" },
      { name: "Royal Heritage Mall & INOX", time: "6 mins" },
      { name: "Dorabjee's Royale Heritage", time: "6 mins" },
      { name: "Connplex Smart Cinemas", time: "8 mins" },
      { name: "Country Club", time: "10 mins" }
    ],
    transit: [
      { name: "NIBM Undri Junction", time: "3 mins" },
      { name: "MG Road / Camp Commercial District", time: "15 mins" },
      { name: "Pune Railway Station", time: "25 mins" },
      { name: "Pune International Airport", time: "35 mins" }
    ]
  },

  specifications: [
    { title: "Doors & Locks", desc: "45mm Fire-Rated Doors with Durian Digital Mortise Smart Locks with Fingerprint Scanner" },
    { title: "Windows & Facade", desc: "Floor-to-ceiling French windows with facade-integrated toughened glass railings" },
    { title: "Waterproofing", desc: "Comprehensive chemical waterproofing across all bathrooms, utility balconies, and sky decks" },
    { title: "Electrical & Home Tech", desc: "Concealed copper wiring with modular switches, EV charging points, and home automation ready" }
  ]
};
