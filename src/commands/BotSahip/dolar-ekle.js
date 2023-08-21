const ozi = require("../../schemas/dolar");
const ayar = require("../../configs/sunucuayar.json")
const client = global.bot;
module.exports = {
  conf: {
    aliases: ["dolar"],
    name: "dolar",
    help: "dolar [ekle/sil/gönder] [kullanıcı] [sayı]",
    owner: false,
    category: "sahip",
  },

  run: async (client, message, args, embed, prefix) => {
    if(![ayar.sahipRolu].some(role => message.member.roles.cache.get(role)) && (!message.member.permissions.has("ADMINISTRATOR"))) 
  return message.channel.send({ content: `Bu komutu kullanabilmek için ayarlanan sahip rolüne sahip olmalısınız!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));

    let dolarData = await ozi.findOne({ guildID: message.guild.id, userID: message.author.id });  

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!member) return message.channel.send({ content:"Bir kullanıcı belirtmelisin!"});

    if (args[0] === "ekle" || args[0] === "add") {
      if (!message.member.permissions.has(8n)) return;
      const count = parseInt(args[2]);
      if (!count) return message.channel.send({ content:"Eklemek için bir sayı belirtmelisin!"});
      if (!count < 0) return message.channel.send({ content:"Eklenecek sayı 0'dan küçük olamaz!"});

      await ozi.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { dolar: count } }, { upsert: true });
      const coinData = await ozi.findOne({ guildID: message.guild.id, userID: member.user.id });
      let addedRoles = "";
      if (coinData && client.ranks.some(x => coinData.dolar >= x.dolar && !member.roles.cache.has(x.role))) {
        const roles = client.ranks.filter(x => coinData.dolar >= x.dolar && !member.roles.cache.has(x.role));
        addedRoles = roles;
        member.roles.add(roles[roles.length-1].role);
        embed.setColor("GREEN");
        client.channels.cache.find(x => x.name == "dolar_log").send({ embeds: [embed.setDescription(`${member.toString()} üyesine ${message.member.toString()} tarafından **${count}** adet dolar eklendi ve kişiye ${roles.filter(x => roles.indexOf(x) === roles.length-1).map(x => `<@&${x.role}>`).join("\n")} rolleri verildi!`)]});
      }
      message.channel.send({ embeds: [embed.setDescription(`Başarıyla ${member.toString()} kullanıcısına **${count}** adet dolar eklendi! \n\n${addedRoles.length > 0 ? `Verilen roller: \n${addedRoles.filter(x => addedRoles.indexOf(x) === addedRoles.length-1).map(x => `<@&${x.role}>`).join("\n")}` : ""}`)]});
    } else if (args[0] === "sil" || args[0] === "remove") {
      if (!message.member.permissions.has(8n)) return;
      if (member.user.id === message.author.id) return message.channel.send({ content:"Kendinden dolar çıkaramazsın!"});
      const count = parseInt(args[2]);
      if (!count) return message.channel.send({ content:"Çıkarılacak için bir sayı belirtmelisin!"});
      if (!count < 0) return message.channel.send({ content:"Çıkarılacak sayı 0'dan küçük olamaz!"});
      let coinData = await ozi.findOne({ guildID: message.guild.id, userID: member.user.id });
      if (!coinData || coinData && count > coinData.dolar) return message.channel.send({ content:"Çıkarmak istediğiniz sayı, kişinin mevcut parandan büyük olamaz!"});

      await ozi.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { dolar: -count } }, { upsert: true });
      coinData = await ozi.findOne({ guildID: message.guild.id, userID: member.user.id });
      let removedRoles = "";
      if (coinData && client.ranks.some(x => coinData.dolar < x.dolar && member.roles.cache.has(x.role))) {
        const roles = client.ranks.filter(x =>  coinData.dolar < x.dolar && member.roles.cache.has(x.role));
        removedRoles = roles;
        embed.setColor("RED");
        client.channels.cache.find(x => x.name == "dolar_log").send({ embeds: [embed.setDescription(`${member.toString()} üyesinden ${message.member.toString()} tarafından **${count}** adet dolar çıkarıldı ve kişiden ${roles.map(x => `<@&${x.role}>`).join(", ")} rolleri alındı!`)]});
      }
      message.channel.send({ embeds: [embed.setDescription(`Başarıyla ${member.toString()} kullanıcısından **${count}** adet dolar çıkarıldı! \n\n${removedRoles.length > 0 ? `Alınan roller: \n${removedRoles.map(x => `<@&${x.role}>`).join("\n")}` : ""}`)]});
    } else if (args[0] === "ver" || args[0] === "give" || args[0] === "gönder") {
      if (member.user.id === message.author.id) return message.channel.send({ content:"Kendine dolar veremezsin!"});
      const count = parseInt(args[2]);
      if (!count) return message.channel.send({ content:"Dolar vermek için bir sayı belirtmelisin!"});
      if (!count < 0) return message.channel.send({ content:"Verilecek sayı 0'dan küçük olamaz!"});
      let coinData = await dolarData.findOne({ guildID: message.guild.id, userID: message.author.id });
      if (!coinData || coinData && count > coinData.dolar) return message.channel.send({ content:"Göndereceğin sayı kendi parandan yüksek olamaz!"});

      await ozi.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { dolar: count } }, { upsert: true });
      await ozi.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { dolar: -count } }, { upsert: true });
      coinData = await ozi.findOne({ guildID: message.guild.id, userID: message.author.id });
      if (coinData && client.ranks.some(x => coinData.dolar < x.dolar && message.member.roles.cache.has(x.role))) {
      }
      const coinData2 = await ozi.findOne({ guildID: message.guild.id, userID: member.user.id });
      if (coinData2 && client.ranks.some(x => coinData2.dolar >= x.dolar && !member.roles.cache.has(x.role))) {
        const roles = client.ranks.filter(x => coinData2.cdolaroin >= x.dolar && !member.roles.cache.has(x.role));
        member.roles.add(roles[roles.length-1].role);
      }
      
      message.channel.send({ embeds: [embed.setDescription(`${member.toString()} kişisine başarıyla **${count}** dolar gönderildi!`)]});
    }
  }
};
