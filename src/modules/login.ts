import Block from '../utils/Block'
import myCompile from '../utils/compile'
import Form from '../components/Form'
import FormField from '../components/FormField'
import Link from '../components/Link'
import { loginTmp } from '../templates/login.tmp'
import { entryFormTmp } from '../templates/entryForm.tmp'
import { entryformFiemlTmp } from '../templates/entryFormField.tmp'
import { entryLinkTmp } from '../templates/entryLink.tmp'

class Login extends Block {
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
		this.props.form.setProps({
			onSubmit: () => {
				this.props.onSubmit()
			},
		})
	}

	render() {
		const fragment = myCompile(this.tmpl, { ...this.props })
		return fragment
	}
}

export const login = new Login({
	tmpl: loginTmp,
	link: new Link({
		tmpl: entryLinkTmp,
		buttonText: 'Зарегистрироваться?',
		path: 'signin',
	}),
	form: new Form({
		inputSelector: '.form__input',
		tmpl: entryFormTmp,
		fields: [
			new FormField({
				inputSelector: '.form__input',
				tmpl: entryformFiemlTmp,
				name: 'Логин',
				errorText: 'от 3 до 20 символов, латиница',
				regx: /^[a-z0-9-_]{3,20}$/i,
				inputName: 'login',
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
		buttonText: 'Войти',
	}),
})
