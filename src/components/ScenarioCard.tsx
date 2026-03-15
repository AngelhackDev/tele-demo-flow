interface ScenarioCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ScenarioCard({
  title,
  description,
  children,
}: ScenarioCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
