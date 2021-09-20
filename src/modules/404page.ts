import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="err-page">
        <h1 class="err-page__title">404</h1>
        <p class="err-page__text">Не туда попали</p>
        <button class="err-page__btn">Назад к чатам</button>
      </div>`

const template = Handlebars.compile(source)

export const errPage404 = template()
