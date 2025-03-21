import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `𝘛𝘦 𝘪𝘯𝘷𝘪𝘵𝘢𝘮𝘰𝘴 𝘢 𝘯𝘶𝘦𝘴𝘵𝘳𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘰𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴
𝙱𝚁𝙰𝙰𝙽 𝙱𝙾𝚃 🥷🏼

💞 https://chat.whatsapp.com/HNeUqLXQSXoLkb5qDHsP46

 💞 Enlace anulado? entre aquí! 

Canal:

💞 https://whatsapp.com/channel/0029Vb4tpfK1t90gCaPxv90A

 💞 𝙱𝚁𝙰𝙰𝙽 𝙱𝙾𝚃 🥷🏼`

await conn.sendFile(m.chat, imagen3, "otho.jpg", grupos, fkontak, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler
