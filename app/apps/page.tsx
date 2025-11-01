'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, MoreVertical, Sparkles, Container, Database } from 'lucide-react';
import { apps } from '@/data/apps';
import { trackPageView } from '@/lib/analytics';

export default function AppsPage() {
  useEffect(() => {
    trackPageView('/apps');
  }, []);

  return (
    <div className="bg-[var(--color-bg)] min-h-full">
      {/* Hero Section */}
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-[var(--color-heading)]">
              DigitalOcean App Platform
            </h1>
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded font-medium transition-colors">
              Create App
            </button>
          </div>

          {/* App Card Example - Plankton App */}
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-[#0069ff] rounded flex items-center justify-center text-white text-xl font-bold">
                  P
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-1">
                    plankton-app
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-3">
                    <span>Deployed 5 months ago</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-[var(--color-success)] rounded-full"></span>
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      1 Web Service
                    </span>
                    <Link
                      href="https://plankton-app.ondigitalocean.app"
                      className="text-[var(--color-primary)] hover:underline flex items-center gap-1"
                      target="_blank"
                    >
                      Live app <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-[var(--color-text)]">PROJECT</div>
                  <div className="text-sm text-[var(--color-primary)]">bgupta@digitalocean.com</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-[var(--color-text)]">ENVIRONMENT</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Add to project</div>
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  🇺🇸 NYC1
                </div>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build on what you have section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-[var(--color-heading)] mb-6">
          Build on what you have
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* BUILD WITH AI Card */}
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-heading)] mb-1">
                  BUILD WITH AI
                </h3>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Go from idea to MVP using AI-assisted development and tools.
            </p>
            <Link
              href="#"
              className="text-[var(--color-primary)] text-sm hover:underline inline-flex items-center gap-1"
            >
              Add DigitalOcean MCP server <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* CONTAINER REGISTRY Card */}
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              <Container className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-heading)] mb-1">
                  CONTAINER REGISTRY
                </h3>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Deploy containerized apps with private and public images.
            </p>
            <Link
              href="#"
              className="text-[var(--color-primary)] text-sm hover:underline inline-flex items-center gap-1"
            >
              Deploy from container images <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* MANAGED DATABASES Card */}
          <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              <Database className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-heading)] mb-1">
                  MANAGED DATABASES
                </h3>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Create managed databases that handle administrative tasks for you.
            </p>
            <Link
              href="#"
              className="text-[var(--color-primary)] text-sm hover:underline inline-flex items-center gap-1"
            >
              Create a managed database <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Learn more section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--color-heading)] mb-4">
            Learn more about App Platform
          </h2>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-[var(--color-primary)] hover:underline flex items-center gap-1">
              📚 Product Docs <ExternalLink className="w-3 h-3" />
            </Link>
            <Link href="#" className="text-[var(--color-primary)] hover:underline flex items-center gap-1">
              📖 Api Docs <ExternalLink className="w-3 h-3" />
            </Link>
            <Link href="#" className="text-[var(--color-primary)] hover:underline flex items-center gap-1">
              💬 Community <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
