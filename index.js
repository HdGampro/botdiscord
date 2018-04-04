const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    console.log("I'm ready !");
});

// Configs
const PREFIX = "/";

bot.on("message", message => {


    // Commande /hello
    if(message.content.startsWith(PREFIX + "hello")) {
        message.reply("Salut")
    }
    
    if(message.content.startsWith(PREFIX + "help")) {
       message.reply("Page d'aide affichée avec succès !") 
    }

});
