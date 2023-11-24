import { useSocket, bubble } from "./socket.js"
import { IMessage } from './IMessage'


const questions: {
    option: 'a' | 'b' | 'c'
    question: string

}[] = [
    {
        option: 'a', question: "Componha um evite para um chá de bebê que inclua ideias de presentes"
    }, {
        option: 'b', question: "Escreva uma música que celebre a beleza da Terra"
    }, {
        option: 'c', question: "Dê-me uma lista de novos hobbies que eu poderia perseguir com tempo livre limitado"
    },
]


questions.forEach(e => { 
    const options = document.querySelector('.options')
    let div = document.createElement("div")
    div.classList.add("option")
    div.innerHTML = e.question
    options?.append(div)

    const message: IMessage = {
        origin: "client",
        body: {
            option: e.option
        }
    }

    div.onclick = function() { 
        bubble.create(e.question)
        const socket = useSocket( () => socket.send(JSON.stringify(message)) )
    }

} )