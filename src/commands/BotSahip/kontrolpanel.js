const { MessageEmbed, MessageActionRow, MessageButton,Discord,MessageSelectMenu } = require("discord.js");
const { Modal, TextInputComponent, showModal,discordModals,TextInputStyle  } = require('discord-modals');
const cezapuan = require("../../schemas/cezapuan");
const messageUser = require("../../schemas/messageUser");
const voiceUser = require("../../schemas/voiceUser");
const voiceUserParent = require("../../schemas/voiceUserParent");
const inviterSchema = require("../../schemas/inviter");
const inviteMemberSchema = require("../../schemas/inviteMember");
const nameData = require("../../schemas/names")
const conf = require("../../configs/config.json")
const ayarlar = require("../../configs/sunucuayar.json")
const { miniicon, voice, mesaj2, star } = require("../../configs/emojis.json")
const moment = require("moment");
moment.locale("tr");
const client = global.bot;

module.exports = {
  conf: {
    aliases: [],
    name: "btpanel",
    owner: true,
  },

  run: async (client, message, args, interaction) => {

var yetkili = new MessageButton().setCustomId("yetkili").setLabel("Yetkili Olmak İstiyorum").setStyle("SUCCESS").setEmoji("1045351048354738227")
var canli = new MessageButton().setCustomId("canlidestek").setLabel("Canlı Destek İstiyorum").setStyle("SECONDARY").setEmoji("1088272266044919960")
var sorun = new MessageButton().setCustomId("soruns").setLabel("Sorunlarımı İletmek İstiyorum").setStyle("SUCCESS").setEmoji("1088272559713308784")
var istek = new MessageButton().setCustomId("istekss").setLabel("İsteklerimi İletmek İstiyorum").setStyle("SECONDARY").setEmoji("1088272632471887964")

const row = new MessageActionRow().addComponents([yetkili,canli]);
const row2 = new MessageActionRow().addComponents([sorun,istek]);




      const kısayollar = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('kısayollar')
					.setPlaceholder('Komutlar hakkında yardım almak için tıkla!')
					.addOptions([
						{ label: 'Kullanıcı Komutları',description: 'Davet Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar1',},
						{ label: 'Market Komutları',description: 'Davet Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar2',},  
						{ label: 'Kayıt Komutları',description: 'Genel Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar3',},						
            { label: 'Cezalandırma Komutları',description: 'Kayıt Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar4',},
            { label: 'Stat Komutları',description: 'Kurucu Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar5',},
            { label: 'Yetkili Komutları',description: 'Moderasyon Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar6',},
            { label: 'Kurucu Komutları',description: 'Stat Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar7',},
            {	label: 'Sahip Komutları',description: 'Yetkili Komutlar kategorisinin yardım bilgileri için tıkla!',value: 'kısayollar8',},
					]),
			);
  

     client.api.channels(message.channel.id).messages.post({ data: {"content":
`**Merhaba!** Norths
İstek veya önerin mi var?
Yetkili olmak mı istiyorsun?
Bir yetkiliden destek almak ister misin?
Botlarla veya komutlarla ilgili bir sorunun mu var? 
Aşağıda ki menü veya düğmeleri kullanarak yapabileceğiniz kısayollar bulunmaktadır.`,
                "components":                          
 [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "games", "options": [
                            { "label": "Ceza Puanı", "value": "cezapuan",description: 'Sunucu içerisindeki ceza puanım.',"emoji": { "id": "1042946131077902417" }, },
                            { "label": "İsim Bilgisi", "value": "nick",description: 'Sunucudaki eski isim bilgilerinizi görüntüleyin.', "emoji": { "id": "1042946131077902417" }, },
                            { "label": "Hesap Tarihi", "value": "hesaptarih",description: 'Hesabınızın açılış tarihini öğrenin.', "emoji": { "id": "1042946131077902417" }, },
                            { "label": "Davet Bilgisi", "value": "davet",description: 'Davet Bilgilerinizi öğrenin.', "emoji": { "id": "1042946131077902417" }, },
                            { "label": "Katılım Tarihi", "value": "katılımtarih", description: 'Sunucuya giriş tarihinizi öğrenin.',"emoji": { "id": "1042946131077902417" }, },
                            { "label": "Gereksiz Rol Temizle", "value": "gereksizrol", description: 'Üzerinizde bulunan etkinlik ve diğer rolleri üzerinizden kaldırır.',"emoji": { "id": "1042946131077902417" }, },
                            { "label": "Haftalık İstatistikler", "value": "weeklystats", description: 'Sunucudaki haftalık ses ve mesaj bilgilerinizi görüntüleyin.',"emoji": { "id": "1042946131077902417" },},
                            { "label": "Sunucu Bilgisi", "value": "serverinfo",description: 'Sunucunun anlık aktif listestini görüntüleyin', "emoji": { "id": "1042946131077902417" },},
                            { "label": "Rol Bilgisi", "value": "roleinfo",description: 'Üstünüzde bulunan rolleri listeleyin.', "emoji": { "id": "1042946131077902417" }, },  
                        ], "placeholder": "Seçim Yap", "min_values": 0, "max_values": 1
                    }],
                }
                ,kısayollar,row,row2]
            }
        })

 }
  },


client.on('interactionCreate', async interaction => {

var evet = new MessageButton().setCustomId("evet").setLabel("Evet").setStyle("SUCCESS")
var hayir = new MessageButton().setCustomId("hayir").setLabel("Hayır").setStyle("DANGER")
var dk = new MessageButton().setCustomId("kapat").setLabel("Destek Sonlandır").setStyle("SECONDARY").setEmoji("🎫")
const row3 = new MessageActionRow().addComponents([evet,hayir]);
const row31 = new MessageActionRow().addComponents([dk]);

const member = interaction.user;
const inviterData = await inviterSchema.findOne({ guildID: conf.guildID, userID: interaction.user.id });
const total = inviterData ? inviterData.total : 0;
const regular = inviterData ? inviterData.regular : 0;
const bonus = inviterData ? inviterData.bonus : 0;
const leave = inviterData ? inviterData.leave : 0;
const fake = inviterData ? inviterData.fake : 0;
const invMember = await inviteMemberSchema.find({ guildID: conf.guildID, inviter: interaction.user.id });
const daily = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24).size : 0;
const weekly = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24 * 7).size : 0;
const tagged = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && m.user.username.includes(conf.tag)).size : 0;
////////////////////////////////////////////////////////////////////////////////////////////
const cezapuanData = cezapuan.findOne({ userID: interaction.user.id });
const data = await nameData.findOne({ guildID: conf.guildID, userID: member.id });

////////////////////////////////////////////////////////////////////////////////////////////
 var AktifMember = (interaction.guild.members.cache.filter(m => m.presence && m.presence.status !== "offline").size)
const messageData = await messageUser.findOne({ guildID: conf.guildID, userID: interaction.user.id });
const voiceData = await voiceUser.findOne({ guildID: conf.guildID, userID: interaction.user.id });

  const messageWeekly = messageData ? messageData.weeklyStat : 0;
  const voiceWeekly = moment.duration(voiceData ? voiceData.weeklyStat : 0).format("H [saat], m [dakika]");
  const messageDaily = messageData ? messageData.dailyStat : 0;
  const voiceDaily = moment.duration(voiceData ? voiceData.dailyStat : 0).format("H [saat], m [dakika]");

////////////////////////////////////////////////////////////////////////////////////////////

const category = async (parentsArray) => {
  const data = await voiceUserParent.find({ guildID: conf.guildID, userID: member.id });
  const voiceUserParentData = data.filter((x) => parentsArray.includes(x.parentID));
  let voiceStat = 0;
  for (var i = 0; i <= voiceUserParentData.length; i++) {
    voiceStat += voiceUserParentData[i] ? voiceUserParentData[i].parentData : 0;
  }
  return moment.duration(voiceStat).format("H [saat], m [dakika] s [saniye]");
};

////////////////////////////////////////////////////////////////////////////////////////////

        if(interaction.customId === "istekss") {


        const modal = new Modal()
        .setCustomId('istekoneri')
        .setTitle('İstek & Öneri Formu')
        .addComponents(
          new TextInputComponent()
          .setCustomId('istekk')
          .setLabel('İSTEK VEYA ÖNERİNİZ NEDİR?')
          .setStyle('LONG')
          .setMinLength(10)
          .setMaxLength(980)
          .setPlaceholder('İsteğinizi ve önerinizi bizlere iletin..')
          .setRequired(true)
        );
        showModal(modal, { client: client, interaction: 1 });
        showModal(modal, { client, interaction });


    }
        if(interaction.customId === "soruns") {


        const modal = new Modal()
        .setCustomId('sikayet')
        .setTitle('Sorunları İlet')
        .addComponents(
          new TextInputComponent()
          .setCustomId('sikaayet')
          .setLabel('Sorunu Anlatır Mısınız')
          .setStyle('LONG')
          .setMinLength(10)
          .setMaxLength(500)
          .setPlaceholder('Örn: Kayıt ederken bir hata oluştu ve kayıt edemiyorum.')
          .setRequired(true)
        );
        showModal(modal, { client: client, interaction: 1 });
        showModal(modal, { client, interaction });
    }

    if(interaction.customId === "yetkili") {

      if(![ayarlar.TagRoleID].some(role => client.guilds.cache.get(ayarlar.GuildID).members.cache.get(interaction.user.id).roles.cache.get(role))) {
        return interaction.reply({ content: ":x: Tagın olmadığı için başvuramazsın.", ephemeral: true })
      } else if([ayarlar.staffs].some(role2 => client.guilds.cache.get(ayarlar.GuildID).members.cache.get(interaction.user.id).roles.cache.get(role2))) {
        return interaction.reply({ content: ":x: Zaten Yetkili Rolüne Sahip olduğun için başvuramazsın.", ephemeral: true })
      } else {
        const modal = new Modal()
        .setCustomId('ybasvuru')
        .setTitle('Yetkili Başvuru')
        .addComponents(
          new TextInputComponent()
          .setCustomId('isimyas')
          .setLabel('İsim ve Yaşınız ?')
          .setStyle('SHORT')
          .setMinLength(5)
          .setMaxLength(20)
          .setPlaceholder('Lütfen buraya yazın. / Örn: Pashq 18')
          .setRequired(true),
          new TextInputComponent()
          .setCustomId('aktiflik')
          .setLabel('Sunucumuzda günlük aktifliğiniz ?')
          .setStyle('SHORT')
          .setMinLength(1)
          .setMaxLength(10)
          .setPlaceholder('Lütfen buraya yazın. / Örn: 8 Saat')
          .setRequired(true),
          new TextInputComponent()
          .setCustomId('yarar')
          .setLabel('Sunucumuz için neler yapabilirsiniz ?')
          .setStyle('SHORT')
          .setMinLength(10)
          .setMaxLength(250)
          .setPlaceholder('Lütfen buraya yazın. / Örn: Günlük 5 invite ya da Diğer...')
          .setRequired(true),
          new TextInputComponent()
          .setCustomId('hakkında')
          .setLabel('Kendiniz hakkında biraz bilgi ?')
          .setStyle('LONG')
          .setMinLength(10)
          .setMaxLength(400)
          .setPlaceholder('Lütfen buraya yazın. / Örn: Müzik dinlemeyi severim.')
          .setRequired(true)
        );
        
        showModal(modal, { client: client, interaction: 1 });
        showModal(modal, { client, interaction });
    
      }}

////////////////////////////////////////////////////////////////////////////////////////// CANLI DESTEK

const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', max: 2, time: 20000 });

        if(interaction.customId === "canlidestek") {
          await interaction.reply({ content: `Görüşmelerimiz kayıt altına alınmaktadır! Trolleyen/Gereksiz kullananlar cezalandırılacaktır. Canlı desteğe bağlanmak istediğinizden emin misiniz?` , components: [row3], ephemeral: true});
    } 
        
        if(interaction.customId === "evet") {
          await interaction.reply({ content: `Sizi canlı destek ekibimize bağlıyorum, lütfen beklemede kalın...`, components: [],ephemeral: true});
  
var LogChannel = client.guilds.cache.get(ayarlar.GuildID).channels.cache.find((channel) => channel.id === ayarlar.CanlıDestekLogChannelID);
  let ozi = new MessageEmbed()
  .setDescription(`
${interaction.user} - \`${interaction.user.id}\` kullanıcısı Canlı Desteğe bağlanmak istiyor kabul ediyormusunuz?
  `)
  .setAuthor({ name: "Canlı Destek", iconURL: client.guilds.cache.get(ayarlar.GuildID).iconURL({ dynamic: true, size: 2048 }) })
  .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true, size: 2048 }))
  .setTimestamp()

 let msg = await LogChannel.send({ content: `<@&${ayarlar.CanlıDestekEkibiRoleID}>`, embeds: [ozi], components: [row3] });

  const collector2 = msg.createMessageComponentCollector({ componentType: 'BUTTON', max: 1 });

  collector2.on("collect", async (interaction2) => {

    if (interaction2.customId == "evet") {
  let ozi2 = new MessageEmbed()
  .setDescription(`
${interaction.user} - \`${interaction.user.id}\` kullanıcısının Canlı Destek başvurusu ${interaction2.user} tarafından başarıyla onaylandı.`)
  .setAuthor({ name: "Canlı Destek", iconURL: client.guilds.cache.get(ayarlar.GuildID).iconURL({ dynamic: true, size: 2048 }) })
  .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true, size: 2048 }))
  .setFooter({ text: "Kullanıcının destek talebini sonlandırmak için oluşturulan kanaldaki butonu kullanınız.", iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

if(msg)

interaction2.reply({
  embeds : [ozi2],
  components : []
})

      client.guilds.cache.get(ayarlar.GuildID).channels.create(`${interaction.user.username}-destek`, {
        parent: ayarlar.CanlıDestekKategoryID,
        topic: interaction.user.id,
        permissionOverwrites: [{
            id: interaction.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },

          {
            id: ayarlar.CanlıDestekEkibiRoleID,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: client.guilds.cache.get(ayarlar.GuildID).roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
        ],
        type: 'text',
      }).then(async c => {

 c.send({
  content: `Canlı Destek Kanalı başarıyla oluşturuldu.\n**Not:** Destek işlemi bitince veya destek almaktan vazgeçerseniz buton yardımıyla kapatabilirsiniz.`,
  components : [row31]
})

interaction.user.send({
 content: `Canlı Destek bağlantınız başarıyla ${interaction2.user} tarafından onaylandı.\n\nBuradan destek için yetkililerimiz ile konuşabilirsiniz. \` > \` <#${c.id}>`
});
 });
}

    if (interaction2.customId == "hayir") {
  let ozi3 = new MessageEmbed()
  .setDescription(`
${interaction.user} - \`${interaction.user.id}\` kullanıcısının Canlı Destek başvurusu ${interaction2.user} tarafından reddedildi.
  `)
  .setAuthor({ name: "Canlı Destek", iconURL: interaction2.guild.iconURL({ dynamic: true, size: 2048 }) })
  .setThumbnail(interaction2.user.displayAvatarURL({ dynamic: true, size: 2048 }))
  .setTimestamp()

if(msg)
interaction2.reply({
  embeds : [ozi3],
  components : []
})

    await interaction.user.send({ content: `Canlı desteğe bağlanılırken bir hata oluştu veya bağlantı onaylanmadı!`, components: []}); 
}
    })


client.on("interactionCreate", async (interaction3) => {
if (interaction3.customId == "kapat") {
const guild = client.guilds.cache.get(interaction3.guildId);
const chan = guild.channels.cache.get(interaction3.channelId);
await chan.delete().catch(() => {});
}
})


          collector.stop()
        } 
    
        if(interaction.customId === "hyr") {
          await interaction.reply({ content: `Canlı desteğe bağlanılırken bir hata oluştu veya bağlantı onaylanmadı!`, components: [],ephemeral: true}); 
          collector.stop()
        }


//////////////////////////////////////////////////////////////////////////////////////////


if (interaction.values[0] === "cezapuan") {
    interaction.reply({ content : `
**${interaction.guild.name}** sunucusunda ${cezapuanData ? cezapuanData.cezapuan : "0"} ceza puanın bulunmakta.
`, ephemeral: true})
}

if (interaction.values[0] === "nick") {
    interaction.reply({ content : `
Aşağıda sunucu içerisinde ki isimleriniz (${data ? data.names.length : "0"}) sıralandırılmıştır:
──────────────────────
${data ? data.names.splice(0, 10).map((x, i) => `\`${i + 1}.\` \`${x.name}\` (${x.rol}) , (<@${x.yetkili}>) , **[**\`${moment(x.date).format("LLL")}\`**]**`).join("\n") : "Bu kullanıcıya ait isim geçmişi bulunmuyor!"}
──────────────────────
`, ephemeral: true})
}
 
if (interaction.values[0] === "hesaptarih") {
    interaction.reply({ content : `
Hesabınız <t:${Math.floor(member.createdTimestamp / 1000)}:R> açılmış.
`, ephemeral: true})
}
  
if (interaction.values[0] === "davet") {
    interaction.reply({ content : `
Aşağı da davet bilgileri detaylı bir şekilde listelendirilmiştir.

\`•\` **Toplam:** \` ${total} \` (**Bonus:** \` +${bonus} \`)
\`•\` **Girenler:** \` +${total} \` (**Sahte:** \`${fake}\`, **Ayrılmış:**\` ${leave} \` )
\`•\` **Günlük:** \` +${daily} \`
\`•\` **Haftalık:** \` +${weekly} \`
`, ephemeral: true})
}

if (interaction.values[0] === "katılımtarih") {
    interaction.reply({ content : `
**${interaction.guild.name}** Sunucusuna <t:${Math.floor(interaction.member.joinedTimestamp / 1000)}:R> katılmışsınız.
`, ephemeral: true})
}


if (interaction.values[0] === "gereksizrol") {
  interaction.member.roles.remove("1062845165779308574")
  interaction.member.roles.remove("1063100819567824926")
    interaction.reply({ content : `
Üzerinizde bulunan etkinlik ve diğer roller temizlendi.
`, ephemeral: true})
}


if (interaction.values[0] === "weeklystats") {
    interaction.reply({ content : `
**Merhaba!** ✧ ${interaction.user}
Haftalık toplamda **${voiceWeekly}** boyunca zaman geçirmişsin.
Haftalık toplamda **${Number(messageWeekly).toLocaleString()} mesaj** istatistiğiniz bulunuyor.
`, ephemeral: true})
}

if (interaction.values[0] === "serverinfo") {
    interaction.reply({ content : `
**${interaction.guild.name}** Sunucusunun Bilgisi
Sunucumuz da **${(interaction.guild.memberCount)}** üye bulunmakta.
Sunucumuz da **${AktifMember}** aktif üye bulunmakta.
Sesli kanallarda **${(interaction.guild.members.cache.filter((x) => x.voice.channel).size)}** üye bulunmakta.
`, ephemeral: true}) 
}

if (interaction.values[0] === "roleinfo") {
    interaction.reply({ content : `
Üstünüzde bulunan rol(ler) şunlardır:
${(await interaction.guild.members.cache.get(member.id).roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? await interaction.guild.members.cache.get(member.id).roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(',\n') : 'Hiç yok.')}
`, ephemeral: true}) 
}

if (interaction.values[0] === "kısayollar1") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "kullanıcı").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar2") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "market").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar3") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "kayıt").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};
  
if (interaction.values[0] === "kısayollar4") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "cezalandırma").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar5") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "stat").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar6") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "yetkili").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar7") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "yönetim").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

if (interaction.values[0] === "kısayollar8") {
    interaction.reply({ content : `
\`\`\`
${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "sahip").map(x => `.${x.conf.help}`).join('\n')}
\`\`\`
`, ephemeral: true })
};

//////////////////////////////////////////////////////////////////////////////////////////// MODAAALLLL BAABBBYYYY
    
})
