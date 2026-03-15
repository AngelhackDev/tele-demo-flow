import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function ModerationPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">2. Moderation</h1>
          <p className="text-gray-500 mt-1">
            Automated spam detection, keyword filtering, and escalation to human
            moderators
          </p>
        </div>

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: Spam message detected"
            description="User sends a promotional spam message. Bot detects and removes it automatically."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="SpamUser"
                message="🔥 BUY NOW! Best crypto deals at www.scam-link.com - 1000% returns guaranteed!!!"
                timestamp="14:30"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="⚠️ This message has been removed for violating group rules (spam/promotional content). Repeated violations may result in a ban."
                isBot
                timestamp="14:30"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- AI detects spam patterns (links, ALL CAPS, urgency words)</li>
                <li>- Original message deleted from group</li>
                <li>- Warning sent to the user</li>
                <li>- Incident logged for admin review in CMS dashboard</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Keyword filter triggered"
            description="Message contains a blacklisted keyword configured by admin."
          >
            <TelegramMockup groupName="News Tonight Discussion">
              <ChatBubble
                sender="User123"
                message="This show is absolute [profanity] and the host should be fired"
                timestamp="22:10"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="⚠️ Your message was flagged for inappropriate language. Please keep the discussion respectful."
                isBot
                timestamp="22:10"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Keyword matched against admin-configured blacklist</li>
                <li>
                  - Action: delete message + warn (configurable per group)
                </li>
                <li>- Strike count incremented for the user</li>
                <li>- 3 strikes = auto-mute for 24 hours</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Escalation to human moderator"
            description="AI is uncertain about content. Escalates to a human moderator for review."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Fan99"
                message="I think contestant #3 should just give up already, she's terrible and doesn't belong on stage"
                timestamp="21:45"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="📋 This message has been flagged for moderator review."
                isBot
                timestamp="21:45"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-red-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-700 mb-2">
                Admin CMS Dashboard Alert
              </h4>
              <div className="bg-white rounded-lg border border-red-200 p-3 text-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">
                    Moderation Alert
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                    Pending Review
                  </span>
                </div>
                <p className="text-gray-600">
                  Group: The Voice SG Fans | User: Fan99
                </p>
                <p className="text-gray-600 mt-1">
                  Reason: Potentially harassing content (AI confidence: 62%)
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-green-500 text-white text-xs rounded">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete & Warn
                  </button>
                  <button className="px-3 py-1 bg-gray-500 text-white text-xs rounded">
                    Ban User
                  </button>
                </div>
              </div>
            </div>
          </ScenarioCard>
        </div>
      </div>
    </div>
  );
}
