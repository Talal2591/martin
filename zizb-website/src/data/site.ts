/**
 * Zentrale Praxisdaten — überall aus dieser Datei verwenden,
 * damit Änderungen (z. B. Sprechzeiten) nur an einer Stelle nötig sind.
 */
export const SITE = {
  name: 'Zahn- und Implantatzentrum Barsinghausen',
  shortName: 'Zahn- & Implantatzentrum',
  place: 'Barsinghausen',
  claim: 'Zahnmedizin auf Meisterniveau in Barsinghausen',
  url: 'https://www.zizb.de',
  phone: '05105 9397',
  phoneHref: 'tel:+4951059397',
  fax: '05105 514205',
  email: 'empfang@zizb.de',
  street: 'Egestorfer Str. 4',
  zip: '30890',
  city: 'Barsinghausen',
  region: 'Niedersachsen',
  // TODO: exakte Geokoordinaten des Praxiseingangs prüfen (aktuell: Ortsmitte Barsinghausen)
  geo: { lat: 52.3057, lng: 9.4544 },
} as const;

export const HOURS = [
  { days: 'Montag', times: ['08:00 – 12:30', '15:00 – 18:00'] },
  { days: 'Dienstag', times: ['08:00 – 12:30', '15:00 – 18:00'] },
  { days: 'Mittwoch', times: ['08:00 – 13:00'] },
  { days: 'Donnerstag', times: ['08:00 – 12:30', '15:00 – 18:00'] },
  { days: 'Freitag', times: ['08:00 – 15:00'] },
] as const;

/** Öffnungszeiten für schema.org (Dentist / LocalBusiness) */
export const HOURS_SCHEMA = [
  { dayOfWeek: ['Monday', 'Tuesday', 'Thursday'], opens: '08:00', closes: '12:30' },
  { dayOfWeek: ['Monday', 'Tuesday', 'Thursday'], opens: '15:00', closes: '18:00' },
  { dayOfWeek: ['Wednesday'], opens: '08:00', closes: '13:00' },
  { dayOfWeek: ['Friday'], opens: '08:00', closes: '15:00' },
] as const;

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  /** Kurz-Label für die Desktop-Leiste (Platz!) */
  short?: string;
  href?: string;
  children?: NavChild[];
}

export const NAV: NavItem[] = [
  {
    label: 'Praxis',
    children: [
      { label: 'Über uns', href: '/praxis/ueber-uns/' },
      { label: 'Das Mund-Konzept®', href: '/praxis/mund-konzept/' },
      { label: 'Technologische Ausstattung', href: '/praxis/technologie/' },
      { label: 'Eigenes Meisterlabor', href: '/praxis/meisterlabor/' },
      { label: 'Team', href: '/praxis/team/' },
      { label: 'Patientenstimmen', href: '/praxis/patientenstimmen/' },
      { label: 'Karriere', href: '/praxis/karriere/' },
    ],
  },
  {
    label: 'Implantologie',
    children: [
      { label: 'Zahnimplantate', href: '/leistungen/zahnimplantate/' },
      { label: '3D-geführte Implantation', href: '/leistungen/3d-gefuehrte-implantation/' },
      { label: 'Feste Zähne an einem Tag', href: '/leistungen/feste-zaehne-an-einem-tag/' },
      { label: 'Knochenaufbau', href: '/leistungen/knochenaufbau/' },
    ],
  },
  {
    label: 'Zahnersatz',
    children: [
      { label: 'Fester Zahnersatz', href: '/leistungen/fester-zahnersatz/' },
      { label: 'Vollkeramik (Kronen & Inlays)', href: '/leistungen/vollkeramik/' },
      { label: 'Herausnehmbarer Zahnersatz', href: '/leistungen/herausnehmbarer-zahnersatz/' },
    ],
  },
  {
    label: 'Ästhetische Zahnmedizin',
    short: 'Ästhetik',
    children: [
      { label: 'Veneers', href: '/leistungen/veneers/' },
      { label: 'Bleaching', href: '/leistungen/bleaching/' },
      { label: 'Alignertherapie', href: '/leistungen/alignertherapie/' },
    ],
  },
  {
    label: 'Oralchirurgie',
    children: [
      { label: 'Wurzelspitzenresektion', href: '/leistungen/wurzelspitzenresektion/' },
      { label: 'Weisheitszahnentfernung', href: '/leistungen/weisheitszahnentfernung/' },
      { label: 'Zahnfleischkorrekturen', href: '/leistungen/zahnfleischkorrekturen/' },
    ],
  },
  // Schwerpunkt der Praxis — bewusst eigener, prominenter Menüpunkt
  { label: 'CMD-Therapie', short: 'CMD', href: '/leistungen/cmd-therapie/' },
  {
    label: 'Zahnerhalt & Prophylaxe',
    short: 'Prophylaxe',
    children: [
      { label: 'Professionelle Zahnreinigung', href: '/leistungen/professionelle-zahnreinigung/' },
      { label: 'Parodontologie', href: '/leistungen/parodontologie/' },
      { label: 'Wurzelbehandlung', href: '/leistungen/wurzelbehandlung/' },
    ],
  },
  { label: 'Neupatienten', href: '/neupatienten/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const LEGAL_NAV: NavChild[] = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
  { label: 'Barrierefreiheitserklärung', href: '/barrierefreiheit/' },
];

export const TEAM = [
  {
    name: 'Talal Atassi',
    degree: 'D.M.D., M.Sc.',
    role: 'Master of Science Oralchirurgie & Implantologie · Praxisinhaber',
    image: '/images/team/talal-atassi.webp',
    imageNote: 'Portrait Talal Atassi (Praxisinhaber)',
  },
  {
    name: 'Sami Atassi',
    degree: 'D.M.D., M.Sc.',
    role: 'Master of Science Parodontologie & Implantologie · Praxisinhaber',
    image: '/images/team/sami-atassi.webp',
    imageNote: 'Portrait Sami Atassi (Praxisinhaber)',
  },
  {
    name: 'Aleksandra Nasradin',
    degree: '',
    role: 'Zahnärztin',
    image: '/images/team/aleksandra-nasradin.webp',
    imageNote: 'Portrait Aleksandra Nasradin (Zahnärztin)',
  },
  {
    name: 'Sarah Hinrichs',
    degree: '',
    role: 'Zahnärztin',
    image: '/images/team/sarah-hinrichs.webp',
    imageNote: 'Portrait Sarah Hinrichs (Zahnärztin)',
  },
] as const;
