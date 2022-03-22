import Block from '../../utils/Block';
import ChatsController from "../../controllers/ChatsController";
import MessageControllers from "../../controllers/MessageController";
import {render} from "sass";

export class HomePage extends Block {

    protected getStateFromProps() {
        this.state = {
            chats: [],
            createChat: async (data: any) => {
                await ChatsController.createChat(data)
            },
            onSendMessage: ()=> {

            },
            currentChat: [],
            companionOnClick: (data: {}) => {
                this.setCurrentUser(data)
            },
            currentUser: {},
            setMessage: () => {
                this.setMessage()
            }

        }
    }


    async createChat(data: any){
            await ChatsController.createChat(data)
            console.log(data)
    }

    async getChats() {

        const chatsList: [] = await ChatsController.getChats()
        for( const chat of chatsList){
            const controller = new MessageControllers()
            await controller.startSocket(this.props.user.id, chat.id, chat.token)
            chat.onSendMessage = (message: string) => {
                controller.sendMessage(message)
            }
        }
        this.state.chats = chatsList
    }


    componentDidMount() {
        if (!this.props.user) {
            this.props.router.go('/login')
            return
        }
        this.getChats()
    }

    componentDidUpdate() {
        if (!this.props.user) {
            this.props.router.go('/login')
        }
        return true
    }


    setCurrentUser(data: any) {
        this.state.currentUser = data
        this.state.currentChat = data.messages
        this.state.onSendMessage = data.onSendMessage
    }

    onSendMessage(){

    }


    render() {
        // language=hbs
        return `
            <div class="chat">
                <div class="chat__menu">
                    <div class="chat__bar">
                        {{{Link text="Профиль >" className="chat__btn-profile"
                                to="/profile"}}}
                        {{{ChatInput name="title" placeholder="Новый чат" onSubmit=createChat}}}
    
                    </div>
                    <ul class="chat__list">
                        {{#each chats}}
                            {{{Companion data=this onSetUser=../companionOnClick}}}
                        {{/each}}
                    </ul>
                </div>
                <div class="chat__talk talk">
                    {{{TalkUser data=currentUser}}}
                    {{{ChatMessages messages=currentChat onSendMessage=onSendMessage}}}
                </div>
            </div>`;
    }
}
