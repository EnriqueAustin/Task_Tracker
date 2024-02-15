const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');
const schedule = require('node-schedule');

// Function to show popup
const askWorkPopup = () =>
{
    const now = new Date();
    const dateString = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const filePath = path.join(__dirname, 'work_logs', `${dateString}.txt`);
  
    // Ensure the work_logs directory exists
    if (!fs.existsSync(path.dirname(filePath)))
    {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
  
    const cmd = os.platform() === 'win32' ? 
        `powershell.exe -File "${path.join(__dirname, 'getInput.ps1')}"` : 
        `zenity --entry --title="Work Log Entry" --text="What are you working on?"`;
  
    exec(cmd, (error, stdout, stderr) =>
    {
        if (error)
        {
            console.error(`exec error: ${error}`);
            return;
        }
        // Check if the user entered something
        if (stdout.trim().length > 0)
        {
            const logEntry = `[${timeString}] ${stdout.trim()}${os.EOL}`;
            fs.appendFileSync(filePath, logEntry, { encoding: 'utf8' });
            console.log('Entry saved.\n');
        } else {
            const logEntry = `[${timeString}] ${'No entry made.'}${os.EOL}`;
            fs.appendFileSync(filePath, logEntry, { encoding: 'utf8' });
            console.log('No entry made.\n');
        }
    });
};

// Schedule the job to run every 60 minutes
schedule.scheduleJob('*/1 * * * *', function()
{
    console.log('Time to log your work!');
    askWorkPopup();
});

console.log('Work tracker started. It will prompt you every 60 minutes to log your work.');

// Handle script exit gracefully
process.on('SIGINT', () =>
{
    console.log('Work tracker stopped.');
    process.exit();
});
