import { Action } from "../utils/store"
import { store } from "./index"

const SET_CHATS = "chats/SET"
const ADD_MESSAGE_CHATS = "chats/ADD"
const DELETE_CHATS = "chats/DELETE"
const SET_ERROR = "chats/SET_ERROR"

export const setChats = (chats: any) => ({
  type: SET_CHATS,
  payload: chats,
})

export const addMessagesToChat = (messagesData: any) => ({
  type: ADD_MESSAGE_CHATS,
  payload: messagesData,
})

export const deleteChats = () => ({
  type: DELETE_CHATS,
})

export const setError = (error: { reason: string }) => ({
  type: SET_ERROR,
  payload: error,
})

export default (state = { all: null, error: null }, action: Action) => {
  switch (action.type) {
    case SET_CHATS:
      return { error: null, all: action.payload }
    case ADD_MESSAGE_CHATS:
      // state.all.map((chat) => {
      //   if (chat.id === action.payload.id) {
      //     if (!chat.messages) {
      //       chat.messages = action.payload.messages
      //     } else {
      //       chat.messages.push(action.payload.messages)
      //     }
      //   }
      // })
      return { error: null, all: state.all }
    case DELETE_CHATS:
      return { all: null, error: null }
    case SET_ERROR:
      return { error: action.payload, all: null }
    default:
      return state
  }
}
