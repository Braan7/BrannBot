import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, '🍭 Ingresa el título de un video o canción de YouTube.', m)
    await m.react('🕓')
    try {
    let results = await Starlights.ytsearch(text)
    if (!results || !results.length) return conn.reply(m.chat, `No se encontraron resultados.`, m, rcanal)
    let img = await (await fetch(`${results[0].thumbnail}`)).buffer()
    let txt = 'ゲ◜៹ YouTube Search ៹◞ゲ'
    results.forEach((video, index) => {
        txt += `\n\n`
        txt += `Número : ${index + 1}\n`
        txt += `Titulo : ${video.title}\n`
        txt += `Duración : ${video.duration}\n`
        txt += `Publicado : ${video.published}\n`
        txt += `Autor : ${video.author}\n`
        txt += `Url : ${video.url}`
    })
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['ytsearch *<búsqueda>*']
handler.tags = ['search']
handler.command = ['ytsearch', 'yts']
handler.register = true 
export default handler
