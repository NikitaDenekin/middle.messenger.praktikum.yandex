import Handlebars from 'handlebars/dist/handlebars'
import Block from '../utils/Block'
import myCompile from '../utils/compile'

export default class FormField extends Block {
	input: any
	erroeField: any
	validityStats: boolean
	regx: any
	constructor(props) {
		super('label', props)
		this.validityStats = false
		this.regx = this.props.regx || ''
	}

	postRender() {
		this.input = this._element.querySelector(this.props.inputSelector)
		this.erroeField = this._element.querySelector('.form__input-error')
		this.validity()
	}

	validity() {
		this.input.addEventListener('input', function (event) {
			if (event.target.value.match(self.regx)) {
				self.props.onValidate(event.target.name, true)
				self.erroeField.classList.remove('form__input-error-visible')
			} else {
				self.erroeField.classList.add('form__input-error-visible')
			}
		})
		const self = this
		this.input.onblur = function () {
			if (this.value.match(self.regx)) {
				this.validityStats = true
				self.props.onValidate(this.name, true)
				self.erroeField.classList.remove('form__input-error-visible')
			} else {
				this.validityStats = false
				self.props.onValidate(this.name, false)
				self.erroeField.classList.add('form__input-error-visible')
			}
		}
		this.input.onfocus = function () {
			if (!this.value.match(self.regx)) {
				self.erroeField.classList.add('form__input-error-visible')
			}
		}
	}

	render() {
		const fragment = myCompile(this.tmpl, this.props)
		return fragment
	}
}
