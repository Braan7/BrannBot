import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!args[0]) return m.reply(`Ingresa un enlace de SoundCloud`)
    
try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/download/soundcloud?url=${args[0]}`)
let json = await api.json()
let { data } = json        
let audioUrl = data.url
let title = data.title
let imageUrl = data.imageURL
let author = data.author.username
let followers = data.author.followers_count
let verified = data.author.verified ? 'Sí' : 'No'
let authorLink = data.author.permalink_url

let JT = `*Título:* ${title}
*Artista:* ${author}
*Seguidores:* ${followers}
*Verificado:* ${verified}
*Enlace del autor:* ${authorLink}`

await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: JT }, { quoted: m })

await conn.sendMessage(m.chat, { audio: { url: audioUrl },mimetype: 'audio/mpeg'}, { quoted: m })
        
} catch (error) {
console.error(error)
}}

handler.command = /^(clouddl)$/i

export default handler


