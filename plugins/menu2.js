
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_

▢ Si tienes más  audios  
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá
*No* _voces de lolis_


┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
└──────────────
┌─⊷ *VIDEO/GIF* 
▢ Linda noche
└──────────────`
const pp = await (await fetch('https://i.ibb.co/YLfcS0h/tbntr.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '▢ DyLux  ┃ ᴮᴼᵀ\nSuscríbete en YouTube\nhttps://youtube.com/c/turbontr1\n', pp, 'https://www.facebook.com/Turbo-Nitro-Ofc-101343179207250/', 'YouTube', null, null, [
     ['⏍ Info', '/botinfo'],
      ['⌬ Grupos', '/turbogps']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
