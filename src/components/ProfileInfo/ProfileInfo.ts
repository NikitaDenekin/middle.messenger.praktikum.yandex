import Block from "../../utils/Block"

interface InputProps {
  data: {}
  condition: string
}

export class ProfileInfo extends Block {
  static componentName = "ProfileInfo"
  constructor({ data, condition }: InputProps) {
    super({ data, condition })
  }

  componentDidMount() {
    if (this.props.condition === "info") {
      this.element?.classList.remove("profile__info-hidden")
    } else {
      this.element?.classList.add("profile__info-hidden")
    }
  }

  protected render(): string {
    // language=hbs
    return `
            <div class="profile__info">
                <dl class="profile__item">
                    <dt class="profile__item-name">Почта</dt>
                    <dd class="profile__item-value">{{data.email}}</dd>
                </dl>
                <dl class="profile__item">
                    <dt class="profile__item-name">Логин</dt>
                    <dd class="profile__item-value">{{data.login}}</dd>
                </dl>
                <dl class="profile__item">
                    <dt class="profile__item-name">Имя</dt>
                    <dd class="profile__item-value">{{data.first_name}}</dd>
                </dl>
                <dl class="profile__item">
                    <dt class="profile__item-name">Фамилия</dt>
                    <dd class="profile__item-value">{{data.second_name}}</dd>
                </dl>
                <dl class="profile__item">
                    <dt class="profile__item-name">Имя в чате</dt>
                    <dd class="profile__item-value">{{data.display_name}}</dd>
                </dl>
                <dl class="profile__item">
                    <dt class="profile__item-name">Телефон</dt>
                    <dd class="profile__item-value">{{data.phone}}</dd>
                </dl>
            </div>`
  }
}
