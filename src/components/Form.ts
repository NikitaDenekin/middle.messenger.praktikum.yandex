import Block from '../utils/Block'
import myCompile from '../utils/compile'

export default class Form extends Block {
	data: any
	inputList: any
	validList: any
	buttonSubmit: any
	constructor(props) {
		super('form', {
			events: {
				submit: event => {
					event.preventDefault()
					this.submit()
				},
			},
			...props,
		})
	}

	postRender() {
		this.data = {}
		this.validList = {}
		this.inputList = this._element.querySelectorAll(this.props.inputSelector)
		const self = this
		this.inputList.forEach(input => {
			this.data[input.name] = input.value
			this.validList[input.name] = false
			input.addEventListener('input', function (event) {
				self.data[event.target.name] = event.target.value
				self.checkValidity()
			})
		})
		this.buttonSubmit = this._element.getElementsByTagName('button')[0]
		if (this.buttonSubmit) {
			this.buttonSubmit.classList.add('form__btn-noactiv')
		}
	}

	componentDidMount() {
		if (Array.isArray(this.props.fields)) {
			this.props.fields.forEach(field => {
				field.setProps({
					onValidate: (name, value) => this.setValidList(name, value),
				})
			})
		}
	}

	checkValidity() {
		let result = true
		const validArr = Object.values(this.validList)
		validArr.forEach(item => {
			if (!item) {
				result = false
			}
		})
		if (result) {
			this.buttonSubmit.classList.remove('form__btn-noactiv')
		}
		return result
	}

	submit() {
		if (this.checkValidity()) {
			console.log(this.data)
			this.props.onSubmit()
		} else {
			console.log('Заполните поля формы')
		}
	}

	setValidList(name, value) {
		this.validList[name] = value
	}

	render() {
		const fragment = myCompile(this.tmpl, {
			...this.props,
			fields: [...this.props.fields],
		})
		return fragment
	}
}
