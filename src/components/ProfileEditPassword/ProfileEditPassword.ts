import Block from "../../utils/Block"
import AuthController from "../../controllers/AuthController"

import { regxValidate } from "../../utils/regxValidate"

interface InputProps {
  condition: string
  setData: () => void
  onSubmit: () => void
}

export class ProfileEditPassword extends Block {
  static componentName = "ProfileEditPassword"
  private data: any

  constructor({ condition, setData, onSubmit }: InputProps) {
    super({ onSubmit, setData, condition })
  }

  protected getStateFromProps() {
    this.state = {
      validate: regxValidate,
    }
  }

  componentDidMount() {
    if (this.props.condition === "editPassword") {
      this.element?.classList.remove("profile__info-hidden")
    } else {
      this.element?.classList.add("profile__info-hidden")
    }
  }

  setData(name: string, value: string) {
    this.data = { ...this.data, [name]: value }
  }

  protected render(): string {
    // language=hbs
    return `
            <div class="profile__info">
                {{{ProfileFormField title="Старый пароль" name="oldPassword" validate=validate.password 
                                    setData=setData}}}
                {{{ProfileFormField title="Новый пароль" name="newPassword" validate=validate.password 
                                    setData=setData}}}
                {{{Button text="сохранить" onClick=onSubmit}}}
            </div>`
  }
}
