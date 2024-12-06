const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const emj = require('./emj.js');

const moment = require("moment")
const ms = require("ms")
const { Client, Intents, MessageEmbed, Interaction, MessageButton, MessageActionRow, Modal, WebhookClient, MessageSelectMenu, Collection, Permissions, MessageFlags, GatewayIntentBits } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, 32767]
});
client.setMaxListeners(0)
client.login('MTMxNDQyMTI3NjA4NTA2Mzc5MQ.Gc5jJZ.HnVUozu-8ICCi1f6W_KXP3IDiAltlM1IpP3PWo')

client.on("ready", () => {
  console.log(`Logged in as  ${client.user.username}`)
  client.user.setActivity(`sinaq $`, { type: 'PLAYING' })
  client.user.setStatus("online")
});

const db = require("pro.db")
db.backup("backup");
const staffManagerRole = "1314242414793199626"
const discorsLeader = "1314242609383735357"
const OfficialRole = "1125969314554581052"
const RolesRole = "1313671239616692335"
const discordStaff = "1313669452188876831"
const UnderTestRole = "1314245866210725909"
const developerId = "508064413136453633"
const bankid = "1226175701766635611"
const spinbank = "1226175701766635611"
const manshoratRoom = '❖・المنشورات・المميزة'
const prefix = "$"
const lineLink = "https://cdn.discordapp.com/attachments/1313636603956035624/1313870722225143919/585791ffa147edc_3.png?ex=675457f6&is=67530676&hm=7c41415b1de868ab8d8d3818161a762f8c4b6eb459c0f01adfd3665dc45200f6&"
const colorE = "19067a"
let perms = "1313669458723868732"

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception occurred:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled promise rejection:', reason);
});

client.on("ready" , () => {
  const guild1 = "1307345152192282656"
  const guild = client.guilds.cache.get(guild1)
  var commands
    if(guild) {
      commands = guild.commands
    } else {
      commands = client.application.commands
    }
      commands.create({
        name:"embed",
        description:"Make Your Own Embed !",
        options:[
          {
            name:`title`,
            description:"Specfiy The Title For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`description`,
            description:"Specfiy The Description For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`color`,
            description:"Specfiy The Color In Large letters For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`image`,
            description:"Specfiy The Link Of Image For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:false
          },
          {
            name:`thumbnail`,
            description:"Specfiy The Link Of Thumbnail For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:false
          }
        ]
    })
  commands.create({
         name:"shark",
        description:"تبي تشوف شارك ؟!"
  })
  });


  client.on("interactionCreate" , interaction => {
    if(interaction.commandName == "embed") {
      let title = interaction.options.getString('title');
      let description = interaction.options.getString('description');
      let color = interaction.options.getString('color');
      let image = interaction.options.getString('image');
      let thumb = interaction.options.getString('thumbnail')
      let embed = new Discord.MessageEmbed()
      .setTitle(`${title}`)
      .setColor(`${color}`)
      .setDescription(`${description}`)
      if(image) {
        embed.setImage(`${image}`)
      }
      if(thumb) {
        embed.setThumbnail(`${thumb}`)
      }
      interaction.reply({content : `**تم انشاء الايمبيد !**` , ephemeral:true})
      interaction.channel.send({embeds:[embed]}).catch(err=>{})
    }
  });


  client.on("interactionCreate" , interaction => {
    if(interaction.commandName == "shark") {
      let embed = new Discord.MessageEmbed()
      .setTitle("**😱**")
      .setDescription("**لا تستطيع مقاومة الجمال**")
      .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg")
      .setColor("BLACK")
      interaction.reply({embeds:[embed]})
    }
  });

//////////
client.on('messageCreate', async message => {
if (message.content.startsWith('$roomsnews-msg') && message.member.roles.cache.has(perms)) {
  message.delete();
    let row1 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Other Roles !")
          .setCustomId('menu-select')
          .setMaxValues(1)
          .addOptions([
            {
              label: 'Rooms News Role',
              value: 'RoomsNewsRole',
              description: 'إضغط للحصول على رتبة تنبيهات فتح رومات النشر'
            } ]) ) 
message.channel.send({ components: [row1] }) }});
client.on("interactionCreate" , async interaction => {
  if(interaction.customId == "menu-select") {
  if (interaction.values[0] === 'RoomsNewsRole') {
    const guild = interaction.guild;
    const roleidQ = guild.roles.cache.get('1145893854701158460');
    await interaction.member.roles.add(roleidQ).catch(err => {})
        interaction.reply({ content: `**<:true:1137302376185872414> تم إضافة رتبة <@&1145893854701158460> بنجاح .**`, ephemeral: true }); }}})

//////////

setInterval(async () => {
      let guild = client.guilds.cache.get(`1307345152192282656`)
      let channel = guild.channels.cache.find(r=>r.id == 1313669534627926067)
      let m = await channel.messages.fetch("1313669665490206782")
      let fi = guild.channels.cache.filter(ch => ch.name.startsWith("〢↯・"))
       var f;
      if(fi.size < 10) {
      f = "متوفر" }
      if(fi.size >= 10) {
      f = "غير متوفر" }
  let re = new MessageEmbed()
  .setDescription(`**${emj.Lift} عدد الرومات الخاصة : \`${fi.size}\`
${emj.Lift} حالة الرومات : \`${f}\`**`)
  .setColor(`${colorE}`)
       m.edit({ embeds: [re] })
      },10000)

//////////
const targetRoleId = '1121190761082405075';
client.on('messageCreate', async message => {
  if (message.content === '😪') {
    const guild = message.guild;
    const targetRole = guild.roles.cache.get(targetRoleId);
    const channels = guild.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT');
    channels.forEach(async (channel) => {
      await channel.permissionOverwrites.create(targetRoleId , {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true,
        MANAGE_MESSAGES: true,
        MENTION_EVERYONE: true,
        ATTACH_FILES: true,
      })
    })
    await message.reply(`${emj.True} تم يسطا`)
  }});

client.on("messageCreate" , message => {
  if(message.content == "ss") {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**${emj.Right} sinaq \`S\` General Information・معلومات عامة

> ${emj.Right} Warn | التحذيرات
> ${emj.Dot} لإزالة التحذير الواحد يجب دفع غرامة 20k
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} <@&1314254390852325438> | الموثوقين
> ${emj.Dot} لأخذ رتبة موثوق يجب عليك توفي  20 عملية بيع هنا  و يكون مبلغ كل عملية لا يقل عن 50k
> ${emj.Dot} يجب عند نشر عملية أن توثق دليل تسليم السلعة و دليل ال التحويل للمبلغ
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Transfer Role | نقل الرتب
> ${emj.Dot} لنقل رتبة من حساب لآخر يجب دفع 20k
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
${emj.Lift} للطلب تواصل مع : <#1313669694162604042> ⁠.
${emj.Lift} التحويل فقط لـ <@1226175701766635611> .
${emj.Warn} لا نتحمل مسؤولية التحويل لشخص آخر !
**`)
    .setColor(`${colorE}`)
    .setImage(`https://media.discordapp.net/attachments/1313636603956035624/1314253320193310750/585791ffa147edc_2_1.png?ex=67531949&is=6751c7c9&hm=26ec794aeb2b3888bf167d25a82a72e9a359b3227bdaa8f5042ccf994606f8a8&=&format=webp&quality=lossless&width=610&height=262`)
message.channel.send({embeds:[embed]})
  }
})

////////////
client.on("messageCreate" , message => {
      if(message.content.startsWith("تت")) {
        message.delete()
let embed = new MessageEmbed()
        .setDescription(`**${emj.Right} sinaq $ Staff Rules・قوانين الإدارة


${emj.Dot} يجب إحترام الجميع وعدم التكبر على أي شخص
${emj.Dot} يمنع إستغلال رتبتك لمصالح شخصيه مثل تعطي أحد رتبة ، تعطي نفسك الخ ..
${emj.Dot} يمنع عند فتح تذكرة إستلامها عبر الزر مباشرتاً ! يجب الرد على سؤال الشخص أولاً و من ثم تضغط إستلام 
${emj.Dot} يمنع الرد بالتذكرة اول رسالة بالحجز مثلا ترد بنقطة أو شيء يعتبر حجز أو ماله علاقة بموضوع التكت
${emj.Dot} يمنع التكبر على أحد الأعضاء أو أحد زملائك برتبتك
${emj.Dot} يمنع طلب ترقية أو التدخل في شؤون أونرات أو شيء ما يخصك
${emj.Dot} يمنع ترك التذكرة أكثر من 10 دقائق دون إستجابة أحد فيها .. إلا لو منتظر أونر فقط غير اسم التكت
${emj.Dot} يمنع المشاكل بين الإدارة منعاً باتاً ! عندك مشكلة مع أحد كلم أونر خاص
${emj.Dot} يمنع الإبتلاغ عن إداري شيء تافه أو ما به علاقة بالسيرفر
${emj.Dot} يمنع الهزار أو اللعب بالأمور و البرمشنات الإدارية
${emj.Dot} ممنوع تشوف شخص مخالف و ما تعاقبه ! بتتعاقب انت و هو
${emj.Dot} ممنوع الخروج عن القوانين المهمة أو القوانين العامة
${emj.Dot} انت كـ إداري ممنوع تغلط برومات النشر لأنك تعتبر قدوة للبائعين
${emj.Dot} ممنوع عدم تنفذ طلب أونر منك
${emj.Dot} تخلص تكت قفلها علطول لا تتركها مفتوحه أكثر من 10 دقائق
${emj.Dot} ممنوع انت كـ إداري تفتح تكت، عندك شات الإدارة
${emj.Dot} ممنوع تخترع شيء أو قانون أو عقاب من مخك، شيء ما تعرفه اسأل الإدارة العليا و الأونرات
${emj.Dot} ممنوع إستكمال التكت و هو عن شيء لا يخص السيرفر
${emj.Dot} يجب أن لا تضع أي روابط أو أسماء سيرفرات أخرى بـ الـ Status أو About Me
${emj.Dot} ممنوع تبيع أو تشتري في بروفايلك .
${emj.Dot} يجب عليك حذف المنشور اللذي قمت بمخالفته !
${emj.Dot} لازم تسوي Transcript التكت قبل حذفه
${emj.Dot} إذا خطأ البائع هو عدم وضع خط عطيه التحذير و حطه انت لا تحذف منشوره ( اذا خط فقط ) !
${emj.Dot} إنتظر مهلة 3 دقائق قبل إعطاء الشخص تحذير ( فرصه يصلح خطأه )
${emj.Dot} ممنوع التدخل في أي تكت مهما كان السبب ! ( فقط ستاف مانجر أو الرتبة الي تتضاف للتكت هي دي الي تقدر تتدخل غيرها لا )
${emj.Dot} تكت ينتظر إعلان أو رتبة غير اسم التكت و سوي إضافة الرتبة المسؤولة عن الشيء مثل 
${emj.Dot} أحد رتبته أعلى منك عمل شيء أنت ممنوع تعاند و تعمل عكسه ! تربل ستاف عليها

${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
${emj.Lift} أي مخالفة ستتعرض لـ تحذير إداري .
${emj.Lift} ركز على شكل بروفايلك و خليه مرتب و حلو .
${emj.Lift} عدم قراءة القوانين ليس بعذر مقبول .
**`)
        .setColor(`${colorE}`)
         .setImage(`https://i8.ae/qrPQR`)
        message.channel.send( { embeds: [embed] } )
      }});

///////////
client.on("messageCreate" , message => {
if(message.content.startsWith("اا")) {
let embed = new MessageEmbed()
        .setDescription(`**${emj.Right} نظام نقاط**

> **${emj.Lift} نظام نقاط التكتات :**
**لإستلام نقطة تكت من نظام التكتات يجب عليك إنتظار العميل و عند فتحه للتكت قم بكتابة جملة تفضل كيف يمكنني مساعدتك كـ مثلا و تقوم بالضغط على زر Claim و هكذا تم إضافة لك النقطة للتكت الي انت ماسكه، و تكمل التكت بشكل طبيعي .
${emj.Warn} إذا رسالة زر Claim ما ظهر بالتكت يمكنك تصوير هذا الحدث و التوجه إلى  و إرسالة الدليل الذي قمت بإلتقاطه و سيضيف لك أحد أفراد الأونرات النقطه المفقودة .
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}**
> **${emj.Lift} نظام نقاط التحذيرات :**
**لإستلام نقطة من نظام التحذيرات يجب عليك البحث في رومات النشر عن المخالف و عند تحصيله تأخذ صورة كـ دليل و تقوم بحفظ الـ ID للشخص المخالف و تتوجه إلى <#1122404955727343677> و تقوم بعمل أمر كالآتي :
$تحذير \`@المخالف أو الإيدي الي حفظته\` \`السبب\` و تقوم بإرفاق الدليل في نفس رسالة الأمر
إذا عقوبة الشخص هي سحب الرتبة تقوم بعمل أمر كالآتي :
$تحذير \`@المخالف أو الإيدي الي حفظته\` \`السبب\` \`(=)\` و تقوم بإرفاق الدليل في نفس رسالة الأمر
و هكذا تم إضافة لك نقطة التحذير تلقائي .
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}**
> **${emj.Lift} نظام نقاط ميوتات الطلبات :**
**لإستلام نقطة من نظام ميوتات الطلبات يجب عليك البحث في رومات الطلبات عن المخالف و عند تحصيله تأخذ صورة كـ دليل و تقوم بحفظ الـ ID للشخص المخالف و تتوجه إلى <#1121188121623674910> و تقوم بعمل أمر كالآتي :
$ميوت \`@المخالف أو الإيدي الي حفظته\` \`المدة\` و تقوم بإرفاق الدليل في نفس رسالة الأمر
${emj.Warn} يجب تحديد مدة الميوت 5h فقط !
و هكذا تم إضافة لك نقطة الميوت تلقائي .
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
${emj.Lift} يجب مراجعة روم <#1121188132914724976> قبل البدأ في تحصيل النقاط !
${emj.Lift} هذا الروم نظام و طريقة تحصيل النقاط ليس قوانين الأنظمة ! قوانين الأنظمة فقط بروم قوانين الإدارة، عدم مراجعة قوانين الإدارة ليس يعذر، فهذه مسؤوليتك .
\n**`)
        .setColor(`${colorE}`)
        message.channel.send( { embeds: [embed] } )}});



client.on("messageCreate" , message => {
  if(message.content == "teghjjgjm") {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**${emj.Right} Arab S Permissions Roles - برمشنات الرتب
    
<${emj.Dot}1137301062366285925> =-=-= Ship Roles <:Cr1:1137298389814497401> -=-=-= <${emj.Dot}1137301062366285925>

<:Cr1:1137298389814497401> ♚・↝ Demon ( All Permissions )
<:Cr1:1137298389814497401> ♚・↝ Owner ( All Permissions )
<:Cr1:1137298389814497401> ♚・↝ Co . Owner ( All Permissions )
<:Cr1:1137298389814497401> ♚・↝ King ( All Permissions )
<:Cr1:1137298389814497401> ♚・↝ Ceo ( All Permissions )
<:Cr1:1137298389814497401> ♚・↝ Right Hand ( All Permissions )
<:Cr1:1137298389814497401> ♚ || Discord Ship ( All Permissions )

<${emj.Dot}1137301062366285925> =-=-= Owners Roles <:Cr2:1137298414279868486> -=-=-= <${emj.Dot}1137301062366285925>

<${emj.Right}1137299312775270400> ♞・↝ Up Owners ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Congress ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Immortals ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ GodFather ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Sublime ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Variable ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Versed ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Greatest ( Discord Owners Permissions )
<${emj.Right}1137299312775270400> ♞・↝ Discord Owners ( Discord Leader Permissions + Ban )
**`)
    .setColor(`${colorE}`)

    message.channel.send({embeds:[embed]})
  }
});

client.on("messageCreate" , message => {
  if(message.content == "tejhhhhj") {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**<${emj.Dot}1137301062366285925> =-=-= High Staff Roles <:HighStaff:1137526406574768249> -=-=-= <${emj.Dot}1137301062366285925>

<${emj.Right}1137299312775270400> ♔・↝ Strongest ( Discord Leader Permissions + Clear + Kick )
<${emj.Right}1137299312775270400> ♔・↝ Dangerous ( Discord Leader Permissions + Clear + Kick )
<${emj.Right}1137299312775270400> ♔・↝ One ( Discord Leader Permissions + Clear + Kick )
<${emj.Right}1137299312775270400> ♔・↝ Impossible ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Alpha ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Monitor ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Responsable ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Emperor ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Supervisor ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Prime ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Controller ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Chancellor ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Commander ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Slayer ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Founder ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Co Founder ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Expert ( Discord Leader Permissions ) 
<${emj.Right}1137299312775270400> ♔・↝ President ( Discord Leader Permissions ) 
<${emj.Right}1137299312775270400> ♔・↝ Marchal ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Achivement ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Dqure ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Above ( Discord Leader Permissions )
<${emj.Right}1137299312775270400> ♔・↝ Discord Leader ( Normal Staff Permissions - Private Rooms Commands - Timeout )
<${emj.Right}1137299312775270400> ♔・↝ Staff Manager ( See Owners Room - Probot Role )
    
    <${emj.Dot}1137301062366285925> =-=-= Normal Staff Roles <:StaffLeader:1137527234597507133>  -=-=-= <${emj.Dot}1137301062366285925>

<${emj.Right}1137299312775270400>・ Power ( mute - roles )
<${emj.Right}1137299312775270400>・ Head ( mute - roles )
<${emj.Right}1137299312775270400>・ Advisor ( mute - roles )
<${emj.Right}1137299312775270400>・ Manager ( mute - roles )
<${emj.Right}1137299312775270400>・ General ( mute - roles )
<${emj.Right}1137299312775270400>・ Master ( mute - roles )
<${emj.Right}1137299312775270400>・ Leader ( mute - roles )
<${emj.Right}1137299312775270400>・ Junior ( mute - roles )
<${emj.Right}1137299312775270400>・ Director ( mute - roles )
<${emj.Right}1137299312775270400>・ Admin ( mute )
<${emj.Right}1137299312775270400>・ NewAdmin ( mute )

<${emj.Dot}1137301062366285925> =-=-= Permissions Roles <:plus:1137302192185950248> -=-=-= <${emj.Dot}1137301062366285925>

<${emj.Right}1137299312775270400> Test Manger ( لـاختبار المستجدين )
<${emj.Right}1137299312775270400> Giveaway ( لـصنع جيف اواي )
<${emj.Right}1137299312775270400> Officials ( خاصة بالمشهرين )
<${emj.Right}1137299312775270400> Roles ( لـ اعطاء رتب البيع )
<${emj.Right}1137299312775270400> Spin ( لـ صنع عجلة الحظ )
<${emj.Right}1137299312775270400> Ad's ( لـ صنع الاعلانات تحت الـ 500 الف )
    **`)
    .setColor(`${colorE}`)

    message.channel.send({embeds:[embed]})
  }
});
///////////////
client.on('messageCreate', message => {
if (!message.author.bot && message.member.id === developerId) {
if (message.content.startsWith(prefix + 'test-msg')) {
let embed = new MessageEmbed()
        .setDescription(`**${emj.Right} sinaq \`S\` StaffTest・إختبار المُستجدين**

> **${emj.Dot} لبدأ الإختبار قم بالضغط على الزر : \`ابدأ الإختبار\` **
> **${emj.Warn} يرجى العلم أن ضغطك على الزر يعني إنتهائك من مراجعة الأنظمة و القوانين، ولا يمكنك التراجع عن هذا القرار !
**`)
        .setColor(`${colorE}`)
.setImage(`https://i8.ae/ELLLQ`)
  let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel(`ابدأ الإختبار`)
        .setCustomId("startTest")
        .setStyle("SECONDARY")
.setEmoji(`<:emoji_106:1314258005331808298>`)
    )
message.channel.send({ embeds: [embed], components: [row] });
    }} else {
    return;
  }});

client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        if (interaction.customId === 'startTest') {
const person = interaction.member;
const guild = interaction.guild;
const underTestRole = guild.roles.cache.get('1314245866210725909');
const inTestRole = guild.roles.cache.get('1133220652699103243');
let testManager = interaction.guild.roles.cache.find(r=>r.name == "Test Manager")
await interaction.member.roles.remove(underTestRole).catch(err => {})
await interaction.member.roles.add(inTestRole).catch(err => {})
interaction.reply({ content: `**<:emoji_106:1314258005331808298> تم بدأ الإختبار، توجه إلى الروم الذي تم إنشائه باسمك ..**`, ephemeral: true })
let Tqe1 = new MessageEmbed()
        .setDescription(`**1. ماذا ستفعل إذا طلب منك عضو إخراج صورة من شات الإدارة كـ دليل مثلاً ؟
2. ماذا ستفعل إذا طلب شخص إعلان أو رتبة ؟
3. هل مسموح التدخل في تكتات أحد غيرك ؟
4. إذا شخص خالف في رومات النشر فكم المهلة التي تنتظرها لحتى تعطيه مخالفة تحذير ؟
5. إذا إعطيت شخص مخالفة على مشنوره هل ستحذف المنشور المخالف ام تتركه بدون حذف ؟
6. هل مسموح لك كـ إداري البيع أو الشراء في بروفايلك ( مثلا في الحالة أو الوصف ) ؟
7. شخص فتح تكت لسبب لا يخص السيرفر ماذا ستفعل ؟
8. إذا شيء انت ما تعرفه مثلا قانون وش راح تسوي ؟ 
9. مسموح إداري يفتح تكت ؟ و إذا لا فما التصرف البديل له ؟
10. كم مهلة قفل التكت يعني اذا مر على التكت وقت محدد و ما فيه أي استجابة كم مهلة لحتى تقفله ؟
11. طلب منك أونر أو مسؤول أعلى منك شيء شو راح تسوي ؟ 
12. أنت كـ إداري ماذا ستفعل إذا زميلك غلط في رومات النشر في منشوره ؟ 
13. يمكنك التوسط لشخص إذا أنت معك صلاحيات ؟ 
14. إذا شوفت شخص مخالف شو راح تسوي له ؟ 
15. يمكنك المزح بالأوامر أو البرمشنات الإدارية ؟ 
16. ماذا ستفعل إذا إداري عم يسوي مشاكل بشات الإدارة ؟ و كيف ستكون طريقة تعاملك ؟ 
17. هل مسموح لك التدخل في قرارات ادارة اعلى منك ؟
18. هل يمكنك طلب الترقيات ؟
19. ماذا ستفعل إذا رأيت أحد يتكبر على الأعضاء أو زملائه في الإدارة ؟ 
20. ماذا ستفعل إذا قام بفتح عضواً ما تذكرة ؟ ما تصرفك لها ؟ وما الذي تعرفه عن شروط إستلام التذكرة ؟ 
21. إذا إداري خالف أي قانون أو شيء ماذا ستفعل ؟ **`)
        .setColor(`${colorE}`)
        .setFooter(`يجب التركيز في الإجابات ! \nإذا سؤال ما قدرت تجاوب عليه أو ما تعرفه ضع علامة \&\ مكان الإجابة`)
        .setAuthor({name: `Arab S Test Questions` , iconURL:`${interaction.guild.iconURL()}`})
let embed = new MessageEmbed()
        .setDescription(`**${emj.Dot} يرجى الإجابة على الاسألة الآتية بكل حذر و تركيز .
${emj.Warn} يجب العلم أن الضغط على \`إنهاء الإختبار\` أي أن فرصتك في الأجابة قد إنتهت !**`)
        .setColor(`${colorE}`)
        .setTimestamp()
        .setFooter({text:`For: ${person.user.username}`})
        .setAuthor({name: `sinaq S StaffTest` , iconURL:`${interaction.guild.iconURL()}`})
let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إنهاء الإختبار")
        .setCustomId("endTest")
        .setStyle("DANGER")
    )
          .addComponents(
      new Discord.MessageButton()
        .setLabel("DeleteChannel")
        .setCustomId("sure")
        .setStyle("SECONDARY")
    )
let number = db.fetch(`TestCount_${interaction.guild.id}`)
            if(!number || number === null) number = 1;
db.add(`TestCount_${interaction.guild.id}`,1)
let mm = await interaction.guild.channels.create(`test ${interaction.user.username} ${number}` , {type:"text"})
  .then(async m => {
m.setParent(interaction.guild.channels.cache.find(r=>r.id == 1133220013420060774))
m.permissionOverwrites.edit(interaction.guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false
        })
m.permissionOverwrites.edit(testManager , {
          MANAGE_MESSAGES: true,
          SEND_MESSAGES:true,
          VIEW_CHANNEL:true,
          ATTACH_FILES:true
        })
  m.permissionOverwrites.edit(person,{
    VIEW_CHANNEL:true,
    SEND_MESSAGES: true,
    ATTACH_FILES:true
  })
m.send({ embeds: [embed], components: [row], content: `${person}・<@&1133241510083702814>` })
  await m.send({ embeds: [Tqe1] })
  });}}});

client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        if (interaction.customId === 'endTest') {
const person = interaction.member;
let testChannel = interaction.channel;
testChannel.permissionOverwrites.edit(person,{
    VIEW_CHANNEL:true,
    SEND_MESSAGES: false,
    ATTACH_FILES:false
  })
let embed = new MessageEmbed()
        .setDescription(`**${emj.Dot} لقد انهى ${person} الإختبار و قام بالإستجابة على زر \`إنهاء الإختبار\`**`)
        .setColor(`${colorE}`)
        .setTimestamp()
interaction.reply({ embeds: [embed], content: `<@&1133241510083702814>` })
        }}});

let secondsLeft = 5;
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'sure') {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    const TestManagerRole = '1133241510083702814';
    const member = interaction.member;
    async function startCountdown() {
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setDescription(`**سيتم حذف هذا الروم بعد : \`${secondsLeft}\` ثواني**`);
      const reply = await interaction.reply({ embeds: [embed] });
      const countdownInterval = setInterval(() => {
        secondsLeft -= 1;
        if (secondsLeft <= 0) {
          clearInterval(countdownInterval);
          interaction.channel.delete();
        } else {
          embed.setDescription(`**سيتم حذف هذا الروم بعد : \`${secondsLeft}\` ثواني**`);
          interaction.editReply({ embeds: [embed] });}}, 2000);}
    if (member.roles.cache.has(TestManagerRole)) {
      await startCountdown();
    } else {
      await interaction.reply({ content: `**أنت لا تمتلك الصلاحيات لحذف هذا الروم !**`, ephemeral: true });}}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'cancelll') {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    const TestManagerRole = '1314242414793199626';
    const member = interaction.member;
    if (member.roles.cache.has(TestManagerRole)) {
message.delete() } else {
      await interaction.reply({ content: `**أنت لا تمتلك الصلاحيات لإستخدام هذا الزر !**`, ephemeral: true });
    }}});

///////////////
client.on("messageCreate" , message => {
if(message.content.startsWith("$طريقة") || message.content.startsWith("$طريقه")) {
let embed = new MessageEmbed()
        .setDescription(`> **__طريقة تقييم إداري :__**                                                                                               
**$تقييم [@الشخص] [عدد النجوم] [محتوى التقييم]**

> **__مثال للطريقة :__**
**$تقييم  3 تعامل حلو
عدد النجوم بيبدأ من 1 لـ 5 فقط .**

> **__مثال آخر للطريقة بالصورة :__**`)
        .setColor(`${colorE}`)
        .setImage(`https://i8.ae/FqteG`)
        message.channel.send( { embeds: [embed] } )}});

///////////////
client.on('messageCreate', async message => {
if (message.content.startsWith(prefix + 'تقيم') || message.content.startsWith(prefix + 'تقييم')) {
if(message.content.startsWith(prefix + "تقيمات")) return false;
if(message.content.startsWith(prefix + "تقييمات")) return false;
const now = new Date();
const args = message.content.split(" ")
const user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id == args[1])
if(!user) return message.reply("**منشن الإداري أولاً !**")
const number = args[2]
  if (!number) return message.reply("**يرجى وضع عدد النجوم لهذا الشخص أولاً !**")
const number2 = parseInt(number)
if (!number2) return message.reply("**هذا ليس عدد نجوم يمكن وضعه !**")
if (number2 > 5) return message.reply("**هذا ليس عدد نجوم يمكن وضعه !**")
const titlefeed = message.content.split(" ").slice(3).join(" ")
if (!titlefeed) return message.reply("**يرجى وضع محتوى التقييم أولاً .**")
if(user.id === message.member.id) return message.reply("**لا تستطيع تقييم نفسك !**")
if(!user.roles.cache.some(r=>r.id == 1313669452188876831)) return message.reply("**هذا الشخص ليس اداري !**")
const feedbackData = db.get(`feedback_${user.id}`);
if(feedbackData) {
for (const entry of feedbackData) {
  const memberId = entry.member;
  if(memberId == message.member.id) return message.reply("**لا يمكنك تقييم الشخص اكثر من مرة !**")}}
const FeedBackLog = await message.client.channels.fetch("1313669607638306868");
db.push(`feedback_${user.id}` , {member:message.member.id , stars:number2 , title:titlefeed})
message.reply(`**تم تقييم ${user} بعدد نجوم \`${number2}\`**`)
let FeedBackEmbed = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} New FeedBack !**`)
      .setDescription(`> **${emj.Lift} لقد تم تقييم الإداري ${user} , المشرف المسؤول ${message.author} **
**${emj.Dot} إيدي الإداري : ${user.id}
${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} عدد النجوم : ${number}
${emj.Dot} محتوى التقييم : ${titlefeed}\n\n${emj.Dot} تاريخ التقييم : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await FeedBackLog.send({ embeds: [FeedBackEmbed] })
    await FeedBackLog.send(`${lineLink}`)}});

client.on("messageCreate" , async message => {
if(message.content.startsWith(prefix + "تقييمات")) {
    const args = message.content.split(" ")
    const member = message.mentions.members.first() ||     message.guild.members.cache.find(r=>r.id == args[1])
    if(!member) return message.reply("**منشن الإداري أولاً !**")
    if(!db.has(`feedback_${member.id}`)) return message.reply("**هذا الشخص ليس لديه تقييمات !**")
    if(!member.roles.cache.some(r=>r.id == 1121187991763812435)) return message.reply("**هذا الشخص ليس اداري !**")
    const feedbackData = db.get(`feedback_${member.id}`); 
let usersData = [];
    for (const entry of feedbackData) {
      var stars = entry.stars;
      var title = entry.title;
      var memberId = entry.member;
      var star1 = "⭐";
      var star2 = "⭐⭐";
      var star3 = "⭐⭐⭐";
      var star4 = "⭐⭐⭐⭐";
      var star5 = "⭐⭐⭐⭐⭐";
      usersData.push({ user: memberId, stars, title });
    }
    usersData.sort((a, b) => b.stars - a.stars);
    const embed = new MessageEmbed()
      .setColor(`${colorE}`)
      .setDescription(`**${member} Reviews :**`);
    const topUsers = usersData.slice(0, 20);
    topUsers.forEach((user, index) => {
      var starsString = "";
      if (user.stars == 1) {
        starsString = star1;
      } else if (user.stars == 2) {
        starsString = star2;
      } else if (user.stars == 3) {
        starsString = star3;
      } else if (user.stars == 4) {
        starsString = star4;
      } else if (user.stars == 5) {
        starsString = star5;
      }
      embed.addField(`**#${index + 1} | **`, `**المقيم : <@${user.user}>\n- عدد النجوم : ${starsString}\n- التقييم : ${user.title}**\n`);});
message.reply({embeds:[embed]})}});
  
///////////////
const verificationCodeDis = 5;
const codeDis = 50;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$&@#/+%';
const offerCount = `30%`
client.on('messageCreate', async (message) => {
  if (message.content === '$تست') {
    const offerCodesLog = await message.client.channels.fetch("1313669665490206782");
    const now = new Date();
    const embed = new MessageEmbed()
    .setTitle(`**${emj.Right}  Countdown・العد التنازلي**`)
    .setDescription(`**<:Time:1314260856707481691> يتم التحقق من هويتك الآن، يرجى الإنتظار ..**`)
    .setColor(`${colorE}`)
    .setTimestamp()
    const countdownMessage = await message.channel.send({ embeds: [embed] });
    for (let i = 10; i >= 0; i--) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (i === 0) {
        const embed3 = new MessageEmbed()
    .setTitle(`**${emj.Right} ArS Countdown・إنتهاء العد**`)
    .setDescription(`**${emj.Warn} يرجى التوجه إلى الخاص لإكمال التحقق و إستلام كود الخصم !**`)
    .setColor(`${colorE}`)
    .setTimestamp()
        countdownMessage.edit({ embeds: [embed3] });
        const verificationCode = generateRandomDigits(verificationCodeDis);
        message.author.createDM().then((dmChannel) => {
          const embed10 = new MessageEmbed()
          .setTitle(`**${emj.Right}  Verification・إكمال التحقق**`)
    .setDescription(`**<:Time:1314260856707481691> لديك مهلة دقيقه لكتابة هذه الأرقام لإستلام كود الخصم 
Type this : \`${verificationCode}\`**`)
    .setColor(`${colorE}`)
          dmChannel.send({ embeds: [embed10] });
          const collector = dmChannel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 60000 });
          collector.on('collect', (msg) => {
            if (msg.content === verificationCode) {
              const randomCode = generateRandomCode();
              const embed11 = new MessageEmbed()
    .setTitle(`**${emj.Right} Verified・تم التحقق**`)
    .setDescription(`**<:emoji_63:1314261212648964127>كود الخصم :
||\`${randomCode}\`|| **`)
    .setColor(`${colorE}`)
              message.author.send({ embeds: [embed11] });
              const embed3 = new MessageEmbed()
    .setTitle(`**${emj.Right} Verification・إنتهاء التحقق**`)
    .setDescription(`**${emj.True} تم التحقق من هويتك بنجاح و تم تسليمك كود الخصم 
${emj.Dot} نسبة الخصم : ${offerCount}**`)
    .setColor(`EA3648`)
    .setTimestamp()
        countdownMessage.edit({ embeds: [embed3] });
offerCodesLog.send(`**كود خصم : \`${randomCode}\`\n الكود لـ : <@${message.author.id}>\nميعاد الكود : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
offerCodesLog.send(`${lineLink}`)
              db.push(`offer_${message.member.id}` , {userId:message.member.id, code:randomCode , time:`<t:${Math.floor(now.getTime() / 1000)}:d>`});
              collector.stop();
            } else {
              message.author.send(`**${emj.Warn} رمز التحقق غير صحيح ! يرجى إعداة كتابته بشكل صحيح ..**`); }});

          collector.on('end', (collected, reason) => {
            if (reason === 'time') {
            message.author.send(`**${emj.Warn} لقد إنتهت مهلة التحقق .. نأسف لم يتم إرسال لك كود الخصم .**`); }}); });
        break; } else {
        const embed1 = new MessageEmbed()
    .setTitle(`**${emj.Right}  Countdown・العد التنازلي**`)
    .setDescription(`**<:Time:1314260856707481691> يتم التحقق من هويتك الآن، يرجى الإنتظار .. \`${i}\`**`)
    .setColor(`${colorE}`)
    .setTimestamp()
        countdownMessage.edit({ embeds: [embed1] }); }}}});

function generateRandomCode() {
  let code = '';
  let availableCharacters = characters.split('');
  while (code.length < codeDis) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    const randomCharacter = availableCharacters.splice(randomIndex, 1)[0];
    code += randomCharacter;
  }
  return code; 
}
function generateRandomDigits(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result; 
}

client.on("messageCreate" , async message => {
if(message.content.startsWith(prefix + "اكواد")) {
    const args = message.content.split(" ")
    const member = message.mentions.members.first() ||     message.guild.members.cache.find(r=>r.id == args[1])
    if(!member) return message.reply("**منشن الشخص أولاً !**")
  if(!db.has(`offer_${member.id}`)) return message.reply("**هذا الشخص ليس لديه اكواد خصم !**")
    const offer = db.get(`offer_${member.id}`); 
    let usersData = [];
    for (const entry of offer) {
      var code = entry.code;
      var time = entry.time;
      var memberId = entry.userId;
      usersData.push({ user: memberId, code, time });
    }
    const embed = new MessageEmbed()
      .setColor('EA3648')
      .setDescription(`**${member} Codes :**`);
    const topUsers = usersData.slice(0, 20);
    topUsers.forEach((user, index) => {
      embed.addField(`**#${index + 1} | **` , `> **الكود :**\n ${user.code}\n> **ميعاد الكود : ${user.time}**`);
    });
      message.reply({embeds:[embed]}) }});

client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "remove")) {
    let user = message.mentions.members.first()
    if(!user) return message.reply("**Specify A User !**")
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply("**Specify A Code To Remove !**")
    const offer = db.get(`offer_${user.id}`);
    if(!db.has(`offer_${user.id}`)) return message.reply("**This User Don't Have Codes !**")
    for (const entry of offer) {
      if(entry.code == args) {
      const updatedOffer = offer.filter(entry => entry.code !== args);
      db.set(`offer_${user.id}`, updatedOffer);
      message.reply(`**Successfully removed code ${args} from the user's offers!**`); }}}});

//////////////
const channelId = '1121188114573037589';
const emj1 = '<:heart2:1314261689331486781>';
client.on('messageCreate', async message => {
if (message.channel.id === channelId) {
message.react(emj1); }});

const channelId2 = '1121188142087680141';
const emj2 = '<:like:1137302524584525864>';
const emj3 = '<:dislike:1137302579391496263>';
client.on('messageCreate', async message => {
if (message.channel.id === channelId2) {
message.react(emj2);
message.react(emj3); }});

///////////////
client.on("guildMemberUpdate", function(oldMember, newMember) {
    if (newMember.roles.cache.has("1313669377194852383")) {
        oldMember.roles.remove("1121188026450714674"); };}); 

///////////////
client.on('messageCreate', async message => {
if (message.content.startsWith('$poosts') || message.content.startsWith('$منشورات')) {
let user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id == message.content.split(" ").slice(1).join(" "))
  const gg = db.get(`specialpoost_${user}`);
    const ggnumber = gg || 0;
  const gg2 = db.get(`specialpoost_${message.member}`);
  const ggnumber2 = gg2 || 0;
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      message.reply(`**${emj.Dot} عدد المنشورات المتاحة لهذا الشخص : ${ggnumber}**`)
    }
  if (!user) {
    message.reply(`**${emj.Dot} عدد منشوراتك المتاحه : ${ggnumber2}**`)
  }
}});

///////////////
  const allowedChannels = ['❖・أخرى', '❖・طرق', '❖・العاب', '❖・عملات', '❖・ديسكورد', '❖・حسابات', '❖・برمجيات', '❖・تصاميم']
client.on('messageCreate', async message => {
if(allowedChannels.includes(message.channel.name)) {
  const now = new Date();
  let guild = message.guild;
  const user = guild.members.cache.find(r=> r.id == message.author.id)
  if (user && user.roles.cache.has('1314242414793199626') && message.content.length >= 5) {
    let gg = db.get(`specialpoost_${user}`);
    if (gg && gg > 0) {
      if(gg > 1) {
        const specialr = message.guild.roles.cache.get('1313878699543756840');
        const SpecialPoostLog0 = await message.client.channels.fetch("1313669665490206782");
let SpecialEmbedLog0 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} 1 SpecialPost Has Removed !**`)
      .setDescription(`> **${emj.Lift} تم ازالة منشور واحد من ${user} , المشرف المسؤول  **
**${emj.Dot} إيدي الشخص : ${user.id}
${emj.Dot} إيدي المشرف المسؤول :  \n\n${emj.Dot} تاريخ إزالة المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>`)
      .setColor(`${colorE}`)
      .setTimestamp()
        setTimeout(() => {
          db.subtract(`specialpoost_${user}`, `1`);
   SpecialPoostLog0.send({ embeds: [SpecialEmbedLog0] })
 SpecialPoostLog0.send(`${lineLink}`)
                  }, 60000) 

      }
      if (gg === 1) {
        const specialr = message.guild.roles.cache.get('1126368425774694511');
        const SpecialPoostLog0 = await message.client.channels.fetch("1126373023579131986");
let SpecialEmbedLog0 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} End SpecialPost Role !**`)
      .setDescription(`> **${emj.Lift} تم إزالة الرتبة من ${user} , المشرف المسؤول  **
**${emj.Dot} إيدي الشخص : ${user.id}
${emj.Dot} إيدي المشرف المسؤول :  \n\n${emj.Dot} تاريخ إزالة الرتبة : <t:${Math.floor(now.getTime() / 1000)}:d>\n${emj.Dot} السبب : نفاذ عدد المنشورات المتاحة للشخص**`)
      .setColor(`${colorE}`)
      .setTimestamp()
        setTimeout(() => {
        user.roles.remove(specialr);
   SpecialPoostLog0.send({ embeds: [SpecialEmbedLog0] })
 SpecialPoostLog0.send(`${lineLink}`)
                       db.delete(`specialpoost_${user}`); 
        }, 60000); 
      }
    }
  }
}

});

client.on('messageCreate', async message => {
if (message.content.startsWith('$specialrole') && message.member.roles.cache.has(RolesRole)) {
const now = new Date();
const guild = message.guild;
const specialrole = guild.roles.cache.get('1313878699543756840');
const args = message.content.split(' ');
const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
const number = message.content.split(" ").slice(2).join(" ")
const number2 = parseInt(number)
if (!number2) return message.reply("**هذا ليس عدد يمكن وضعه !**")
const SpecialPoostLog = await message.client.channels.fetch("1313669665490206782");
await db.add(`specialpoost_${user}`, `${number}`)
await user.roles.add(specialrole)
await message.reply(`**${emj.True} تم تفعيل إشتراك ${user} لعدد منشورات ${number}**`)
let SpecialEmbedLog = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} New SpecialPost Role !**`)
      .setDescription(`> **${emj.Lift} تم إعطاء الرتبة لـ ${user} , المشرف المسؤول ${message.author} **
**${emj.Dot} إيدي الشخص : ${user.id}
${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} تاريخ إعطاء الرتبة : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await SpecialPoostLog.send({ embeds: [SpecialEmbedLog] })
    await SpecialPoostLog.send(`${lineLink}`) 
}
});

client.on('messageCreate', async (message) => {
if (message.content.startsWith('$setpost') && message.member.roles.cache.has(RolesRole)) {
const now = new Date();
const guild = message.guild;
const args = message.content.split(' ');
const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
const number = message.content.split(" ").slice(2).join(" ")
const number2 = parseInt(number)
if (!number2) return message.reply("**هذا ليس عدد يمكن التغيير إليه !**")
if (!db.has(`specialpoost_${user}`)) return message.reply(`**${emj.False}هذا الشخص لا يمتلك إشتراك للرتبة لتغيير عدد منشوراته !**`)
    const gg = db.get(`specialpoost_${user}`);
    db.set(`specialpoost_${user}`, number2);
  const SpecialPoostLog2 = await message.client.channels.fetch("1313669665490206782");
  let SpecialEmbedLog2 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} New Set Post Number !**`)
      .setDescription(`> **${emj.Lift} تم تغيير عدد منشورات ${user} لـ ${number} , المشرف المسؤول ${message.author}**
**${emj.Dot} إيدي الشخص : ${user.id}
${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} تاريخ تغيير عدد المشنورات : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await SpecialPoostLog2.send({ embeds: [SpecialEmbedLog2] })
    await SpecialPoostLog2.send(`${lineLink}`)
  await message.reply(`**${emj.True} تم تغيير عدد منشورات ${user} لـ ${number}**`) }});

///////////////
client.on('messageCreate', async message => {
if (message.content.startsWith('$رول') && message.member.roles.cache.has(RolesRole) || message.content.startsWith('$role') && message.member.roles.cache.has(RolesRole)) {
 if(message.content.startsWith(prefix + "رولات")) return false;
  const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if(!args) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    let row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Select Kind Of Role ..")
          .setCustomId('menu-select')
          .setMaxValues(1)
          .addOptions([
            {
              label: 'Seller Roles',
              value: 'sellR'
            },
            {
              label: 'Other Roles',
              value: 'otherR'
            } ]) )
    let m = await message.reply({ content: `**${emj.Dot} يرجى تحديد نوع الرتبة :**`, components: [row] })
  db.set(`giverole_${m.id}` , user.id)}});

client.on("interactionCreate" , interaction => {
  if(interaction.customId == "menu-select") {
  if (interaction.values[0] === 'sellR') {
if (interaction.member.roles.cache.has(RolesRole)) {
let row1 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Select Role ..")
          .setCustomId('menu-select1')
          .setMaxValues(5)
          .addOptions([
            {
              label: '❆ || Perfect S',
              value: '1313873931748511785'
            },
            {
              label: '❆ || Gold S',
              value: '1313873057244381224'
            },
            {
              label: '❆ || Great S',
              value: '1313873735144706161'
            },
            {
              label: '❆ || Epic S',
              value: '1121188014811521104'
            },
            {
              label: '❆ || Normal S',
              value: '1313873725770432524'
            },
            {
              label: '❆ || Designer S',
              value: '1313874400529088532'
            },
            {
              label: '❆ || Developer S',
              value: '1313874407172866138'
            }, ]) )
        interaction.message.edit({ content: `**${emj.Dot} يرجى تحديد الرتبة :**`, components: [row1] })
interaction.deferUpdate() }}
if (interaction.values[0] === 'otherR') {
if (interaction.member.roles.cache.has(RolesRole)) {
let row1 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Select Role ..")
          .setCustomId('menu-select2')
          .setMaxValues(2)
          .addOptions([
            {
              label: '❆ || Trust S',
              value: '1121188009530892318'
            },
            {
              label: 'Warn 100%',
              value: '1313669407792304209'
            },
            {
              label: 'Warn 50%',
              value: '1313669409814089889'
            }, ]) )
        interaction.message.edit({ content: `**${emj.Dot} يرجى تحديد الرتبة :**`, components: [row1] })
  interaction.deferUpdate() }}}});

client.on("interactionCreate" , async interaction => {
  if(interaction.isSelectMenu()) {
    if(interaction.customId == "menu-select1") {
      if (interaction.member.roles.cache.has(RolesRole)) {
      let rolesAdded = [];
      let rolesRemoved = [];
      let u = db.get(`giverole_${interaction.message.id}`)
      let member = interaction.guild.members.cache.find(r=>r.id == u)
      let roles = interaction.values;
      for (const r of roles) {
        var s;
        const role = interaction.guild.roles.cache.find(ro=>ro.id == r)
        if(role) {
    if(member.roles.cache.some(ro=>ro.id == r)) {
          await member.roles.remove([role])
          rolesRemoved.push(role.name.replace(/\|\|/g, '')); } else {
          await member.roles.add([role])
          rolesAdded.push(role.name.replace(/\|\|/g, '')); }}}
      let message = `**${emj.Lift} تم تحديث رتب ${member}**\n`;
    if (rolesAdded.length > 0) {
      message += `> **${emj.Dot} الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n`; }
    if (rolesRemoved.length > 0) {
      message += `> **${emj.Dot} الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`; }
 interaction.message.edit({content:`${message}` , components:[]})
      interaction.deferUpdate()
        db.delete(`giverole_${interaction.message.id}`) }} 
    if(interaction.customId == "menu-select2") {
if (interaction.member.roles.cache.has(RolesRole)) {
      let rolesAdded = [];
      let rolesRemoved = [];
      let u = db.get(`giverole_${interaction.message.id}`)
      let member = interaction.guild.members.cache.find(r=>r.id == u)
      let roles = interaction.values;
      for (const r of roles) {
        var s;
        const role = interaction.guild.roles.cache.find(ro=>ro.id == r)
        if(role) {
      if(member.roles.cache.some(ro=>ro.id == r)) {
          await member.roles.remove([role])
          rolesRemoved.push(role.name.replace(/\|\|/g, '')); } else {
          await member.roles.add([role])
          rolesAdded.push(role.name.replace(/\|\|/g, '')); }}}
      let message = `**${emj.Lift} تم تحديث رتب ${member}**\n`;
    if (rolesAdded.length > 0) {
      message += `> **${emj.Dot} الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n`; }
    if (rolesRemoved.length > 0) {
      message += `> **${emj.Dot} الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`; }
 interaction.message.edit({content:`${message}` , components:[]})
      interaction.deferUpdate()
db.delete(`giverole_${interaction.message.id}`) }}}});

///////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith('-') && message.member.roles.cache.has(OfficialRole)) {
message.channel.send(`يرجى ملء القائمة بكل حذر :\n\n1. اسم النصاب : \n2. إيدي النصاب : \n3. اسم صاحب البلاغ : \n4. إيدي صاحب البلاغ : \n5. القصه بالتفاصيل :\n6. الدلائل :`) }});

///////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith('$نصاب') && message.member.roles.cache.has(OfficialRole)) {
    const now = new Date();
    const guild = message.guild;
    const role = guild.roles.cache.get('1314375949927710740');
    const logChannel = await message.client.channels.fetch("1313669665490206782");
  const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply(`**منشن الشخص أولاً أو ضع الإيدي !**`)
    if (db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص بالفعل في قائمة النصابين !**");
    db.add(`scammer_${user.id}`, 1)
    await user.roles.set([]);
    await user.roles.add(role)
    await message.reply(`**تم إضافة ${user} إلى قائمة النصابين !**`)
    let EmbedLog = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} Add a New Thief !**`)
      .setDescription(`> **${emj.Lift} تم تشهير ${user} , المشرف المسؤول ${message.author} **
        **${emj.Dot} إيدي النصاب : ${user.id}
        ${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} تاريخ التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await logChannel.send({ embeds: [EmbedLog] })
    await logChannel.send(`${lineLink}`) }});

client.on('messageCreate', async message => {
if (message.content.startsWith('$ازالة') && message.member.roles.cache.has(OfficialRole)) {
const now = new Date();
const guild = message.guild;
const role = guild.roles.cache.get('1313669377194852383');
const logChannel = await message.client.channels.fetch("1313669665490206782");
const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
if (!db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص ليس بقائمة النصابين لإزالته !**")
db.delete(`scammer_${user.id}`, 1)
await user.roles.remove(role);
await message.reply(`**تم إزالة ${user} من قائمة النصابين !**`)
let EmbedLog = new Discord.MessageEmbed() 
.setTitle(`**${emj.Right} Remove a New Thief !**`)
.setDescription(`> **${emj.Lift} تم إزالة تشهير ${user} , المشرف المسؤول ${message.author} **
**${emj.Dot} إيدي الشخص : ${user.id}
${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} تاريخ إزالة التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
.setColor(`${colorE}`)
.setTimestamp()
await logChannel.send({ embeds: [EmbedLog] })
await logChannel.send(`${lineLink}`) }});

client.on('messageCreate', async message => {
if (message.content.startsWith('$فحص') || message.content.startsWith('فحص')) {
const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
if (db.has(`scammer_${user.id}`)) {
  await message.reply(`**${emj.Warn} إنتبه ! هذا الشخص نصاب، الرجاء عدم التعامل معه .**`); 
} else {
  await message.reply(`**<:mem:1314377276049199194> هذا الشخص ليس نصاب <:like:1314377504106086421>،لكن انتبه ! هذا لا يعني .**`);
  }}});

///////////////
client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const role = guild.roles.cache.find(r => r.name === "نصاب");
  const user = guild.members.cache.find(m => m.id === member.id);
  if (role && user && db.get(`scammer_${user.id}`)) {
    try {
      await user.roles.add(role);
      console.log(`تم إعطاء الرتبة ${role.name} للعضو ${user.displayName} في سيرفر ${guild.name}`);
    } catch (error) {
      console.error(`حدث خطأ أثناء إعطاء الرتبة للعضو ${user.displayName} في سيرفر ${guild.name}: ${error}`); }}});

///////////////
client.on("messageCreate", async message => {
  if (message.content === prefix + 'ping') {
let rowPing = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setLabel(`إعادة إختبار السرعة`)
          .setCustomId(`reexam`)
          .setStyle("SECONDARY") )
message.channel.send('pong').then(message => {
      message.edit({ content: `**\`\`\`js
My ping is : ${client.ws.ping} ms\`\`\`**`, components: [rowPing] }) });}});
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        if (interaction.customId === 'reexam') {
          const message = await interaction.channel.messages.fetch(interaction.message.id);
message.edit(`**\`\`\`js
My ping is : ${client.ws.ping} ms\`\`\`**`) }}});

///////////////
client.on('messageCreate', async message => {
if (message.content.startsWith('$نداء') && message.member.roles.cache.has(discordStaff) || message.content.startsWith('$come') && message.member.roles.cache.has(discordStaff)) {
try {
const channel = message.channel;
const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
  const commandLink = `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`;
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
await user.send(`**${emj.Dot} يرجى التوجه إلى ${channel} في أقرب وقت !\n ${emj.Dot} الإستدعاء من قبل : ${message.member} .\n ${emj.Dot} رسالة الإستدعاء : ${commandLink} **`)
await message.reply(`**${emj.True} لقد تم نداء ${user} إلى هذا الروم بنجاح !**`)
} catch {
  await message.reply(`**${emj.False} لا يمكنني ارسال رسالة لهذا الشخص !**`) }}});

///////////////

client.on("messageCreate" , async message => {  
if(message.content.startsWith("فرببع") || message.content.startsWith("$فربببوع")) {
const embed = new Discord.MessageEmbed()
  .setTimestamp()
      .setFooter("#- sinaq S.")
    .setDescription(`> **${emj.Right} The main branch : mediation and speaking .**
**${emj.Dot} https://discord.gg/mazen **

> **${emj.Right} Avatars branch : Post all modern and distinctive avatars .**
**${emj.Dot} https://discord.gg/arv **

> **${emj.Right} Music bot branch : Music bot at the highest level and perform .**
**${emj.Dot} https://discord.gg/lunabot **

> **${emj.Right} Our Facebook group : A group for all Arab branches .**
**${emj.Dot} https://www.facebook.com/groups/484657252831621/?ref=share **`) 
   .setColor(`${colorE}`) 
.setThumbnail(message.author.avatarURL({ dynamic: true }))
  let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("embed")
        .setCustomId("emsg")
        .setStyle("DANGER")
        .setDisabled(true)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("message")
        .setCustomId("mmsg")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
  message.reply({ embeds: [embed], components: [row], content: `**${emj.Right} Arab branches :**` }); }});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "mmsg") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const mmsgmsg = `> **${emj.Right} The main branch : mediation and speaking .**\n**${emj.Dot} https://discord.gg/mazen **\n> **${emj.Right} Avatars branch : Post all modern and distinctive avatars .**\n**${emj.Dot} https://discord.gg/arv **\n> **${emj.Right} Music bot branch : Music bot at the highest level and perform .**\n**${emj.Dot} https://discord.gg/lunabot **\n> **${emj.Right} Our Facebook group : A group for all Arab branches .**\n**${emj.Dot} https://www.facebook.com/groups/484657252831621/?ref=share **`
  let row1 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("embed")
        .setCustomId("emsg")
        .setStyle("DANGER")
        .setDisabled(false)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("message")
        .setCustomId("mmsg")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
  message.edit({ content: `${mmsgmsg}`, components: [row1], embeds: [] }); }});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "emsg") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
  const embed1 = new Discord.MessageEmbed()
  .setTimestamp()
      .setFooter("#- Arab S.")
    .setDescription(`> **${emj.Right} The main branch : mediation and speaking .**
**${emj.Dot} https://discord.gg/mazen **

> **${emj.Right} Avatars branch : Post all modern and distinctive avatars .**
**${emj.Dot} https://discord.gg/arv **

> **${emj.Right} Music bot branch : Music bot at the highest level and perform .**
**${emj.Dot} https://discord.gg/lunabot **

> **${emj.Right} Our Facebook group : A group for all Arab branches .**
**${emj.Dot} https://www.facebook.com/groups/484657252831621/?ref=share **`) 
   .setColor(`${colorE}`) 
.setThumbnail(message.author.avatarURL({ dynamic: true }))
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("embed")
        .setCustomId("emsg")
        .setStyle("DANGER")
        .setDisabled(true)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("message")
        .setCustomId("mmsg")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
  message.edit({ embeds: [embed1], components: [row2], content: `**${emj.Right} Arab branches :**` }); }});

///////////////
client.on("messageCreate", async message => {
if(message.author.bot || !message.guild) return;
    if (message.content.startsWith(prefix + 'embed') || (message.content.startsWith(prefix + 'e'))) {
      if (!message.member.roles.cache.some(r=>r.id == perms) ) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
}
      await message.channel.sendTyping();
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply('**يرجى وضع النص أولاً .**')
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setDescription(`${args}`) 
   .setColor(`${colorE}`) 
let attach = message.attachments.first();
if (attach) {
    embed.setImage(attach.proxyURL) }
    message.channel.send({embeds: [embed]}); }})

///////////////
client.on("messageCreate" , async message => {  
if(message.content.startsWith(prefix + "say")) {
      if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
}
  await message.channel.sendTyping();
        let args = message.content.split(" ").slice(1).join(" ")
        if(!args) return message.reply("**يرجى وضع النص أولاً .**")
          message.delete() 
            message.channel.send(`${args}`) }})

///////////////
let manshor;
let member;

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "منشور")) {
if (message.member.roles.cache.has(discorsLeader) || message.member.roles.cache.some(r=>r.id == perms)) {

if(message.content.startsWith(prefix + "منشورات")) return false;
  
member = message.mentions.members.first()
      if (!member) return message.reply(`**${emj.False} يرجى منشن صاحب المنشور أولاً !**`)
manshor = message.content.split(" ").slice(2).join(" ");
  if (!manshor) return message.reply(`**${emj.False} يرجى وضع المنشور أولاً !**`)

let embed = new Discord.MessageEmbed()
      .setTitle(`**${emj.Lift} إختر نوع المنشن :**`)
      .setDescription(`**${emj.Dot} يرجى إختيار نوع المشنن المناسب : \`here\` أو \`everyone\`\n${emj.Dot} المنشور :\n\`${manshor}\`**`)
      .setColor(`${colorE}`)
  let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("here")
        .setCustomId("menthere")
        .setStyle("SECONDARY")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("everyone")
        .setCustomId("menteve")
        .setStyle("SECONDARY")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("no mention")
        .setCustomId("nomen")
        .setStyle("SECONDARY")
    )

  message.reply({ embeds: [embed], components: [row] })
            }}});

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "menthere") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
    const message = await interaction.channel.messages.fetch(interaction.message.id);

    const heremanshor = `${manshor}\n@here`

let embed1 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Lift} هل انت متأكد من إرسال المنشور ؟**`)
  .setDescription(`**${emj.Dot} يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n${emj.Dot} المنشور :\n\`${heremanshor}\n\nتواصل مع : ${member}\`**`)
      .setColor(`${colorE}`)
  let row1 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("completeid")
        .setStyle("SUCCESS")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("cancelid")
        .setStyle("DANGER")
    )
      interaction.deferUpdate()

    message.edit({ embeds: [embed1], components: [row1] });     } else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });    } } else if (interaction.customId === "menteve") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 
const evemanshor = `${manshor}\n@everyone`
let embed2 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Lift} هل انت متأكد من إرسال المنشور ؟**`)
  .setDescription(`**${emj.Dot} يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n${emj.Dot} المنشور :\n\`${evemanshor}\n\nتواصل مع : ${member}\`**`)
      .setColor("EA3648")
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("completeid2")
        .setStyle("SUCCESS")   )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("cancelid")
        .setStyle("DANGER")   )
    interaction.deferUpdate()
    message.edit({ embeds: [embed2], components: [row2] });     } else {
      interaction.reply({ content: `**${emj.False}
 لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });   }  } else if (interaction.customId === "nomen") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 
const nomenmanshor = `${manshor}`
let embed2 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Lift} هل انت متأكد من إرسال المنشور ؟**`)
  .setDescription(`**${emj.Dot} يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n${emj.Dot} المنشور :\n\`${nomenmanshor}\n\nتواصل مع : ${member}\`**`)
      .setColor(`${colorE}`)
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("completeid3")
        .setStyle("SUCCESS")    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("cancelid")
        .setStyle("DANGER")    )
    interaction.deferUpdate()
    message.edit({ embeds: [embed2], components: [row2] }); } else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });}}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "cancelid") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
let embed3 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`**${emj.Dot} تم إلغاء إرسال هذا المنشور .
${emj.Dot} بواسطة :
${interaction.member}
**`)
interaction.deferUpdate()
message.edit({ embeds: [embed3], components: [] }); } else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });}}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "completeid") {
if (interaction.member.roles.cache.some(r=>r.id == discorsLeader)) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const ManshoratChannel = client.channels.cache.find(channel => channel.name === manshoratRoom);
const ManshoratLog = client.channels.cache.get('1313871420664582164');
  const memhere = `${member}`
  const manshorhere = `${manshor}\n\nتواصل مع : ${memhere}\n@here`
let embed4 = new Discord.MessageEmbed()
  .setColor(`${colorE}`)
  .setDescription(`**${emj.Dot} تم إرسال هذا المنشور إلى ${ManshoratChannel}
${emj.Dot} بواسطة :
${interaction.member}
**`)
message.edit({ embeds: [embed4], components: [] });
interaction.deferUpdate()
await ManshoratChannel.send(`${manshorhere}`)
await ManshoratChannel.send(`${lineLink}`)
await ManshoratLog.send(`**${emj.Dot} المنشور :\n\`${manshor}\`\n${emj.Dot} المنشن :\nhere\n${emj.Dot} المشرف المسؤول :\n${interaction.member}\n${emj.Dot} صاحب المنشور :\n${memhere}\n${emj.Dot} تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await ManshoratLog.send(`${lineLink}`) } else {
      interaction.reply({ content: `**${emj.False}
 لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });}}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "completeid2") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) ) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const ManshoratChannel2 = client.channels.cache.find(channel => channel.name === manshoratRoom);
  const ManshoratLog2 = interaction.guild.channels.cache.get('1313669665490206782');

  const memeve = `${member}`
  const manshoreve = `${manshor}\n\nتواصل مع : ${memeve}\n@everyone`
  
let embed5 = new Discord.MessageEmbed()
  .setColor(`${colorE}`)
  .setDescription(`**${emj.Dot} تم إرسال هذا المنشور إلى ${ManshoratChannel2}
${emj.Dot} بواسطة :
${interaction.member}
**`)
message.edit({ embeds: [embed5], components: [] });
interaction.deferUpdate()
  await ManshoratChannel2.send(`${manshoreve}`);
await ManshoratChannel2.send(`${lineLink}`)
await ManshoratLog2.send(`**${emj.Dot} المنشور :\n\`${manshor}\`\n${emj.Dot} المنشن :\neveryone\n${emj.Dot} المشرف المسؤول :\n${interaction.member}\n${emj.Dot} صاحب المنشور :\n${memeve}\n${emj.Dot} تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await ManshoratLog2.send(`${lineLink}`) } else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });}}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "completeid3") {
if (interaction.member.roles.cache.some(r=>r.id == discorsLeader)) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const ManshoratChannel3 = client.channels.cache.find(channel => channel.name === manshoratRoom);
const ManshoratLog3 = client.channels.cache.get('1121188148924395551');
  const nomen = `${member}`
  const manshorno = `${manshor}\n\nتواصل مع : ${nomen}`
let embed4 = new Discord.MessageEmbed()
  .setColor(`${colorE}`)
  .setDescription(`**${emj.Dot} تم إرسال هذا المنشور إلى ${ManshoratChannel3}
${emj.Dot} بواسطة :
${interaction.member}
**`)
message.edit({ embeds: [embed4], components: [] });
interaction.deferUpdate()
await ManshoratChannel3.send(`${manshorno}`)
await ManshoratChannel3.send(`${lineLink}`)
await ManshoratLog3.send(`**${emj.Dot} المنشور :\n\`${manshor}\`\n${emj.Dot} المنشن :\nno mention\n${emj.Dot} المشرف المسؤول :\n${interaction.member}\n${emj.Dot} صاحب المنشور :\n${nomen}\n${emj.Dot} تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await ManshoratLog3.send(`${lineLink}`) } else {
      interaction.reply({ content: `**${emj.False}
 لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });}}});

/////////////// 
client.on("messageCreate", async message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (args.endsWith("b")) {
    args = args.replace(/b/gi, "") * 1000000000;
  } else if (args.endsWith("m")) {
    args = args.replace(/m/gi, "") * 1000000;
  } else if (args.endsWith("k")) {
    args = args.replace(/k/gi, "") * 1000;
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (
    message.content.startsWith(prefix + "/#sjnskwndnsk") ||
    message.content.startsWith("ضريبة") ||
    message.content.startsWith("ضريبه") ||
    message.content.startsWith("$tax") ||
    message.content.startsWith("$ضريبه") ||
    message.content.startsWith("$ضريبة")
  ) {
    let args2 = parseInt(args);
    let tax = Math.floor(args2 * (20 / 19) + 1);
    let tax2 = Math.floor(args2 * (20 / 19) + 1 - args2);
    let tax3 = Math.floor(tax2 * (20 / 19) + 1);
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let embed1 = new Discord.MessageEmbed()
      .setTitle(`**${emj.False} | Error \`:\`**`)
      .setDescription("**يرجى وضع المبلغ المراد حساب ضريبته .**")
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setColor(`${colorE}`)
      .setTimestamp()
      .setFooter("#- sinaq S.");
    if (!args2) return message.channel.send({ embeds: [embed1] });
    let embed2 = new Discord.MessageEmbed()
      .setTitle(`**${emj.False} | Error \`:\`**`)
      .setDescription("**يرجى وضع المبلغ المراد حساب ضريبته .**")
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setColor(`${colorE}`)
      .setTimestamp()
      .setFooter("#- Arab S.");
    if (isNaN(args2)) return message.channel.send({ embeds: [embed2] });
    if (args2 < 1) return message.channel.send(3);
    let embed4 = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} | Tax \`:\`**`)
      .setDescription(`**${emj.Dot} The amount to be paid \`:\` 1**`)
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setColor(`${colorE}`)
      .setTimestamp()
      .setFooter("#- Arab S.");
    if (args2 == 1) return message.channel.send({ embeds: [embed4] });
    let taxmsg = new Discord.MessageEmbed()
      .setTitle(`**${emj.Right} | Tax \`:\`**`)
      .setColor(`${colorE}`)
      .setDescription(`**${emj.Dot} The amount to be paid \`:\` ${tax}\n${emj.Dot} Mediator tax \`:\` \`الوسيط\` ${tax4}**`)
      .setFooter("#- Arab S.")
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setTimestamp();
if (args2 >= 100000000) {
      taxmsg.setImage(`https://i8.ae/OlCHy`); 
    }
    message.channel.send({ embeds: [taxmsg] }); 
  }});
                          
///////////////
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "staff-role")) {
          if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
      let r = message.content.split(" ").slice(1).join(" ")
      let role = message.guild.roles.cache.find(r => r.id == r)
      if (!r) {
        if (!role) {
          if (isNaN(r)) {
            message.reply("> **Error : Please put the rank ID**") 
          }
        }
      }
      db.set(`role_${message.guild.id}`, r)
      message.reply(`> **تم تعيين رتبة <@&${r}> مستخدم لـ زر الكلايم .**`) 
    
  }
});

client.on("channelCreate", channel => {
  if (channel.name.startsWith("🎫・")) {
    let embed = new Discord.MessageEmbed()
      .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
      .setColor(`${colorE}`)
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("Claim")
        .setCustomId("claim")
        .setStyle("SECONDARY")
    )
    setTimeout(() => {
      channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${channel.id}`, m.id)) }, 1000);
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    let message = db.get(`message_${interaction.channel.id}`)
    let msg = interaction.channel.messages.cache.find(r => r.id == message)
    let role = interaction.guild.roles.cache.find(r => r.id == db.get(`role_${interaction.guild.id}`))
      if (interaction.customId == "claim") {
        if (!interaction.member.roles.cache.some(r => r.id == db.get(`role_${interaction.guild.id}`))) return interaction.reply({ content: "**يمكن للإدارة فقط إستخدام هذا الزر .**", ephemeral: true })
        let embed = new Discord.MessageEmbed()
          .setDescription(`**مسؤول التذكرة : ${interaction.member} .**`)
          .setColor(`${colorE}`)
        let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("Unclaim")
        .setCustomId("unclaim")
        .setStyle("DANGER") )
        interaction.channel.permissionOverwrites.edit(role, {
          SEND_MESSAGES: false, })
        interaction.channel.permissionOverwrites.edit(staffManagerRole, {
          SEND_MESSAGES: true, })
        interaction.channel.permissionOverwrites.edit(interaction.member, {
          SEND_MESSAGES: true, })
        interaction.channel.setName(`ticket-${interaction.member.user.username}`)
      db.set(`claimed_${interaction.channel.id}_${interaction.member.id}`, interaction.member.id)
        db.set(`user_${interaction.channel.id}`, interaction.member.id)
        db.add(`weekuser_${interaction.member.id}`, 1)
        db.add(`alluser_${interaction.member.id}`, 1)
        interaction.reply({ embeds: [new Discord.MessageEmbed().setDescription(`**تم إستلام التذكرة من قبل : ${interaction.member} .**`).setColor(`${colorE}`)] })
        msg.edit({ embeds: [embed], components: [row] })      }
      if (interaction.customId == "unclaim") {
        if (!interaction.member.roles.cache.some(r => r.id == db.get(`role_${interaction.guild.id}`))) return interaction.reply({ content: "**يمكن للإدارة فقط إستخدام هذا الزر .**", ephemeral: true })
        if (!db.has(`claimed_${interaction.channel.id}_${interaction.member.id}`)) return interaction.reply({ content: "**يمكن لصاحب التذكرة فقط إستخدام هذا الزر .**", ephemeral: true })
        interaction.reply({ content: `${role}`, embeds: [new Discord.MessageEmbed().setDescription(`**تم ترك التذكرة من قبل : ${interaction.member} .**`).setColor(`${colorE}`)] })
        let embed = new Discord.MessageEmbed()
          .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
          .setColor(`${colorE}`)
        let row = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
            .setLabel("Claim")
            .setCustomId("claim")
            .setStyle("SECONDARY") )
        interaction.channel.permissionOverwrites.edit(role, {
          SEND_MESSAGES: true, })
interaction.channel.permissionOverwrites.edit(interaction.member, {
          SEND_MESSAGES: false, })
        
        db.subtract(`weekuser_${interaction.member.id}`, 1)
        db.subtract(`alluser_${interaction.member.id}`, 1)
        db.delete(`claimed_${interaction.channel.id}_${interaction.member.id}`)
        db.delete(`user_${interaction.channel.id}`)
        msg.edit({ embeds: [embed], components: [row] })
      }
  }
});

client.on("channelDelete" , channel => {
if(db.has(`user_${channel.id}`)) {
const s = db.get(`user_${channel.id}`)    
  if(db.has(`claimed_${channel.id}_${s}`)) {
    db.delete(`claimed_${channel.id}_${s}`) 
  }
    if(db.has(`message_${channel.id}`)) {
    db.delete(`message_${channel.id}`)
    db.delete(`user_${channel.id}`)
    }
}
})

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "points") || message.content.startsWith(prefix + "نقاط") || message.content.startsWith(prefix + "نقط")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var points = db.get(`weekuser_${user.id}`)
      var weekwarns = db.get(`weekwarns_${user.id}`)
      var allpoints = db.get(`alluser_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      var allmute = db.get(`muteall_${user.id}`)
      var weekmute = db.get(`muteweek_${user.id}`)
      if(!points) {
         points = 0 }
      if(!weekwarns) {
         weekwarns = 0 }
      if(!allpoints) {
         allpoints = 0 } 
      if(!allwarns) {
         allwarns = 0 }
      if(!allmute) {
        allmute = 0 }
      if(!weekmute) {
        weekmute = 0 }
      let embed2 = new Discord.MessageEmbed()
        .setDescription(`${emj.Right} **${member.user} , Points :**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **Week Points : \`${points + weekwarns + weekmute}\`**\n> ${emj.Dot} **All Points : \`${allpoints + allwarns + allmute}\`**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **Week Tickets : \`${points}\`**\n> ${emj.Dot} **Week Warns : \`${weekwarns}\`**\n> ${emj.Dot} **Week Mutes : \`${weekmute}\`**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **All Tickets : \`${allpoints}\`**\n> ${emj.Dot} **All Warns : \`${allwarns}\`**\n> ${emj.Dot} **All Mutes : \`${allmute}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] }) }
    if (!user) {
      var points = db.get(`weekuser_${message.member.id}`)
      var weekwarns = db.get(`weekwarns_${message.member.id}`)
      var allpoints = db.get(`alluser_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      var allmute = db.get(`muteall_${message.member.id}`)
      var weekmute = db.get(`muteweek_${message.member.id}`)
      if(!points) {
         points = 0 }
      if(!weekwarns) {
         weekwarns = 0 }
      if(!allpoints) {
         allpoints = 0 } 
      if(!allwarns) {
         allwarns = 0 }
      if(!allmute) {
        allmute = 0 }
      if(!weekmute) {
        weekmute = 0 }
      let embed4 = new Discord.MessageEmbed()
        .setDescription(`${emj.Right} **${message.member.user} , Points :**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **Week Points : \`${points + weekwarns + weekmute}\`**\n> ${emj.Dot} **All Points : \`${allpoints + allwarns + allmute}\`**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **Week Tickets : \`${points}\`**\n> ${emj.Dot} **Week Warns : \`${weekwarns}\`**\n> ${emj.Dot} **Week Mutes : \`${weekmute}\`**\n${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}\n> ${emj.Dot} **All Tickets : \`${allpoints}\`**\n> ${emj.Dot} **All Warns : \`${allwarns}\`**\n> ${emj.Dot} **All Mutes : \`${allmute}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "tickets") || message.content.startsWith(prefix + "تكتات") || message.content.startsWith(prefix + "تكت")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      let points = db.get(`weekuser_${user.id}`)
      let allpoints = db.get(`alluser_${user.id}`)
      let embed1 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      let embedd = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
          let embed44 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${user.id}`)) return message.reply({ embeds: [embed1] })
      if (!db.has(`alluser_${user.id}`)) return message.reply({ embeds: [embedd] })
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      let points = db.get(`weekuser_${message.member.id}`)
      let allpoints = db.get(`alluser_${message.member.id}`)
      let embed3 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
        let embedd = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${message.member.id}`)) return message.reply({ embeds: [embed3] })
     if (!db.has(`alluser_${message.member.id}`)) return message.reply({ embeds: [embedd] })
      let embed4 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)

        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] }) 
    }
  }
});
  
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mutes") || message.content.startsWith(prefix + "ميوتات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var mutes = db.get(`muteweek_${user.id}`)
      var allmutes = db.get(`muteall_${user.id}`)
      if(!mutes) {
        mutes = 0
      }
      if(!allmutes) {
        allmutes = 0 }
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Mutes :`)
        .setDescription(`> **All Mutes : \`${allmutes}\`**\n> **Week Mutes : \`${mutes}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] }) }
    if (!user) {
      var mutes = db.get(`muteweek_${message.member.id}`)
      var allmutes = db.get(`muteall_${message.member.id}`)
      if(!mutes) {
        mutes = 0 }
      if(!allmutes) {
        allmutes = 0 }
      let embed4 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, Mutes :`)
        .setDescription(`> **Week Mutes : \`${mutes}\`**\n> **All Mutes : \`${allmutes}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekuser_${user.id}`, args2)
      await db.add(`alluser_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allticket(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`alluser_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteweek_${user.id}`, args2)
      await db.add(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allmute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allwarn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekuser_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`alluser_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekuser_${user.id}`, args2)
await db.subtract(`alluser_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} ticket points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  
  }

});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1314242609383735357)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekwarns_${user.id}`, args2)
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1313669405347155998)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`allwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekwarns_${user.id}`, args2)
      await db.subtract(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} warn points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1313669381892341820)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`muteweek_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`muteall_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`muteweek_${user.id}`, args2)
      await db.subtract(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} mute points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] }) 
    }
  }
});

client.on("messageCreate", message => {
  if (message.content == prefix + "claim") {

      if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
      let embed = new Discord.MessageEmbed()
        .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
        .setColor(`${colorE}`)
      let row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("Claim")
          .setCustomId("claim")
          .setStyle("SECONDARY")
      )
      message.delete()
      message.channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${message.channel.id}`, m.id)) 

  }
});

///////////////
client.on("messageCreate" , message => {
if(message.content.startsWith("bank")) {
message.reply(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`);
}
});

client.on("messageCreate" , message => {
      if(message.content.startsWith("bankspin")) {
message.reply(`**${emj.Dot} تحويل العجلة فقط لـ <@${spinbank}> .**`); 
      }
});

///////////////
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$setr')) {
    let args = message.content.split(" ")
    const roles = message.mentions.roles.first() || message.guild.roles.cache.find((x) => x.id == args[1]) || message.guild.roles.cache.find((x) => x.name == message.content.split(' ').slice(1).join(' '));
    if (!message.member.roles.cache.some(r=>r.id == perms))  {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
    if(!args) return message.reply("**حدد رتبة !**")
        if(!roles) return message.reply("**حدد رتبة !**")


    const members = roles.members.map((e) => `<:staff:1137304010399940628> |  <@${e.user.id}>`);
    const membersCount = roles.members.size;
    const MAX_LENGTH = 2000;
    const chunks = [];
    let currentChunk = '';
    for (const member of members) {
      if (currentChunk.length + member.length + 1 <= MAX_LENGTH) {
        currentChunk += `${member}\n`; } else {
        chunks.push(currentChunk);
        currentChunk = `${member}\n`; }}
    if (currentChunk) {
      chunks.push(currentChunk); }
    for (let i = 0; i < chunks.length; i++) {
      const content = i === chunks.length - 1 ? `**${chunks[i]}\nعددهم : \`${membersCount}\`**` : `**${chunks[i]}**`;
      await message.reply({ content }); }
  }
});

////////////////
client.on("messageCreate" , message => {
if(message.content.startsWith("خط")) {
if(message.content.startsWith("خطط")) return false;
message.channel.send(`${lineLink}`)
        message.delete(); 
}
});

////////////////

client.on("messageCreate" , message => {
  if(message.channel.id == `1121188119283245067`) {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "طلب")) return false;
  setTimeout(()=> {
    message.delete()
  },3000)
  }
});

    client.on("messageCreate" , message => {
      if(message.content.startsWith(prefix + "طلب")) {
        if(message.channel.id == `1121188119283245067`) {
        let args = message.content.split(" ").slice(1).join(" ")
        if(!args) {
          message.reply(`**طريقة الطلب \`:\` ${prefix}طلب + طلبك**`).then(m => {
            setTimeout(() => {
              m.delete()
              message.delete()
            },3000)
          })
        }
        if(args) {
        let row = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
          .setLabel("منتجات 🎮")
          .setCustomId("mon")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("تصاميم 🎨")
          .setCustomId("des")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("برمجيات 💻")
          .setCustomId("dev")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("الغاء ❌")
          .setCustomId("can")
          .setStyle("DANGER"), )
        let embed = new Discord.MessageEmbed()
        .setTitle("**__إختر المكان الصحيح لطلبك :__                                                                  **")
        .setDescription(`**منتجات : 🎮                                                                                        
- مثل : نيترو , حسابات , الخ ..
تصاميم : 🎨
- مثل صورة , بنر , الخ ..
برمجيات : 💻
- مثل : بوت , كود , الخ ..
إلغاء الطلب : ❌
- لإلغاء طلبك، عدم إرساله للبائعين .**`)
        .setColor(`${colorE}`)
db.set(`talab_${message.member.id}` , args)        
          message.channel.send({content:`${message.member}` , embeds:[embed] , components:[row]})
        message.delete() 
        }
        }
      }
    })
    
    client.on("interactionCreate" , interaction => {
      if(interaction.isButton()) {
        if(interaction.customId == "mon") {
          let talab = db.get(`talab_${interaction.member.id}`)
          let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
            if(!number || number === null) number = 1;
db.add(`OrderMsg_${interaction.guild.id}`,1)
          const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Delete")
            .setCustomId("del")
            .setStyle("DANGER") )
          let mon = new Discord.MessageEmbed()
          .setTitle("> **الطلب الجديد :                                                                  **")
          .setAuthor({name : `${interaction.member.user.username}` , iconURL : interaction.member.displayAvatarURL()})
          .setDescription(`**${talab}**`)
          .setColor(`${colorE}`)
          .setThumbnail(interaction.guild.iconURL())
          .setTimestamp()
          .setFooter({text : `${interaction.guild.name}` , iconURL : interaction.guild.iconURL()})
          interaction.guild.channels.cache.get("1121188125885071521").send({content: `<@&1121188022227058778>\n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`, embeds:[mon] , components:[row]})
    interaction.guild.channels.cache.get("1314381932464836619").send({content: `${lineLink}`})
          interaction.reply("> **تم إرسال طلبك إلى البائعين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
            interaction.message.delete()
  .then((reply) => {
    setTimeout(() => {
      interaction.deleteReply().catch(err=>{}) }, 5000); })
        db.delete(`talab_${interaction.member.id}`)
        }
        if(interaction.customId == "des") {
                    let talab = db.get(`talab_${interaction.member.id}`)

let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
            if(!number || number === null) number = 1;
db.add(`OrderMsg_${interaction.guild.id}`,1)
            const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Delete")
            .setCustomId("del")
            .setStyle("DANGER") )
          let mon = new Discord.MessageEmbed()
          .setTitle("> **الطلب الجديد :                                                                  **")
          .setAuthor({name : `${interaction.member.user.username}` , iconURL : interaction.member.displayAvatarURL()})
          .setDescription(`**${talab}**`)
          .setColor(`${colorE}`)
          .setThumbnail(interaction.guild.iconURL())
          .setTimestamp()
          .setFooter({text : `${interaction.guild.name}` , iconURL : interaction.guild.iconURL()})
          interaction.guild.channels.cache.get("1121188127613128724").send({content: `<@&1121188024387121192>\n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`, embeds:[mon] , components:[row]})
          interaction.guild.channels.cache.get("1314381988886610002").send({content: `${lineLink}`})
          interaction.reply("> **تم إرسال طلبك إلى المصممين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
            interaction.message.delete()
    .then((reply) => {
    setTimeout(() => {
      interaction.deleteReply().catch(console.error); }, 5000); }) 
    db.delete(`talab_${interaction.member.id}`)
        }
        if(interaction.customId == "dev") {
                    let talab = db.get(`talab_${interaction.member.id}`)

let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
            if(!number || number === null) number = 1;
db.add(`OrderMsg_${interaction.guild.id}`,1)
            const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Delete")
            .setCustomId("del")
            .setStyle("DANGER") )
          let mon = new Discord.MessageEmbed()
          .setTitle("> **الطلب الجديد :                                                                  **")
          .setAuthor({name : `${interaction.member.user.username}` , iconURL : interaction.member.displayAvatarURL()})
          .setDescription(`**${talab}**`)
          .setColor(`${colorE}`)
          .setThumbnail(interaction.guild.iconURL())
          .setTimestamp()
          .setFooter({text : `${interaction.guild.name}` , iconURL : interaction.guild.iconURL()})
          interaction.guild.channels.cache.get("1121188124068954182").send({content: `<@&1121188023191732296>\n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`, embeds:[mon] , components:[row]})
          interaction.guild.channels.cache.get("1314382172014120991").send({content: `${lineLink}`})
          interaction.reply("> **تم إرسال طلبك إلى المبرمجين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
            interaction.message.delete()
    .then((reply) => {
    setTimeout(() => {
      interaction.deleteReply().catch(console.error); }, 5000); })
          db.delete(`talab_${interaction.member.id}`) }
        if(interaction.customId == "can") {
          interaction.reply("> **تم إلغاء طلبك بنجاح .**")
          interaction.message.delete()
    .then((reply) => {
    setTimeout(() => {
      interaction.deleteReply().catch(console.error); }, 5000); }) }
        if(interaction.customId == "del") {
          if(interaction.member.roles.cache.some(r=>r.id == 1313669456790290483)) {
            interaction.message.delete()
    interaction.reply({ content: `**${emj.True} لقد تم حذف الطلب بنجاح .**`, ephemeral: true })
          }
        }
      }
    });

///////////
client.on("messageCreate" , message => {
      if(message.content.startsWith(prefix + "رتب") || message.content.startsWith(prefix + "معلومات")) {
let embed1 = new MessageEmbed() 
  .setTitle(`**${emj.Right} sinaq \`S\` Information・المعلومات**`)
        .setDescription(`**إختر من الأزرار التالية ما يناسبك.**`)
        .setColor(`${colorE}`)
.setImage(`https://i8.ae/lAYNF`)
        let row1 = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
          .setLabel("رتب")
          .setCustomId("roles")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("إعلانات")
          .setCustomId("ads")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("معلومات")
          .setCustomId("info")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("منشورات مميزة")
          .setCustomId("manshorat")
          .setStyle("SECONDARY"),
          new Discord.MessageButton()
          .setLabel("رومات خاصة")
          .setCustomId("rooms")
          .setStyle("SECONDARY"), )
        message.channel.send({ embeds: [embed1], components:[row1] }) 
      }
});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "roles") {
  const message = await interaction.channel.messages.fetch(interaction.message.id); 
  let embed2 = new MessageEmbed() 
        .setDescription(`**${emj.Right} sinaq \`S\` Roles・معلومات الرتب

> ${emj.Right} Role: <@&1313873931748511785>
> ${emj.Right} Price: 150k
> ${emj.Dot} النشر بجميع الرومات
> ${emj.Dot} نشر الصور بجميع الرومات
> ${emj.Dot} إمكانية المنشن بجميع الرومات
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313873057244381224>
> ${emj.Right} Price: 100k
> ${emj.Dot} النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
> ${emj.Dot} نشر الصور بجميع الرومات
> ${emj.Dot} إمكانية المنشن بجميع الرومات
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313873735144706161>
> ${emj.Right} Price: 70k
> ${emj.Dot} النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
> ${emj.Dot} نشر الصور برومات [ حسابات - ديسكورد ] فقط
> ${emj.Dot} إمكانية المنشن بجميع الرومات
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313873729872199700>
> ${emj.Right} Price: 60k
> ${emj.Dot} النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
> ${emj.Dot} عدم نشر الصور
> ${emj.Dot} إمكانية المنشن بجميع الرومات
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313873725770432524>
> ${emj.Right} Price: 45k
> ${emj.Dot} النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
> ${emj.Dot} عدم نشر الصور
> ${emj.Dot} عدم المنشن
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313874400529088532>
> ${emj.Right} Price: 35k
> ${emj.Dot} النشر بروم تصاميم فقط
> ${emj.Dot} إمكانية نشر الصور
> ${emj.Dot} إمكانية المنشن
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Role: <@&1313874407172866138>
> ${emj.Right} Price: 35k
> ${emj.Dot} النشر بروم برمجيات فقط
> ${emj.Dot} إمكانية نشر الصور
> ${emj.Dot} إمكانية المنشن`)
    
        .setColor(`${colorE}`)
  message.edit({ embeds: [embed2], components: [] })
  
  setTimeout(() => {
  interaction.channel.send(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`); }, 500); 
}
});

//
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "ads") {
const message = await interaction.channel.messages.fetch(interaction.message.id); 
  let embed3 = new MessageEmbed() 
.setDescription(`**${emj.Right} sinaq \`S\` Ads・معلومات الاعلانات

> ${emj.Right} Mention Here・منشن هير
> ${emj.Dot} 200k Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Mention Everyone・منشن للكل
> ${emj.Dot} 500k Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Online Broadcast・برودكاست للاونلاين ( يرسل لين يتبند )
> ${emj.Dot} 1M Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Giveaway・في هدايا الاعلانات
> ${emj.Dot} 1M Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Giveaway・روم خاص لسيرفرك
> ${emj.Dot} 1.2M Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Private Giveaway・روم خاص لسيرفرك بـ الاسم الي تختاره و جيف اوي
> ${emj.Dot} 2M Credit 
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} First Room・جيف اوي اول روم في السيرفر
> ${emj.Dot} 5M Credit **`)
.setColor(`${colorE}`)
message.edit({ embeds: [embed3], components: [] })
  setTimeout(() => {
  interaction.channel.send(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`); }, 500); 
}
});

//
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "info") {
const message = await interaction.channel.messages.fetch(interaction.message.id); 
  let embed3 = new MessageEmbed() 
.setDescription(`**${emj.Right} sinaq \`S\` General Information・معلومات عامة

> ${emj.Right} Warn | التحذيرات
> ${emj.Dot} لإزالة التحذير الواحد يجب دفع غرامة 20k
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} 
> ${emj.Right} @❆ || Trust S | الموثوقين
> ${emj.Dot} لأخذ رتبة موثوق يجب عليك توفير 30 عملية بيع هنا #❖・تمت・العملية و يكون مبلغ كل عملية لا يقل عن 50k
> ${emj.Dot} يجب عند نشر عملية أن توثق دليل تسليم السلعة و دليل ال التحويل للمبلغ**`)
.setColor(`${colorE}`)
message.edit({ embeds: [embed3], components: [] })
  setTimeout(() => {
  interaction.channel.send(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`); }, 500); 
}
});

//
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "manshorat") {
const message = await interaction.channel.messages.fetch(interaction.message.id); 
  let embed3 = new MessageEmbed() 
.setDescription(`**${emj.Right} sinaq \`S\` Manshorat・المنشورات المميزة

> ${emj.Right} Manshor Mention Here・منشور منشن هير
> ${emj.Dot} Price: 50k Credit
${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
> ${emj.Right} Manshor Mention Everyone・منشور منشن للكل
> ${emj.Dot} Price: 100k Credit**`)
.setColor(`${colorE}`)
message.edit({ embeds: [embed3], components: []})
  setTimeout(() => {
  interaction.channel.send(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`); }, 500);
}
});

//
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "rooms") {
  const message = await interaction.channel.messages.fetch(interaction.message.id); 
  let fi = interaction.guild.channels.cache.filter(ch => ch.name.startsWith("〢↯・"))
  var f;
  if(fi.size < 10) {
    f = "مفتوح" }
  if(fi.size >= 10) {
    f = "مغلق" }
  let embed3 = new MessageEmbed() 
.setDescription(`**${emj.Right} Arab \`S\` Private Rooms・الرومات الخاصة

> ${emj.Right} Role: <@&1313873490138365962>
> ${emj.Right} Price: 300k Credit Weekly
> ${emj.Dot} روم خاص بـ اسمك
> ${emj.Dot} تقدر تطلب و تبيع
> ${emj.Dot} تقدر تمنشن هير كل ساعتين
> ${emj.Dot} النشر في الروم بمفردك

> ${emj.Dot} الرومات المتوفرة : ${fi.size} 
> ${emj.Dot} \`${f}\` **`)
.setColor(`${colorE}`)
message.edit({ embeds: [embed3], components: []})
  setTimeout(() => {
  interaction.channel.send(`**${emj.Dot} التحويل فقط لـ <@${bankid}> .**`); }, 500); 
}
});

//////////////
client.on('messageCreate', (message) => {
  if (message.content === '$spin') {
    if ( message.member.roles.cache.some(
        (role) => role.name === 'Spin') || message.member.roles.cache.some(r=>r.id == perms)) {
      const button = new MessageButton()
        .setStyle('SECONDARY')
        .setLabel('Spin')
        .setCustomId('spin_button');
      const row = new MessageActionRow().addComponents(button);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle(`** ${emj.Right}sinaq \`S\` Wheel Of Luck・عجلة الحظ**`)
        .setDescription('> **${emj.Dot} إضغط على الزر Spin لتدوير العجلة .**');
      message.channel.send({ embeds: [embed], components: [row] }); } else {
      message.author.send({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true }); 
    }
  }
});

client.on('interactionCreate', (interaction) => {
  if(interaction.customId == "spin_button") {
    if ( interaction.member.roles.cache.some(
        (role) => role.name === 'Spin') || interaction.member.roles.cache.some(r=>r.id == perms)) {
      const prizes = [
        { name: 'تست', chance: 0.0 },
  { name: '<@&1313874400529088532>', chance: 0.8 },
  { name: '<@&1313874407172866138>', chance: 0.8 },
  { name: '<@&1313873725770432524>', chance: 0.8 },
  { name: '40k', chance: 0.2 },
  { name: '50k', chance: 0.2 },
  { name: '70k', chance: 0.2 }, ];
const totalChance = prizes.reduce((acc, prize) => acc + prize.chance, 0);
const random = Math.random() * totalChance;
let selectedPrize = null;
let cumulativeChance = 0;
for (const prize of prizes) {
  cumulativeChance += prize.chance;
  if (random < cumulativeChance) {
    selectedPrize = prize;
    break; }}
      if (selectedPrize) {
        interaction.reply(`**${emj.Give} مبروك ! لقد ربحت : ${selectedPrize.name}**`); } else {
        interaction.reply('**😔 حظ أوفر المرة القادمة ..**'); }} else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true }) 
    }
  }
});

/////
client.on('messageCreate', (message) => {
  if (message.content === '$vipspin') {
    if ( message.member.roles.cache.some(
        (role) => role.name === 'Spin') || message.member.roles.cache.some(r=>r.id == perms)) {
      const button = new MessageButton()
        .setStyle('SECONDARY')
        .setLabel('VIP Spin')
    .setCustomId('spin_button1');
      const row = new MessageActionRow().addComponents(button);
      const embed = new MessageEmbed()
        .setColor('EA3648')
        .setTitle(`** ${emj.Right}sinaq \`S\` VIP Wheel Of Luck・عجلة الحظ**`)
        .setDescription('> **${emj.Dot} إضغط على الزر VIP Spin لتدوير العجلة .**');
      message.channel.send({ embeds: [embed], components: [row] }); 
    } else {
      message.author.send({ content: `**${emj.False}
 لا يمكنك إستخدام هذا الزر .**`, ephemeral: true }); 
    }
  }
});

client.on('interactionCreate', (interaction) => {
  if(interaction.customId == "spin_button1") {
    if ( interaction.member.roles.cache.some(
        (role) => role.name === 'Spin') || interaction.member.roles.cache.some(r=>r.id == perms)) {
      const prizes = [
        { name: 'تست', chance: 0.0 },
  { name: '<@&1313873931748511785>', chance: 0.4 },
  { name: '<@&1313873735144706161>', chance: 0.8 },
  { name: '<@&1313873735144706161>', chance: 0.8 },
  { name: '80k', chance: 0.2 },
  { name: '60k', chance: 0.2 },
  { name: '100k', chance: 0.2 }, ];
const totalChance = prizes.reduce((acc, prize) => acc + prize.chance, 0);
const random = Math.random() * totalChance;
let selectedPrize = null;
let cumulativeChance = 0;
for (const prize of prizes) {
  cumulativeChance += prize.chance;
  if (random < cumulativeChance) {
    selectedPrize = prize;
    break;
  }
}
      if (selectedPrize) {
        interaction.reply(`**<:Vip:1314386171354152960> مبروك ! لقد ربحت : ${selectedPrize.name}**`); 
      } else {
        interaction.reply('**😔 حظ أوفر المرة القادمة ..**'); 
      }
    } else {
      interaction.reply({ content: `**${emj.False} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true }); 
    }
  }
});

client.on("messageCreate" , message => {
  if(message.content == prefix + "rooms") {
      if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
    let embed = new Discord.MessageEmbed()
    .setAuthor({name:`${message.member.user.username}` , iconURL:`${message.member.user.displayAvatarURL()}`})
    .setDescription(`> **${emj.True} = ارجاع الرومات**\n\n> **${emj.False} = حذف الرومات**`)
    .setTimestamp()
    .setColor(`${colorE}`)
    .setFooter({text:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setEmoji(`${emj.True}`)
      .setStyle("SECONDARY")
      .setCustomId("create"),
      new Discord.MessageButton()
      .setEmoji(`${emj.False}`)
      .setStyle("SECONDARY")
      .setCustomId("delete") )
    message.reply({embeds:[embed] , components:[row]}).then(m=> {
      db.set(`m_${message.guild.id}` , m.id) 
    }
                                                           )}
});

client.on("interactionCreate" , async interaction => {
  if(interaction.isButton()) {
    if(interaction.customId == "make") {
      let guild = interaction.guild
      let channel1 = guild.channels.cache.find(r=>r.id == 1313669515615146014)
      let channel2 = guild.channels.cache.find(r=>r.id == 1313669515615146014)
      let message = db.get(`m_${interaction.guild.id}`)
      let m = interaction.channel.messages.cache.find(r=>r.id == message)
      m.edit({content:`**${emj.True} تم ارجاع الرومات**` , components:[] , embeds:[]})
      db.delete(`m_${interaction.guild.id}`)
const currentDate2 = moment().format('DD-MM-YYYY HH:mm:ss'); 
            channel1.send(`**${emj.Dot} تم إرجاع الرومات .\n${emj.Dot} المشرف المسؤول : ${interaction.member} .
${emj.Dot} بتاريخ : ${currentDate2} .\n <@&1145893854701158460>**`)
await channel1.send(`${lineLink}`)
      let angel = guild.roles.cache.find(r=>r.name == "❆ || Perfect S")
      let perfect = guild.roles.cache.find(r=>r.name == "❆ || Gold S")
      let great = guild.roles.cache.find(r=>r.name == "❆ || Great S")
      let special = guild.roles.cache.find(r=>r.name == "❆ || Epic S")
      let normal = guild.roles.cache.find(r=>r.name == "❆ || Normal S")
      let designer = guild.roles.cache.find(r=>r.name == "❆ || Designer S")
      let developer = guild.roles.cache.find(r=>r.name == "❆ || Developer S")
      let staffs = guild.roles.cache.find(r=>r.name == "♛ || Staff S.")
      let discordstaff = guild.roles.cache.find(r=>r.name == "♛ || Discord Staff")
      let arab = guild.roles.cache.find(r=>r.name == "- sq$")
      let specialrole = guild.roles.cache.find(r=>r.name == "❆ || SpecialPost")
      guild.channels.create("❖・تصاميم")
      guild.channels.create("❖・برمجيات")
      guild.channels.create("❖・ديسكورد")
      guild.channels.create("❖・حسابات")
      guild.channels.create("❖・عملات")
      guild.channels.create("❖・العاب")
      guild.channels.create("❖・طرق")
      guild.channels.create("❖・أخرى")
      .then(m=> {
guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").setParent(guild.channels.cache.find(r=>r.id == 1313669585119219784))
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })

        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })
        guild.channels.cache.find(r=>r.name == "❖・تصاميم").permissionOverwrites.edit(designer , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        
////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").setParent(guild.channels.cache.find(r=>r.id == 1313805895901384744))
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })

guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })
        guild.channels.cache.find(r=>r.name == "❖・برمجيات").permissionOverwrites.edit(developer , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        //////////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").setParent(guild.channels.cache.find(r=>r.id == 1313669586238967858))
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・ديسكورد").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false })
        /////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").setParent(guild.channels.cache.find(r=>r.id == 1313669593247780934))
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
                                  guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・حسابات").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false })
      ///////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・عملات").setParent(guild.channels.cache.find(r=>r.id == 1314393430989869056))
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true  })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true  })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true  })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・عملات").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false  })
        ////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false })
        guild.channels.cache.find(r=>r.name == "❖・العاب").setParent(guild.channels.cache.find(r=>r.id == 1313669592203399168))
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true  })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・العاب").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false  })
        /////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false  })
        guild.channels.cache.find(r=>r.name == "❖・طرق").setParent(guild.channels.cache.find(r=>r.id == 1313909599845351515))
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true  })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true })

        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true  })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true  })  
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true })
        guild.channels.cache.find(r=>r.name == "❖・طرق").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false        })
        ///////////////////////////////////////////
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false        })
       guild.channels.cache.find(r=>r.name == "❖・أخرى").setParent(guild.channels.cache.find(r=>r.id == 1313669599300030474))
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(angel , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true        })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(specialrole , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true        })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true       })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(staffs , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true       })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true        })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(perfect , {
          SEND_MESSAGES:true,
          ATTACH_FILES:true,
          MENTION_EVERYONE:true        })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(great , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true        })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(special , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:true       })
        guild.channels.cache.find(r=>r.name == "❖・أخرى").permissionOverwrites.edit(normal , {
          SEND_MESSAGES:true,
          ATTACH_FILES:false,
          MENTION_EVERYONE:false        })
        guild.channels.cache.find(r=>r.name == "꒧・الطلبات").permissionOverwrites.edit(arab , {
          VIEW_CHANNEL:true        })
      }); 
    }
    if(interaction.customId == "delete") {
      let guild = interaction.guild
      let channel2 = guild.channels.cache.find(r=>r.id == 1121188093232418856)
      let arab = guild.roles.cache.find(r=>r.name == "- ArS")
      const currentDate3 = moment().format('DD-MM-YYYY HH:mm:ss'); 
            channel2.send(`**${emj.Dot} تم حذف الرومات .\n${emj.Dot} المشرف المسؤول : ${interaction.member} .**
${emj.Dot} بتاريخ : ${currentDate3} .**`)
await channel2.send(`${lineLink}`)
     interaction.guild.channels.cache.find(r=>r.name == "❖・برمجيات").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・ديسكورد").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・حسابات").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・تصاميم").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・عملات").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・العاب").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・طرق").delete()
      interaction.guild.channels.cache.find(r=>r.name == "❖・أخرى").delete()
      let message = db.get(`m_${interaction.guild.id}`)
      let m = interaction.channel.messages.cache.find(r=>r.id == message)
      m.edit({content:`**${emj.False} تم حذف الرومات**` , components:[] , embeds:[]})
      guild.channels.cache.find(r=>r.name == "꒧・الطلبات").permissionOverwrites.edit(arab , {
          VIEW_CHANNEL:false })
      guild.channels.cache.forEach(channel => {
          if(channel.name.startsWith("〢↯・")) {
            channel.permissionOverwrites.edit(guild.roles.cache.find(r=>r.name == "❆ || Private S") , {
              SEND_MESSAGES:false          
            })          
          }        
      })
      db.delete(`m_${interaction.guild.id}`) 
    }
  }
});

          ///////////
const warnWork = `1122404955727343677`
const cooldown1 = 10000;

const cooldown2 = new Map();

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تحذير")) {
if (cooldown2.has(message.content)) {
      const timeLeft = cooldown1 - (Date.now() - cooldown2.get(message.content));
      if (timeLeft > 0) {
        return message.reply(`**<${emj.Lift}1137299345692168224> يجب عليك إنتظار ${Math.ceil(timeLeft / 1000)} ثانية لإستخدام هذا الأمر ..
<${emj.Dot}1137301062366285925> يجب التأكد من عدم تكرارك مخالفة شخص تمت مخالفته من قبل زميلك**`);
      }
    }
cooldown2.set(message.content, Date.now());
    if(message.content.startsWith(prefix + "تحذيرات")) return false;
    const wait = require('node:timers/promises').setTimeout;
    if (warnWork.includes(message.channel.id)) {
      const now = new Date()
    let madri = `(=)`
    let channel = message.guild.channels.cache.find(r => r.id == 1313669578899066940);
    let s1 = message.guild.roles.cache.find(r => r.name == "Warn 50%");
    let s2 = message.guild.roles.cache.find(r => r.name == "Warn 100%");
      
    let perfect = message.guild.roles.cache.find(r=>r.name == "❆ || Perfect S")
    let gold = message.guild.roles.cache.find(r=>r.name == "❆ || Gold S")
    let great = message.guild.roles.cache.find(r=>r.name == "❆ || Great S")
    let epic = message.guild.roles.cache.find(r=>r.name == "❆ || Epic S")
    let normal = message.guild.roles.cache.find(r=>r.name == "❆ || Normal S")
    let designer = message.guild.roles.cache.find(r=>r.name == "❆ || Designer S")
    let developer = message.guild.roles.cache.find(r=>r.name == "❆ || Developer S")
    let prv = message.guild.roles.cache.find(r=>r.name == "❆ || Private S")
    let special = message.guild.roles.cache.find(r=>r.name == "❆ || SpecialPost")
    let rolesToCheck = ["❆ || Perfect S" , "❆ || Gold S" , "❆ || Great S" , "❆ || Epic S" , "❆ || Normal S" , "❆ || Designer S" , "❆ || Developer S" , "❆ || Private S" , "❆ || SpecialPost"]
    let args = message.content.split(" ")
    let user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id ==      args[1])
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!user) return message.reply(`**${emj.False} يرجى وضع منشن الشخص أولاً !**`)
    const roles = user.roles.cache;
    const roleNames = Array.from(roles.values()).map(role => role.name);
    const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
    if(rolesUserHas.length === 0) return message.reply(`**${emj.False} هذا الشخص لا يمتلك رتب بيع**`)
    if(!reason) return message.reply(`** ${emj.False} يرجى وضع السبب أولاً !**`)
    if(!message.attachments.size) return message.reply(`**${emj.False} يرجى وضع الدليل أولاً !**`)
    
    if(!user.roles.cache.some(r=>r.name == "Warn 50%") && !reason.includes(`(=)`)) {
    message.reply(`**${emj.True} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`**${emj.Dot} الشخص : ${user}\n\n${emj.Dot} الإداري : ${message.member}\n\n${emj.Dot} نوع التحذير : Warn 50%\n\n${emj.Dot} السبب : ${reason}\n\n${emj.Dot} الدليل :**` , files:attachmentFiles})
      const a = attachmentFiles.join(`\n`)
      channel.send(`${lineLink}`);
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
      
      user.roles.add([s1])
      
    }
    if(user.roles.cache.some(r=>r.name == "Warn 50%") && !reason.includes(`(=)`)) {
      if(!user.roles.cache.some(r=>r.name == "Warn 100%") && !reason.includes(`(=)`)) {
      message.reply(`**${emj.True} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`**${emj.Dot} الشخص : ${user}\n\n${emj.Dot} الإداري : ${message.member}\n\n${emj.Dot} نوع التحذير : Warn 100%\n\n${emj.Dot} السبب : ${reason}\n\n${emj.Dot} الدليل :**` , files:attachmentFiles})
       channel.send(`${lineLink}`);
        const a = attachmentFiles.join(`\n`)
        const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
      
      user.roles.add([s2])
         
    }
    }
    if(user.roles.cache.some(r=>r.name == "Warn 100%") && !reason.includes(`(=)`)) {
            user.roles.remove([s1,s2,perfect,gold,great,epic,normal,designer,developer,prv])
                message.reply(`**${emj.True} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`**${emj.Dot} الشخص : ${user}\n\n${emj.Dot} الإداري : ${message.member}\n\n${emj.Dot} نوع التحذير : سحب رتبة\n\n${emj.Dot} السبب : ${reason}\n\n${emj.Dot} الدليل :**` , files:attachmentFiles})
      const a = attachmentFiles.join(`\n`)
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
      
      channel.send(`${lineLink}`);
    }
    if(reason.includes(`(=)`)) {
                message.reply(`**${emj.True} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`**${emj.Dot} الشخص : ${user}\n\n${emj.Dot} الإداري : ${message.member}\n\n${emj.Dot} نوع التحذير : سحب رتبة\n\n${emj.Dot} السبب : ${reason}\n\n${emj.Dot} الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
      const a = attachmentFiles.join(`\n`)
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
      
              user.roles.remove([s1,s2,perfect,gold,great,epic,normal,designer,developer,prv,special])

    }
      }
  }
});



client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warns") || message.content.startsWith(prefix + "تحذيرات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var warns = db.get(`weekwarns_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      if(!warns) {
        warns = 0 }
      if(!allwarns) {
        allwarns = 0 }
      let embed2 = new Discord.MessageEmbed()
       .setTitle(`${member.user.tag}, Warns :`)
        .setDescription(`> **All Warns : \`${allwarns}\`**\n> **Week Warns : \`${warns}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] }) }
    if (!user) {
      var warns = db.get(`weekwarns_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      if(!warns) {
        warns = 0 }
      if(!allwarns) {
        allwarns = 0 }
      let embed4 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, Warns :`)
        .setDescription(`> **Week Warns : \`${warns}\`**\n> **All Warns : \`${allwarns}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] }) 
    }
  }
});

////////
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$repoints')) {
  if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
            try {
                const memberList = await message.guild.members.fetch();
                let usersData = [];
                memberList.forEach((member) => {
                    if (member.roles.cache.has('1121187991763812435')) {
                        var points = db.get(`weekuser_${member.id}`);
                        var weekwarns = db.get(`weekwarns_${member.id}`);
                        var weekmute = db.get(`muteweek_${member.id}`);
                        points = parseInt(points) || 0;
                        weekwarns = parseInt(weekwarns) || 0;
                        weekmute = parseInt(weekmute) || 0;
                        if (points > 0 || weekwarns > 0 || weekmute > 0) {
                            usersData.push({ user: member.user, points, weekwarns, weekmute , total : points + weekwarns + weekmute}); }}});
                usersData.sort((a, b) => b.total - a.total);
                const embed = new MessageEmbed()
                    .setColor(`${colorE}`)
                  .setImage(`https://i8.ae/IiShB`)
                    .setTitle('**Top 10 Week :**');
                const topUsers = usersData.slice(0, 10);
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`); });
                const channel = message.guild.channels.cache.get('1122740544435654726');
                if (channel && channel.isText()) {
                    await channel.send({ embeds: [embed] });
                    await message.reply('**تم إعادة تعيين نقاط الأسبوع بنجاح.**'); }
                usersData.forEach((user) => {
                    if (user.user.id !== client.user.id) {
if(db.has(`feedback_${user.user.id}`)) {
db.delete(`feedback_${user.user.id}`)
}
                        if (user.points === 0 && user.weekwarns === 0 && user.weekmute === 0) {
                            db.delete(`weekuser_${user.user.id}`);
                            db.delete(`weekwarns_${user.user.id}`);
                            db.delete(`muteweek_${user.user.id}`); } else {
                            db.set(`muteweek_${user.user.id}`, 0);
                          db.set(`weekwarns_${user.user.id}`, 0);
                          db.set(`weekuser_${user.user.id}`, 0); } } }); } catch (error) {
                console.error('حدث خطأ :', error); 
            }
        }
});
                        
//////////////
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$top') || message.content.startsWith('$توب')) {
        try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];
            memberList.forEach((member) => {
                if (member.roles.cache.has('1313669452188876831')) {
                    var points = db.get(`alluser_${member.id}`);
                    var weekwarns = db.get(`allwarns_${member.id}`);
                    var weekmute = db.get(`muteall_${member.id}`);
                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });}}});
            usersData.sort((a, b) => b.totalPoints - a.totalPoints);
            const embed = new MessageEmbed()
                .setColor(`${colorE}`)
                .setTitle('**Top 10 Points :**');
            const topUsers = usersData.slice(0, 10);
            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**'); } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Top : ${user.points + user.weekwarns + user.weekmute} **`); }); }
let rowtp = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(true) )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(false) )
            await message.channel.send({ embeds: [embed], components: [rowtp] })
        } catch (error) {
            console.error('حدث خطأ :', error); 
        }
    }
});
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "wetop") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];
            memberList.forEach((member) => {
                if (member.roles.cache.has('1313669452188876831')) {
                    var points = db.get(`weekuser_${member.id}`);
                    var weekwarns = db.get(`weekwarns_${member.id}`);
                    var weekmute = db.get(`muteweek_${member.id}`);

                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });                   }                }});
            usersData.sort((a, b) => b.totalPoints - a.totalPoints);
            const embed = new MessageEmbed()
                .setColor(`${colorE}`)
                .setTitle('**Top 10 Week :**');
            const topUsers = usersData.slice(0, 10);
            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط في هذا الإسبوع .**'); } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`); }); }
let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(false) )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(true) )
  await message.edit({ embeds: [embed], components: [rowtpreply] }); } catch (error) {
                console.error('حدث خطأ :', error); }       }    
})
client.on("interactionCreate" , async interaction => {
if(interaction.customId == "altop") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];
            memberList.forEach((member) => {
                if (member.roles.cache.has('1313669452188876831')) {
                    var points = db.get(`alluser_${member.id}`);
                    var weekwarns = db.get(`allwarns_${member.id}`);
                    var weekmute = db.get(`muteall_${member.id}`);
                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points });                    }                }            });
            usersData.sort((a, b) => b.totalPoints - a.totalPoints);
            const embed = new MessageEmbed()
                .setColor(`${colorE}`)
                .setTitle('**Top 10 Points :**');
            const topUsers = usersData.slice(0, 10);
            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
            } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Points : ${user.points + user.weekwarns + user.weekmute} **`);                });            }
let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(true)    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(false)    )              
  await message.edit({ embeds: [embed], components: [rowtpreply] });           
} catch (error) {
                console.error('حدث خطأ :', error);        
}      
}  

})

///////////
let messageCount = 0;
client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$start')) {
      if (!message.member.roles.cache.some(r=>r.id == perms)) {
  return message.reply("**للأسف لا تمتلك صلاحية**"); 
}
        try {
            const memberList = await message.guild.members.fetch();
            memberList.forEach(async (member) => {
                if (member.roles.cache.has('1121187991763812435')) { 
                    var points = db.get(`weekuser_${member.id}`)
                    var weekwarns = db.get(`weekwarns_${member.id}`)
                    var weekmute = db.get(`muteweek_${member.id}`) 
                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    messageCount++;
                    var roleToAssign = "1121187991763812435";
                    var roleToAssignHighStaff = "1121187979852009533";
                    if (!member.roles.cache.some(r => r.id == 1121187979852009533)) {
                        if (points + weekwarns + weekmute >= 100) {
                            roleToAssign = "دبل ترقية";
                        } else if (points + weekwarns + weekmute >= 50 && points + weekwarns + weekmute <= 99) {
                            roleToAssign = "ترقية";
                        } else if (points + weekwarns + weekmute >= 15 && points + weekwarns + weekmute <= 49) {
                            roleToAssign = "سكب";
                        } else if (points + weekwarns + weekmute < 15) {
                            roleToAssign = "تخفيض";                        }                    }
                    if (member.roles.cache.some(r => r.id == 1121187979852009533)) {
                        if (points + weekwarns + weekmute >= 130) {
                            roleToAssignHighStaff = "دبل ترقية";                        } else if (points + weekwarns + weekmute >= 90 && points + weekwarns + weekmute <= 129) {
                            roleToAssignHighStaff = "ترقية";
                        } else if (points + weekwarns + weekmute >= 20 && points + weekwarns + weekmute < 90) {
                            roleToAssignHighStaff = "سكب";                        }
                      else if (points + weekwarns + weekmute < 20) {
                            roleToAssignHighStaff = "تخفيض";                        }                   }
                    let replyMessage = `> **${emj.Lift} الإداري : <@${member.user.id}>**\n> **${emj.Lift} الإداري رقم : ${messageCount}**\n**${emj.Dot} عدد التكتات : ${points}\n${emj.Dot} عدد التحذيرات : ${weekwarns}\n${emj.Dot} عدد الميوتات : ${weekmute}\n${emj.Dot} مجموع النقاط الكلي : ${points + weekwarns + weekmute}**`;
                    if (!member.roles.cache.some(r => r.id == 1121187979852009533)) {
                        if (roleToAssign !== "") {
                            replyMessage += `\n**<:plus:1137302192185950248> النتيجة : ${roleToAssign}**`;                       } }
                    if (member.roles.cache.some(r => r.id == 1121187979852009533)) {
                        if (roleToAssignHighStaff !== "") {
                            replyMessage += `\n**<:plus:1137302192185950248> النتيجة : ${roleToAssignHighStaff}**`;                   
                        }             
                    }

                    await message.channel.send(replyMessage);           
                }            
            });       
        } catch (error) {
            console.error('خطأ :', error);      
        }  
    }
});

////////////
client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  const now = new Date()
  if(message.content.startsWith(prefix + 'sub')) {
    if (message.member.roles.cache.some(r=> r.id == 508064413136453633)) {
    let prv = message.guild.roles.cache.find(r=>r.id == 1121188010042601475)
    let arab = message.guild.roles.cache.find(r=>r.name == "- sq$")
    let discordstaff = message.guild.roles.cache.find(r=>r.name == "♛ || Discord Staff")
    let args = message.content.split(" ")
    let member = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id == args[1])
   if(!args[1]) return message.reply(`${emj.False} | **منشن شخص !**`)
   if(!member) return message.reply(`${emj.False} | **منشن شخص !**`)
       if(db.has(`prvuser_${member.id}`)) return message.reply(`${emj.False} | **هذا الشخص يمتلك بالفعل روم خاص**`)
    if(!args[2]) return message.reply(`${emj.False} | **حدد مدة الروم !**`)
    if(!args[2].endsWith("d")) {
    if(!args[2].endsWith("h")) {
    if(!args[2].endsWith("m")) {
      return message.reply(`${emj.False}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
    }}}
    if(isNaN(args[2][0])) return message.reply(`${emj.False} | **حدد وقت صحيح !**`)
    
  message.reply(`${emj.True} **| تم إنشاء روم خاص لـ ${member} لمدة \`${args[2]}\`**`)
    
  let embed = new Discord.MessageEmbed()
  .setDescription(`**${emj.Right} saniq \`S\` Private Rooms・الرومات الخاصه**\n\n> **${emj.Dot} صاحب الروم : <@${member.id}> **
  
> **${emj.Dot} صنع بواسطة : ${message.member} **
  
> **${emj.Dot} صنع في : <t:${Math.floor(now.getTime() / 1000)}:d> **
  
> **${emj.Dot} ينتهي في : <t:${Math.floor((now.getTime() + ms(args[2])) / 1000)}:R> **

> **${emj.Dot} مدة الروم : ${args[2]} **
`)
  .setColor(`${colorE}`)
  let mm = await message.guild.channels.create(`〢↯・${member.user.username}` , {type:"text"})
  .then(async m => {
  m.setParent(message.guild.channels.cache.find(r=>r.id == 1313669534627926067))
  member.roles.add([prv]).catch(err=>{})
  db.set(`prvuser_${member.id}` , member.id)
  db.set(`prvroom_${m.id}` , member.id)
  m.permissionOverwrites.edit(message.guild.roles.everyone , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:false
        })

    m.permissionOverwrites.edit(arab , {
          SEND_MESSAGES:false,
          VIEW_CHANNEL:true
        })
    m.permissionOverwrites.edit(discordstaff , {
          MANAGE_MESSAGES: true,
        })
  m.permissionOverwrites.edit(member.id,{
    SEND_MESSAGES: true,
    MENTION_EVERYONE: true,
    ATTACH_FILES:true
  })
  
  m.send({content:`<@${member.id}>` , embeds:[embed]})
	db.push(`room` , {
	server:message.guild.id,
	id:member.id,
	endsAt:Date.now() + ms(args[2]),
	channelid:m.id
	})
  });
  }
  }
  });


    client.on("messageCreate" , async message => {
    const args = message.content.split(" ")
    if(message.content.startsWith(prefix + 'close')) {
      let prv = message.guild.roles.cache.find(r=>r.id == 1313873490138365962)
      if (message.member.roles.cache.some(r=> r.id == 1313669377194852383)) {
      let member = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id         == args[1])
      let channel = message.mentions.channels.first() || message.guild.channels.cache.find(r=>r.id == args[2])
      if(!args[1]) return message.reply(`${emj.False} | **منشن شخص !**`)
      if(!member) return message.reply(`${emj.False} | **منشن شخص !**`)
      if(!channel) return message.reply(`${emj.False} | **منشن الروم !**`)
      if(!args[2]) return message.reply(`${emj.False} | **منشن الروم !**`)
      if(!db.has(`prvuser_${member.id}`)) return message.reply(`${emj.False} | **هذا الشخص ليس ليده روم خاص**`)
    await message.reply(`${emj.True} | **تم حذف الروم ${channel.name} للشخص ${member} .**`)
    await channel.delete()
    await member.roles.remove([prv]).catch(err=>{})
    if(db.has(`enduser_${member.id}`)) {
      await db.delete(`enduser_${member.id}`)
    }
    if(db.has(`endroom_${channel.id}`)) {
      await db.delete(`endroom_${channel.id}`)
    }
    if(db.has(`prvuser_${member.id}`)) {
      await db.delete(`prvuser_${member.id}`)
    }
    if(db.has(`prvroom_${channel.id}`)) {
      await db.delete(`prvroom_${channel.id}`)
    }
    if(db.has(`room`)) {
      const data = await db.get(`room`)
    for (const x of data) {
      if(x.id == member.id) {
      if(x.channelid == channel.id) {
    const index = data.indexOf(x);
    if (index !== -1) {
      data.splice(index, 1);
      await db.set('room', data);
    }
    }  
    }
    }
  }
    }
  }
    });

client.on("channelDelete" , async channel => {
  if(db.has(`prvroom_${channel.id}`)) {
    let member = channel.guild.members.cache.find(r=>r.id == db.get(`prvroom_${channel.id}`))
     if(db.has(`enduser_${member.id}`)) {
      await db.delete(`enduser_${member.id}`)
    }
    if(db.has(`endroom_${channel.id}`)) {
      await db.delete(`endroom_${channel.id}`)
    }
    if(db.has(`prvuser_${member.id}`)) {
      await db.delete(`prvuser_${member.id}`)
    }
    if(db.has(`prvroom_${channel.id}`)) {
      await db.delete(`prvroom_${channel.id}`)
    }
    if(db.has(`room`)) {
      const data = await db.get(`room`)
    for (const x of data) {
      if(x.id == member.id) {
      if(x.channelid == channel.id) {
    const index = data.indexOf(x);
    if (index !== -1) {
      data.splice(index, 1);
      await db.set('room', data);
    }
    }  
    }
    }
  }
  }
});

    //////////////////
    client.on("messageCreate" , async message => {
      if(message.content.startsWith(prefix + "ميوت") || message.content.startsWith(prefix + "mute")) {
          if(message.content.startsWith(prefix + "mutes")) return;
      if(message.content.startsWith(prefix + "ميوتات")) return;
          let ch = "1313669665490206782"
          if(ch.includes(message.channel.id)) {
          const guild = message.guild;
          const channel10 = await guild.channels.cache.find(r=>r.name == "໒・mute・log")
          const now = new Date();
          let args = message.content.split(" ")
          if(!args) return message.reply("**حدد الشخص !**")
          let user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id == args[1])
          if(!user) return message.reply("**حدد الشخص !**")
          if(!args[2]) return message.reply(`${emj.False} | **حدد مدة الميوت !**`)
          if(!args[2].endsWith("d")) {
          if(!args[2].endsWith("h")) {
          if(!args[2].endsWith("m")) {
            return message.reply(`${emj.False}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }}}
          if(isNaN(args[2][0])) return message.reply(`${emj.False} | **حدد وقت صحيح !**`)
          let role = message.guild.roles.cache.find(r=>r.name == "Muted")
          user.roles.add([role]).catch(err=>{})
          db.add(`muteweek_${message.member.id}` , 1)
          db.add(`muteall_${message.member.id}` , 1)
          
          message.reply(`**تم إسكات ${user} بنجاح !**`)
            
            let SpecialEmbedLog10 = new Discord.MessageEmbed()
            .setTitle(`**${emj.Right} Add Order Mute !**`)
            .setDescription(`> **${emj.Lift} تم إضافة ميوت لـ ${user} , المشرف المسؤول ${message.author} **
      **${emj.Dot} إيدي الشخص : ${user.id}
      ${emj.Dot} إيدي المشرف المسؤول : ${message.author.id} \n\n${emj.Dot} تاريخ إضافة الميوت : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
            .setColor(`${colorE}`)
            .setTimestamp()
      
         channel10.send({ embeds: [SpecialEmbedLog10] })
            db.set(`muted_${user.id}` , user.id)
          db.push(`mute` , {
          server: message.guild.id,
          id: user.id,
          endsAt: Date.now() + ms(args[2]),
          })
        }
      }
      });

      client.on("guildMemberAdd" , member => {
        if(db.has(`muted_${member.id}`)) {
          db.push(`mute` , {
            server: member.guild.id,
            id: member.id,
            endsAt: Date.now() + ms(`5h`),
            })
            member.roles.add([member.guild.roles.cache.find(r=>r.name == "Muted")])
        }
      });

      client.on("guildMemberRemove" , async member => {
        if(db.has(`muted_${member.id}`)) {
          if(db.has(`mute`)) {
            const data = await db.get(`mute`)
            for (const x of data) {
            if(x.id == member.id) {
            const index = data.indexOf(x);
            if (index !== -1) {
              data.splice(index, 1);
              await db.set('mute', data);
            }
        }
      }
          }
        }
      });
      
      async function mute() {
         if(db.has(`mute`)) {
         const data = await db.get(`mute`)
         for (const x of data) {
           let end = x.endsAt
           let g = await x.server
           if(end < new Date()) {
           const guild = await client.guilds.cache.get(g)
           const member = await guild.members.cache.get(x.id)
           const role = await guild.roles.cache.find(r=>r.name == "Muted")
           const channel = await guild.channels.cache.find(r=>r.name == "໒・mute・log")
           channel.send(`**لقد انتهت مدة الميوت للشخص ${member} .**`)
           member.roles.remove([role]).catch(err=>{})
            //db.delete(`muted_${member.id}`)
           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('mute', data);
           }
           
         }
      }
    }
    }
      setInterval(async () => {
        mute()
      },15000)

////////////

client.on("messageDelete" , async message => {
  if(db.has(`giveaway`)) {
    const data = await db.get(`giveaway`)
   for (const x of data) {
   if(x.message === message.id) {
                const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
           }
   }
   }
   }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "gstart")) {
    if (message.member.roles.cache.some(r=>r.id == perms) || message.member.roles.cache.has("1314242609383735357")) {
    const now = new Date()
    let args = message.content.split(" ")
    if(!args[1]) return message.reply(`**${emj.False} Specify A Time For The Giveaway !**`)
    if(!args[1].endsWith("d")) {
    if(!args[1].endsWith("h")) {
    if(!args[1].endsWith("m")) {
      if(!args[1].endsWith("s")) {
      return message.reply(`**${emj.False} The Timer Must Be In : d - h - m - s !**`)    }}}}
    if(isNaN(args[1][0])) return message.reply(`**${emj.False} Specify A Valid Timer !**`)
    if(!args[2]) return message.reply(`**${emj.False} Specify The Number Of Winners !**`)
    if(isNaN(args[2])) return message.reply(`**${emj.False} This Is Not A Number !**`)
    if(!args[3]) return message.reply(`**${emj.False} Specify The Prize Of The Giveaway !**`)
    let embed = new Discord.MessageEmbed()
    .setDescription(`> **React with ${emj.Give} to enter!**
> **Time remaining: <t:${Math.floor((now.getTime() + ms(args[1])) / 1000)}:R> <t:${Math.floor(now.getTime() / 1000)}:T>**
> **Hosted by: ${message.member}**`)
    .setAuthor({name: `${args[3]}` , iconURL:`${message.guild.iconURL()}`})
    .setColor(`${colorE}`)
    .setTimestamp()
    .setFooter({text:`${args[2]} Winner(s)`})
    message.channel.send({content:`**${emj.Give} Giveaway Has Started**` , embeds:[embed]}).then(m=> {
      message.delete()
     m.react(`${emj.Give}`)
      db.set(`giveaway_${m.id}` , m.id)
      db.push(`giveaway` , {
        server: message.guild.id,
        endsAt: Date.now() + ms(args[1]),
        prize: args[3],
        message:m.id,
        channel:message.channel.id,
        winners:args[2],
        id:message.member.id
      })  
    }) 
  } else {
      message.reply(`**<:emoji_47:1314401201432821903> روح يحبيبي خد صلاحيات و تعلا اعمل الأمر بلا قرف <:ye3:1314401135020216404>**`)
    }
  }
});

async function giveaway() {
   if(db.has(`giveaway`)) {
  const data = db.get(`giveaway`)
   for (const x of data) {
     let end = await x.endsAt
     
     let g = await x.server
     const guild = await client.guilds.fetch(g);
      let m = await x.message
     let ch = await x.channel
    let channel = await guild.channels.cache.find(r=>r.id == ch)
  let message = await channel.messages.fetch(m)

     let winners1 = x.winners
     let prize = await x.prize 
     let me = await x.id
     let mem = await guild.members.cache.find(r=>r.id == me)
     
     if(end < new Date()) {
    
if(!message.reactions.cache.get(`1303747869479665756`)) {
       message.reply(`**${emj.False} No Reaction In The Giveaway !**`)
          db.delete(`giveaway_${message.id}`)
            const index = data.indexOf(x);   
  if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
            }
                let embed = new Discord.MessageEmbed()
    .setAuthor({name: `${prize}` , iconURL:`${message.guild.iconURL()}`})
    .setTitle(`**End Of Giveaway ${emj.Give} !**`)
     .setDescription(`> **No Reaction In The Giveaway !**`)
                  .setColor(`${colorE}`)
     .setTimestamp()
        message.edit({content:`**${emj.Give} Giveaway Has Ended**` , embeds:[embed]})     }
      if(message.reactions.cache.get(`1137301662453731358`).count <= 1) {
         message.reply(`**${emj.False} There Is No Members In The Giveaway !**`)
            const index = data.indexOf(x);
           if (index !== -1) {
              data.splice(index, 1);
              await db.set('giveaway', data);
           }
         let embed = new Discord.MessageEmbed()
     .setAuthor({name: `${prize}` , iconURL:`${message.guild.iconURL()}`})
     .setTitle(`**End Of Giveaway ${emj.Give} !**`)
     .setDescription(`> **No Members In The Giveaway !**`)
     .setColor(`${colorE}`)
    .setTimestamp()
       message.edit({content:`**${emj.Give} Giveaway Has Ended**` , embeds:[embed]})   
      db.delete(`giveaway_${message.id}`)
      }
      if(message.reactions.cache.get(`1303747869479665756`).count < winners1) {
            let embed = new Discord.MessageEmbed()
    .setDescription(`> **Hosted by: ${mem}**\n> **${winners1} Winners Needed , I Only Found ${message.reactions.cache.get(`1303747869479665756`).count}**`)
    .setAuthor({name: `${prize}` , iconURL:`${message.guild.iconURL()}`})     .setColor(`${colorE}`)
                                                                              .setTimestamp()
    .setFooter({text: `${message.guild.name}`})
         message.edit({embeds:[embed]})
        message.reply(`**${emj.False} ${winners1} Winners Needed , I Only Found ${message.reactions.cache.get(`1137301662453731358`).count}**`)
                   db.delete(`giveaway_${message.id}`)

            const index = data.indexOf(x);
           if (index !== -1) {      
             data.splice(index, 1);
              await db.set('giveaway', data);
            } 
        }
       if(message.reactions.cache.get(`1303747869479665756`).count > 1 ) {
         if(message.reactions.cache.get(`1303747869479665756`).count > winners1) {
    const reaction = await message.reactions.cache.get(`1303747869479665756`);
    const users = await reaction.users.fetch();
    const participants = Array.from(users.filter((u) => !u.bot).values());
    const numberOfWinners = `${winners1}`;  
    const winners = [];
     for (let i = 0; i < numberOfWinners; i++) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants.splice(randomIndex, 1)[0];
      winners.push(winner);  
    }
   let embed = new Discord.MessageEmbed()
    .setDescription(`> **Hosted by: ${mem}**\n> **Winner(s): ${winners}**`)
    .setAuthor({name: `${prize}` , iconURL:`${message.guild.iconURL()}`})
    .setColor(`${colorE}`)
     .setTimestamp()
    .setFooter({text: `${message.guild.name}`})
                 message.reply(`**${emj.Give} Congratulations, ${winners.join(" ,")} ! You Won ${prize}**`)
      message.edit({content:`**${emj.Give} Giveaway Has Ended**` , embeds: [embed]})
       
                      db.delete(`giveaway_${message.id}`)

           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
          }
         
      }      
    }   
     }  
   }  
}
}
setInterval(async () => {
  giveaway() },10000)
client.on("messageCreate" , async message => {
  if(message.content.startsWith(prefix + "gend")) {
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply(`**${emj.False} Specify The Giveaway Message ID !**`)
    if(isNaN(args)) return message.reply(`**${emj.False} Specify The Giveaway Message ID !**`)
    if(!db.has(`giveaway_${args}`)) return message.reply(`**${emj.False} Specify A Valid Giveaway Message ID !**`)
    const data = await db.get(`giveaway`)
    for (const x of data) {
    let ch = x.channel
    let channel = message.guild.channels.cache.find(r=>r.id == ch)
    if(x.message == args) {
    let m = await channel.messages.fetch(`${args}`)
     let end = x.endsAt
     let g = await x.server
     let winners1 = x.winners
     let prize = await x.prize
     let me = await x.id
     let mem = await message.guild.members.cache.find(r=>r.id == me)
      if(!m.reactions.cache.get("1303747869479665756")) {
                  db.delete(`giveaway_${args}`)

        m.reply(`**${emj.True} No Reaction In The Giveaway**`)
           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
           }
                let embed = new Discord.MessageEmbed()
    .setTitle(`**End Of Giveaway ${emj.Give} !**`)
    .setDescription(`> **No Reaction In The Giveaway !**`)
    .setAuthor({name:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
    .setColor(`${colorE}`)
    .setTimestamp()
       m.edit({content:`_ _` , embeds:[embed]})
       m.reactions.removeAll()     }
      if(m.reactions.cache.get("1303747869479665756").count <= 1) {
         m.reply(`**${emj.True} No Members In The Giveaway**`)
                  db.delete(`giveaway_${args}`)

           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
           }
        let embed = new Discord.MessageEmbed()
    .setTitle(`**End Of Giveaway ${emj.Give} !**`)
    .setDescription(`> **No Members In The Giveaway !**`)
    .setAuthor({name:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
    .setColor("RED")
    .setTimestamp()
       m.edit({content:`_ _` , embeds:[embed]})
       m.reactions.removeAll()      
      }
    if(m.reactions.cache.get("1303747869479665756").count > 1) {
    const reaction = await m.reactions.cache.get("1303747869479665756");
    const users = await reaction.users.fetch();
    const participants = Array.from(users.filter((u) => !u.bot).values());
    const numberOfWinners = `${winners1}`;
    const winners = [];
    for (let i = 0; i < numberOfWinners; i++) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants.splice(randomIndex, 1)[0];
      winners.push(winner);   }
   let embed = new Discord.MessageEmbed()
    .setDescription(`> **Hosted by: ${mem}**\n> **Winner(s): ${winners}**`)
    .setAuthor({name: `${prize}` , iconURL:`${message.guild.iconURL()}`})
    .setColor(`${colorE}`)
    .setTimestamp()
    .setFooter({text: `${message.guild.name}`})
       m.edit({content:`**${emj.Give} Giveaway Has Ended**` , embeds:[embed]})
       m.reactions.removeAll()
       m.reply(`**${emj.Give} Congratulations ! ${winners.join(" ,")} Won ${prize}**`)
                db.delete(`giveaway_${args}`)

           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
           }
    }  
    } 
    }
  }
});

client.on("messageCreate" , async message => {
  if(message.content.startsWith(prefix + "gdelete")) {
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply(`**${emj.False} Specify The Giveaway Message ID !**`)
    if(isNaN(args)) return message.reply(`**${emj.False} Specify The Giveaway Message ID !**`)
    if(!db.has(`giveaway_${args}`)) return message.reply(`**${emj.False} Specify A Valid Giveaway Message ID !**`)
    const data = await db.get(`giveaway`)
    for (const x of data) {
    message.reply(`**${emj.True} Done Deleting This Giveaway**`)
      let ch = db.get(`giveaway_${args}`)
      let channel = await message.guild.channels.cache.find(r=>r.id == ch)
      if(x.message == args) {
      let m = await channel.messages.fetch(`${args}`)
       m.delete()
                  db.delete(`giveaway_${m.id}`)

           const index = data.indexOf(x);
           if (index !== -1) {
             data.splice(index, 1);
             await db.set('giveaway', data);
           }
    }  
    }
  }
});
let winnerChosen = false;

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "gbutton")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply(`${emj.False} **Specify The Prize Of The Giveaway !**`);
    const timerDuration = 10;
    winnerChosen = false
    let embed = new Discord.MessageEmbed()
      .setDescription(`> **Click The Button To Win !**\n> **Button Will Show In \`${timerDuration}\`**`)
      .setAuthor({ name: `${args}`, iconURL: `${message.guild.iconURL()}` })
      .setColor(`${colorE}`)
      .setTimestamp();
    message.delete();
    message.channel.send({ embeds: [embed], content: `**${emj.Give} Giveaway Button Has Started**` })
      .then(sentEmbed => {
        const updateEmbed = (timeRemaining) => {
          embed.setDescription(`> **Click The Button To Win !**\n> **Button Will Show In \`${timeRemaining}\`**`);
          sentEmbed.edit({ embeds: [embed] });       
        };
db.set(`gggg_${sentEmbed.id}` , `${args}`)
        let timeLeft = timerDuration;
        const timerInterval = setInterval(() => {
          timeLeft--;
          updateEmbed(timeLeft);      
          if (timeLeft <= 0  && !winnerChosen) { 
            let row = new Discord.MessageActionRow().addComponents(
              new Discord.MessageButton()
                .setEmoji(`${emj.Give}`)
                .setCustomId("win")
                .setStyle("SECONDARY")          );
            let embed2 = new Discord.MessageEmbed()
              .setDescription(`> **${emj.Give} Click The Button Now To Win !**\n> **You Have 10 Seconds To Click The Button**`)
              .setAuthor({ name: `${args}`, iconURL: `${message.guild.iconURL()}` })
              .setColor(`${colorE}`)
              .setTimestamp();
            sentEmbed.edit({ embeds: [embed2], components: [row], content: `**${emj.Give} Click The Button To Win**` });
            clearInterval(timerInterval);
            let time = setTimeout(() => {
              if (!winnerChosen) { 
                let embed2 = new Discord.MessageEmbed()
                  .setDescription(`> **Nobody Click The Button**\n> **Hosted By : ${message.member}**`)
                  .setAuthor({ name: `${args}`, iconURL: `${message.guild.iconURL()}` })
                  .setColor(`${colorE}`)
                  .setTimestamp();
                sentEmbed.reply("**Nobody Click The Giveaway Button !**");
                sentEmbed.edit({ embeds: [embed2], components: [], content: `**${emj.Give} Giveaway Button Has Ended !**` });            }           }, 10000)

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    if (interaction.customId == "win" && winnerChosen == false) {
      let gg = db.get(`gggg_${interaction.message.id}`)
      winnerChosen = true; 
      clearTimeout(`${time}`);
      let embedd = new Discord.MessageEmbed()
        .setDescription(`> ${emj.Give} **Winner : ${interaction.member}**\n> **Hosted By : ${interaction.member}**`)
        .setAuthor({ name: `${gg}`, iconURL: `${interaction.guild.iconURL()}` })
        .setColor(`${colorE}`)
        .setTimestamp();
      interaction.message.edit({ embeds: [embedd], components: [], content: `**${emj.Give} Giveaway Button Has Ended !**` });
      interaction.reply(`**${emj.Give} Congratulations ! ${interaction.member} You Won ${gg}**`)
          db.delete(`gggg_${interaction.message.id}`)  
    }  
  }
})                     
          }        
        },1000)     
      }); 
  }
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith('$discount') || message.content.startsWith('$تخفيض') || message.content.startsWith('تخفيض')) {
    const discountPercentage = message.content.split(" ")[1]
    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) return message.reply('**حدد نسبة بين 0 و 100 !**');
    const originalPrice = message.content.split(" ")[2]
    if (isNaN(originalPrice) || originalPrice <= 0) return message.reply('**حدد رقم للخصم !**');
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    message.reply(`**${emj.Dot} المبلغ الاساسي : ${originalPrice}**\n**${emj.Dot} نسبة الخصم : ${discountPercentage}%**\n${emj.Dot} **قيمة الخصم : ${discountAmount}**\n${emj.Dot} **المبلغ النهائي مع الخصم : ${discountedPrice}**`)
  }
});

client.on("messageCreate" , message => {
  if(message.content == prefix + "تقديم") {
    let row = new Discord.MessageActionRow().addComponents(
    new Discord.MessageButton()
    .setCustomId("apply")
    .setLabel("📜")
    .setStyle("DANGER")
    )
    let embed = new Discord.MessageEmbed()
    .setAuthor({name:message.guild.name , iconURL :message.guild.iconURL()})
    .setTitle("**نموذج التقديم :**")
    .setDescription(`**${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li}
    
    ${emj.Lift} يمنع الإستهبال بـ التقديم .
    ${emj.Lift} يمنع التزوير في معلوماتك .
    ${emj.Lift} يمنع التقديم بدون وضع الشعار .
    ${emj.Lift} يمنع التقديم اكثر من مرة

${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} ${emj.Li} 
${emj.Warn} الشعار هو : 
! Name , sinaq .
! sq - Name .**`)
    .setColor(`${colorE}`)
    .setThumbnail(message.guild.iconURL())
    message.delete()
    message.channel.send({components:[row] , embeds:[embed]})
  }
});

const cooldown = new Set()

const discordModals = require('discord-modals');
discordModals(client);
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'apply') {
    if(cooldown.has(interaction.member.id)) return interaction.reply({content : "Cooldown !" , ephemeral:true})
     let user = db.get(`user_${interaction.member.id}`)  
     if(db.has(`userapply_${interaction.member.id}`)) return interaction.reply({content : "**انت بالفعل على قائمة المقدمين !**" , ephemeral:true})
     if(interaction.member.roles.cache.some(r=>r.id == 1313669452188876831)) return interaction.reply({content : "**انت بالفعل اداري**" , ephemeral:true}) 
     const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');

     const modal = new Modal()
      .setCustomId('modal')
      .setTitle('نموذج التقديم :')
      .addComponents(
        new TextInputComponent()
      .setCustomId('name')
      .setLabel("ما اسمك ؟")
      .setRequired(true)
      .setPlaceholder("ادخل اسمك هنا")
      .setStyle('SHORT'),
    
      new TextInputComponent()
      .setCustomId('age')
            .setRequired(true)
            .setPlaceholder("ادخل عمرك من هنا")
      .setLabel("كم عمرك ؟")
      .setStyle('SHORT'),
    
            new TextInputComponent()
      .setCustomId('country')
            .setRequired(true)
            .setPlaceholder("ادخل بلدك من هنا")
      .setLabel("من وين ؟")
      .setStyle('SHORT'),

            new TextInputComponent()
      .setCustomId('active')
      .setRequired(true)
      .setPlaceholder("ادخل هنا مدة تفاعلك")
      .setLabel("مدة تفاعلك باليوم ؟")
      .setStyle('SHORT'),

      new TextInputComponent()
      .setCustomId('shop')
      .setRequired(true)
      .setPlaceholder("ادخل هنا خبرتك و هل كنت اداري في سيرفر شوب اخر")
      .setLabel("هل لديك خبرة او ماضي في سيرفرات الشوب ؟")
      .setStyle('LONG')

            )

            showModal(modal, {
              client: client, 
              interaction: interaction, 
            });   
            
  }
});

client.on('modalSubmit', async modal => {
    if(modal.customId == "modal") {
     let ch = db.get(`channel_${modal.guild.id}`)
     let channel = modal.guild.channels.cache.find(c => c.id == 1313669680229253121)
     const name = modal.getTextInputValue("name")
     const age = modal.getTextInputValue("age")
     const country = modal.getTextInputValue("country")
     const active = modal.getTextInputValue("active")
     const shop = modal.getTextInputValue("shop")

     let row = new Discord.MessageActionRow().addComponents(
       new Discord.MessageButton()
       .setEmoji(`${emj.True}`)
       .setCustomId("acc")
       .setStyle("SECONDARY"),
       new Discord.MessageButton()
       .setEmoji(`${emj.False}`)
       .setCustomId("dec")
       .setStyle("SECONDARY"),
       new Discord.MessageButton()
       .setEmoji("🤐")
       .setCustomId("time")
       .setStyle("SECONDARY")
     )
     let embed = new Discord.MessageEmbed()
     .setAuthor({name:`${modal.member.user.username}` , iconURL:`${modal.member.user.displayAvatarURL()}`})
     .setFooter({text:modal.guild.name , iconURL:modal.guild.iconURL()})
     .setTimestamp()
     .setTitle("**تقديم جديد !**")
     .setDescription(`**الشخص : <@${modal.member.id}>**\n\n> ${emj.Dot} **الاسم : ${name}**\n\n> ${emj.Dot} **العمر : ${age}**\n\n> ${emj.Dot} **البلد : ${country}**\n\n> ${emj.Dot} **مدة التفاعل : ${active}**\n\n> ${emj.Dot} **خبرته في سيرفرات الشوب : ${shop}**`)
     .setColor(`${colorE}`)
     modal.reply({content:"تم ارسال تقديمك !" , ephemeral:true})
     channel.send({content:`${modal.member}` , embeds:[embed] ,  components:[row]}).then(m=> {
     db.set(`userapply_${modal.member.id}` , modal.member.id)
     db.set(`userm_${m.id}` , modal.member.id)
     })
   }
});

client.on("interactionCreate" , interaction => {
  if(interaction.isButton()) {
    if(interaction.customId == "acc") {
      if(!interaction.member.roles.cache.some(r=>r.id == 1314242414793199626)) return interaction.reply({content:"**ما تقدر تستعمل هذا الامر**" , ephemeral:true})
              let user = db.get(`userm_${interaction.message.id}`)
              let member = interaction.guild.members.cache.get(user)
              let role = interaction.guild.roles.cache.find(r=>r.id == "1314245866210725909")
              let role2 = interaction.guild.roles.cache.find(r=>r.id == "1313669454378434631")
              let embed = new Discord.MessageEmbed()
              .setDescription(`**تقديم مقبول من : ${member} ${emj.True}**`)
              .setAuthor({name:member.user.username , iconURL:member.user.displayAvatarURL()})
              .setFooter({text:interaction.guild.name , iconURL:interaction.guild.iconURL()})
              .setColor(`${colorE}`)
              .setTimestamp()
              member.roles.add([role , role2]).catch(err=>{})
              member.send(`**رجاء قراء قوانين قابل تقديم `).catch(err=>{})
              interaction.message.edit({content:`${member}` , embeds:[embed] , components:[]})
              db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
              db.delete(`userm_${interaction.message.id}`)
        }
    if(interaction.customId == "dec") {
      if(!interaction.member.roles.cache.some(r=>r.id == 1314242414793199626)) return interaction.reply({content:"**ما تقدر تستعمل هذا الامر**" , ephemeral:true})
            let user = db.get(`userm_${interaction.message.id}`)
            let member = interaction.guild.members.cache.get(user)
            let embed = new Discord.MessageEmbed()
            .setDescription(`**تقديم مرفوض من : ${member} ${emj.False}**`)
            .setAuthor({name:member.user.username , iconURL:member.user.displayAvatarURL()})
            .setFooter({text:interaction.guild.name , iconURL:interaction.guild.iconURL()})
            .setColor(`${colorE}`)
            .setTimestamp()
            interaction.message.edit({content:`${member}` , embeds:[embed] , components:[]})
            member.send(`**لقد تم رفض تقديمك ! الرجاء عدم التقديم مرة ثانية لتجنب الميوت .**`).catch(err=>{})
            db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
            db.delete(`userm_${interaction.message.id}`)
    }
    if(interaction.customId == "time") {
      if(!interaction.member.roles.cache.some(r=>r.id == 1120910198643630191)) return interaction.reply({content:"**ما تقدر تستعمل هذا الامر**" , ephemeral:true})
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let embed = new Discord.MessageEmbed()
      .setDescription(`**لقد تم اسكات : ${member} 🤐**`)
      .setAuthor({name:member.user.username , iconURL:member.user.displayAvatarURL()})
      .setFooter({text:interaction.guild.name , iconURL:interaction.guild.iconURL()})
      .setColor(`${colorE}`)
      .setTimestamp()
      interaction.message.edit({content:`${member}` , embeds:[embed] ,  components:[]})
      member.send(`**لقد تم اسكاتك !**`).catch(err=>{})
      member.timeout(86400000).catch(err=>{})
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
  }
});
/*
client.on("ready" , () => { 
   const fs = require('fs');

 fs.readFile('database.json', 'utf8', (err, data) => {
   if (err) {
     console.error('Error reading the file:', err);
     return;
   }

  try {
    const dbObject = JSON.parse(data);

    const containsMessage = (key) => key.toLowerCase().includes("end");

     for (const key in dbObject) {
       if (containsMessage(key)) {
         delete dbObject[key];
       }
     }

    fs.writeFile('database.json', JSON.stringify(dbObject, null, 2), 'utf8', (err) => {
       if (err) {
         console.error('Error writing to the file:', err);
       } else {
         console.log('Keys containing "message" have been deleted.');
    }
    });
   } catch (error) {
    console.error('Error parsing JSON:', error);
   }
  });
 }) 
*/
  const simplydjs = require("simply-djs")
  client.on('messageCreate' , message =>{
    if(message.content.startsWith(prefix+'xo')){
    simplydjs.tictactoe(message, {xEmoji: '❌',oEmoji: '⭕',idleEmoji:     '・',embedColor: 'FD1456'})
  }
})

let buttonwinner = false

  client.on("messageCreate" , async message => {
    if(message.content == prefix + "زر" || message.content == prefix + "button") {
      const wait = require('node:timers/promises').setTimeout;
      buttonwinner = false
      const embed = new Discord.MessageEmbed()
      .setTitle("**اسرع شخص يضغط الزر : ⚡**")
      .setDescription("**معكم 10 ثواني تضغطون الزر**\n**اسرع واحد يضغط الزر يفوز**")
      .setTimestamp()
      .setColor("333333")
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setCustomId("r1")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r2")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r3")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r4")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r5")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
      )
      const row2 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setCustomId("r6")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r7")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r8")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r9")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r10")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
      )
      const row3 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setCustomId("r11")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r12")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r13")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r14")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r15")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
      )
      const row4 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setCustomId("r16")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r17")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r18")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r19")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
        new Discord.MessageButton()
        .setCustomId("r20")
        .setLabel("・")
        .setDisabled(true)
        .setStyle("SECONDARY"),
      )
      message.channel.send({components:[row,row2,row3,row4] , embeds:[embed]}).then(async m=> {
      await wait(3500)
      const all = [...row.components , ...row2.components , ...row3.components , ...row4.components]
      const r = Math.floor(Math.random() * all.length);
      const button = all[r]
      button.setStyle("SUCCESS")
      button.setDisabled(false)
      const embed2 = new Discord.MessageEmbed()
      .setTitle("**اسرع شخص يضغط الزر : ⚡**")
      .setDescription("**معكم 10 ثواني تضغطون الزر**\n**اضغط على الزر الأخضر 🟢**")
      .setTimestamp()
      .setColor("GREEN")
      m.edit({components:[row,row2,row3,row4] , embeds:[embed2]})
      const time = setTimeout(() => {
        button.setDisabled(true)
        button.setStyle("DANGER")
        const embed3 = new Discord.MessageEmbed()
        .setTitle("**اسرع شخص يضغط الزر : ⚡**")
        .setDescription("**انتهى الوقت**\n**🔴 لا يوجد اي فائز**")
        .setTimestamp()
        .setColor("RED")
        m.edit({components:[row,row2,row3,row4] , embeds:[embed3]})
      },10000)
      client.on("interactionCreate" , interaction => {
        if(interaction.isButton()) {
          if(interaction.customId == `${button.customId}` && buttonwinner == false) {
            buttonwinner = true
            button.setDisabled(true)
            const embed4 = new Discord.MessageEmbed()
            .setTitle("**اسرع شخص يضغط الزر : ⚡**")
            .setDescription(`**👑 | ${interaction.member}**`)
            .setTimestamp()
            .setColor("YELLOW")
            m.edit({components:[row,row2,row3,row4] , embeds:[embed4]})
            interaction.channel.send(`**⚡ | الفائز هو : ${interaction.member}**`)
            interaction.deferUpdate()
            clearTimeout(`${time}`)
          }
        }
      });
 
      })
    }
  });

client.on("messageCreate" , message => {
  if(message.content == prefix + "snake") {
const { Snake } = require('discord-gamecord');
const Game = new Snake({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: '#5865F2'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  stopButton: 'Stop',
  timeoutTime: 60000,
  snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
  foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
  }
});

const {RockPaperScissors} = require("discord-gamecord")

client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "rock")) {
    let user = message.mentions.members.first()
    if(!user) return message.reply("User ?")
     const Game = new RockPaperScissors({
      message: message,
      isSlashGame: true,
      opponent:user,
      embed: {
        title: 'Rock Paper Scissors',
        color: '#5865F2',
        description: 'Press a button below to make a choice.'
      },
      buttons: {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
      },
      emojis: {
        rock: '🌑',
        paper: '📰',
        scissors: '✂️'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      pickMessage: 'You chose {emoji}.',
      winMessage: '**{player}** won the Game! Congratulations!',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  }
});