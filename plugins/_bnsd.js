
let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
 let txt = `
Hola *${name}* 

🤖 Esa función no esta disponible 🤖
    
☣ Como instalar turbo bot ️☣️
https://youtube.com/c/turbontr1?sub_confirmatión=1`
    
     conn.sendHydrated(m.chat, txt, igfg, null, fgsc, 'GitHub', null, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/turbogps']
    ], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler
