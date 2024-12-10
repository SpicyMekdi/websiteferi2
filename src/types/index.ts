export interface NavItem {
  title: string;
  href: string;
  submenu?: NavItem[];
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export interface Statistic {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}