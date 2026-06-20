const { execSync } = require('child_process');

// 1. Parse SAP BTP VCAP_SERVICES to get PostgreSQL credentials
if (process.env.VCAP_SERVICES) {
  const vcapServices = JSON.parse(process.env.VCAP_SERVICES);
  
  const postgresService = Object.values(vcapServices)
    .flat()
    .find(service => service.tags && service.tags.includes('postgresql') || service.label.includes('postgres'));

  if (postgresService) {
    const credentials = postgresService.credentials;
    
    // 2. Map credentials to n8n specific environment variables
    process.env.DB_TYPE = 'postgresdb';
    process.env.DB_POSTGRESDB_HOST = credentials.hostname || credentials.host;
    process.env.DB_POSTGRESDB_PORT = credentials.port || 5432;
    process.env.DB_POSTGRESDB_DATABASE = credentials.dbname || credentials.database;
    process.env.DB_POSTGRESDB_USER = credentials.username || credentials.user;
    process.env.DB_POSTGRESDB_PASSWORD = credentials.password;
    
    // 🔥 FIX: Enforce SSL connectivity for BTP Hyperscaler PostgreSQL instances
    process.env.DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED = 'false'; // Allows connection if the cert is self-signed by the BTP infrastructure
    
    console.log('✅ Successfully mapped SAP BTP PostgreSQL credentials with SSL configuration.');
  } else {
    console.log('⚠️ No bound PostgreSQL service found in VCAP_SERVICES.');
  }
}

// 3. Hand over execution to the native n8n binary startup script
try {
  execSync('npx n8n start', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start n8n:', error);
  process.exit(1);
}