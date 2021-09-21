import Block from '../utils/Block'
import myCompile from '../utils/compile'
import Companion from '../components/chat/Companion'
import Link from '../components/Link'
import TalkUser from '../components/chat/TalkUser'
import Massage from '../components/chat/Massage'
import Form from '../components/Form'
import FormField from '../components/FormField'
import { chatTmp } from '../templates/chat/chat.tmp'
import { replyFormFiemlTmp } from '../templates/chat/replyFormField.tmp'
import { replyForm } from '../templates/chat/replyForm.tmp'
import { profileLinkTmp } from '../templates/chat/profileLink.tmp'

class Chat extends Block {
	constructor(props) {
		super('div', props)
	}

	componentDidMount() {
		this.props.link.setProps({
			events: {
				click: event => {
					event.preventDefault()
					this.props.onRenderPage()
				},
			},
		})
	}

	render() {
		const fragment = myCompile(chatTmp, {
			...this.props,
			talkMassages: [...this.props.talkMassages],
			companions: [...this.props.companions],
		})
		return fragment
	}
}

const companionsData = [
	{
		name: 'Djon',
		lastMassage: 'Hi',
		time: '10:10',
		notReadMassage: '5',
	},
	{
		name: 'Ivan',
		lastMassage: 'Yep',
		time: '10:10',
		notReadMassage: '5',
	},
]

const massageData = [
	{
		user: 'my',
		massageText: 'Hi',
	},
	{
		user: 'dontMy',
		massageText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores harum ipsum maiores nam neque officiis voluptas. Esse et 	excepturi laboriosam perferendis veniam. Accusamus, vero?',
	},
]

export const chat = new Chat({
	link: new Link({
		tmpl: profileLinkTmp,
	}),
	talkMassages: massageData.map(data => new Massage(data)),
	companions: companionsData.map(data => new Companion(data)),
	talkUser: new TalkUser({
		name: 'djon',
	}),
	replyForm: new Form({
		inputSelector: '.talk__input',
		onSubmit: () => {},
		tmpl: replyForm,
		fields: [
			new FormField({
				inputSelector: '.talk__input',
				tmpl: replyFormFiemlTmp,
				name: 'message',
				errorText: '',
				regx: '',
				inputName: 'message',
			}),
		],
		buttonText: '',
	}),
})
