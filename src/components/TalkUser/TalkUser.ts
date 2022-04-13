import Block from "../../utils/Block"
import ChatsController from "../../controllers/ChatsController"

interface InputProps {
  data?: {}
}

export class TalkUser extends Block {
  static componentName = "TalkUser"
  private newUserData: any
  constructor({ data }: InputProps) {
    super({ data })
  }

  protected getStateFromProps() {
    this.state = {
      addUserClick: () => {
        this.refs.inputAddUser.classList.toggle("chat__input-hidden")
        this.refs.inputDeleteUser.classList.add("chat__input-hidden")
      },
      addUserSubmit: async (data: any) => {
        this.newUserData.users.push(data.user_id)
        await ChatsController.addUserToChat(this.newUserData)
        this.newUserData = { users: [], chatId: this.props.data.id }
      },
      deleteUserClick: () => {
        this.refs.inputDeleteUser.classList.toggle("chat__input-hidden")
        this.refs.inputAddUser.classList.add("chat__input-hidden")
      },
      deleteUserSubmit: async (data: any) => {
        this.newUserData.users.push(data.user_id)
        await ChatsController.deleteUserFromChat(this.newUserData)
        this.newUserData = { users: [], chatId: this.props.data.id }
      },
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      this.element?.classList.remove("talk__user-visible")
    } else {
      this.element?.classList.add("talk__user-visible")
    }
    this.refs.inputAddUser.classList.add("chat__input-hidden")
    this.refs.inputDeleteUser.classList.add("chat__input-hidden")
    this.newUserData = { users: [], chatId: this.props.data.id }
  }

  componentDidUpdate() {
    return true
  }

  protected render(): string {
    // language=hbs
    return `<div class="talk__user">
            <div class="talk__user-info">
                <div class="talk__user-avatar"></div>
                <div class="talk__user-name">{{data.title}}</div>
            </div>
            <div class="talk__bar">
                {{{Button className="talk__bar-btn" onClick=addUserClick}}}
                {{{Button className="talk__bar-btn" onClick=deleteUserClick}}}
            </div>
            <div class="talk__user-container"> 
                {{{ChatInput ref="inputAddUser" name="user_id" placeholder="Добавить пользователя" onSubmit=addUserSubmit}}}
                {{{ChatInput ref="inputDeleteUser" name="user_id" placeholder="Удалить пользователя" onSubmit=deleteUserSubmit}}}
            </div>
        </div>`
  }
}
