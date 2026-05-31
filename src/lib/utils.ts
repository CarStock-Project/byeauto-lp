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
    "Plataforma SaaS multi-loja para concessionárias: estoque em tempo real, vendas com múltiplas formas de pagamento, contratos, consignação e distribuição de lucro, com isolamento por filial.",
  url: "https://byeauto.com.br",
  appUrl: "https://app.byeauto.com.br/login",
  whatsappUrl:
    "https://wa.me/5519999044410?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20plataforma%20BYE%20Auto.",
  ogImage: "/og-image.png",
  keywords: [
    "gestão de concessionária",
    "software para concessionária",
    "ERP automotivo",
    "controle de estoque de veículos",
    "CRM automotivo",
    "sistema para revenda de veículos",
    "controle de vendas de veículos",
    "contrato de compra e venda de veículos",
    "consignação de veículos",
    "SaaS automotivo",
    "multi-loja",
    "ByeAuto",
  ],
  authors: [{ name: "ByeAuto" }],
};
