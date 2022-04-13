import Block from "../../utils/Block"
import AuthController from "../../controllers/AuthController"

import { regxValidate } from "../../utils/regxValidate"

export class LoginPage extends Block {
  static componentName = "LoginPage"
  private data: any
  protected getStateFromProps() {
    this.state = {
      onValidate: regxValidate,
      setData: (name: string, value: string) => {
        this.setData(name, value)
      },
      onLogin: () => {
        this.onLogin()
      },
    }
  }

  componentDidMount() {
    if (this.props.user.profile) {
      this.props.router.go("/")
    }
    this.data = {
      login: false,
      password: false,
    }
  }

  componentDidUpdate() {
    if (this.props.user.profile) {
      this.props.router.go("/")
    }

    return true
  }

  async onLogin() {
    let valideData = false
    Object.entries(this.data).forEach(([key, value]) => {
      if (!value) {
        valideData = false
      } else {
        valideData = true
      }
    })
    if (!valideData) {
      this.showError()
    } else {
      await AuthController.login(this.data)
    }
  }

  showError() {
    console.log("error")
  }

  setData(name: string, value: string) {
    this.data = { ...this.data, [name]: value }
  }

  render() {
    // language=hbs
    return `
            <div class="entry">
                <div class="entry__container">
                    <h2 class="entry__title">Вход</h2>
                    {{{FormField type="text" title="Логин" name="login" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.login}}}
                    {{{FormField type="password" title="Пароль" name="password" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.password}}}
                    {{#if user.error }}
                        <span style="color: red">{{user.error.reason}}</span><br/>
                    {{/if}}
                    {{{Button text="Войти" onClick=onLogin}}} {{{Link text="Зарегистрироваться?" className="entry__btn"
                                                                      to="/signup"}}}
                </div>
            </div>`
  }
}
