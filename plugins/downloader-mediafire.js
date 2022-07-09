import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🤖 Ingrese link de mediafire junto con el comando 🤏🏻😎`
    if (!args[0].match(/mediafire/gi)) throw `📵 Link no válido 🤖`
    
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽❰❰❰❰❰ MEDIAFIRE ⎙ ❱❱❱❱❱
╿⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃ ❰❰❰❰ RESULTADOS ❱❱❱❱
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃📛 Nombre: ${filename}
┃⎙ Tamaño: ${filesizeH}
┃💱 Extension: ${ext}
┃🤖 Subido: ${aploud}
├────────────⋆
┃ ❮❮❮❮ CANAL OFC ❱❱❱❱❱❱
┃Apoya al Bot 👉🏻YouTube
┃Suscríbete y activa la 🔔
┃Con eso ya estas
┃Apoyando al Bot 🤖 ❤️
┃🤖 https://bit.ly/3HqqQMf
├──────⋆──────╮
╿         ☆  ☆  ☆  ☆  ☆    .╿
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mfire'] 

handler.limit = true

export default handler
