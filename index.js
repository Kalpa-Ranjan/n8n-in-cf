const { execSync } = require('child_process');

process.env.DB_TYPE = 'sqlite';
process.env.N8N_LISTEN_ADDRESS = process.env.N8N_LISTEN_ADDRESS || '0.0.0.0';
process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || '--max-old-space-size=1600';

// Cloud Foundry routes to the port it injects as PORT.
if (process.env.PORT) {
  process.env.N8N_PORT = process.env.PORT;
}

// Each deployment gets its own address. Use that address for links inside n8n.
if (process.env.VCAP_APPLICATION) {
  try {
    const uris = JSON.parse(process.env.VCAP_APPLICATION).application_uris || [];
    const uri = uris.find((item) => item && !item.endsWith('.apps.internal'));
    if (uri) {
      process.env.N8N_PROTOCOL = 'https';
      process.env.N8N_HOST = uri;
      process.env.N8N_EDITOR_BASE_URL = `https://${uri}`;
      process.env.WEBHOOK_URL = `https://${uri}/`;
    }
  } catch (error) {
    console.error('Could not read the app address:', error);
  }
}

try {
  execSync('npx --no-install n8n start', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start n8n:', error);
  process.exit(1);
}
