import { v4 as uuidv4 } from 'uuid'
import Handlebars from 'handlebars/dist/handlebars'
import Block from './Block'

export default function myCompile(
	tmpl: (ctx: Record<string, any>) => string,
	context: Record<string, any>
): DocumentFragment {
	const fragment = document.createElement('template')
	const components: Record<string, Block> = {}

	Object.entries(context).forEach(([key, value]) => {
		// Определяем, какие из переменных контекста — компоненты. Можно так не запариваться и просто передавать их отдельным параметром функции
		if (value instanceof Block) {
			const id = 'id' + uuidv4()
			components[id] = value // сохраняем компонент
			context[key] = `<div id="${id}"></div>` // делаем заглушку
		}
	})
	fragment.innerHTML = Handlebars.compile(tmpl)(context)
	Object.entries(components).forEach(([id, component]) => {
		const stub = fragment.content.querySelector(`[id=${id}]`)

		stub.replaceWith(component.render()) // render должен вернуть HTMLElement
	})
	return fragment.content
}

// function render() {
// 	const fragment = compile(this.tmpl, {
// 		name: 'John Doe',
// 		button: new Button({
// 			label: 'Logout',
// 			events: { click: this.logout },
// 		}),
// 	})

// 	this.root.appendChild(fragment) // this.root — корневой элемент компонента, можно брать просто fragment.firstChild например

// 	// можем тут навешивать ивенты, дергать lifecycle хуки, манипулировать DOM и тд и тп

// 	return this.root
// }
