import {MessageAPI } from '../api/MessageAPI';
import { store } from '../store';
import {addMessagesToChat, setChats, setError} from '../store/chats';
import {setUser} from "../store/user";

export default class MessageController {
  private api: MessageAPI;

  constructor() {
    this.api = new MessageAPI()
  }

 async startSocket (userId: string, chatId: string, token: string) {
        try{
            await this.api.startSocket(userId, chatId, token)
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
  }

  sendMessage(message: string){
      this.api.sendMessage(message)
  }



}

