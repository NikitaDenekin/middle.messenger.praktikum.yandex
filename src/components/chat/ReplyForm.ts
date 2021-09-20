import Form from '../../components/Form'
import myCompile from '../../utils/compile'
import { replyForm } from '../../templates/chat/replyForm.tmp'

export default class ReplyForm extends Form {
	constructor(props) {
		super(props)
	}
	render() {
		const fragment = myCompile(replyForm, this.props)
		return fragment
	}
}

// const comp = new ReplyForm({
// 	name: 'Djon',
// 	lastMassage: 'Hi',
// 	time: '10:10',
// 	notReadMassage: '5',
// })

// document.body.appendChild(comp.getContent())
