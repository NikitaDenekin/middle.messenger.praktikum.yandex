import Block from "../../utils/Block"

interface ButtonProps {
  text: string
  className: string
  onClick: () => void
}

export class Button extends Block {
  static componentName = "Button"
  constructor({ text, className, onClick }: ButtonProps) {
    super({ text, className, events: { click: onClick } })
  }

  componentDidMount() {}

  protected render(): string {
    // language=hbs
    return `{{#if className}}
            <button class={{className}} type="button">{{text}}</button>
        {{else}}
            <button class="form__btn form__btn-signup" type="button">{{text}}</button>
        {{/if}}

        `
  }
}
