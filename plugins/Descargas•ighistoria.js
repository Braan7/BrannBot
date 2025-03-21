let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `ingrese el nombre de usuario`
try {
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply('hola')  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type'] 
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('hola')})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('hola')})
conn.reply(m.chat, `hola`, m, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: 'descargas de ig', body: 'Super Bot WhatsApp',          previewType: 0, thumbnail: imagen1, sourceUrl: md}}})
}} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.register = true
export default handler
