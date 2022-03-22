import {ChatsAPI, newChatData, newUserData} from '../api/ChatsAPI';
import { store } from '../store';
import {setChats, setError} from '../store/chats';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI()
  }

  async getChats() {
    try {
     const chats: any = await this.api.getChats();
     await Promise.all(chats.map(async (chat: any) => {
        const users = await this.getChatUsers(chat.id)
         const token = await this.getChatToken(chat.id)
         chat.users = users
         chat.token = token.token
     }));
     store.dispatch(setChats(chats))
        return chats
    } catch (e) {
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async getChatUsers (id: string) {
      try {
          const users = await this.api.getChatUsers(id);
          return users
      } catch (e) {
          store.dispatch(setError(e as { reason: string }));
      }
  }

  async getChatToken (chatId: string){
      try {
          const token = await this.api.getChatToken(chatId);
          return token
      } catch (e) {
          store.dispatch(setError(e as { reason: string }));
      }
  }

  async deleteUserFromChat (data: newUserData){
      try {
          await this.api.deleteUserFromChat(data);
          await this.getChats()
      } catch (e) {
          store.dispatch(setError(e as { reason: string }));
      }
  }

  async createChat(data: newChatData){
      try {
          await this.api.createChat(data)
          await this.getChats()
      } catch (e) {
          store.dispatch(setError(e as { reason: string }));
      }
  }

    async addUserToChat(data: newUserData){
        try {
            await this.api.addUserToChat(data)
            // await this.getChats()
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

}

export default new ChatsController();
