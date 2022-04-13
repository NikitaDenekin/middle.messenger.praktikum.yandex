import Block from "../../utils/Block"

interface InputProps {
  onSetUser: () => void
  data: {}
}

export class Companion extends Block {
  static componentName = "Companion"
  constructor({ data, onSetUser }: InputProps) {
    super({ data, onSetUser })
  }

  protected getStateFromProps() {
    this.state = {}
  }

  componentDidMount() {
    this.element?.addEventListener("click", () => {
      this.props.onSetUser(this.props.data)
    })
  }

  protected render(): string {
    // language=hbs
    return `
            <li class="chat__companion companion">
                <div class="companion__avatar"></div>
                {{#if data.last_message}}
                    <p class="companion__name">{{data.last_message.user.first_name}}</p>
                    <p class="companion__last-massage">{{data.last_message.content}}</p>
                    {{else}}
                    <p class="companion__name">{{data.title}}</p>
                    <p class="companion__last-massage">Здесь пока ни чего нет</p>
                {{/if}}
                
            </li>`
  }
}
