import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import path from 'path';
import { runC } from './onrestart'
import { questions } from './questions';
import { IMessage } from './public/IMessage';


const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server( { server } )

app.get('/', (req, res) => res.sendFile(__dirname+"/index.html") )
//app.use('/public', express.static(__dirname+'public'))
app.get('/public/:filename', (req, res) => {
    const { filename } = req.params;
    res.sendFile(path.join(__dirname, 'public', filename));
} );

wss.on("connection", (ws) => { 
    ws.on("message", (buffer) => { 
        const message: IMessage = JSON.parse(buffer?.toString())
        const option = message?.body?.option
        if (questions[option]) { 
            for (let indice of questions[option].answer) { 
                const obj: IMessage = {
                    origin: "server",
                    body: {
                        option,
                        text: indice
                    }
                }

                ws.send( JSON.stringify( obj ) )
            }

            ws.close()
        }


    } )
} )


server.listen(3000)
runC()
console.log('Rodando na porta 3000')