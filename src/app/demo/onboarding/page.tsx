import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function OnboardingPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">1. Onboarding</h1>
          <p className="text-gray-500 mt-1">
            Guide users to discover and join official Mediacorp groups and
            channels via bot interaction
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: User asks how to join */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">
                  User asks bot how to join the community
                </h3>
              </div>
            </div>
            <div className="p-6">
              <TelegramMockup groupName="StarSearch Bot (DM)">
                <ChatBubble
                  sender="User"
                  message="How do I join the Mediacorp community?"
                  timestamp="10:15"
                />
                <ChatBubble
                  sender="StarSearch Bot"
                  message={`Welcome! Here are our official Mediacorp communities you can join:\n\n📺 Groups:\n• Star Search Official Forum\n• The Voice SG Fans\n• Drama Club SG\n\n📢 Channels:\n• Mediacorp Updates\n• meWATCH Highlights\n\nTap any link below to join!`}
                  isBot
                  timestamp="10:15"
                  avatar="🤖"
                />
              </TelegramMockup>
            </div>
          </div>

          {/* CMS tracking highlight */}
          <div className="bg-teal-50 rounded-xl border border-teal-200 p-5">
            <h4 className="text-sm font-semibold text-teal-800 mb-3">
              CMS Tracking
            </h4>
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-lg border border-teal-200 p-4 text-center">
                <p className="text-xs text-gray-500">New Joins</p>
                <p className="text-2xl font-bold text-teal-700 mt-1">+12</p>
                <p className="text-[10px] text-gray-400 mt-1">today</p>
              </div>
              <div className="flex-1 bg-white rounded-lg border border-teal-200 p-4 text-center">
                <p className="text-xs text-gray-500">New Messages</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">+47</p>
                <p className="text-[10px] text-gray-400 mt-1">today</p>
              </div>
            </div>
            <p className="text-xs text-teal-600 mt-3">
              Every new member join and new message is counted and visible in
              the CMS dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
