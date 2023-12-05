import { IMessage } from "./IMessage"

type IBubble = {
    current: undefined | HTMLDivElement
    create(text?: string): void
    insert(): void
}

export function useSocket(callback?: () => void) { 
    const protocol = document.URL.includes('http')? 'http' : 'https'
    const socket = new WebSocket(document.URL.replace(protocol, 'ws'))


    socket.addEventListener('message', async(event) => { 
        const message: IMessage = JSON.parse(event.data)
        if (message?.body?.text === "/") { bubble.insert() }
        else if (bubble.current && bubble.current.lastElementChild) { 
            bubble.current.lastElementChild.innerHTML += message?.body?.text 
        }
    });

    socket.addEventListener('open', (event) => {
        console.log('Conexão aberta:', event);
        bubble.create()
        if (callback) { callback() }
    });

    socket.addEventListener('error', (event) => {
        console.error('Erro na conexão WebSocket:', event);
    });

    socket.addEventListener('close', (event) => {
        console.log('Conexão fechada:', event);
        console.log(socket)
    });

    return socket
}


export const bubble: IBubble = { 
    current: undefined,

    create: function(text?: string) { 
        const answers = document.querySelector('.answers')
        let div = document.createElement('div')
        let container = document.createElement('div')
        div.classList.add('answer')
        if (text && container) { 
            container.innerHTML = text
            container.style.backgroundColor = "#006880"
            container.style.color = "white"
            div.style.justifyContent = 'flex-end'
        }
        container.append(document.createElement('p'))
        div.append(container)
        answers?.append(div)
        this.current = container
    },

    insert: function() {
        let p = document.createElement('p')
        this.current?.append(p)
    }

}



export function useSSE(option: string) {
    const eventSource = new EventSource(`/sse?option=${option}`)
    // { withCredentials: true, headers: { 'Authorization': 'Bearer YOUR_TOKEN' } }

    eventSource.addEventListener('message', (event) => { 
        const message: IMessage = JSON.parse(event.data)
        if (message?.body?.text === "/") { bubble.insert() }
        else if (message?.body?.text === 'close') { eventSource.close() }
        else if (bubble.current && bubble.current.lastElementChild) { 
            bubble.current.lastElementChild.innerHTML += message?.body?.text 
        }

    } )

    eventSource.addEventListener('open', (event) => {
        console.log('Conexão aberta:', event);
        bubble.create()
    });

    eventSource.addEventListener('close', (event) => {
        console.log('Conexão fechada:', event);
        console.log(eventSource)
    });

    eventSource.addEventListener('error', (event) => {
        console.error('Erro na conexão WebSocket:', event);
        console.log(eventSource)
    });

    return eventSource
}