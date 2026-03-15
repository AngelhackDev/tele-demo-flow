"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

type Tab = "group" | "global";

export default function AiSettingsPage() {
  return (
    <Suspense>
      <AiSettingsContent />
    </Suspense>
  );
}

function AiSettingsContent() {
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as Tab) || "global";

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">7. AI Settings</h1>
          <p className="text-gray-500 mt-1">
            Configure AI behavior with group-level and global settings for
            prompts, thresholds, and limits
          </p>
        </div>

        {/* Sub-menu tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-xs">
          <Link
            href="/demo/ai-settings?tab=global"
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
              activeTab === "global"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Global Setting
          </Link>
          <Link
            href="/demo/ai-settings?tab=group"
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
              activeTab === "group"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Group Setting
          </Link>
        </div>

        {activeTab === "group" && <GroupSettings />}
        {activeTab === "global" && <GlobalSettings />}
      </div>
    </div>
  );
}

function GroupSettings() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">
            Per-Group AI Configuration
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Each group/channel can have its own AI settings that override global
            defaults
          </p>
        </div>
        <div className="p-6">
          {/* Group selector */}
          <div className="mb-6">
            <label className="text-xs text-gray-500 font-medium">
              Select Group
            </label>
            <div className="mt-1 flex gap-2">
              <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-sm rounded-lg font-medium border border-indigo-200">
                Star Search Official Forum
              </span>
              <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded-lg cursor-pointer hover:bg-gray-200">
                The Voice SG Fans
              </span>
              <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded-lg cursor-pointer hover:bg-gray-200">
                Drama Club SG
              </span>
            </div>
          </div>

          {/* Settings form */}
          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 font-medium">
                AI System Prompt
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                You are a helpful assistant for Mediacorp&apos;s Star Search
                community. Answer questions based only on the provided knowledge
                base. Keep replies concise, friendly, and use emojis sparingly.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium">
                  Confidence Threshold
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                    85%
                  </div>
                  <span className="text-xs text-gray-400">to auto-reply</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium">
                  Max Replies / User / Day
                </label>
                <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                  5
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium">
                  Fallback Message
                </label>
                <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                  Sorry, I don&apos;t have information about that yet. Please
                  visit our official website for assistance!
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium">
                  Rate Limit Message
                </label>
                <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
                  You&apos;ve reached the daily limit for bot replies. Please
                  check back tomorrow!
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium">
                Trigger Mode
              </label>
              <div className="mt-1 flex gap-2">
                {["MENTION", "COMMAND", "KEYWORD", "ALL"].map((mode) => (
                  <span
                    key={mode}
                    className={`px-3 py-1.5 text-xs rounded-lg font-medium ${
                      mode === "MENTION"
                        ? "bg-indigo-100 text-indigo-700 border border-indigo-200"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium">
                Knowledge Base
              </label>
              <div className="mt-1 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <span className="text-sm">📄</span>
                  <span className="text-sm font-medium">
                    star_search_faq_2026.csv
                  </span>
                  <span className="text-xs text-gray-400">10 rows</span>
                </div>
                <button className="px-3 py-2 text-xs text-blue-600 font-medium hover:bg-blue-50 rounded-lg">
                  + Upload New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Override indicator */}
      <div className="bg-indigo-50 rounded-lg p-4 text-sm">
        <p className="font-medium text-indigo-800">How group settings work</p>
        <ul className="mt-2 text-indigo-700 space-y-1">
          <li>
            - Group settings override global defaults for that specific group
          </li>
          <li>
            - If a group has no custom setting, it falls back to the global
            default
          </li>
          <li>
            - Each group can have its own AI prompt, threshold, and knowledge
            base
          </li>
        </ul>
      </div>
    </div>
  );
}

function GlobalSettings() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">
            Global AI Defaults
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Default settings applied to all groups unless overridden at group
            level
          </p>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="text-xs text-gray-500 font-medium">
              Default System Prompt
            </label>
            <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
              You are a helpful assistant for Mediacorp communities. Answer
              questions based only on the provided knowledge base. Be concise
              and friendly.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-500 font-medium">
                Default Confidence Threshold
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                85%
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">
                Default Max Replies / User / Day
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                5
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">
                Default Trigger Mode
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                MENTION
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 font-medium">
              OpenAI Model
            </label>
            <div className="mt-1 flex gap-2">
              {["gpt-4o", "gpt-4o-mini", "gpt-3.5-turbo"].map((model) => (
                <span
                  key={model}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium ${
                    model === "gpt-4o"
                      ? "bg-indigo-100 text-indigo-700 border border-indigo-200"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 font-medium">
                Temperature
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                0.3
              </div>
              <p className="text-[10px] text-gray-400 mt-1">
                Lower = more focused, higher = more creative
              </p>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">
                Max Tokens
              </label>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">
                500
              </div>
              <p className="text-[10px] text-gray-400 mt-1">
                Maximum length of bot response
              </p>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 font-medium">
              Default Fallback Message
            </label>
            <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
              Sorry, I don&apos;t have information about that yet. Please visit
              our official website for assistance!
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 font-medium">
              Moderation Thresholds
            </label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <p className="text-xs text-gray-500">Auto-delete threshold</p>
                <p className="text-sm font-medium">≥ 80%</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <p className="text-xs text-gray-500">Flag for review</p>
                <p className="text-sm font-medium">50% – 79%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active overrides summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          Groups with Custom Overrides
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-2 pr-4 text-gray-500 font-medium">Group</th>
                <th className="pb-2 pr-4 text-gray-500 font-medium">
                  Threshold
                </th>
                <th className="pb-2 pr-4 text-gray-500 font-medium">
                  Max Replies
                </th>
                <th className="pb-2 pr-4 text-gray-500 font-medium">
                  Trigger
                </th>
                <th className="pb-2 text-gray-500 font-medium">
                  Custom Prompt
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Star Search Official Forum",
                  threshold: "85%",
                  replies: "5/day",
                  trigger: "MENTION",
                  prompt: true,
                },
                {
                  name: "The Voice SG Fans",
                  threshold: "85%",
                  replies: "10/day",
                  trigger: "COMMAND",
                  prompt: true,
                },
                {
                  name: "Drama Club SG",
                  threshold: "—",
                  replies: "—",
                  trigger: "—",
                  prompt: false,
                },
              ].map((row) => (
                <tr key={row.name} className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">{row.name}</td>
                  <td className="py-2 pr-4">
                    {row.threshold === "—" ? (
                      <span className="text-gray-400">Global default</span>
                    ) : (
                      row.threshold
                    )}
                  </td>
                  <td className="py-2 pr-4">
                    {row.replies === "—" ? (
                      <span className="text-gray-400">Global default</span>
                    ) : (
                      row.replies
                    )}
                  </td>
                  <td className="py-2 pr-4">
                    {row.trigger === "—" ? (
                      <span className="text-gray-400">Global default</span>
                    ) : (
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">
                        {row.trigger}
                      </span>
                    )}
                  </td>
                  <td className="py-2">
                    {row.prompt ? (
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                        Yes
                      </span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
