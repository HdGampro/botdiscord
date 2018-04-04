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

bot.login('NDI4MzE5NDYwODQ4NTY2Mjc0.DaRbcg.gMMtt-QT8ub00Ibjviae1s25eMQ') // token