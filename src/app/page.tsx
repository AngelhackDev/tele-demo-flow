import Link from "next/link";
import { features } from "@/lib/features";

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Mediacorp Telegram Bot
          </h1>
          <p className="text-gray-500 mt-2">
            Interactive demo showcasing bot features, scenarios, and expected
            behaviors
          </p>
        </div>

        {/* Feature buttons - matching the image layout */}
        <div className="flex flex-wrap gap-3 mb-12">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-800 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <span className="text-gray-500">{feature.number}.</span>
              <span>{feature.title}</span>
            </Link>
          ))}
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${feature.color} text-white`}
                >
                  {feature.icon}
                </span>
                <h2 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 text-xs text-blue-500 font-medium">
                View scenarios →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
