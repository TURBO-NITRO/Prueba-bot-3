import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `๐ค Ingrese link de mediafire junto con el comando ๐ค๐ป๐`
    if (!args[0].match(/mediafire/gi)) throw `๐ต Link no vรกlido ๐ค`
    
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
โญโโโโโโโโฐโฉโฑโโโโโโโโฎ
โฝโฐโฐโฐโฐโฐ MEDIAFIRE โ โฑโฑโฑโฑโฑ
โฟโโโโโโโโโโโโโโโโโโโโโโโโโ
โ โฐโฐโฐโฐ RESULTADOS โฑโฑโฑโฑ
โโโโโโโโโโโโโโโโโโโโโโโโโโ
โ๐ Nombre: ${filename}
โโ Tamaรฑo: ${filesizeH}
โ๐ฑ Extension: ${ext}
โ๐ค Subido: ${aploud}
โโโโโโโโโโโโโโ
โ โฎโฎโฎโฎ CANAL OFC โฑโฑโฑโฑโฑโฑ
โApoya al Bot ๐๐ปYouTube
โSuscrรญbete y activa la ๐
โCon eso ya estas
โApoyando al Bot ๐ค โค๏ธ
โ๐ค https://bit.ly/3HqqQMf
โโโโโโโโโโโโโโโฎ
โฟ         โ  โ  โ  โ  โ    .โฟ
โฐโขโาอกอ โซ๐๐๐๐๐โ๐๐๐๐๐โซโาอกอโขโฏ`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mfire'] 

handler.limit = true

export default handler
