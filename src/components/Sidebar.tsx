"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { features, type Feature } from "@/lib/features";

function SidebarItem({ feature }: { feature: Feature }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive =
    pathname === feature.href ||
    (feature.children?.some((c) => {
      const url = new URL(c.href, "http://x");
      return (
        pathname === url.pathname &&
        url.searchParams.get("tab") === searchParams.get("tab")
      );
    }) ??
      false);
  const isParentActive = pathname === feature.href.split("?")[0];
  const [open, setOpen] = useState(isParentActive);

  const hasChildren = feature.children && feature.children.length > 0;

  return (
    <li>
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              isParentActive
                ? "bg-white/15 text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span
              className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white ${feature.color}`}
            >
              {feature.number}
            </span>
            <span className="flex-1 text-left">{feature.title}</span>
            <svg
              className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {open && (
            <ul className="mt-1 ml-9 space-y-0.5">
              {feature.children!.map((child) => {
                const childUrl = new URL(child.href, "http://x");
                const isChildActive =
                  pathname === childUrl.pathname &&
                  childUrl.searchParams.get("tab") ===
                    searchParams.get("tab");
                return (
                  <li key={child.id}>
                    <Link
                      href={child.href}
                      className={`block px-3 py-1.5 rounded text-xs transition-colors ${
                        isChildActive
                          ? "bg-white/15 text-white font-medium"
                          : "text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {child.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      ) : (
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
      )}
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex flex-col z-10">
      <Link href="/" className="block p-5 border-b border-gray-700">
        <h1 className="text-lg font-bold">Mediacorp</h1>
        <p className="text-xs text-gray-400 mt-1">Telegram Bot Demo Flow</p>
      </Link>

      <nav className="flex-1 overflow-y-auto py-4">
        <Suspense>
          <ul className="space-y-1 px-3">
            {features.map((feature) => (
              <SidebarItem key={feature.id} feature={feature} />
            ))}
          </ul>
        </Suspense>
      </nav>

      <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
        Demo v1.0
      </div>
    </aside>
  );
}
