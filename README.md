# App Platform Demo

A standalone, interactive demo application showcasing DigitalOcean's App Platform. Built with Next.js 15, TypeScript, Tailwind CSS, and powered by a hard-isolated DigitalOcean Postgres database.

## Features

- **Authentic UI**: Pixel-perfect replication of DigitalOcean App Platform design
- **Hard Isolation Database**: Dedicated Postgres schema (`appplat_demo`) with isolated user access
- **Analytics Tracking**: Real-time event tracking for demo engagement metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Production-Ready**: Optimized build, proper error handling, and SSL-enabled database connections

## Tech Stack

- **Frontend**: Next.js 15.0.3, React 19, TypeScript
- **Styling**: Tailwind CSS with DigitalOcean design tokens
- **Database**: DigitalOcean Managed PostgreSQL (hard isolation)
- **Icons**: Lucide React
- **Deployment**: Ready for DigitalOcean App Platform

## Quick Start

### Prerequisites

- Node.js 18+ installed
- Access to DigitalOcean Postgres database (connection string in `.env.local`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bikram20/appplat-demo.git
   cd appplat-demo
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables:
   ```bash
   # Create .env.local file with your DATABASE_URL
   cp .env.local.example .env.local
   # Edit .env.local with your actual database connection string
   ```

4. Initialize the database:
   ```bash
   npx tsx scripts/init-db.ts
   ```

5. Test the database connection:
   ```bash
   npx tsx scripts/test-db.ts
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

This demo uses a hard-isolated Postgres database:

- **Database**: `appplat_demo_db`
- **Schema**: `appplat_demo`
- **User**: `appplat_demo_user` (limited to schema only)
- **Connection Limit**: 20 concurrent connections
- **SSL**: Required and enabled

The database includes an `analytics` table for tracking:
- Page views
- User interactions
- Tour engagement (Stage 2)

## Project Structure

```
appplat-demo/
├── app/
│   ├── api/track/          # Analytics tracking API
│   ├── apps/               # Apps list page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles with design tokens
├── components/
│   ├── demo/               # Demo-specific components
│   │   ├── Header.tsx      # Top navigation header
│   │   └── Sidebar.tsx     # Left sidebar navigation
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── data/
│   └── apps.ts             # Demo app data
├── lib/
│   ├── analytics.ts        # Analytics tracking utilities
│   ├── db.ts               # Database connection
│   └── utils.ts            # Utility functions
├── scripts/
│   ├── init-db.ts          # Database initialization
│   └── test-db.ts          # Database connection test
└── tailwind.config.ts      # Tailwind with DO design tokens
```

## Deployment

This application is designed to be deployed on DigitalOcean App Platform.

### Deploy via UI

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect this GitHub repository
4. Configure environment variables:
   - Add `DATABASE_URL` with your Postgres connection string
5. Deploy!

### Environment Variables

Required environment variables for deployment:

```
DATABASE_URL=postgresql://user:password@host:port/database
```

## Development

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Stage 2: Interactive Tours (Coming Soon)

Stage 2 will add interactive guided tours using driver.js:

- Tour 1: Explore Existing App
- Tour 2: Deploy New App
- Custom popover styling
- Analytics for tour engagement
- Multi-step workflows

## Database Credentials

The database credentials are stored in:
`.claude/skills/digitalocean-postgres/.db-credentials/appplat_demo_credentials.txt`

## Analytics

The demo tracks:
- Page views
- Navigation patterns
- Button clicks
- Tour completion rates (Stage 2)

View analytics in the `analytics` table:

```sql
SELECT * FROM analytics ORDER BY timestamp DESC LIMIT 10;
```

## Security

- Hard database isolation (dedicated schema and user)
- SSL-enabled database connections
- No public schema access for demo user
- Environment variables for sensitive data
- `.env.local` excluded from version control

## License

This is a demo application for DigitalOcean App Platform. All rights reserved.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Next.js and DigitalOcean

🤖 Generated with [Claude Code](https://claude.com/claude-code)
