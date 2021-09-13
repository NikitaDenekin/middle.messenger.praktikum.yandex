import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block.ts'
import { loginTmp } from '../templates/login.tmp.js'
import { loginForm } from '../components/LoginForm.js'

// export default class Login extends Block {
// 	constructor(props) {
// 		super('div', props)
// 	}
// 	render() {
// 		return Handlebars.compile(loginTmp)({ form: this.props.form.render() })
// 	}
// }

// const login = new Login({
// 	form: loginForm,
// })

// function render(query, block) {
// 	const root = document.querySelector(query)

// 	root.appendChild(block.getContent())
// 	return root
// }

// render('.main', login)
