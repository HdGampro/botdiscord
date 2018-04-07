const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NDMyMjYwOTE0MjQzMzA1NDgy.DaquNA.50Go60_aLkhcv_XnHqrZEcDSVEs');
bot.on('ready', function() {
    console.log("I'm ready !");
});

bot.on("message", (message) => {

    // Configs
    const PREFIX = ("/");
    if (!message.content.startsWith(PREFIX) || message.guild === null) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    // Commande /hello
    if(command === "hello"){
        message.reply('Salut !');
     }else if(command === "help"){
        message.reply("page d'aide affichée avec sucès");
     }else if(command === "test"){
         message.reply("test de connection avec le bot reussi !")
     }else if(command === "breuh"){
        message.reply("breuh")
     }

});

bot.on("guildMemberAdd", (member) => {
    member.guild.channels.find("name", "bienvenue").send(`bienvenue ${member} n'hésite pas à invité tes amis pour obtenir le grade @V.I.P`)

});
