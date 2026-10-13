const { execSync } = require('child_process');

process.env.DB_TYPE = 'sqlite';
process.env.N8N_LISTEN_ADDRESS = process.env.N8N_LISTEN_ADDRESS || '0.0.0.0';

// Cloud Foundry routes to the port it injects as PORT.
if (process.env.PORT) {
  process.env.N8N_PORT = process.env.PORT;
}

try {
  execSync('npx --no-install n8n start', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start n8n:', error);
  process.exit(1);
}
