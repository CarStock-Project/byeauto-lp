import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "ByeAuto",
  shortName: "ByeAuto",
  title: "ByeAuto — Gestão automotiva inteligente para concessionárias",
  description:
    "Plataforma SaaS multi-loja para concessionárias: controle de estoque em tempo real, dashboard operacional, gestão de clientes e veículos com isolamento por filial.",
  url: "https://byeauto.com.br",
  appUrl: "https://app.byeauto.com.br/login",
  ogImage: "/og-image.png",
  keywords: [
    "gestão de concessionária",
    "software para concessionária",
    "ERP automotivo",
    "controle de estoque de veículos",
    "CRM automotivo",
    "sistema para revenda de veículos",
    "SaaS automotivo",
    "multi-loja",
    "ByeAuto",
  ],
  authors: [{ name: "ByeAuto" }],
};
