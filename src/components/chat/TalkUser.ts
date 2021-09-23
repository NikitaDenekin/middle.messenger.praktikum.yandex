import Block from '../../utils/Block'
import myCompile from '../../utils/compile'
import { talkUserTmp } from '../../templates/chat/talkUser.tmp'

export default class TalkUser extends Block {
	constructor(props) {
		super('button', props)
	}
	render() {
		const fragment = myCompile(talkUserTmp, this.props)
		return fragment
	}
}

// const talkUser = new TalkUser({
// 	name: 'djon',
// })

// document.body.appendChild(talkUser.getContent())
