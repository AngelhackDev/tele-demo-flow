"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { features } from "@/lib/features";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex flex-col z-10">
      <Link href="/" className="block p-5 border-b border-gray-700">
        <h1 className="text-lg font-bold">Mediacorp</h1>
        <p className="text-xs text-gray-400 mt-1">Telegram Bot Demo Flow</p>
      </Link>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {features.map((feature) => {
            const isActive = pathname === feature.href;
            return (
              <li key={feature.id}>
                <Link
                  href={feature.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white ${feature.color}`}
                  >
                    {feature.number}
                  </span>
                  <span className="flex-1">{feature.title}</span>
                  {feature.wip && (
                    <span className="text-[9px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full font-medium">
                      WIP
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
        Demo v1.0
      </div>
    </aside>
  );
}
