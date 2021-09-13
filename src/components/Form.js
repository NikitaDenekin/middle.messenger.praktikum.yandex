import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block.js'
import { formTmp } from '../templates/form.tmp.js'
import formField from '../templates/formField.tmp'

export default class Form extends Block {
	constructor() {
		super('form', {
			name: 'form',
			className: '',
		})
	}
	render() {
		return Handlebars.compile(formTmp)()
	}
}

// const main = document.querySelector('.main')
// const template = Handlebars.compile(formTmp)()

// let divRazmetka = document.createElement('div')
// divRazmetka.classList.add('helow')
// main.appendChild(divRazmetka)
// // divRazmetka.appendChild('div')

// divRazmetka.innerHTML = template

// const data = {
// 	className: 'elieee',
// 	seit: divRazmetka,
// 	chieldTmp: [],
// }

// function templitor(template) {
// 	return Handlebars.compile(template)()
// }

// function render(tag, data) {
// 	const tagMesto = document.createElement('div')
// 	tagMesto.classList.add(data.className)
// 	// chieldTmp.forEach(element => {})
// 	data.seit.appendChild = tagMesto
// }

// render('div', data)
