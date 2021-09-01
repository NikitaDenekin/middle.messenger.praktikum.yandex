import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="err-page">
        <h1 class="err-page__title">500</h1>
        <p class="err-page__text">Мы уже фиксим</p>
        <button class="err-page__btn">Назад к чатам</button>
      </div>`

const template = Handlebars.compile(source)

export const errPage500 = template()
