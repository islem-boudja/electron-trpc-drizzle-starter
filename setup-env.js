const fs = require('fs');
const path = require('path');

const envExamplePath = path.join(__dirname, '.env.example');
const envPath = path.join(__dirname, '.env');

function copyFileExceptFirstEightLines(source, destination) {
  const content = fs.readFileSync(source, 'utf8');
  const lines = content.split('\n');
  const newContent = lines.slice(8).join('\n');
  fs.writeFileSync(destination, newContent);
  console.log('.env file created successfully from .env.example (skipping first 8 lines)');
}

if (fs.existsSync(envPath)) {
  console.log('.env file already exists. Skipping creation.');
} else {
  copyFileExceptFirstEightLines(envExamplePath, envPath);
}
