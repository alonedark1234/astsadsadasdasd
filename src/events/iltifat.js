const conf = require("../configs/sunucuayar.json")
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

    let iltifatSayi = 0;
    let iltifatlar = [
      "Hee öyle mi olmuş knk",
      "Aynen ya bana şurdan bi touch blue alıp gelsene",
      "Doğru söylüyor ben ordaydım",
      "Bizim köydede bi çocuk bunu yapıyordu çocuğu yediler",
      "Biliyorum bunu ben zaten",
      "Olum onu bırakta geçen yeni bi animeye başladım atack on titan diye",
      "Uzatma kısa kes aga ya",
      "La bi durda ben söyleyim ya",
      "aa nerden biliyon lan",
      "Kim etiket attı sen mi",
      "Ulan bunun gibiler olmasaydı dünyanın yarısı osmanlıydı hala",
      "Sokaklar geziniyoruz kafamız matiz",
      "Binali wyırdırımh",
      "Araba kime çıkıyoo",
      "Ne demek kızın yaşı anneden büyük olamaz",
      "Harbiden aga ya",
      "Aynen abiii yiağhh",
      "O iş olmaz",
      "Nasipte varsaaa",
      "+1",
      "Nabıyon delikanlı",
      "Ya onu bırak boşver sen nabıyon",
      "Banlicam knk şimdi seni :d",
      "Çok zeki ama çalışmıyor",
      "Uğur ıslak kek yiyecen ni",
      "Hocam aykut uç yiyooğ",
      "Vay anam babam be bu adam resmen bi haarikaa",
      "Sen yanlış yapmamışsın soru yanlışmış yauvv",
      "Adam ya geldi adam",
      "Her ne olursa olsun ben medinenin kılıcını çekerimm",
      "Ne diyon ampute",
      "Adı ne bu güzelliğin",
      "aaa hadi ama dostum canın cehenneme he!",
      "lol mü :nauseated_face:",
      "Npc misin",
      "hahahahhaha komik mi",
      "kfsakfaksg",
      "Senin gibileri zıplatmayı bıraktım",
      "Hayırdır dün sen mi bana atar yaptın",
      "Kahve içenin kendine saygısı yoktur",
      "Tamam knk en çok o sensin",
      "Banane",
      "Lipton ice tea şeftali adamdır",
      "Erkek adam açık pembe giyer",
      "Hayırdır bilader sen neye baktın",
      "Yok boolum",
      "Sen ne diyon be abla gözünü seveyim be abii"
    ];
    
    module.exports = async (message) => {
        if (message.channel.id === conf.chatChannel && !message.author.bot) {
        iltifatSayi++;
        if (iltifatSayi >= 75) {
          iltifatSayi = 0;
          message.reply({ content: iltifatlar.random()});
        };
      };
    }; 

module.exports.conf = {
  name: "messageCreate",
};
