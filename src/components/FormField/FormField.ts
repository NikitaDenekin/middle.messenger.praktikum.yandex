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

export class FormField extends Block {
  static componentName = "FormField"
  private span: any
  private regx: any
  constructor({
    onChange = () => {},
    type = "text",
    placeholder,
    value,
    className,
    name,
    validate,
    setData,
    title,
  }: InputProps) {
    super({
      type,
      validate,
      title,
      name,
      setData,
      placeholder,
      value,
      className,
      events: { input: onChange },
    })
  }

  protected getStateFromProps() {
    this.state = {
      onChange: () => {
        this.checkValidation()
      },
      className: "",
      type: "",
      name: "",
    }
  }

  componentDidMount() {
    this.span = (this.element as HTMLElement).querySelector(
      ".form__input-error"
    )
    this.regx = this.props.validate.regx
  }

  checkValidation = () => {
    if ((this.refs.input as HTMLInputElement).value.match(this.regx)) {
      this.span.classList.remove("form__input-error-visible")
      this.props.setData(
        (this.refs.input as HTMLInputElement).name,
        (this.refs.input as HTMLInputElement).value
      )
    } else {
      this.span.classList.add("form__input-error-visible")
      this.props.setData((this.refs.input as HTMLInputElement).name, false)
    }
  }

  protected render(): string {
    // language=hbs
    return `<label class="form__field">
            <p class='form__input-title'>{{title}}</p>
            {{{Input type=type className=className name=name ref="input" onChange=onChange}}}
            <span class='form__input-error'>{{validate.error}}</span>
        </label>`
  }
}
