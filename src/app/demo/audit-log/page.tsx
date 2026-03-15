export default function AuditLogPage() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">8. Audit Log</h1>
          <p className="text-gray-500 mt-1">
            Track and review all admin actions, bot events, and system changes
            for accountability
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-4xl mb-6">
            🚧
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Work in Progress
          </h2>
          <p className="text-gray-500 text-center max-w-md">
            Audit log features including admin action tracking, bot event
            history, and system change records are currently under development.
            Check back soon!
          </p>
          <span className="mt-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}
