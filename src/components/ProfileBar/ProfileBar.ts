import Block from "../../utils/Block"
import AuthController from "../../controllers/AuthController"

import { regxValidate } from "../../utils/regxValidate"

interface InputProps {
  condition: string
  onEditInfo: () => void
  onEditPassword: () => void
  onLogOut: () => void
}

export class ProfileBar extends Block {
  static componentName = "ProfileBar"
  private data: any

  constructor({ condition, onEditInfo, onEditPassword, onLogOut }: InputProps) {
    super({ condition, onEditInfo, onEditPassword, onLogOut })
  }

  protected getStateFromProps() {
    this.state = {}
  }

  componentDidMount() {
    if (this.props.condition === "info") {
      this.element?.classList.remove("profile__bar-hidden")
    } else {
      this.element?.classList.add("profile__bar-hidden")
    }
  }

  protected render(): string {
    // language=hbs
    return `
            <div class="profile__bar">
                {{{Button className="profile__btn" text="Изменить данные" onClick=onEditInfo}}}
                {{{Button className="profile__btn" text="Изменить пароль" onClick=onEditPassword}}}
                {{{Button className="profile__btn" text="Выйти" onClick=onLogOut}}}
            </div>`
  }
}
