export type IMessage = {
    origin: 'client' | 'server'
    body: {
        option: 'a' | 'b' | 'c'
        text?: string
    }
}