interface TelegramMockupProps {
  groupName: string;
  children: React.ReactNode;
}

export default function TelegramMockup({
  groupName,
  children,
}: TelegramMockupProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 max-w-md mx-auto shadow-sm">
      {/* Telegram header */}
      <div className="bg-blue-500 text-white px-4 py-3 rounded-t-xl flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
          {groupName[0]}
        </div>
        <div>
          <p className="font-medium text-sm">{groupName}</p>
          <p className="text-[10px] text-blue-100">42 members, 5 online</p>
        </div>
      </div>
      {/* Chat area */}
      <div className="p-4 space-y-4 min-h-[300px] bg-[#e5ddd5]/30">
        {children}
      </div>
      {/* Input bar */}
      <div className="px-4 py-3 border-t border-gray-200 flex items-center gap-2">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
          Message...
        </div>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
          ▶
        </div>
      </div>
    </div>
  );
}
