import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function DynamicMenuPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            5. Dynamic Menu
          </h1>
          <p className="text-gray-500 mt-1">
            Configurable bot command menus that adapt based on context and group
            settings
          </p>
        </div>

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: User opens bot menu"
            description="User taps the menu button in Telegram. Available commands shown based on group configuration."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Bot Menu Commands
                </p>
                <div className="space-y-1">
                  {[
                    { cmd: "/ask", desc: "Ask a question about the show" },
                    { cmd: "/quiz", desc: "Start the latest quiz" },
                    { cmd: "/leaderboard", desc: "View top participants" },
                    { cmd: "/mybadges", desc: "Check your badge collection" },
                    { cmd: "/schedule", desc: "View upcoming show schedule" },
                    { cmd: "/vote", desc: "Vote for your favorite contestant" },
                  ].map((item) => (
                    <div
                      key={item.cmd}
                      className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50"
                    >
                      <code className="text-xs text-blue-600 font-medium w-28">
                        {item.cmd}
                      </code>
                      <span className="text-xs text-gray-600">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <ChatBubble
                sender="Alice"
                message="/schedule"
                timestamp="19:00"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message={`📺 Upcoming Schedule\n\nFri, Mar 15 — The Voice SG (9:30 PM, Ch5)\nSat, Mar 16 — Star Awards Preview (8:00 PM, Ch8)\nSun, Mar 17 — Drama Club Finale (9:00 PM, Ch5)\n\nSet reminders with /remind [show name]`}
                isBot
                timestamp="19:00"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Menu commands configured per group in CMS</li>
                <li>- Commands can be enabled/disabled dynamically</li>
                <li>
                  - Menu updates pushed via Telegram Bot API setMyCommands
                </li>
                <li>- Different menus for different groups/shows</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Context-aware menu (News group)"
            description="A different group has a different set of commands based on its show type."
          >
            <TelegramMockup groupName="News Tonight Discussion">
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Bot Menu Commands
                </p>
                <div className="space-y-1">
                  {[
                    { cmd: "/ask", desc: "Ask about today's news" },
                    { cmd: "/headlines", desc: "Get latest headlines" },
                    { cmd: "/topic", desc: "Discuss a specific topic" },
                    { cmd: "/feedback", desc: "Send feedback to the team" },
                  ].map((item) => (
                    <div
                      key={item.cmd}
                      className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50"
                    >
                      <code className="text-xs text-blue-600 font-medium w-28">
                        {item.cmd}
                      </code>
                      <span className="text-xs text-gray-600">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <ChatBubble
                sender="Mike"
                message="/headlines"
                timestamp="22:15"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message={`📰 Top Headlines — Mar 15, 2026\n\n1. Singapore GDP growth exceeds expectations at 4.2%\n2. New MRT line extension opens next month\n3. Southeast Asian tech summit kicks off\n\nReply with 1-3 to discuss a topic!`}
                isBot
                timestamp="22:15"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  - News group has /headlines, /topic — no /quiz or /vote
                </li>
                <li>
                  - Entertainment group has /quiz, /vote — no /headlines
                </li>
                <li>- Admin configures per-group menus in the CMS dashboard</li>
              </ul>
            </div>
          </ScenarioCard>

          {/* CMS Config mockup */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              CMS Menu Configuration
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      Command
                    </th>
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      Description
                    </th>
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      The Voice SG
                    </th>
                    <th className="pb-2 text-gray-500 font-medium">
                      News Tonight
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { cmd: "/ask", desc: "Ask a question", voice: true, news: true },
                    { cmd: "/quiz", desc: "Start quiz", voice: true, news: false },
                    { cmd: "/vote", desc: "Vote", voice: true, news: false },
                    {
                      cmd: "/leaderboard",
                      desc: "Rankings",
                      voice: true,
                      news: false,
                    },
                    {
                      cmd: "/headlines",
                      desc: "Latest news",
                      voice: false,
                      news: true,
                    },
                    {
                      cmd: "/topic",
                      desc: "Discuss topic",
                      voice: false,
                      news: true,
                    },
                    {
                      cmd: "/schedule",
                      desc: "Show schedule",
                      voice: true,
                      news: true,
                    },
                    {
                      cmd: "/feedback",
                      desc: "Send feedback",
                      voice: false,
                      news: true,
                    },
                  ].map((row) => (
                    <tr key={row.cmd} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-blue-600">
                        {row.cmd}
                      </td>
                      <td className="py-2 pr-4">{row.desc}</td>
                      <td className="py-2 pr-4">
                        <span
                          className={`inline-block w-5 h-5 rounded text-center text-xs leading-5 ${row.voice ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}
                        >
                          {row.voice ? "✓" : "—"}
                        </span>
                      </td>
                      <td className="py-2">
                        <span
                          className={`inline-block w-5 h-5 rounded text-center text-xs leading-5 ${row.news ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}
                        >
                          {row.news ? "✓" : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
