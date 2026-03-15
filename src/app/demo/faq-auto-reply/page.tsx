import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function FaqAutoReplyPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            1. FAQ Auto-Reply
          </h1>
          <p className="text-gray-500 mt-1">
            Bot automatically responds to user questions using uploaded data
            sources (CSV/JSON files)
          </p>
        </div>

        <div className="space-y-8">
          {/* Scenario 1 */}
          <ScenarioCard
            title="Scenario: User asks a FAQ in a group"
            description="A user asks 'What time does the show start?' in the Telegram group. The bot matches it against uploaded FAQ data source and replies."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="John"
                message="What time does the show start tonight?"
                timestamp="19:02"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="The Voice Singapore airs every Friday at 9:30 PM on Channel 5! Set your reminders 🎤"
                isBot
                timestamp="19:02"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  - Bot detects question matches FAQ from uploaded data source
                </li>
                <li>- Response generated using OpenAI with data source context</li>
                <li>- Reply appears within 2-3 seconds</li>
                <li>- Trigger: KEYWORD or MENTION based on group config</li>
              </ul>
            </div>
          </ScenarioCard>

          {/* Scenario 2 */}
          <ScenarioCard
            title="Scenario: No matching FAQ found"
            description="User asks a question that doesn't match any data source. Bot provides a fallback response."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Alice"
                message="Can I get tickets for the live recording?"
                timestamp="20:15"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="I don't have information about that yet. Please check the official Mediacorp website or contact our support team for ticketing details!"
                isBot
                timestamp="20:15"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- No match found in data sources (low confidence score)</li>
                <li>- Bot uses configured fallback message</li>
                <li>- Admin gets notified of unanswered question for review</li>
              </ul>
            </div>
          </ScenarioCard>

          {/* Scenario 3: Command trigger */}
          <ScenarioCard
            title="Scenario: Command-triggered FAQ"
            description="Bot responds only when triggered with /ask command"
          >
            <TelegramMockup groupName="News Tonight Discussion">
              <ChatBubble
                sender="Mike"
                message="/ask Who is the host of News Tonight?"
                timestamp="21:00"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="News Tonight is hosted by Suzanna Oh and Adrian Tan, airing weekdays at 10 PM on CNA."
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
                <li>- Trigger type: COMMAND (/ask)</li>
                <li>
                  - Bot only responds when explicitly invoked with the command
                </li>
                <li>
                  - Regular messages without command prefix are ignored by FAQ
                </li>
              </ul>
            </div>
          </ScenarioCard>

          {/* Sample Data */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Sample Data Source (FAQ CSV)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      Question
                    </th>
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      Answer
                    </th>
                    <th className="pb-2 text-gray-500 font-medium">Category</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">What time does the show start?</td>
                    <td className="py-2 pr-4">
                      Every Friday at 9:30 PM on Channel 5
                    </td>
                    <td className="py-2">Schedule</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Who are the judges?</td>
                    <td className="py-2 pr-4">
                      Dick Lee, Tanya Chua, and Jay Park
                    </td>
                    <td className="py-2">Cast</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">How to vote?</td>
                    <td className="py-2 pr-4">
                      Vote via the Mediacorp app or SMS to 77123
                    </td>
                    <td className="py-2">Voting</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Where to watch?</td>
                    <td className="py-2 pr-4">Channel 5 or stream on meWATCH</td>
                    <td className="py-2">Streaming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
