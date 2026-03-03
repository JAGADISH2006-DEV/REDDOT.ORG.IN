const { exec } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting deployment preparation...');

// Check if we have a GitHub username in the script
// TODO: Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
const githubUsername = 'YOUR_GITHUB_USERNAME';

if (githubUsername === "YOUR_GITHUB_USERNAME") {
    console.log('📝 Please set your GitHub username in this script first!');
    console.log('1. Edit deploy.js and replace "YOUR_GITHUB_USERNAME" with your actual GitHub username');
    console.log('2. Run this script again');
    return;
}

console.log(`🔧 GitHub username set to: ${githubUsername}`);

// Commands to execute
const commands = [
    'git remote add origin https://github.com/' + githubUsername + '/reddot-website.git',
    'git branch -M main',
    'git push -u origin main'
];

console.log('📡 Deploying to GitHub...');
console.log('This will:');
console.log('1. Add GitHub as remote origin');
console.log('2. Set main branch');
console.log('3. Push code to GitHub');

// Execute commands
let i = 0;
function executeCommand() {
    if (i >= commands.length) {
        console.log('✅ Deployment preparation completed!');
        console.log('\nNext steps:');
        console.log('1. Go to https://vercel.com/new');
        console.log('2. Sign in with GitHub');
        console.log('3. Import your reddot-website repository');
        console.log('4. Add environment variables from your .env.local file');
        return;
    }
    
    const command = commands[i];
    console.log(`\nExecuting: ${command}`);
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`❌ Error: ${error.message}`);
            if (command.includes('remote add') && error.message.includes('remote origin already exists')) {
                console.log('⚠️  Remote origin already exists, continuing...');
            } else {
                return;
            }
        }
        if (stderr) console.log(`⚠️  stderr: ${stderr}`);
        if (stdout) console.log(`✅ stdout: ${stdout}`);
        
        i++;
        executeCommand();
    });
}

executeCommand();