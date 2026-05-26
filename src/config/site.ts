// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'FAQ',       href: '#faq' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'Marcelo-Service MS',
    tagline:  'Votre partenaire de confiance pour tous vos besoins en habitat',
    industry: 'plombier',
    icon:     'drop',
    phone:    '07 68 18 81 24',
    email:    'contact@marcelo-service-ms.fr',
    address: {
      street:     '3 rue Clairs Logis',
      city:       'Saint Gaudens',
      postalCode: '31800',
      country:    'FR',
    },
    openingHours: {
      monday:    '00:00-23:59',
      tuesday:   '00:00-23:59',
      wednesday: '00:00-23:59',
      thursday:  '00:00-23:59',
      friday:    '00:00-23:59',
      saturday:  '00:00-23:59',
      sunday:    '00:00-23:59',
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Intervention Rapide 24/7',
    urgency: {
      active:    true,
      label:     'Urgence 24h/24 & 7j/7',
      phone:     '07 68 18 81 24',
    },
    serviceArea: [
      'Saint Gaudens',
      'Valentine',
      'Miramont de Comminges',
      'Haute-Garonne (31)',
    ],
    certifications: [
      { label: 'Artisan Certifié', sublabel: 'Inscrit au répertoire des métiers', icon: '✅' },
      { label: 'Garantie décennale', sublabel: 'Assurance RC Pro incluse', icon: '🛡️' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#1d62c8',   // Bleu plomberie
    primaryDark:     '#1550a8',
    primarySoft:     '#dbeafe',
    secondaryColor:  '#0f172a',
    accentColor:     '#f08c00',   // Orange urgence
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | Marcelo-Service MS',
    defaultTitle:       'Marcelo-Service MS — Plombier Chauffagiste à Saint Gaudens',
    defaultDescription: 'Découvrez Marcelo-Service MS à Saint Gaudens : vente et installation de ventilation, climatisation, chauffage. Création de cuisines/salles de bain, dépannage plomberie 24h/24.',
    keywords: [
      'plombier Saint Gaudens',
      'dépannage plomberie 24h/24',
      'installation climatisation',
      'chauffage Saint Gaudens',
      'rénovation salle de bain',
      'installation cuisine',
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://marcelo-service-ms.fr',
    ogImage:             '/assets/og-image.jpg',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'B',
      services:     'A',
      about:        'B',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Découvrez Marcelo-Service MS à Saint Gaudens : vente et installation de ventilation, climatisation, chauffage.',
    },
    services: {
      slug:        '/services',
      title:       'Nos services',
      description: 'Plomberie, chauffage, climatisation et rénovation de salles de bain à Saint Gaudens.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'Marcelo-Service MS, artisan plombier chauffagiste certifié.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Actualités et conseils plomberie et chauffage.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Découvrez nos projets récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez Marcelo-Service MS pour un dépannage ou un devis gratuit.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       false,
    testimonials:  false,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {
    hero: {
      eyebrow:  'PLOMBERIE, CHAUFFAGE & CLIMATISATION',
      h1:       'Votre Confort Thermique & Sanitaire à Saint Gaudens',
      subtitle: 'Marcelo-Service MS vous accompagne dans l\'installation et le dépannage 24h/24 de votre plomberie, chauffage, climatisation, et l\'aménagement de vos cuisines et salles de bain.',
      image:    '/assets/hero-marcelo-ms.png',
      cta1:     { label: 'Contactez-nous (Devis gratuit)', href: '#contact' },
      cta2:     { label: 'Nos prestations', href: '#services' },
      trust:    ['Dépannage 24h/24', 'Artisan Certifié', 'Intervention Rapide'],
      badge:    { label: 'Dépannage', value: '24/7', sub: 'Urgence plomberie' },
      infoCard: { status: 'Disponible', hours: 'Lun–Dim · 24h/24', location: 'Saint Gaudens' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Des solutions adaptées à vos besoins en habitat',
      subtitle: 'Nous transformons votre espace avec des équipements de qualité, pour un confort optimal en toute saison.',
      items: [
        {
          icon:  'drop',
          title: 'Plomberie & Dépannage 24h/24',
          text:  'Nos plombiers expérimentés assurent un service de dépannage rapide et efficace pour toutes vos urgences, fuites, et problèmes de tuyauterie, de jour comme de nuit.',
          link:  'Nous contacter →',
          tag:   'Urgence 24/7',
          features: ['Détection de fuite d\'eau', 'Débouchage canalisations', 'Réparation sanitaires'],
        },
        {
          icon:  'thermometer',
          title: 'Chauffage & Climatisation',
          text:  'Vente et installation de systèmes de ventilation, climatisation et équipements de chauffage performants pour garantir votre confort été comme hiver.',
          link:  'Nous contacter →',
          tag:   'Installation & Entretien',
          features: ['Chauffe-eau (gaz, thermodynamique)', 'Climatisation réversible', 'Systèmes de ventilation'],
        },
        {
          icon:  'house',
          title: 'Cuisines & Salles de Bain',
          text:  'Transformez vos cuisines et salles de bain avec nos meubles de qualité, conçus pour allier esthétique moderne et fonctionnalité au quotidien.',
          link:  'Nous contacter →',
          tag:   'Aménagement complet',
          features: ['Rénovation salle de bain', 'Installation de douche à l\'italienne', 'Pose de cuisine complète'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos de nous',
      title:   'Marcelo-Service MS : L\'Expertise à votre service',
      text: [
        'Découvrez Marcelo-Service (MS), votre partenaire de confiance pour tous vos besoins en habitat à Saint Gaudens et ses environs. En tant qu\'artisan certifié, nous mettons un point d\'honneur à fournir un travail soigné, durable et conforme à vos attentes.',
        'Que ce soit pour une urgence de plomberie en plein milieu de la nuit, l\'installation d\'une climatisation ou la rénovation complète de votre salle de bain, choisissez MS pour un accompagnement personnalisé et des solutions sur-mesure.',
      ],
      stats: [
        { value: '24/7',   label: 'Dépannage' },
        { value: '100%',   label: 'Personnalisé' },
        { value: '31',     label: 'Haute-Garonne' },
      ],
      cta:    { label: 'Demander un devis', href: '#contact' },
      image:  '/assets/services-marcelo-ms.png',
      author: { name: 'Marcelo-Service MS', role: 'Artisan Plombier Chauffagiste', image: '/assets/images/placeholder-portrait.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que disent nos clients',
      ratingStr: '5.0 / 5 · Avis clients',
      items: [],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Nos offres',
      subtitle: '',
      plans: [],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Les réponses à vos questions',
      items: [
        { q: 'Intervenez-vous la nuit et le week-end ?', a: 'Oui, nous sommes ouverts du lundi au dimanche, 24h/24 pour répondre à toutes vos urgences de plomberie et chauffage.' },
        { q: 'Où vous déplacez-vous ?', a: 'Nous sommes basés à Saint Gaudens (31800) et nous intervenons dans les communes alentours (Valentine, Miramont de Comminges, etc.) et dans toute la Haute-Garonne.' },
        { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Nous acceptons de nombreux moyens de paiement : Espèces, Virement bancaire, Carte Bancaire (CB, Visa, Mastercard), Paypal, Paylib et Wero.' },
        { q: 'Proposez-vous des devis gratuits ?', a: 'Absolument. Contactez-nous par téléphone ou via notre formulaire pour évaluer votre projet (rénovation, installation) et obtenir un devis détaillé sans engagement.' },
        { q: 'Quelles marques de chauffage installez-vous ?', a: 'Nous travaillons avec les grandes marques du marché pour vous garantir des équipements fiables, performants et durables (chauffe-eau thermodynamiques, climatisations, etc.).' },
      ],
    },

    cta: {
      eyebrow:  'UNE URGENCE OU UN PROJET ?',
      title:    'Besoin d\'un plombier chauffagiste ?',
      subtitle: 'N\'attendez plus, appelez-nous au 07 68 18 81 24 pour une intervention rapide ou une étude de projet.',
      cta1:     { label: 'Appeler le 07 68 18 81 24', href: 'tel:+33768188124' },
      cta2:     { label: 'Formulaire de contact',  href: '#contact' },
    },

    contact: {
      eyebrow:        '— Contactez-nous',
      title:          'Prenons contact',
      subtitle:       'Pour un dépannage en urgence, appelez-nous directement. Pour toute autre demande (devis, information), utilisez le formulaire ci-dessous.',
      successMessage: 'Message bien reçu — nous vous répondons dans les plus brefs délais.',
      formTypes:      ['Urgence plomberie (24/7)', 'Devis Climatisation / Chauffage', 'Projet Salle de bain / Cuisine', 'Autre demande'],
    },
    certifications: {
      eyebrow:  '— Certifications & Garanties',
      title:    'Des travaux certifiés, une tranquillité d\'esprit',
      subtitle: 'Nous sommes une entreprise artisanale immatriculée au répertoire des métiers, garante d\'un savoir-faire de qualité.',
    },

    footer: {
      description: 'Marcelo-Service MS : Votre artisan de confiance à Saint Gaudens pour la plomberie, le chauffage, la climatisation et l\'aménagement de cuisines et salles de bain. Intervention 24h/24.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'FAQ',       href: '#faq' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par <a href="https://guyboireau.com" rel="noopener" target="_blank">guyboireau.com</a>',
    },
    portfolio: {
      items: []
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;
