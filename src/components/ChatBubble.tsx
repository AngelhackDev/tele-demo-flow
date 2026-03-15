interface ChatBubbleProps {
  sender: string;
  message: string;
  isBot?: boolean;
  timestamp?: string;
  avatar?: string;
}

export default function ChatBubble({
  sender,
  message,
  isBot = false,
  timestamp = "12:00",
  avatar,
}: ChatBubbleProps) {
  return (
    <div className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
          isBot ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        {avatar || sender[0]}
      </div>
      <div className={`max-w-[70%] ${isBot ? "" : "text-right"}`}>
        <p className="text-xs text-gray-500 mb-1">{sender}</p>
        <div
          className={`inline-block px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isBot
              ? "bg-blue-50 text-gray-800 rounded-tl-sm"
              : "bg-gray-100 text-gray-800 rounded-tr-sm"
          }`}
        >
          <p className="whitespace-pre-line">{message}</p>
        </div>
        <p className="text-[10px] text-gray-400 mt-1">{timestamp}</p>
      </div>
    </div>
  );
}
