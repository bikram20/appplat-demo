'use client';

import { Search, HelpCircle, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-14 bg-white border-b border-[var(--color-border)] flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            placeholder="Search by resource name or public IP (Cmd+B)"
            className="w-full pl-10 pr-4 py-2 text-sm border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 ml-6">
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
          Create
        </button>

        <button className="p-2 hover:bg-gray-100 rounded">
          <HelpCircle className="w-5 h-5 text-[var(--color-text-secondary)]" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded relative">
          <Bell className="w-5 h-5 text-[var(--color-text-secondary)]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 pl-4 border-l border-[var(--color-border)]">
          <div className="text-right">
            <div className="text-sm font-medium text-[var(--color-text)]">Bikram Team</div>
            <div className="text-xs text-[var(--color-text-secondary)]">Estimated costs: $0.00</div>
          </div>
          <button className="w-10 h-10 bg-[#00d7d2] rounded-full flex items-center justify-center text-white font-semibold">
            BT
          </button>
        </div>
      </div>
    </header>
  );
}
