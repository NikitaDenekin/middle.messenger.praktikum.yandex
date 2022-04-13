import Block from "../../utils/Block"

interface InputProps {
  onChange?: () => void
  setData?: () => void
  type?: "text" | "password" | "email"
  placeholder?: string
  value?: string
  className?: string
  validate?: RegExp
  span?: any
  name?: string
  title?: string
}

export class MessageField extends Block {
  static componentName = "MessageField"
  private span: any
  private regx: any
  private btn: any

  constructor({
    onChange = () => {},
    type = "text",
    placeholder,
    className,
    name,
    setData,
  }: InputProps) {
    super({
      type,
      name,
      setData,
      placeholder,
      className,
      events: { input: onChange },
    })
  }

  protected getStateFromProps() {
    this.state = {
      onChange: () => {
        this.inputChange()
      },
      className: "",
      type: "",
      name: "",
      messageData: {
        message: "",
      },
    }
  }

  componentDidMount() {
    this.span = (this.element as HTMLElement).querySelector(
      ".form__input-error"
    )
    this.btn = (this.element as HTMLElement).querySelector(".talk__btn-submit")
    this.btn.addEventListener("click", () => {
      this.sendMessage()
    })
  }

  inputChange = () => {
    this.state.messageData.message = (this.refs.input as HTMLInputElement).value
  }

  sendMessage() {
    console.log(this.state.messageData)
    this.state.messageData.message = ""
    ;(this.refs.input as HTMLInputElement).value = ""
  }

  protected render(): string {
    // language=hbs
    return `
            <div class="talk__reply">
                <label class="form__field talk__form-field">
                    {{{Input type=type className=className name=name ref="input" onChange=onChange}}}
                    <span class='form__input-error talk__input-error'>{{errorText}}</span>
                </label>
                <button type="button" class="talk__btn-submit">{{buttonText}}</button>
            </div>`
  }
}
