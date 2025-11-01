'use client';

import Link from 'next/link';
import { Rocket, Eye, Droplet } from 'lucide-react';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

export default function HomePage() {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#031b4e] to-[#0069ff] flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Droplet className="w-10 h-10 text-[#0069ff]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to App Platform Demo
          </h1>
          <p className="text-xl text-white/80">
            Choose your journey through DigitalOcean's App Platform
          </p>
        </div>

        {/* Tour Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Explore Existing App Tour */}
          <Link
            href="/apps"
            className="group bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#0069ff]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0069ff]/20 transition-colors">
                <Eye className="w-6 h-6 text-[#0069ff]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-2 group-hover:text-[#0069ff] transition-colors">
                  Explore Existing App
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Tour through an existing application's features, settings, and deployment options. Perfect for understanding how to manage and monitor your apps.
                </p>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  <strong>You'll explore:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>App overview and health status</li>
                    <li>Component management</li>
                    <li>Settings and configuration</li>
                    <li>Logs and insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center text-[#0069ff] font-medium group-hover:gap-2 transition-all">
              Start Exploring <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Deploy New App Tour */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Deploy New App
                </h2>
                <p className="text-white/80 mb-4">
                  Experience the full deployment journey from connecting your repository to launching your first app. Learn the complete workflow step-by-step.
                </p>
                <div className="text-sm text-white/70">
                  <strong className="text-white">You'll learn:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Repository connection</li>
                    <li>Build configuration</li>
                    <li>Resource selection</li>
                    <li>Deployment and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center text-white/60 font-medium">
              Coming in Stage 2 (Tours)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-white/60 text-sm">
          <p>This is a standalone demo application built with Next.js 15 and DigitalOcean Postgres</p>
          <p className="mt-2">Analytics tracking is enabled to monitor demo engagement</p>
        </div>
      </div>
    </div>
  );
}
