import Block from "../../utils/Block";

interface ChatMessagesProps {
    messages: [];
    onSendMessage: () => void;
}

export class ChatMessages extends Block {
    private message: any;
    constructor({
                    messages, onSendMessage
                }: ChatMessagesProps) {
        super({messages, onSendMessage});
    }

    protected getStateFromProps() {
        this.state = {
            onSend: ()=> {
                this.sendMessage()
            },
            onChange: () => {
                this.onInputChange()
            },
            chat: []
        }
    }

    componentDidMount() {
        this.message = ''
        this.state.chat = [...this.props.messages].reverse()
        this.field = this.element?.querySelector('.talk__reply')
        if(this.props.messages.length !== 0){
            this.field.classList.remove('hidden')
        }
    }

    sendMessage(){
        this.props.onSendMessage(this.message)
        this.refs.input.value = ''
    }

    onInputChange(){
        this.message = this.refs.input.value
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="chat__messages">
                {{#each chat}}
                    <p class="chat__message">{{this.content}}</p>
                {{/each}}
                <div class="talk__reply hidden">
                    <label class="form__field talk__form-field">
                        {{{Input type="text" placeholder="Сообщение" className="talk__input talk__input-message"
                                 name="message" ref="input" onChange=onChange}}}
                        <span class='form__input-error talk__input-error'>{{errorText}}</span>
                    </label>
                    {{{Button className="talk__btn-submit" onClick=onSend}}}
                </div>
            </div>        
`;
    }
}
