# SILENCE BOT


## About

SILENCE BOT is a bot for the Discord chat application running on the Discord.js library.

It is a very simple bot. The bot checks every message sent in the server for a matching userID.
If the userID matches it replies to that message with the image in the pics/ folder.


## Requirements

To use this bot you need to have the following tools/programs installed:

* Node.js
* npm


## Installation

Simple installation guide.

1. Clone or download this repository
2. From within a command-line enter the repository folder and run `npm install`.
3. Rename `auth_template.json` to `auth.json` in the `auth/` folder.
4. Change the "your token here" text in `auth.json` to your token from the [Discord Developer Portal](https://discord.com/developers).

## Running the bot

Simple starting guide. This is how you run the bot.

### General

1. From within a command-line enter the repository folder and run `npm start`.

### Windows users:

1. Run the start.bat file in the repository folder.


## Configuration

In the `settings/` folder you find a `settings.json` file. Within this there is a list called users.
You can change the lists content to Discord userID's for the bot to recognize users.