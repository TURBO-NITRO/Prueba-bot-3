let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
┃❰❰❰❰ INFO DE GRUPO ❱❱❱❱
┃   ➣͜͡᳆⃟⋆CREADOR᳆͜͡➣
├❥⃔⃕≻ ${groupMetadata.id}
├❥⃔⃕≻ 📛 Nombre 👇🏻 
├❥⃔⃕≻ ${groupMetadata.subject}
├❥⃔⃕≻ 💱 Miembros 👇🏻
├❥⃔⃕≻ ${participants.length}
├❥⃔⃕≻ 🧿Dueño de Grupo😎
├❥⃔⃕≻ @${owner.split('@')[0]}
├❥⃔⃕≻ 👀 Admins 👇🏻
├❥⃔⃕≻ ${listAdmin}
├❥⃔⃕≻🤖 Comandos activos 🤖
├❥⃔⃕≻ ${isBanned ? '☑️' : '📵'} Baneado
├❥⃔⃕≻ ${welcome ? '☑️' : '📵'} Bienvenida
├❥⃔⃕≻ ${detect ? '☑️' : '📵'} Detector
├❥⃔⃕≻ ${del ? '📵' : '☑️'} Anti Delete
├❥⃔⃕≻ ${antiLink ? '☑️' : '📵'} Anti Link
├────────────⋆
┃  🤖 Configuración 🤖
├❥⃔⃕≻ Bienvenida: ${sWelcome}
├❥⃔⃕≻ Despedida: ${sBye}
├❥⃔⃕≻ Promovidos: ${sPromote}
├❥⃔⃕≻ Degradados: ${sDemote}
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

᳆⃟✪Descripción de grupo᳆⃟✪
᳆⃟✪ ${groupMetadata.desc?.toString() || 'desconocido'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['Infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 

handler.group = true

export default handler
