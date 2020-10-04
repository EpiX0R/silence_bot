const Discord = require('discord.js');
const auth = require("./auth/auth.json");

const settings = require("./settings/settings.json");
let users = settings.users;

const client = new Discord.Client();


client.on('ready', () => {
    console.log("SILENCE BOT is running.");
});

client.on('message', message => {
    let msg = message.content;
    let author = message.author;

    if (users.includes(message.author.id)) {
        message.channel.send("> " + msg + "\n " + author, {files: ["pics/SILENCE_PEDO.jpg"]});
    }
});

client.login(auth.token);
