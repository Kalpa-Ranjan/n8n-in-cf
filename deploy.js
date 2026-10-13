const { execSync } = require('child_process');
const crypto = require('crypto');

const appName = 'my-n8n-platform';

function capture(command) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (error) {
    const output = `${error.stdout || ''}${error.stderr || ''}`;
    const wrapped = new Error(output.trim() || error.message);
    wrapped.output = output;
    throw wrapped;
  }
}

function run(command) {
  execSync(command, { stdio: 'inherit', shell: true });
}

const domains = JSON.parse(capture('cf curl /v3/domains'));
const domain = (domains.resources || []).find(
  (item) => item.internal === false && item.name.startsWith('cfapps.')
);

if (!domain) {
  console.error('Could not find the public address for this space.');
  process.exit(1);
}

const suffix = crypto.randomBytes(3).toString('hex');
const host = `${appName}-${suffix}`;
const url = `https://${host}.${domain.name}`;

let appDetails = '';
try {
  appDetails = capture(`cf app ${appName}`);
} catch (error) {
  appDetails = error.output || '';
  if (!/not found/i.test(appDetails)) {
    console.error(appDetails.trim() || error.message);
    process.exit(1);
  }
}

if (/requested state:\s+started/i.test(appDetails)) {
  run(`cf stop ${appName}`);
}

run(
  `cf push ${appName} -f manifest.yml --var app-host=${host} --var app-domain=${domain.name}`
);

console.log(`\nYour link:\n${url}\n`);
