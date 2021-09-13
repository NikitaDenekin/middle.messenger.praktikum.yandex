import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block.ts'

const formFieldTmp = `
<p class='form__input-title'>{{name}}</p>
<input type='text' name={{inputName}}  class='form__input entry__input' />
<span class='form__input-error'></span>`

export default class FormField extends Block {
	constructor(props) {
		super('label', { attributes: { class: 'form__field' }, ...props })
	}
	render() {
		return Handlebars.compile(formFieldTmp)(this.props)
	}
}
