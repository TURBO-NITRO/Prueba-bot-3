let handler = async (m, { conn }) => {
    conn.reply(m.chat, `╭╼╼╼╼⋆❰❰✪❱❱⋆╼╼╼╼╮
├➽ 🤖 COMANDOS OFF 📵
├➽ Si el comando esta en
├➽ Letras negritas
├➽ Significa que el 
├➽ Comando esta 
├➽  📵 BLOQUEADO 📵
╰

╰╼╼╼╼⋆❰❰✪❱❱⋆╼╼╼╼╯ 
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
