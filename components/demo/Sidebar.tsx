'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Droplet,
  Boxes,
  Database,
  HardDrive,
  Container,
  Network,
  Activity,
  DollarSign,
  Settings,
  HelpCircle
} from 'lucide-react';

const navigation = [
  {
    title: 'MANAGE',
    items: [
      { name: 'App Platform', href: '/apps', icon: LayoutGrid, badge: null },
      { name: 'Droplets', href: '/droplets', icon: Droplet, badge: null },
      { name: 'Kubernetes', href: '/kubernetes', icon: Boxes, badge: null },
      { name: 'Databases', href: '/databases', icon: Database, badge: null },
      { name: 'Volumes Block Storage', href: '/volumes', icon: HardDrive, badge: null },
      { name: 'Spaces Object Storage', href: '/spaces', icon: Container, badge: null },
      { name: 'Networking', href: '/networking', icon: Network, badge: null },
      { name: 'Monitoring', href: '/monitoring', icon: Activity, badge: null },
    ]
  },
  {
    title: '',
    items: [
      { name: 'Billing', href: '/billing', icon: DollarSign, badge: null },
      { name: 'Support', href: '/support', icon: HelpCircle, badge: null },
      { name: 'Settings', href: '/settings', icon: Settings, badge: null },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[186px] min-h-screen bg-[#031b4e] text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b border-white/10">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <Droplet className="w-6 h-6 text-[#0069ff]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navigation.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.title && (
              <div className="px-4 py-2 text-xs font-semibold text-white/60">
                {section.title}
              </div>
            )}
            <ul>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                        ${isActive
                          ? 'bg-white/10 text-white border-l-2 border-[#0069ff]'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto bg-[#0069ff] text-xs px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="text-xs text-white/60">By DigitalOcean</div>
      </div>
    </aside>
  );
}
