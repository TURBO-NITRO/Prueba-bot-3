
import { Facebook } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  if (!text) throw `
╭─✦─⋆❮✦⋆.☬.⋆✦❯⋆─✦─╮
╽🤖 Ingrese link de un 
┃video de Facebook\n\n
┃🤖 Ejemplo :
┃\n${usedPrefix + command} https://bit.ly/39xwyiz
╰────────────⋆⋆`
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `📵 Link no válido 🤖`
  await m.reply(wait)
   try {
      let b = await Facebook(text)
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let fbt = `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽❰❰❰ FACEBOOK VÍDEO ❱❱❱
╿⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃ ❰❰❰❰ RESULTADOS ❱❱❱❱
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃☆☆☆ 📲 Vídeo 1 ☆☆☆
├────────────⋆
┃📲 Calidad: ${quality}
┃⎙ Tamaño: ${formattedSize}
┃🤖 Enlace: ${urlshort}
├────────────⋆
┃ ❮❮❮❮ CANAL OFC ❱❱❱❱❱❱
┃Apoya al Bot 👉🏻YouTube
┃Suscríbete y activa la 🔔
┃Con eso ya estas
┃Apoyando al Bot 🤖 ❤️
┃🤖 https://bit.ly/3HqqQMf
├──────⋆──────╮
╿         ☆  ☆  ☆  ☆  ☆    .╿
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`
    conn.sendFile(m.chat, url, 'fb.mp4', fbt, m)
      } catch { 
     throw `📵 Error 🤖 ingresa otro enlace por favor 💱`
        }
}
handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = ['fb', 'facebook', 'fbdl'] 

handler.limit = true

export default handler
