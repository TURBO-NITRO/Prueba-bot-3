import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["8.mp3", "9.mp3"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 
let av = `./src/mp3/${nfg}.mp3`

conn.sendHydrated(m.chat, `Hola 👋🏻 soy turbo bot 🤖 *${name}* \n \nClick en las siguientes opciones pará ver mis comandos 👇🏻 🤖? \n`, igfg, '', 'https://youtube.com/c/TURBONTR1', 'YouTube', null, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/turbogps']
    ], m)
conn.sendFile(m.chat, av, 'ad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(.menu|.help)$/i
handler.command = new RegExp
export default handler
