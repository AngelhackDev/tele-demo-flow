import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function ModerationPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">3. Moderation</h1>
          <p className="text-gray-500 mt-1">
            Two-layer moderation: L1 rule-based keyword/pattern matching + L2
            AI-powered spam classification with confidence scoring
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: L1 Banned keyword hit */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  L1: Banned keyword hit — instant auto-delete
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="spamuser99"
                  message="Hey guys check out my channel for free iPhone giveaways t.me/scamlink123 💰💰"
                  timestamp="14:30"
                />
              </TelegramMockup>

              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✓</span>
                  <div className="text-sm text-green-800">
                    <p>
                      Message deleted. Reason logged:{" "}
                      <span className="font-medium">
                        &quot;Spam link detected (L1 rule: external t.me link +
                        banned keyword)&quot;
                      </span>
                    </p>
                    <p className="mt-1">
                      User warned{" "}
                      <span className="font-medium text-orange-700">
                        (1/3)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: L2 AI spam — 82% */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  L2: AI spam detection — confidence 82% → auto-delete
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="newuser42"
                  message="Does anyone know where I can watch dramas for free? I found this amazing streaming site that has everything 🔥"
                  timestamp="15:10"
                />
              </TelegramMockup>

              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✓</span>
                  <div className="text-sm text-green-800">
                    <p>
                      Auto-deleted. AI reason:{" "}
                      <span className="font-medium">
                        &quot;Competitor streaming site promotion (82%
                        confidence)&quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: L2 mid-confidence — 63% */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  L2: Mid-confidence 63% → Flagged for admin review
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="Star Search Official Forum">
                <ChatBubble
                  sender="viewer_sg"
                  message="Honestly the new host for Star Search is not as good as the previous one. Very boring lah."
                  timestamp="21:45"
                />
              </TelegramMockup>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">⚑</span>
                  <div>
                    <p className="text-sm font-semibold text-yellow-800">
                      Flagged
                    </p>
                    <p className="text-sm text-yellow-700 mt-1">
                      AI reason:{" "}
                      <span className="font-medium">
                        &quot;Possible off-topic negative brand mention (63%).
                        Recommend admin review.&quot;
                      </span>
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Ignore
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-xs rounded font-medium">
                        Delete
                      </button>
                      <button className="px-3 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                        Warn user
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Ban + message cleanup */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Ban + message cleanup flow
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 max-w-lg">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Admin Action — Ban User
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">User</span>
                    <span className="text-sm font-medium">@spamuser99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Warnings issued
                    </span>
                    <span className="text-sm font-medium text-red-600">
                      3/3
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Delete all messages
                    </span>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
                    </div>
                  </div>
                  <button className="w-full mt-2 px-4 py-2 bg-red-600 text-white text-sm rounded font-medium">
                    Confirm Ban
                  </button>
                </div>
              </div>

              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✓</span>
                  <div className="text-sm text-green-800">
                    <p>
                      User{" "}
                      <span className="font-medium">@spamuser99 banned</span>.
                      14 messages fetched via{" "}
                      <code className="text-xs bg-green-100 px-1 rounded">
                        getMessageIDs
                      </code>{" "}
                      → batch deleted via{" "}
                      <code className="text-xs bg-green-100 px-1 rounded">
                        deleteMessages
                      </code>{" "}
                      API.
                    </p>
                    <p className="mt-1">Audit log entry created.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moderation preset config */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-1">
              Moderation Preset Config
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Copy-ready preset configuration for Star Search group
            </p>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed">
              {JSON.stringify(
                {
                  preset_name: "Star Search Community Rules",
                  banned_words: [
                    "scam",
                    "hack",
                    "piracy",
                    "torrent",
                    "1xbet",
                    "onlyfans",
                  ],
                  banned_patterns: [
                    "t\\.me\\/(?!starstarch)",
                    "bit\\.ly",
                    "tinyurl",
                  ],
                  ai_categories: [
                    "spam",
                    "off_topic",
                    "competitor_promo",
                    "hate_speech",
                  ],
                  auto_delete_threshold: 80,
                  flag_threshold: 50,
                  warn_before_ban: true,
                  max_warnings: 3,
                  delete_on_ban: true,
                },
                null,
                2
              )}
            </pre>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-red-50 rounded-lg p-3">
                <p className="font-medium text-red-800 text-xs mb-1">
                  Auto-delete threshold
                </p>
                <p className="text-red-700">
                  ≥ 80% confidence → delete immediately
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="font-medium text-yellow-800 text-xs mb-1">
                  Flag threshold
                </p>
                <p className="text-yellow-700">
                  50–79% confidence → flag for admin review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
