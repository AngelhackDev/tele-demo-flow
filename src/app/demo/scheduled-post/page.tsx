import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function ScheduledPostPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            3. Scheduled Post
          </h1>
          <p className="text-gray-500 mt-1">
            Schedule and publish content to Telegram groups/channels at specific
            times
          </p>
        </div>

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: Pre-show reminder"
            description="Admin schedules a reminder 30 minutes before the show airs."
          >
            <div className="mb-6 bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-700 mb-2">
                CMS Scheduling Interface
              </h4>
              <div className="bg-white rounded-lg border border-blue-200 p-4 text-sm space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500">Target</label>
                    <p className="font-medium">The Voice SG Fans</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">
                      Scheduled Time
                    </label>
                    <p className="font-medium">Fri, 9:00 PM SGT</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Repeat</label>
                    <p className="font-medium">Weekly (Every Friday)</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Status</label>
                    <p className="font-medium text-green-600">Active</p>
                  </div>
                </div>
              </div>
            </div>

            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🎤 TONIGHT on The Voice Singapore!\n\n⏰ 9:30 PM on Channel 5\n🎵 Top 8 contestants perform live\n🗳️ Voting opens at 10 PM\n\nDon't miss it! Stream live on meWATCH 📺`}
                isBot
                timestamp="21:00"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Message published at scheduled time (9:00 PM)</li>
                <li>- Supports rich text, emojis, media attachments</li>
                <li>- Recurring schedule: daily, weekly, custom</li>
                <li>- Admin sees delivery status in CMS dashboard</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Multi-channel broadcast"
            description="Admin sends the same announcement to multiple groups simultaneously."
          >
            <div className="grid grid-cols-2 gap-4">
              <TelegramMockup groupName="The Voice SG Fans">
                <ChatBubble
                  sender="Mediacorp Bot"
                  message="📢 BREAKING: Special guest judge next week! Stay tuned for the big reveal tomorrow."
                  isBot
                  timestamp="18:00"
                  avatar="🤖"
                />
              </TelegramMockup>
              <TelegramMockup groupName="Mediacorp Updates">
                <ChatBubble
                  sender="Mediacorp Bot"
                  message="📢 BREAKING: Special guest judge next week! Stay tuned for the big reveal tomorrow."
                  isBot
                  timestamp="18:00"
                  avatar="🤖"
                />
              </TelegramMockup>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  - Broadcast to multiple selected groups/channels at once
                </li>
                <li>- Delivery report shows success/failure per target</li>
                <li>- Supports "Send Now" and "Schedule for Later"</li>
              </ul>
            </div>
          </ScenarioCard>
        </div>
      </div>
    </div>
  );
}
