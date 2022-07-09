import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽🤖️ Escriba el Nombre de
┃Una cuenta 🤏🏻😎
┃\n\n
┃🤖 Ejemplo : ${usedPrefix + command}turbo_nitro15
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽❰❰❰❰❰❰❰ STALKING ❱❱❱❱❱❱❱
╿⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❰❰❰❰❰❰ RESULTADO ❱❱❱❱❱❱
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
├────────────⋆
┃📛 Nombre 👉🏻: ${name} 
┃💱 Username: ${username}
┃🧿 Seguidores: ${followersH}
┃👀 Siguiendo: ${followingH}
┃🤖 Bio : ${description}
┃🌀 Link : https://instagram.com/${username.replace(/^@/, '')}
├────────────⋆
┃ ❮❮❮❮ CANAL OFC ❱❱❱❱❱❱
┃Apoya al Bot 👉🏻YouTube
┃Suscríbete y activa la 🔔
┃Con eso ya estas
┃Apoyando al Bot 🤖 ❤️
┃🤖 https://bit.ly/3HqqQMf
├──────⋆──────╮
╿         ☆  ☆  ☆  ☆  ☆    .╿
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = ['igstalk'] 

export default handler
