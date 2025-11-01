import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set');
  console.error('Please create a .env.local file with your DATABASE_URL');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function initDatabase() {
  console.log('🚀 Initializing database schema...\n');

  try {
    // Create analytics table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS analytics (
        id SERIAL PRIMARY KEY,
        event VARCHAR(255) NOT NULL,
        page VARCHAR(255),
        data JSONB,
        metadata JSONB,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Created analytics table');

    // Create index on event and timestamp for faster queries
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_analytics_event ON analytics(event);
    `);
    console.log('✅ Created index on analytics.event');

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);
    `);
    console.log('✅ Created index on analytics.timestamp');

    console.log('\n✅ Database initialization complete!');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

initDatabase().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
