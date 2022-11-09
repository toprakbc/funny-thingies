const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:hypesquad1:750076071721828452> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) \n <a:hypesquad1:750076071721828452> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/H54BNFR) \n <a:hypesquad1:750076071721828452> **Web Sitemizi Ziyaret etmek İçin** [TIKLA](https://piratebots.glitch.me)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};