let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `≡ NO ENLACES
            
📵 Los enlaces no son permitidos 📵 BAN 💥 🐈🌬️🌪️ *${await this.getName(m.sender)}*  📵 ELIMINADO 📵 BAM 🐈🌬️🌪 ${isBotAdmin ? '' : '\n\nNo soy admin 😔 No te elimino :"v'}`, igfg, ['Inavilita AntiLink 🤖', '/🤖 off antilink 🤖'], m)
        if (isBotAdmin && chat.antiLink) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
    
}
