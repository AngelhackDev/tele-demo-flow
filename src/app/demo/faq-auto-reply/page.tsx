import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function FaqAutoReplyPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            2. FAQ Auto-Reply
          </h1>
          <p className="text-gray-500 mt-1">
            Bot answers user questions using group-specific knowledge base via AI
            (OpenAI)
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: Admin uploads knowledge base */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Admin uploads knowledge base in portal
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 max-w-lg">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Data source config — Star Search Group
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500">Group</label>
                    <p className="text-sm font-medium mt-0.5">
                      Star Search Official Forum
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">
                      File uploaded
                    </label>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm">📄</span>
                      <p className="text-sm font-medium">
                        star_search_faq_2026.csv
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">AI Prompt</label>
                    <p className="text-sm mt-0.5 bg-white border border-gray-200 rounded p-3 text-gray-700 italic">
                      You are a helpful assistant for Mediacorp&apos;s Star
                      Search community. Answer questions based only on the
                      provided knowledge base. Keep replies concise, friendly,
                      and use emojis sparingly.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500">
                        Confidence threshold
                      </label>
                      <p className="text-sm font-medium mt-0.5">
                        ≥ 85% to auto-reply
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">
                        Max responses
                      </label>
                      <p className="text-sm font-medium mt-0.5">
                        5 replies / user / day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: User asks question */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  User asks a question in group
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="User"
                  message="@StarSearchBot when is the next live show? 🌟"
                  timestamp="19:02"
                />
                <ChatBubble
                  sender="StarSearch Bot"
                  message={`The next Star Search live show is this Saturday, 22 Mar at 8PM SGT on Channel 8! You can also catch the livestream on mewatch 🎬\n\nDon't forget to vote for your favourite contestant via the link in our bio!`}
                  isBot
                  timestamp="19:02"
                  avatar="🤖"
                />
              </TelegramMockup>

              {/* CMS 1-1 Conversation Log */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-blue-700">
                    CMS — 1-1 Conversation Log
                  </h4>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    WIP
                  </span>
                </div>
                <div className="bg-white rounded-lg border border-blue-200 overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-blue-50 text-left">
                        <th className="px-3 py-2 text-gray-500 font-medium">
                          Time
                        </th>
                        <th className="px-3 py-2 text-gray-500 font-medium">
                          User
                        </th>
                        <th className="px-3 py-2 text-gray-500 font-medium">
                          Message
                        </th>
                        <th className="px-3 py-2 text-gray-500 font-medium">
                          Bot Reply
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-3 py-2 text-gray-600">19:02</td>
                        <td className="px-3 py-2 font-medium">@user123</td>
                        <td className="px-3 py-2 text-gray-700">
                          When is the next live show?
                        </td>
                        <td className="px-3 py-2 text-gray-700">
                          Next live show: Sat 22 Mar, 8PM...
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-3 py-2 text-gray-600">19:05</td>
                        <td className="px-3 py-2 font-medium">@fan_sg</td>
                        <td className="px-3 py-2 text-gray-700">
                          How do I vote?
                        </td>
                        <td className="px-3 py-2 text-gray-700">
                          Vote via starstarch.mediacorp.sg...
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-3 py-2 text-gray-600">19:12</td>
                        <td className="px-3 py-2 font-medium">@newbie</td>
                        <td className="px-3 py-2 text-gray-700">
                          How do I get a refund for merch?
                        </td>
                        <td className="px-3 py-2 text-gray-700">
                          Sorry, I don&apos;t have info on that...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  Total messages today: 47 | Bot replies: 38
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Low confidence fallback */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Low-confidence fallback
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="User"
                  message="How do I get a refund for my Star Search merchandise?"
                  timestamp="19:12"
                />
                <ChatBubble
                  sender="StarSearch Bot"
                  message={`Sorry, I don't have information about that yet. Please visit our official website or contact our support team for assistance!`}
                  isBot
                  timestamp="19:12"
                  avatar="🤖"
                />
              </TelegramMockup>

            </div>
          </div>

          {/* Step 4: Daily limit reached */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Daily limit reached
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="User"
                  message="@StarSearchBot one more question — who are the judges?"
                  timestamp="22:30"
                />
                <ChatBubble
                  sender="StarSearch Bot"
                  message={`Hi! You've reached the daily limit for bot replies (5/5). Please check back tomorrow or visit our official website for more info 😊`}
                  isBot
                  timestamp="22:30"
                  avatar="🤖"
                />
              </TelegramMockup>
            </div>
          </div>

          {/* Sample CSV */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-1">
              Sample FAQ CSV
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs text-gray-500">
                Copy-ready sample data for knowledge base upload
              </p>
              <a
                href="/star_search_faq_2026.csv"
                download
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-xs rounded font-medium hover:bg-blue-600 transition-colors"
              >
                Download CSV
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-2 pr-4 text-gray-500 font-medium">
                      Question
                    </th>
                    <th className="pb-2 text-gray-500 font-medium">Answer</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    {
                      q: "When is the next live show?",
                      a: "Next Star Search live show: Saturday 22 Mar, 8PM SGT on Channel 8. Also on mewatch.",
                    },
                    {
                      q: "How do I vote for contestants?",
                      a: "Vote via the Star Search microsite at starstarch.mediacorp.sg. Voting opens after each live episode.",
                    },
                    {
                      q: "Where can I watch past episodes?",
                      a: "All past episodes are on mewatch.sg — search 'Star Search 2026'.",
                    },
                    {
                      q: "When is the finale?",
                      a: "Star Search 2026 finale is on 18 April 2026, 8PM SGT.",
                    },
                    {
                      q: "How to join the giveaway?",
                      a: "Follow our Telegram channel and comment with #StarSearch2026 before 31 Mar 2026.",
                    },
                  ].map((row) => (
                    <tr key={row.q} className="border-b border-gray-100">
                      <td className="py-2 pr-4">{row.q}</td>
                      <td className="py-2">{row.a}</td>
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
