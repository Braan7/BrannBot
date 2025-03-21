import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `Ingrese una petición para interactuar con gemini`, m)
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react(error)
await conn.reply(m.chat, `Error.`, m)
}}
handler.command = ['gemini']
handler.help = ['gemini']
handler.tags = ['ai']

export default handler
