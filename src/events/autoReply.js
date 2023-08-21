const conf = require("../configs/sunucuayar.json")
const { green } = require("../configs/emojis.json");

module.exports = async (message) => {
  if (message.content.toLowerCase() === "tag" || message.content.toLowerCase() === "!tag" || message.content.toLowerCase() === ".tag") {
    message.react(green);
    message.reply({ content: `${conf.tag}`});
  }
  if (message.content.toLowerCase() === "<@628978900604682243>" || message.content.toLowerCase() === "<@262324708609884170>") {
    message.react("<a:sarisiyahtik:1095474905161670696>");
    message.reply({ content: `Şuanda ona ulaşamıyorum. Daha sonra tekrar deneyin lütfen.`});
  }
};
module.exports.conf = {
  name: "messageCreate"
};