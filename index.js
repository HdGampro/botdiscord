const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("NDMwNDY3NzIzMzI4MzU2MzU3.DaaVnQ.m0YYvDFyOm24MVp7fuO8ZvI_DbE");

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
