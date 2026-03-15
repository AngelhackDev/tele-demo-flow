import ScenarioCard from "@/components/ScenarioCard";

export default function AnalyticsPage() {
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

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: Admin views engagement dashboard"
            description="Admin opens the analytics page in CMS to review weekly performance."
          >
            {/* Mock dashboard */}
            <div className="space-y-6">
              {/* KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Total Messages",
                    value: "12,847",
                    change: "+23%",
                    up: true,
                  },
                  {
                    label: "Active Users",
                    value: "1,234",
                    change: "+15%",
                    up: true,
                  },
                  {
                    label: "Bot Responses",
                    value: "3,421",
                    change: "+31%",
                    up: true,
                  },
                  {
                    label: "Spam Blocked",
                    value: "89",
                    change: "-12%",
                    up: false,
                  },
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

              {/* Chart placeholder */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-sm font-semibold mb-4">
                  Weekly Message Activity
                </h4>
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

              {/* Top groups */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-sm font-semibold mb-4">
                  Top Groups by Engagement
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "The Voice SG Fans", messages: 4521, users: 342 },
                    {
                      name: "News Tonight Discussion",
                      messages: 3102,
                      users: 289,
                    },
                    {
                      name: "Mediacorp Updates",
                      messages: 2847,
                      users: 567,
                    },
                    { name: "Drama Club SG", messages: 2377, users: 198 },
                  ].map((group, i) => (
                    <div
                      key={group.name}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-400 w-6">
                          #{i + 1}
                        </span>
                        <span className="text-sm font-medium">
                          {group.name}
                        </span>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-500">
                        <span>{group.messages.toLocaleString()} msgs</span>
                        <span>{group.users} users</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Real-time metrics updated every 5 minutes</li>
                <li>- Filterable by date range, group, and metric type</li>
                <li>- Export to CSV for reporting</li>
                <li>- Automated weekly summary email to admins</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Bot performance report"
            description="Admin reviews how effectively the bot handles questions and moderation."
          >
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
                    <span className="font-medium text-green-600">
                      712 (84%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fallback responses</span>
                    <span className="font-medium text-yellow-600">
                      135 (16%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg response time</span>
                    <span className="font-medium">1.8s</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3">
                  Moderation Stats
                </h4>
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
          </ScenarioCard>
        </div>
      </div>
    </div>
  );
}
