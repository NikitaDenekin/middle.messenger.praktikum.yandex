import Block from '../utils/Block'
import myCompile from '../utils/compile'

export default class Button extends Block {
	constructor(props) {
		super('button', props)
	}
	render() {
		if (this.props.classList) {
			this.classList = this.props.classList
		}
		const fragment = myCompile(this.tmpl, this.props)
		return fragment
	}
}
