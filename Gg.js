import { WAConnection, ProxyAgent } from '@adiwajshing/baileys'

const conn = new WAConnecion ()
conn.connectOptions.agent = ProxyAgent ('http://some-host:1234')

await conn.connect ()
console.log ("oh hello " + conn.user.name + "! You connected via a proxy")
