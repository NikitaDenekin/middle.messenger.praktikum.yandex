import { v4 as uuidv4 } from 'uuid'
import Handlebars from 'handlebars/dist/handlebars'
import Block from './Block'

export default function myCompile(
	tmpl: string,
	context: Record<string, any>
): DocumentFragment {
	const fragment = document.createElement('template')
	const components: Record<string, any> = {}

	function blockCompile(key, value) {
		if (value instanceof Block) {
			const id = 'id' + uuidv4()
			components[id] = value
			context[key] = `<div id="${id}"></div>`
		}
	}

	Object.entries(context).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach((item, i) => {
				if (item instanceof Block) {
					const id = 'id' + uuidv4()
					components[id] = item
					context[key].splice(i, 1, `<div id="${id}"></div>`)
				}
				return
			})
		} else {
			blockCompile(key, value)
		}
	})
	fragment.innerHTML = Handlebars.compile(tmpl)(context)

	Object.entries(components).forEach(([id, component]) => {
		const stub = fragment.content.querySelector(`[id=${id}]`)
		stub.replaceWith(component.getContent())
	})
	return fragment.content
}
