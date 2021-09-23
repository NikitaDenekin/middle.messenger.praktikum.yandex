import Block from '../utils/Block'
import Form from '../components/Form'
import FormField from '../components/FormField'
import myCompile from '../utils/compile'
import Button from '../components/Button'
import ProfileInfo from '../components/profile/ProfileInfo'
import { profileTmp } from '../templates/profile/profile.tmp'
import { profileFormTmp } from '../templates/profile/profileForm.tmp'
import { profileFormFieldTmp } from '../templates/profile/profileFormField.tmp'
import { profileBtnTmpl } from '../templates/profile/profileBtn.tmp'
import { profileFormEditInfoTmp } from '../templates/profile/profileFormEditInfo.tmp'
import { profileFormEditPasswordTmp } from '../templates/profile/profileFormEditPassword.tmp'
import { profileButtonBackTmp } from '../templates/profile/buttonBack.tmp'

class Profile extends Block {
	constructor(props) {
		super('div', props)
	}

	componentDidMount() {
		this.props.buttonBack.setProps({
			events: {
				click: event => {
					event.preventDefault()
					this.props.onRenderPage()
				},
			},
		})
		if (this.props.buttonEdibInfo) {
			this.props.buttonEdibInfo.setProps({
				events: {
					click: event => {
						event.preventDefault()
						this.props.onEditInfo()
					},
				},
			})
		}
		if (this.props.buttonEditPassword) {
			this.props.buttonEditPassword.setProps({
				events: {
					click: event => {
						event.preventDefault()
						this.props.onEditPasssword()
					},
				},
			})
		}
		if (this.props.buttonExit) {
			this.props.buttonExit.setProps({
				events: {
					click: event => {
						event.preventDefault()
						this.props.onExit()
					},
				},
			})
		}
	}

	render() {
		const fragment = myCompile(profileTmp, { ...this.props })
		return fragment
	}
}

const profileData = {
	name: 'Иван',
	password: '*********',
	secondName: 'Иванов',
	email: 'ivanivanov@yandex.ru',
	phone: '89234567123',
	login: 'ivan',
	chatName: 'Ваня',
}

const profileComponentsData = {
	buttonEdibInfo: new Button({
		tmpl: profileBtnTmpl,
		buttonText: 'Изменить данные',
		events: {
			click: event => {},
		},
	}),
	buttonEditPassword: new Button({
		tmpl: profileBtnTmpl,
		buttonText: 'Изменить пароль',
		events: {
			click: event => {},
		},
	}),
	buttonExit: new Button({
		tmpl: profileBtnTmpl,
		buttonText: 'Выйти',
		events: {
			click: event => {
				console.log('Я работаю')
			},
		},
		classList: ['profile__btn-exit'],
	}),
	profileInfo: new ProfileInfo(profileData),
	buttonBack: new Button({ tmpl: profileButtonBackTmp }),
}

export const profile = new Profile(profileComponentsData)

export const profileEditInfo = new Profile({
	buttonBack: new Button({ tmpl: profileButtonBackTmp }),
	profileInfo: new Form({
		inputSelector: '.profile__item-value',
		tmpl: profileFormTmp,
		data: profileData,
		fields: [
			new FormField({
				data: profileData.email,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Почта',
				inputName: 'email',
				errorText: 'Введите email',
				regx: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
			}),
			new FormField({
				data: profileData.login,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Логин',
				inputName: 'login',
				errorText:
					'от 3 до 20 символов, латиница, может содержать цифры, а так же - и _',
				regx: /^[a-z0-9-_]{3,20}$/i,
			}),
			new FormField({
				data: profileData.name,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Имя',
				inputName: 'first_name',
				errorText: 'Латиница или Кирилица, первая буква Заглавная',
				regx: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
			}),
			new FormField({
				data: profileData.secondName,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Фамилия',
				inputName: 'second_name',
				errorText: 'Латиница или Кирилица, первая буква Заглавная',
				regx: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
			}),
			new FormField({
				data: profileData.phone,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Телефон',
				inputName: 'phone',
				errorText: 'Введите телефон',
				regx: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/,
			}),
		],
	}),
})

export const profileEditPassword = new Profile({
	buttonBack: new Button({ tmpl: profileButtonBackTmp }),
	profileInfo: new Form({
		inputSelector: '.profile__item-value',
		tmpl: profileFormTmp,
		data: profileData,
		fields: [
			new FormField({
				data: profileData.password,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Старый пароль',
				inputName: 'password',
				errorText:
					'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
				regx: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
			}),
			new FormField({
				data: profileData.password,
				inputSelector: '.profile__item-value',
				tmpl: profileFormFieldTmp,
				name: 'Новый пароль',
				inputName: 'password',
				errorText:
					'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
				regx: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
			}),
		],
	}),
})
