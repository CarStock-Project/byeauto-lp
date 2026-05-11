export const dashboardMetrics = {
  totalVehicles: 84,
  totalCustomers: 312,
  available: { total: 52, percent: 62 },
  reserved: { total: 12, percent: 14 },
  maintenance: { total: 8, percent: 10 },
  sold: { total: 12, percent: 14 },
};

export const STATUS_COLORS = {
  available: "#10b981",
  reserved: "#8b5cf6",
  maintenance: "#f59e0b",
  sold: "#0ea5e9",
} as const;

export type VehicleStatus = "AVAILABLE" | "RESERVED" | "SOLD" | "MAINTENANCE";

export interface MockVehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  color: string;
  plate: string;
  price: number;
  status: VehicleStatus;
}

export const mockVehicles: MockVehicle[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    version: "XEi 2.0 Flex CVT",
    year: 2024,
    color: "Prata",
    plate: "RGT-4A21",
    price: 168900,
    status: "AVAILABLE",
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    version: "Touring 1.5 Turbo",
    year: 2023,
    color: "Preto",
    plate: "FHE-9C72",
    price: 192500,
    status: "RESERVED",
  },
  {
    id: "3",
    brand: "Volkswagen",
    model: "T-Cross",
    version: "Highline TSI",
    year: 2024,
    color: "Branco",
    plate: "BRA-2E19",
    price: 154300,
    status: "AVAILABLE",
  },
  {
    id: "4",
    brand: "Jeep",
    model: "Compass",
    version: "Limited Diesel 4x4",
    year: 2023,
    color: "Cinza",
    plate: "KLM-7T08",
    price: 245000,
    status: "MAINTENANCE",
  },
  {
    id: "5",
    brand: "Hyundai",
    model: "Creta",
    version: "Ultimate 1.0 T-GDI",
    year: 2024,
    color: "Vermelho",
    plate: "POP-3K55",
    price: 142800,
    status: "AVAILABLE",
  },
  {
    id: "6",
    brand: "Chevrolet",
    model: "Tracker",
    version: "Premier 1.2 Turbo",
    year: 2023,
    color: "Azul",
    plate: "QWE-8N44",
    price: 138900,
    status: "SOLD",
  },
];

export const statusLabel: Record<VehicleStatus, string> = {
  AVAILABLE: "Disponível",
  RESERVED: "Reservado",
  SOLD: "Vendido",
  MAINTENANCE: "Manutenção",
};

export interface MockCustomer {
  id: string;
  name: string;
  type: "PF" | "PJ";
  email: string;
  document: string;
  createdAt: string;
}

export const mockCustomers: MockCustomer[] = [
  {
    id: "1",
    name: "Fernanda Albuquerque",
    type: "PF",
    email: "fernanda.alb@email.com",
    document: "***.456.789-**",
    createdAt: "12/04/2025",
  },
  {
    id: "2",
    name: "Construtora Atlântico Ltda",
    type: "PJ",
    email: "compras@atlantico.com.br",
    document: "**.345.678/0001-**",
    createdAt: "08/04/2025",
  },
  {
    id: "3",
    name: "Rafael Mendes",
    type: "PF",
    email: "rafael.mendes@email.com",
    document: "***.987.123-**",
    createdAt: "01/04/2025",
  },
  {
    id: "4",
    name: "Logística Sul Brasil S.A.",
    type: "PJ",
    email: "frota@logsul.com.br",
    document: "**.789.456/0001-**",
    createdAt: "28/03/2025",
  },
  {
    id: "5",
    name: "Patrícia Yamada",
    type: "PF",
    email: "patricia.y@email.com",
    document: "***.222.333-**",
    createdAt: "22/03/2025",
  },
];

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
