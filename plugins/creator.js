function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
╭─✦─⋆❮✦⋆.☬.⋆✦❯⋆─✦─╮
╽❮❮❮❮❮  ≡ OWNER  ❯❯❯❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❮❮❮❮  TURBO NITRO ❯❯❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
├❥⃔⃕≻ YouTube 
┃https://bit.ly/3Qi8pxj
├❥⃔⃕≻ Grupo de WhatsApp
├❥⃔⃕≻ ENLACES TURBO
┃ https://bit.ly/3zDyWip
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
├❥⃔⃕≻ Grupo de WhatsApp
├❥⃔⃕≻ ENLACES VARGAS
┃ https://bit.ly/3HEcgkp
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
├❥⃔⃕≻ Grupo de WhatsApp
├❥⃔⃕≻ CINEMANÍA 2022 📽️
┃ https://bit.ly/3QCoY7a
├────────────⋆
┃ ❮❮❮❮ CANAL OFC ❯❯❯❯
┃Apoya al Bot👉🏻YouTube
┃ https://bit.ly/3HqqQMf
╰────────────⋆
╭────────────⋆
╽❮❮❮❮ TURBO NITRO ❯❯❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'turboowner'] 


export default handler
