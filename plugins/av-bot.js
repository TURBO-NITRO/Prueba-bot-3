import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["bot", "bott"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 
let av = `./src/mp3/${nfg}.mp3`

conn.sendHydrated(m.chat, `Hola ππ» soy turbo bot π€ *${name}* \n \nClick en las siguientes opciones parΓ‘ ver mis comandos ππ» π€? \n`, igfg, '', 'https://youtube.com/c/TURBONTR1', 'YouTube', null, null, [
      ['β¦β° Menu', '/help'],
      ['β¦β° Menu 2', '/menu2'],
      ['β¬ Grupos', '/turbogps']
    ], m)
conn.sendFile(m.chat, av, 'ad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(bot|bot)$/i
handler.command = new RegExp
export default handler
