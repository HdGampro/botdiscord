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
    if(command === "hello"){
        message.reply('Salut !');
    }

     if(command === "help"){
        message.reply("page d'aide affichée avec sucès");
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
