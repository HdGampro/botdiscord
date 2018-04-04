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

    if(message.content.startsWith(PREFIX + `info`)) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
      
          if(getvalueof.bot == true){
              var checkbot = "L'utilisateur est un bot";
          } else {
              var checkbot = "N'est pas un bot";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne";
          }else {
            var status = "Hors ligne";
          }
      
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudonyme :',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'ID :',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Discriminateur :',
                value: getvalueof.discriminator,
                inline: true
      },{
                name: 'Status :',
                value: status,
                inline: true
      },{
                name: 'Bot :',
                value: checkbot,
                inline: true
      }],
            }
      });
      
      }


});
