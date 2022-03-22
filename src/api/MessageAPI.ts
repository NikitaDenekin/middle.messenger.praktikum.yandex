import BaseAPI from './BaseAPI';
import json = Mocha.reporters.json;
import {addMessagesToChat} from "../store/chats";
import {store} from "../store";

export interface socketData {
    userId: string,
    chatId: string,
    token: string
}

export interface newUserData {
    users: [],
    chatId: string
}


export class MessageAPI {
    private url: string;
    private socket: WebSocket;

    constructor() {
        this.url = 'wss://ya-praktikum.tech/ws/chats/'
    }

   startSocket(userId: string, chatId: string, token: string) {
        return new Promise ((resolve, reject) => {
            this.socket = new WebSocket(`${this.url}${userId}/${chatId}/${token}`)
            this.socket.addEventListener('message', event => {
                store.dispatch(addMessagesToChat({id: chatId, messages: JSON.parse(event.data)}))
            })
            this.socket.addEventListener('close', event => {
                if(event.wasClean){
                    console.log('Соединение закрыто чисто')
                }
                else {
                    console.log(`Код ${event.code} | Причина: ${event.reason}`)
                }
            })
            this.socket.addEventListener('open', event => {
                this.getOldMessages()
                resolve(true)
            })
        })
    }

    getOldMessages() {
        this.socket.send(
            JSON.stringify({
                content: "0",
                type: "get old"
            })
        )
    }

    sendMessage(message: string){
        this.socket.send(
            JSON.stringify({
                content: message,
                type: "message"
            })
        )
    }


    read: undefined;
    delete: undefined;
    create: undefined;
    update: undefined;
}
