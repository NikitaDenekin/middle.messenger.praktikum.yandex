import EventBus from './event-bus'
import Handlebars from 'handlebars/dist/handlebars'
import { v4 as uuidv4 } from 'uuid'

export default class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	}

	_element = null
	_meta = null
	props: {
		id: any
		events?: any
		tmpl?: string
		user?: string
		classList?: string[]
		regx?: any
		fields?: any
		onValidate?
		link?: any
		onRenderPage?: any
		onSubmit?: any
		form?: any
		companions?
		talkMassages?
		profileBar?
		inputSelector?
		buttonBack?
		buttonExit?
		onExit?
		buttonEdibInfo?
		buttonEditPassword?
		onEditInfo?
		onEditPasssword?
	}
	eventBus: () => any
	tmpl?: string
	classList: string[]

	constructor(tagName: string = 'div', props: object = {}) {
		const eventBus = new EventBus()
		this._meta = {
			tagName,
			props,
		}

		this.props = this._makePropsProxy(props)
		this.tmpl = this.props.tmpl

		this.eventBus = () => eventBus

		this._registerEvents(eventBus)
		eventBus.emit(Block.EVENTS.INIT)
	}

	_registerEvents(eventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
	}

	_createResources() {
		const { tagName } = this._meta
		this._element = this._createDocumentElement(tagName)
	}

	init() {
		this._createResources()
		this.eventBus().emit(Block.EVENTS.FLOW_CDM)
	}

	_componentDidMount() {
		this.componentDidMount()
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
	}

	componentDidMount() {}

	_componentDidUpdate(oldProps, newProps) {
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
	}

	componentDidUpdate() {}

	postRender() {}

	setProps = nextProps => {
		if (!nextProps) {
			return
		}

		Object.assign(this.props, nextProps)
	}

	_addEvents() {
		const { events = {} } = this.props
		Object.keys(events).forEach(eventName => {
			this._element.addEventListener(eventName, events[eventName])
		})
	}

	_addClass() {
		if (this.classList) {
			this.classList.forEach(item => {
				this._element.classList.add(item)
			})
		}
		return
	}

	getElement() {
		return this._element
	}

	_render() {
		const prevElement = this._element
		const block: any = this.render()
		this._element = block.firstChild
		if (prevElement.parentElement) {
			prevElement.replaceWith(this._element)
		}
		this._addEvents()
		this._addClass()
		this.postRender()
	}

	render() {}

	getContent() {
		return this._element
	}

	_makePropsProxy(props) {
		const proxyProps = new Proxy(props, {
			get(target, prop) {
				if (prop[0] === '_') {
					throw new Error('Нет прав')
				}

				const value = target[prop]
				return typeof value === 'function' ? value.bind(target) : value
			},
			set: (target, prop, value) => {
				if (prop[0] === '_') {
					throw new Error('Нет прав')
				}
				const oldProps = Object.assign({ ...target })
				target[prop] = value
				this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target)
				return true
			},
			deleteProperty(target, prop) {
				throw new Error('Нет прав')
			},
		})

		return proxyProps
	}

	_createDocumentElement(tagName) {
		return document.createElement(tagName)
	}

	show(hideClass) {
		this._element.classList.add(hideClass)
	}

	hide(hideClass) {
		this._element.classList.remove(hideClass)
	}
}
