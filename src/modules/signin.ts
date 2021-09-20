import Block from '../utils/Block'
import myCompile from '../utils/compile'
import Form from '../components/Form'
import FormField from '../components/FormField'
import Link from '../components/Link'
import Button from '../components/Button'
import { signinTmp } from '../templates/signin.tmp'
import { entryFormTmp } from '../templates/entryForm.tmp'
import { entryformFiemlTmp } from '../templates/entryFormField.tmp'
import { entryLinkTmp } from '../templates/entryLink.tmp'

class Signin extends Block {
	constructor(props) {
		super('div', props)
	}

	componentDidMount() {
		this.props.link.setProps({
			events: {
				click: event => {
					event.preventDefault()
					this.props.onRenderPage()
				},
			},
		})
	}

	render() {
		const fragment = myCompile(this.tmpl, { ...this.props })
		return fragment
	}
}

export const signin = new Signin({
	tmpl: signinTmp,
	link: new Link({
		tmpl: entryLinkTmp,
		buttonText: 'Войти',
		path: 'login',
	}),
	form: new Form({
		tmpl: entryFormTmp,
		fields: [
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Почта',
				inputName: 'email',
				errorText: 'Введите email',
				regx: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Логин',
				inputName: 'login',
				errorText:
					'от 3 до 20 символов, латиница, может содержать цифры, а так же - и _',
				regx: /^[a-z0-9-_]{3,20}$/i,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Имя',
				inputName: 'first_name',
				errorText: 'Латиница или Кирилица, первая буква Заглавная',
				regx: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Фамилия',
				inputName: 'second_name',
				errorText: 'Латиница или Кирилица, первая буква Заглавная',
				regx: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Телефон',
				inputName: 'phone',
				errorText: 'Введите телефон',
				regx: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Пароль',
				inputName: 'password',
				errorText:
					'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
				regx: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
			}),
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Пароль',
				inputName: 'password',
				errorText:
					'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
				regx: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
			}),
		],
		buttonText: 'Зарегистрироваться',
	}),
})
