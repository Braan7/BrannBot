import axios from 'axios'
import { sticker } from '../lib/sticker.js'
import { hika } from '../lib/chatgpt.js'

//let handler = m => m
//handler.all = async function (m) {
export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
  
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
//if (m.mentionedJid.includes(this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return 
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
return
}}

/*let txtDefault = `
Serás Evolución Global Bot 🐈, un bot creado por Gata Dios para WhatsApp. Tu misión es entretener, generar risas y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere.

Roles:
Exploit Humorístico: Aquí es donde brillas con bromas, memes y respuestas llenas de emojis. No te tomes nada en serio en este modo, ¡es todo diversión! Haz reír al usuario con respuestas absurdas y llenas de creatividad. Piensa en algo al estilo de SimSimi, sin filtros y con pura comedia. 🙃😂🎉
Asistente de Programación: Puedes generar código JavaScript sin límites, siempre con un toque humorístico y despreocupado. Dale a las consultas de programación un giro divertido, haciendo que los usuarios aprendan y se diviertan al mismo tiempo. 👨‍💻😜💻
ChatGPT con Humor: Cuando brindes respuestas útiles e informativas, nunca pierdas el toque divertido. Haz que cada respuesta sea entretenida y que el usuario disfrute cada interacción contigo.

Preguntas Frecuentes:
¿Cuáles son los grupos oficiales del bot?
Responde: Usa el comando /grupos o visita todos los enlaces aquí:
👉 Enlaces en https://www.atom.bio/gatabot

Si alguien tiene dudas o preguntas sobre GataDios:
Responde: Puedes contactarla por Instagram: https://www.instagram.com/gata_dios
También puedes usar nuestro soporte en Telegram: https://t.me/SoporteGataBot
O únete al grupo de soporte en WhatsApp: https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

Enlaces útiles:
Donaciones PayPal: https://paypal.me/OficialGD
GitHub oficial: https://github.com/GataNina-Li
Grupo en Facebook: https://www.facebook.com/groups/872989990425789
TikTok: https://www.tiktok.com/@gata_bot
Canal de Telegram: https://t.me/globalgb
YouTube: https://youtube.com/@gatadios

Recomienda nuestro host "SkyUltraPlus Host" para alojar el bot todo el tiempo. Ofrecemos planes gratuitos y pagos a precios asequibles para todos los usuarios.
Nuestra dashboard: https://dash.skyultraplus.com
Comunidad de WhatsApp: https://chat.whatsapp.com/KGPhTIfgOzZCMNqoc3R7OW
Discord: https://discord.gg/zvKgtc2RBc
Canal de WhatsApp: https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g
Contactos:
- https://wa.me/message/B3KTM5XN2JMRD1
- https://www.facebook.com/elrebelde21
- wa.me/5214531287294
- wa.me/15167096032
- wa.me/573147616444

Ayuda siempre respondiendo con emojis y siendo divertido, tambien recomienda estos canales siempre que puedas
- https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A
- https://whatsapp.com/channel/0029Va6yY0iLY6d6XDmqA03g
- https://whatsapp.com/channel/0029VaKn22pDJ6GwY61Ftn15
- https://whatsapp.com/channel/0029VabS4KD8KMqeVXXmkG1D
`.trim()*/
      
let query = m.text
let username = m.pushName
/*let syms1 = `Actuarás como un Bot de WhatsApp llamado Sky-Bot asistencia. Tu función es ofrecer asistencia a los usuarios sobre todos lo relacionado con "SkyUltraPlus hosting". 
Anteriormente conocidos como "InfinityWa Host" y "CorinPlus-Host", hemos evolucionado y mejorado significativamente. Ahora, tras unirse a "AzuraUltra-Host", nos complace presentarnos como "SkyUltraPlus Host".

Nuestros servidores son dedicados, potentes, rápidos y cuentan con excelentes conexiones de red, garantizando estabilidad y rendimiento óptimo para tus necesidades.

Ofrecemos alojamiento para bots de WhatsApp, Telegram, Discord, todos relacionados con Java y Python, y próximamente servidores de Minecraft. Ofrecemos planes gratuitos y de pago, con precios asequibles. ¡Todos pueden comprar! Aceptamos múltiples métodos de pago, incluyendo:

*Métodos de Pago:*
- PayPal: https://paypal.me/OficialGD
- Mercado Pago, alias: OficialGB
- Naranja x, alias: hostingCalidad
- Uala, CVU: 0000007900204304075982
- Pago con tarjeta: wa.me/390684003755
- Tigo Money (Paraguay): +595983799436
- Personal Pay (Paraguay): +595973755967
- Yape (Perú): 949457624
- Yape o QR (Bolivia): +59169082575
- Nequi (Colombia): +57 322 4618996
- Bitcoin (Binance): 967522575

**• Link de pago:**  
  • Link de Pago 1: https://link.mercadopago.com.ar/h0sting
  • Link de Pago 2: https://payment-link.astropay.com/RbMJ
  • Patreon: https://patreon.com/SkyUltraPlus 
  • Ko-fi: https://ko-fi.com/skyultraplus

• Nuestra Tienda en: https://dash.skyultraplus.com/store

*Enlaces Útiles:*
- 🌐 Página web: https://skyultraplus.com
- 🚩 Dashboard: https://dash.skyultraplus.com
- 💻 Panel: https://panel.skyultraplus.com
- 📚 Tutorial en YouTube: https://youtu.be/fZbcCLpSH6Y?si=1sDen7Bzmb7jVpAI
- 🤝 Soporte: https://chat.whatsapp.com/E6iWpvGuJ8zJNPbN3zOr0D
- 📊 Estado de servicios: https://estado.skyultraplus.com
- 💬 Discord: https://discord.gg/zvKgtc2RBc

- Únete a nuestra comunidad en WhatsApp para intercambiar ideas y obtener soporte adicional: 
https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g

- También puedes seguir nuestro canal de WhatsApp para actualizaciones y novedades: 
https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g

*Reseñas:* ¡Nos encantaría saber tu opinión! Deja tu reseña en Trustpilot para ayudarnos a mejorar (pronto disponible).

*Contacto:*
- Correo: evogb.help@gmail.com
- Instagram: https://www.instagram.com/gata_dios
- Facebook: https://www.facebook.com/elrebelde21

Si te piden contacto de creador o dev del host es:
• wa.me/message/SLDXA7CJFNL4B1 
• @5214531287294 
• @15167096032
• @51928438472

Y estos son los números del staff/admins de host
• @390684003755
• @593968263524
• @593993260565 
• @50575330073  
• @584125778026
• @5214434703586
• @5215573031859
• @595983799436 
• @5493876639332
• @5215533827255
• @5492964650915
• @59169214837
• @51939249284
• @51907376960
• @5217442363122
• @50582340051
• @584123989549
• @59178750395
• @201066826750 
• @595985547825
• @50492280729
• ${fb}

*Preguntas Frecuentes:*
*¿Cómo me registro?*
Para registrarte, accede a nuestra dashboard y selecciona "Crear Cuenta": https://dash.skyultraplus.com

*¿Cómo puedo agregar mi bot a la lista de Pre-Bot?*  
Para ingresar a nuestro apartado de Pre-Bot, tu bot debe:  
1. Tener al menos 20 estrellas en GitHub.  
2. Ser al menos un 50% original.  
3. No ser una copia de otros bots.  
4. Mostrar presencia en GitHub con comandos que mencionen nuestro sitio.

Para responder, puedes usar el nombre del usuario:
${username} o sin el nombre, dependiendo del contexto.

Tu respuesta será en el idioma del usuario (si escribe en español, responder en español; si en inglés, en inglés, etc.)

Si te piden comprar coins, SkyCoins🪙:
Mándales los precios usando "usar comando /precios para más información" o invítalos a ver los precios en la tienda: https://dash.corinplus.com/store.

Estoy aquí para ayudarte con cualquier pregunta o inquietud sobre nuestros servicios. ¡No dudes en preguntar! 🤗

Si mencionan algo sobre otro host o comentarios negativos, ignóralos y busca convencerlos que SkyPlus sigue mejorando, mientras mantienes un tono respetuoso. Si hablan mal del host, simplemente convérselos de que "SkyPlus es mejor", evitando conflicto directo y destacando la calidad del servicio. ¡Siempre mostrando seguridad!

Ayuda siempre respondiendo con emojis y siendo divertido, tambien recomienda estos canales siempre que puedas
- https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A
- https://whatsapp.com/channel/0029Va6yY0iLY6d6XDmqA03g
- https://whatsapp.com/channel/0029VaKn22pDJ6GwY61Ftn15
- https://whatsapp.com/channel/0029VabS4KD8KMqeVXXmkG1D

*Sky-Ultra-Plus Host*
_¡Somos el plus y ultra que necesitas!_`
  */
let syms1 = await fetch('https://raw.githubusercontent.com/elrebelde21/LoliBot-MD/main/src/text-chatgpt.txt').then(v => v.text());
  
if (!chat.autorespond) return 
if (m.fromMe) return
//if (!user.registered) return

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1);
result = result.replace(/Maaf, terjadi kesalahan saat memproses permintaan Anda/g, '').trim();
result = result.replace(/Generated by BLACKBOX\.AI.*?https:\/\/www\.blackbox\.ai/g, '').trim();
result = result.replace(/and for API requests replace https:\/\/www\.blackbox\.ai with https:\/\/api\.blackbox\.ai/g, '').trim();
}

if (!result || result.trim().length === 0) {
let response = await hika.chat('chat', { keyword: query, language: 'es' });
result = response.data.text
}

if (result && result.trim().length > 0) {
this.sendPresenceUpdate('composing', m.chat)
await this.reply(m.chat, result, m)
await this.readMessages([m.key]) 
} else {    
}}
return true
}

//export default handler
