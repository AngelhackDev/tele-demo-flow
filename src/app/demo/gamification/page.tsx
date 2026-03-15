import ScenarioCard from "@/components/ScenarioCard";
import TelegramMockup from "@/components/TelegramMockup";
import ChatBubble from "@/components/ChatBubble";

export default function GamificationPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            4. Gamification
          </h1>
          <p className="text-gray-500 mt-1">
            Quizzes, rewards, and engagement mechanics to boost audience
            participation
          </p>
        </div>

        <div className="space-y-8">
          <ScenarioCard
            title="Scenario: Live quiz during show"
            description="Bot posts a trivia question during the live broadcast. First correct answer wins points."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🎯 LIVE QUIZ TIME!\n\nQ: Which judge pressed their button first for tonight's contestant Sarah?\n\nA) Dick Lee\nB) Tanya Chua\nC) Jay Park\n\nReply with A, B, or C. First 10 correct answers get 50 points!`}
                isBot
                timestamp="21:45"
                avatar="🤖"
              />
              <ChatBubble
                sender="John"
                message="B"
                timestamp="21:45"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="✅ Correct, John! Tanya Chua pressed first! You earned 50 points. 🎉\n\nYour total: 250 points | Rank: #12"
                isBot
                timestamp="21:45"
                avatar="🤖"
              />
              <ChatBubble
                sender="Alice"
                message="A"
                timestamp="21:46"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="❌ Sorry Alice, that's not correct. The answer was B) Tanya Chua. Better luck next time!"
                isBot
                timestamp="21:46"
                avatar="🤖"
              />
            </TelegramMockup>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Expected Behavior
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Admin creates quiz questions in CMS with correct answers</li>
                <li>- Quiz auto-posts at scheduled time or triggered manually</li>
                <li>- Bot validates answers and awards points in real-time</li>
                <li>- First N correct responders get bonus points</li>
                <li>- Points tracked per user across all quizzes</li>
              </ul>
            </div>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Leaderboard check"
            description="User requests to see the current leaderboard rankings."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Mike"
                message="/leaderboard"
                timestamp="22:00"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🏆 Leaderboard - The Voice SG Fans\n\n🥇 Sarah_M — 520 pts\n🥈 John — 250 pts\n🥉 Mike — 180 pts\n4. Alice — 150 pts\n5. David — 120 pts\n\n📊 Your rank: #3 (180 pts)\n💡 Next quiz starts in 15 minutes!`}
                isBot
                timestamp="22:00"
                avatar="🤖"
              />
            </TelegramMockup>
          </ScenarioCard>

          <ScenarioCard
            title="Scenario: Prediction game"
            description="Bot lets users predict the outcome of the show with point rewards."
          >
            <TelegramMockup groupName="The Voice SG Fans">
              <ChatBubble
                sender="Mediacorp Bot"
                message={`🔮 PREDICTION GAME\n\nWho will be eliminated tonight?\n\n1️⃣ Contestant A - Kai\n2️⃣ Contestant B - Mei Ling\n3️⃣ Contestant C - Raj\n4️⃣ Contestant D - Sophia\n\nReply with 1-4 before 10 PM! Correct prediction = 100 points!`}
                isBot
                timestamp="21:30"
                avatar="🤖"
              />
              <ChatBubble
                sender="Fan99"
                message="3"
                timestamp="21:32"
              />
              <ChatBubble
                sender="Mediacorp Bot"
                message="📝 Got it, Fan99! Your prediction: Raj. Results revealed after the show!"
                isBot
                timestamp="21:32"
                avatar="🤖"
              />
            </TelegramMockup>
          </ScenarioCard>
        </div>
      </div>
    </div>
  );
}
