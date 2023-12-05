import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import path from 'path';
import { questions } from './questions';
import { IMessage } from './public/IMessage';


const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server( { server } )

server.listen(3000)
console.log('Rodando na porta 3000')









app.get('/', (req, res) => res.sendFile(__dirname+"/index.html") )
//app.use('/public', express.static(__dirname+'public'))
app.get('/public/:filename', (req, res) => {
    const { filename } = req.params;
    res.sendFile(path.join(__dirname, 'public', filename));
} );

app.get('/sse', (req, res) => { 
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.on('error', (err) => {
        // Lógica para lidar com erros
        console.error(`Erro na conexão: ${err.message}`);
    });


    const { option } = req.query as { option: 'a' | 'b' | 'c' }
    if (questions[option]?.answer) { 
        for (let indice of questions[option].answer) {
            const message = JSON.stringify( getMessage(option, indice) )
            res.write(`data: ${message}\n\n`)
        }
    }

    const obj = JSON.stringify( { body: {text: "close"} } )
    res.write(`data: ${obj}\n\n`)
    res.end()
} )


wss.on("connection", (ws) => { 
    ws.on("message", (buffer) => { 
        const reqMessage: IMessage = JSON.parse(buffer?.toString())
        const option = reqMessage?.body?.option
        if (questions[option]) { 
            for (let indice of questions[option].answer) { 
                const message = getMessage(option, indice)
                ws.send( JSON.stringify( message ) )
            }
        }

        ws.close()

    } )
} )


function getMessage(option: "a" | "b" | "c", index: string) { 
    const message: IMessage = {
        origin: "server",
        body: {
            option,
            text: index
        }
    }

    return message
}

