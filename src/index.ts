import './style.scss'
import { login } from './modules/login'
import { signin } from './modules/signin'
import { chat } from './modules/chat'
import {
	profile,
	profileEditPassword,
	profileEditInfo,
} from './modules/profile'

const root = document.querySelector('.main')

function render(block) {
	root.innerHTML = ''
	root.appendChild(block.getContent())
}

render(login)

login.setProps({
	onRenderPage: () => render(signin),
	onSubmit: () => render(chat),
})
signin.setProps({
	onRenderPage: () => {
		render(login)
	},
})

chat.setProps({
	onRenderPage: () => {
		render(profile)
	},
})

profile.setProps({
	onRenderPage: () => {
		render(chat)
	},
	onEditInfo: () => {
		render(profileEditInfo)
	},
	onEditPasssword: () => {
		render(profileEditPassword)
	},
	onExit: () => {
		render(login)
	},
})

profileEditInfo.setProps({
	onRenderPage: () => {
		render(profile)
	},
})

profileEditPassword.setProps({
	onRenderPage: () => {
		render(profile)
	},
})
