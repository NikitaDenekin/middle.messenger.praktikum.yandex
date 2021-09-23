import Block from '../../utils/Block'
import myCompile from '../../utils/compile'
import { companionTmp } from '../../templates/chat/companion.tmp'

export default class Companion extends Block {
	constructor(props) {
		super('button', props)
	}
	render() {
		const fragment = myCompile(companionTmp, this.props)
		return fragment
	}
}

// const compa = new Companion({
// 	name: 'Djon',
// 	lastMassage: 'Hi',
// 	time: '10:10',
// 	notReadMassage: '5',
// })

// document.body.appendChild(compa.getContent())
