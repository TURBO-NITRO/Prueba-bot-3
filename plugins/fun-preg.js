import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
	let name = conn.getName(m.sender)
  if (!text) throw `🤖 Ejemplo :\n\n ${usedPrefix + command} soy lindo?`
  try {
  let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  let tes = json.success.replace('simsimi', 'Turbo').replace('Simsimi', 'Turbo').replace('sim simi', 'Turbo')
    m.reply(`
❰❰❰❰ PREGUNTAS ❱❱❱❱
 
👉🏻 Pregunta: ${text}
👉🏻 Respuesta: ${tes}`) 
  } catch {
    m.reply('🤖 No entendí la pregunta 🤕')
  }
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
