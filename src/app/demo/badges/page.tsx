import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function BadgesPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">5. Badges</h1>
          <p className="text-gray-500 mt-1">
            Achievement badges awarded based on participation and engagement
            milestones
          </p>
        </div>

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: Badge earned notification"
            description="User reaches a milestone and earns a new badge automatically."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Sarah_M"
                message="B"
                timestamp="21:50"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="✅ Correct! +50 points"
                isBot
                timestamp="21:50"
                avatar="🤖"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🏅 NEW BADGE EARNED!\n\nSarah_M just earned the "Quiz Master" badge!\n🎯 Complete 10 quizzes with 80%+ accuracy\n\nYour badges: 🌟👑🎯🏅`}
                isBot
                timestamp="21:50"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Badge auto-awarded when criteria met</li>
                <li>- Public announcement in the group</li>
                <li>- Badge visible on user profile</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: View badges collection"
            description="User checks their badge collection and progress."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="John"
                message="/mybadges"
                timestamp="22:05"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🎖️ John's Badge Collection\n\n✅ 🌟 Early Bird — Joined within first week\n✅ 💬 Chatterbox — Sent 100+ messages\n✅ 🎯 Quiz Master — 10 quizzes, 80%+ accuracy\n⬜ 👑 Super Fan — Attend 20+ live sessions\n⬜ 🏆 Champion — Reach #1 on leaderboard\n⬜ 🎪 Event King — Participate in 5 events\n\nProgress: 3/6 badges | Keep going! 💪`}
                isBot
                timestamp="22:05"
                avatar="🤖"
              />
            </TelegramMockup>
          </ScenarioCard>

          {/* Badge catalog */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Badge Catalog (Admin CMS)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "🌟",
                  name: "Early Bird",
                  criteria: "Join within first week",
                  type: "Auto",
                },
                {
                  icon: "💬",
                  name: "Chatterbox",
                  criteria: "Send 100+ messages",
                  type: "Auto",
                },
                {
                  icon: "🎯",
                  name: "Quiz Master",
                  criteria: "10 quizzes, 80%+ accuracy",
                  type: "Auto",
                },
                {
                  icon: "👑",
                  name: "Super Fan",
                  criteria: "Attend 20+ live sessions",
                  type: "Auto",
                },
                {
                  icon: "🏆",
                  name: "Champion",
                  criteria: "Reach #1 on leaderboard",
                  type: "Auto",
                },
                {
                  icon: "🎪",
                  name: "Event King",
                  criteria: "Participate in 5 events",
                  type: "Manual",
                },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="font-medium text-sm">{badge.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {badge.criteria}
                  </p>
                  <span
                    className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full ${
                      badge.type === "Auto"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {badge.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
