# Work Tracker Application

The Work Tracker is a simple yet effective tool designed to help professionals and teams keep track of their work activities throughout the day. By prompting the user every 30 minutes to log their current task, it ensures a comprehensive record of work done, aiding in time management, productivity analysis, and accurate timesheet reporting.

## Features

- **Regular Prompts:** Receive a popup prompt every 30 minutes asking what you are working on.
- **Non-intrusive:** The popup is designed to appear on top of all other windows, ensuring you notice it without disrupting your workflow.
- **Daily Logs:** Entries are saved in a text file, organized by date, for easy reference and timesheet compilation.
- **Easy Setup:** With minimal dependencies and a simple setup process, start tracking your work with just a few steps.
- **Cross-Platform Support:** Compatible with both Windows and Linux operating systems.

## Prerequisites

- Node.js installed on your system.
- PowerShell for Windows users (comes pre-installed on Windows systems).
- Zenity for Linux users (often comes pre-installed on GNOME-based distributions like Ubuntu).

## Setup Instructions

1. **Clone or Download the Repository**
   - Obtain the scripts by cloning this repository or downloading the files directly into your desired project directory.

2. **Install Node.js Dependencies**
   - Navigate to your project directory in a terminal or command prompt.
   - Run `npm install` to install the required Node.js packages.

3. **Installing Zenity on Linux**
   - For Linux users, if Zenity is not already installed, you can install it using the package manager. On Ubuntu or Debian-based distributions, use:
      - sudo apt-get update
      - sudo apt-get install zenity

4. **Prepare the PowerShell Script**
   - Windows: Ensure the `getInput.ps1` PowerShell script is placed in the same directory as your Node.js script (`workTracker.js`).
   - Linux: No additional script setup is required for Linux as it uses Zenity, which is invoked directly from the Node.js script.

## Running the Application

- Open a terminal or command prompt.
- Navigate to the project directory.
- Run the command `node workTracker.js` to start the application.
- The application will now prompt you every 30 minutes to log your current task. These entries will be saved in a file within the `work_logs` directory, organized by date.

## Customization

1. **Prompt Interval:** Adjust the prompt interval by modifying the schedule in `workTracker.js`
2. **Popup Appearance:** The appearance and behavior of the popup window can be customized:
   - Windows: Modify the `getInput.ps1` PowerShell script.
   - Linux: Zenity command-line options within `workTracker.js`can be adjusted for different popup appearances.

## Stopping the Application

- To stop the application, press `Ctrl + C` in the terminal or command prompt window where the application is running.

