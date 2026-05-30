import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuCar, LuReceipt, LuStore, LuUsers } from "react-icons/lu";

import { cn } from "@/lib/utils";

const menuItems = [
  { id: "/dashboard", label: "Painel", icon: BiHome },
  { id: "/veiculos", label: "Veículos", icon: LuCar },
  { id: "/vendas", label: "Vendas", icon: LuReceipt },
  { id: "/clientes", label: "Clientes", icon: LuUsers },
] as const;

interface MockSidebarProps {
  active: "/dashboard" | "/veiculos" | "/vendas" | "/clientes";
  branchName?: string;
  branchCnpj?: string;
}

export function MockSidebar({
  active,
  branchName = "ByeAuto Vila Olímpia",
  branchCnpj = "12.345.678/0001-90",
}: MockSidebarProps) {
  return (
    <aside className="hidden h-full w-56 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground sm:flex lg:w-64">
      <div className="space-y-4 border-b border-sidebar-border p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/bye_auto_favicon.png"
              alt="ByeAuto"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div>
              <h2 className="text-base font-bold tracking-tight">ByeAuto</h2>
              <p className="text-[11px] text-muted-foreground">Gestão Automotiva</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-sidebar-border/50 bg-sidebar-accent/50 p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary/10">
              <LuStore className="h-4 w-4 text-sidebar-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-0.5 text-[11px] font-medium text-muted-foreground">Loja Ativa</p>
              <p className="truncate text-sm font-semibold">{branchName}</p>
              <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{branchCnpj}</p>
            </div>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sidebar-border/50 bg-sidebar-accent text-sidebar-foreground/60">
              <FaArrowRightArrowLeft className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-visible py-4">
        <ul className="space-y-1 px-5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
