import Block from '../../utils/Block'
import myCompile from '../../utils/compile'
import { massage } from '../../templates/chat/massage.tmp'

export default class Massage extends Block {
	constructor(props) {
		super('div', props)
	}

	render() {
		const fragment = myCompile(massage, this.props)
		if (this.props.user === 'my') {
			this.classList = ['talk__message-right']
		} else {
			this.classList = ['talk__message-left']
		}
		return fragment
	}
}

// const comp = new Massage({
// 	massageText:
// 		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores harum ipsum maiores nam neque officiis voluptas. Esse et 	excepturi laboriosam perferendis veniam. Accusamus, vero?',
// })

// document.body.appendChild(comp.getContent())
