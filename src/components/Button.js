import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block.ts'

const buttonTmp = `<button class="form__btn form__btn-signup" type="submit">{{buttonText}}</button>`

export default class Button extends Block {
	constructor(props) {
		super('button', { tmpl: buttonTmp, ...props })
	}
	render() {
		return Handlebars.compile(buttonTmp)(this.props)
	}
}
