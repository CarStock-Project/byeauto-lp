import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import {
  LuBriefcase,
  LuCar,
  LuFileText,
  LuMegaphone,
  LuReceipt,
  LuShield,
  LuStore,
  LuUsers,
} from "react-icons/lu";

import { activeBranch } from "@/lib/mockData";
import { cn } from "@/lib/utils";

type Route = "/dashboard" | "/veiculos" | "/vendas" | "/clientes";

interface MenuItem {
  id: string;
  label: string;
  icon: typeof BiHome;
  soon?: boolean;
}

const menuGroups: { title: string; items: MenuItem[] }[] = [
  {
    title: "Visão geral",
    items: [{ id: "/dashboard", label: "Painel", icon: BiHome }],
  },
  {
    title: "Operação",
    items: [
      { id: "/veiculos", label: "Veículos", icon: LuCar },
      { id: "/clientes", label: "Clientes", icon: LuUsers },
      { id: "/vendas", label: "Vendas", icon: LuReceipt },
    ],
  },
  {
    title: "Equipe",
    items: [
      { id: "/funcionarios", label: "Funcionários", icon: LuBriefcase },
      { id: "/usuarios", label: "Usuários", icon: LuShield },
    ],
  },
  {
    title: "Configurações",
    items: [
      { id: "/contratos", label: "Modelos de contrato", icon: LuFileText },
      { id: "/portais", label: "Portais de anúncio", icon: LuMegaphone, soon: true },
      { id: "/vitrine", label: "Vitrine", icon: LuStore },
    ],
  },
];

interface MockSidebarProps {
  active: Route;
  branchName?: string;
  branchCnpj?: string;
}

export function MockSidebar({
  active,
  branchName = activeBranch.name,
  branchCnpj = activeBranch.cnpj,
}: MockSidebarProps) {
  return (
    <aside className="hidden h-full w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground @2xl/frame:flex">
      <div className="space-y-4 border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <Image
            src="/bye_auto_favicon.png"
            alt="ByeAuto"
            width={40}
            height={40}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <div className="min-w-0">
            <h2 className="text-sm font-bold tracking-tight">ByeAuto</h2>
            <p className="text-[11px] text-muted-foreground">Gestão Automotiva</p>
          </div>
        </div>

        <div className="rounded-lg border border-sidebar-border/50 bg-sidebar-accent/50 p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary/10">
              <LuStore className="h-4 w-4 text-sidebar-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-0.5 text-[10px] font-medium text-muted-foreground">Loja Ativa</p>
              <p className="truncate text-xs font-semibold">{branchName}</p>
              <p className="mt-0.5 truncate font-mono text-[10px] text-muted-foreground">
                {branchCnpj}
              </p>
            </div>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sidebar-border/50 bg-sidebar-accent text-sidebar-foreground/60">
              <FaArrowRightArrowLeft className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-4 overflow-y-auto py-4">
        {menuGroups.map((group) => (
          <div key={group.title} className="px-4">
            <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <div
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                          : "text-sidebar-foreground",
                      )}
                    >
                      <Icon className="h-[18px] w-[18px] shrink-0" />
                      <span className="min-w-0 flex-1 truncate font-medium">{item.label}</span>
                      {item.soon && (
                        <span className="shrink-0 rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-amber-600">
                          Em breve
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
