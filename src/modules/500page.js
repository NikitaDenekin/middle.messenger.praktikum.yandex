import Handlebars from 'handlebars/dist/handlebars'
// const Handlebars = require('handlebars')

const source = `<div class="err-page">
\t\t\t\t<h1 class="err-page__title">500</h1>
\t\t\t\t<p class="err-page__text">Мы уже фиксим</p>
\t\t\t\t<button class="err-page__btn">Назад к чатам</button>
\t\t\t</div>`

const template = Handlebars.compile(source)

export const errPage500 = template()