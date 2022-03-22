import BaseAPI from './BaseAPI';

export interface newChatData {
  title: string;
}

export interface newUserData {
  users: [],
  chatId: string
}


export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(){
    return this.http.get('/');
  }

  getChatToken(chatId: string){
    return this.http.post(`/token/${chatId}`);
  }

  getChatUsers(id : string){
    return this.http.get(`/${id}/users`);
  }

  deleteUserFromChat(data: newUserData){
    return this.http.delete('/users', data)
  }

  createChat(data: newChatData){
    return this.http.post('/', data)
  }

  addUserToChat(data: newUserData){
    return this.http.put('/users', data)
  }


  read: undefined;
  delete: undefined;
  create: undefined;
  update: undefined;
}
