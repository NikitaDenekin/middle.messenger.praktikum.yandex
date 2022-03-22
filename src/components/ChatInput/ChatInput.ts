import Block from "../../utils/Block";

interface InputProps {
    placeholder: string;
    name: string;
    onSubmit: ()=> void;
}

export class ChatInput extends Block {
    private data: any;
    constructor({placeholder, name, onSubmit}: InputProps) {
        super({placeholder, name, onSubmit});
    }

    protected getStateFromProps() {
        this.state={
            onClick: ()=> {
                this.onClick()
            },
            onInputChange: () => {
                this.setData()
            }
        }
    }

    componentDidMount() {
        this.data = {}
    }


    setData() {
        if(this.refs.inputAddChat.value !== ""){
            this.refs.btnAddChat.classList.add('chat__input-btn-active')
        }
        else {
            this.refs.btnAddChat.classList.remove('chat__input-btn-active')
        }
        this.data[this.refs.inputAddChat.name]=this.refs.inputAddChat.value
    }

    onClick(){
        if(this.data[this.refs.inputAddChat.name] === '' || !this.data[this.refs.inputAddChat.name]){
            return
        }
        else {
            this.props.onSubmit(this.data)
            this.refs.inputAddChat.value = ''
        }
    }

    componentDidUpdate()  {
        return true
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="chat__input">
                {{{Input ref="inputAddChat" placeholder=placeholder name=name className="chat__input-search"
                         onChange=onInputChange}}}
                {{{Button ref="btnAddChat" className="chat__input-btn" onClick=onClick}}}
            </div>`;
    }
}
