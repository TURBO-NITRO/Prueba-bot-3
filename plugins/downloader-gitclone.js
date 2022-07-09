import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `
╭─✦─⋆❮✦⋆.☬.⋆✦❯⋆─✦─╮
╽Ingresá un link de github
┃\n\n🤖 Ejemplo :
┃ ${usedPrefix + command} https://github.com/Alex-turbo/TURBO-BOT-V3
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`
    if (!regex.test(args[0])) throw '📵 Link no válido 🤖'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.reply(`⎙ ️Ennviando repositorio 🤖`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = ['gitclone'] 

handler.limit = true

export default handler
