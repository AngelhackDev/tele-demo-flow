"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

type Tab = "dashboard" | "group";

export default function AnalyticsPage() {
  return (
    <Suspense>
      <AnalyticsContent />
    </Suspense>
  );
}

function AnalyticsContent() {
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as Tab) || "dashboard";

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">6. Analytics</h1>
          <p className="text-gray-500 mt-1">
            Track engagement metrics, user activity, and bot performance across
            groups
          </p>
        </div>

        {/* Sub-menu tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-sm">
          <Link
            href="/demo/analytics?tab=dashboard"
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
              activeTab === "dashboard"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Dashboard Analytics
          </Link>
          <Link
            href="/demo/analytics?tab=group"
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
              activeTab === "group"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Group Analytics
          </Link>
        </div>

        {activeTab === "dashboard" && <DashboardAnalytics />}
        {activeTab === "group" && <GroupAnalytics />}
      </div>
    </div>
  );
}

function DashboardAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Messages", value: "12,847", change: "+23%", up: true },
          { label: "Active Users", value: "1,234", change: "+15%", up: true },
          { label: "Bot Responses", value: "3,421", change: "+31%", up: true },
          { label: "Spam Blocked", value: "89", change: "-12%", up: false },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <p className="text-xs text-gray-500">{kpi.label}</p>
            <p className="text-2xl font-bold mt-1">{kpi.value}</p>
            <p
              className={`text-xs mt-1 ${kpi.up ? "text-green-600" : "text-red-600"}`}
            >
              {kpi.change} vs last week
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h4 className="text-sm font-semibold mb-4">Weekly Message Activity</h4>
        <div className="flex items-end gap-2 h-40">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-blue-400 rounded-t"
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] text-gray-500">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bot performance */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-3">FAQ Performance</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Questions received</span>
              <span className="font-medium">847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Auto-answered</span>
              <span className="font-medium text-green-600">712 (84%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fallback responses</span>
              <span className="font-medium text-yellow-600">135 (16%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg response time</span>
              <span className="font-medium">1.8s</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-3">Moderation Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Messages scanned</span>
              <span className="font-medium">12,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Spam blocked</span>
              <span className="font-medium text-red-600">89</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Escalated to human</span>
              <span className="font-medium text-yellow-600">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">False positives</span>
              <span className="font-medium">3 (3.4%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupAnalytics() {
  return (
    <div className="space-y-6">
      {/* Group selector */}
      <div>
        <label className="text-xs text-gray-500 font-medium">
          Select Group
        </label>
        <div className="mt-1 flex gap-2">
          <span className="px-3 py-1.5 bg-cyan-100 text-cyan-700 text-sm rounded-lg font-medium border border-cyan-200">
            Star Search Official Forum
          </span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded-lg cursor-pointer hover:bg-gray-200">
            The Voice SG Fans
          </span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded-lg cursor-pointer hover:bg-gray-200">
            Drama Club SG
          </span>
        </div>
      </div>

      {/* Group KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Members", value: "1,247", change: "+12 today", up: true },
          { label: "Messages", value: "4,521", change: "+18%", up: true },
          { label: "Bot Replies", value: "1,203", change: "+25%", up: true },
          { label: "Active Users", value: "342", change: "+8%", up: true },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <p className="text-xs text-gray-500">{kpi.label}</p>
            <p className="text-2xl font-bold mt-1">{kpi.value}</p>
            <p className="text-xs mt-1 text-green-600">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Top groups ranking */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h4 className="text-sm font-semibold mb-4">
          All Groups by Engagement
        </h4>
        <div className="space-y-3">
          {[
            { name: "Star Search Official Forum", messages: 4521, users: 342, members: 1247 },
            { name: "The Voice SG Fans", messages: 3102, users: 289, members: 892 },
            { name: "Mediacorp Updates", messages: 2847, users: 567, members: 3421 },
            { name: "Drama Club SG", messages: 2377, users: 198, members: 634 },
            { name: "meWATCH Highlights", messages: 1890, users: 156, members: 2108 },
          ].map((group, i) => (
            <div
              key={group.name}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-400 w-6">
                  #{i + 1}
                </span>
                <span className="text-sm font-medium">{group.name}</span>
              </div>
              <div className="flex gap-6 text-xs text-gray-500">
                <span>{group.members.toLocaleString()} members</span>
                <span>{group.messages.toLocaleString()} msgs</span>
                <span>{group.users} active</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Group activity chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h4 className="text-sm font-semibold mb-4">
          Star Search Official Forum — Weekly Activity
        </h4>
        <div className="flex items-end gap-2 h-40">
          {[55, 70, 60, 85, 75, 95, 80].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-cyan-400 rounded-t"
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] text-gray-500">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
