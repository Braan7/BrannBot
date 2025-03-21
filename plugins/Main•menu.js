/*import ws from 'ws';
import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

  try {
    let users = [...uniqueUsers.values()];
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let totalUsers = users.length;
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let name = conn.getName(m.sender)
    let api = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
     let userNationalityData = api.data.result
     let userNationality = userNationalityData ? `${userNationalityData.name}` : 'Desconocido'
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    //m.react("🍟");
    let menu = ``;

    let txt =  ` *Hola usuario mi nombré es Ai Otho 🍿*\n\n`
txt+= '`> Creador:`' + ` Daniel 🇦🇱\n`;
txt+= '`> Bot:`' + ` Ai Otho - MD\n`;
txt+= '`> Fecha:`' + ` ${moment.tz('America/Bogota').format('DD/MM/YY')}\n`;
txt+= '`> Pais:`' + ` ${userNationality}\n`;
txt+= '`> Prefijo:`' + ` 「 ${usedPrefix} 」\n`;
txt+= '`> Usuarios:`' + ` ${rtotal}\n`;
txt+= '`> Contactos:` #owner\n';
txt+= '`> Uptime:`' + ` ${uptime}\n\n`;
txt+= "> 🍭 Powered By Ai Otho - MD"

    let listSections = [];

        listSections.push({
        title: `Clik`, highlight_label: `Popular Ai Otho - MD`,
        rows: [
            {
                header: "AUTO VERIFICAR",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `#reg ${name}.18`,
            },
            {
                header: "MENU COMPLETO",
                title: "",
                description: `🍭 Muestra el menú completo de Ai Otho.`,
                id: `#allmenu`,
            },
            {
                header: "CONTACTOS",
                title: "",
                description: `🫧 Muestra los creadores de la Bot.`,
                id: `#owner`,
            },
            {
                header: "GITHUB AI",
                title: "",
                description: `🍭 Muestra el github de la bot.`,
                id: `#sc`,
            },
            {
                header: "Sky Ultra Plus",
                title: "",
                description: `⚡️ Super hosting, Sky Ultra Plus.`,
                id: `#skyplus`,
            },
            {
                header: "VELOCIDAD",
                title: "",
                description: `🚀 Muestra su velocidad y mas.`,
                id: `#speed`,
            },
            {
                header: "SUBBOT - CODE",
                title: "",
                description: `🍿 Ser subbot mediante un codigo de 8 digitos.`,
                id: `#code`,
            },
            {
                header: "SUBBOT - QR",
                title: "",
                description: `🍥 Ser subbot mediante un codigo QR.`,
                id: `#serbot`,
            },
            {
                header: "Ai Otho Subbots",
                title: "",
                description: `🟢 Muestra su subbots onlines.`,
                id: `#bots`,
            },
            {
                header: "GRUPOS - AI OTHO",
                title: "",
                description: `🔰 Muestra los grupos principales de la bot.`,
                id: `#grupos`,
            },
        ],
    });

    let vid = "https://qu.ax/jJpmr.jpg";
    let img = "https://qu.ax/jJpmr.jpg";
    let img2 = "https://qu.ax/PGFnh.jpg";

    await conn.sendListB(m.chat, menu, txt, ` Clik⁩`, [vid, img, img2].getRandom(), listSections, esti);
 
 } catch (e) {
    conn.reply(m.chat, `「✿」 *Ocurrió un error al enviar el menú, use #allmenu para ver el menú completo.*\n\n${e}`, m, fake);
  }
};

handler.tags = ['main'];
handler.help = ['menu'];
handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;*/
