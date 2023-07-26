export const ROUTES = [
  {
    href: "/",
    label: "Art",
  },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Website",
    href: "https://ricardochu.com",
    icon: "mdi:web",
  },
  {
    label: "GitHub",
    href: "https://github.com/kypexfly",
    icon: "mdi:github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardochuzheng/",
    icon: "mdi:linkedin",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Ricardo Chu",
  title: "Kypexfly's Art",
  subtitle: "A collection of my best work in one place",
  role: "FrontEnd Developer - Digital Artist",
  contact: "mailto:rchuzheng@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/92066360?v=4",
  about: "",
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Art portfolio made by Ricardo Chu in his free time",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
