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

async function testConnection() {
  console.log('🧪 Testing database connection...\n');

  try {
    // Test basic connection
    const result = await pool.query('SELECT NOW() as current_time');
    console.log('✅ Database connection successful!');
    console.log('📅 Current database time:', result.rows[0].current_time);

    // Test analytics table
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'analytics'
      );
    `);

    if (tableCheck.rows[0].exists) {
      console.log('✅ Analytics table exists');

      const count = await pool.query('SELECT COUNT(*) FROM analytics');
      console.log(`📊 Analytics records: ${count.rows[0].count}`);
    } else {
      console.log('⚠️  Analytics table does not exist. Run: npx tsx scripts/init-db.ts');
    }

    console.log('\n✅ Database test complete!');
  } catch (error) {
    console.error('❌ Database test failed:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

testConnection().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
