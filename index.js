const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "/"

bot.on('ready', function() {
    console.log("I'm ready !");
});

bot.on("message", message => {
	if(message.content.startsWith(PREFIX + "heloo")) {
		message.channel.send("Salut")
	}
})

bot.login(process.env.TOKEN) // token
