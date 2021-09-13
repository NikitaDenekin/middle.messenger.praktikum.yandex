import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block.ts'
import { formTmp } from '../templates/form.tmp.js'
// import FormField from './FormField.js'
import Button from './Button.js'
import myCompile from '../utils/compile.ts'

// const fieldsData = [
//
//
// 	{
// 		name: 'логин',
// 		inputName: 'login',
// 	},
// 	{
// 		name: 'пароль',
// 		inputName: 'passwod',
// 	},
// ]

// const fieldsArr = []
// fieldsData.forEach(item => {
// 	const newField = new FormField(item)
// 	fieldsArr.push(newField)
// })

class LoginForm extends Block {
	constructor(props) {
		super('form', {
			attributes: { class: 'form entry__form-signup' },
			...props,
		})
	}
	render() {
		const fragment = myCompile(this.tmpl, {
			name: 'form',
			button: new Button({
				buttonText: 'Нажми на меня',
				attributes: {
					class: 'form__btn form__btn-signup',
					type: 'submit',
				},
				events: {
					click: event => {
						console.log('Я работаю')
					},
				},
			}),
		})

		this._element.appendChild(fragment) // this.root — корневой элемент компонента, можно брать просто fragment.firstChild например

		// можем тут навешивать ивенты, дергать lifecycle хуки, манипулировать DOM и тд и тп
		console.log(this._element)
		return this._element
	}
}

export const loginForm = new LoginForm({
	tmpl: formTmp,
})

document.body.appendChild(loginForm.render())
