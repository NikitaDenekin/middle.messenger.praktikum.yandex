import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';

import {regxValidate} from '../../utils/regxValidate'

export class SignupPage extends Block {
    private data: any;
    protected getStateFromProps() {
        this.state = {
            onSignUp: () => {
                this.onSignUp()
                // const data: any = {};
                //
                // Object.entries(this.refs as { [key: string]: HTMLInputElement }).forEach(([key, input]) => {
                //     data[key] = input.value;
                // });
                //
                // await AuthController.signup(data);
            },
            setData: (name: string, value: string) => {
                this.setData(name, value)
            },
            validData: false,
            loginData: {
                login: '',
                password: ''
            },
            onValidate: regxValidate,

        };
    }

    componentDidMount() {
        if (this.props.user.profile) {
            this.props.router.go('/profile')
        }
        this.data = {
            email: false,
            login: false,
            first_name: false,
            second_name: false,
            phone: false,
            password: false,
            passwordSecond: false
        }
    }

    async onSignUp (){
        let valideData = false
        Object.entries(this.data).forEach(([key, value]) => {
            if(!value){
                valideData = false
            }
            else {
                valideData = true
            }
        })
        if(this.data.password !== this.data.passwordSecond || !valideData){
            this.showError()
        }
        else {
            await AuthController.signup(this.data)
        }
    }

    showError(){
        console.log('error')
    }

    setData(name: string, value: string) {
        this.data = {...this.data, [name]: value}
    }

    componentDidUpdate() {
        if (this.props.user.profile) {
            this.props.router.go('/')
        }

        return true;
    }

    render() {
        // language=hbs
        return `
            <div class="entry">
                <div class="entry__container">
                    <h2 class="entry__title">Регистрация</h2>
                    {{{FormField type="mail" title="Почта" name="email" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.mail}}}
                    {{{FormField type="text" title="Логин" name="login" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.login}}}
                    {{{FormField type="text" title="Имя" name="first_name" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.first_name}}}
                    {{{FormField type="text" title="Фамилия" name="second_name" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.second_name}}}
                    {{{FormField type="phone" title="Телефон" name="phone" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.phone}}}
                    {{{FormField type="password" title="Пароль" name="password" className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.password}}}
                    {{{FormField type="password" title="Пароль" name="passwordSecond"
                                 className="form__input entry__input"
                                 setData=setData
                                 validate=onValidate.password}}}

                        <!--            {{#if user.error }}-->
                    <!--                <span style="color: red">{{user.error.reason}}</span><br/>-->
                        <!--            {{/if}}-->
                    {{{Button text="Зарегистрироваться" onActive=validData onClick=onSignUp}}} {{{Link text="Войти" className="entry__btn"
                                                                                    to="/login"}}}
                </div>
            </div>`;
    }
}

