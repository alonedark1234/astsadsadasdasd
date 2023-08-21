const coin = require("../../schemas/coin");
const penals = require("../../schemas/penals")
const moment = require("moment");
const ceza = require("../../schemas/ceza");
const cezapuan = require("../../schemas/cezapuan")
const banLimit = new Map();
moment.locale("tr");
const conf = require("../../configs/sunucuayar.json")
const allah = require("../../configs/config.json");
const { red, green } = require("../../configs/emojis.json")

module.exports = {
  conf: {
    aliases: ["banlist","yargılist","banliste"],
    name: "banliste",
    help: "banliste",
    category: "cezalandırma",
  },

  run: async (client, message, args, embed) => {
    const data = await penals.findOne({ guildID: message.guild.id, id: args[0] });
    if (!message.member.permissions.has("BAN_MEMBERS") &&  !conf.banHammer.some(x => message.member.roles.cache.has(x))) { message.channel.send({ content:"Yeterli yetkin bulunmuyor!"}).then((e) => setTimeout(() => { e.delete(); }, 5000));
    message.react(red)
    return }
    const ban = await message.guild.bans.fetch();
    if (!ban) { message.channel.send({ content: "Banlı üye bulunmamaktır."}).then((e) => setTimeout(() => { e.delete(); }, 5000));
    message.react(red)
    return }
    message.guild.bans.fetch().then(banned => {
    let list = banned.map(user => `ID:                | Kullanıcı Adı:               | Yasaklanma Sebebi\n${user.user.id} | ${user.user.tag} ${data.reason}`).join('\n');
    message.channel.send({ content:`\`\`\`js\n${list}\n\nSunucuda toplamda ${banned.size} yasaklı kullanıcı bulunmakta.\n\`\`\``})
    })
  },
};