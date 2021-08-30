import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
\t\t\t\t<button id="profile-btn-back" class="profile__btn-back"></button>
\t\t\t\t<div class="profile__preview">
\t\t\t\t\t<div class="profile__preview-avatar"></div>
\t\t\t\t\t<div class="profile__preview-name">Иван</div>
\t\t\t\t</div>
\t\t\t\t<form class="profile__info profile__form-edit-password">
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Старый пароль</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="•••••••••"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Новый пароль</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="•••••••••••"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Повторите новый пароль</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="•••••••••••"/>
\t\t\t\t\t</div>
\t\t\t\t\t<button id="profile-btn-submit" type="button" class="profile__btn-submit">Сохранить</button>
\t\t\t\t</form>
\t\t\t</div>`

const template = Handlebars.compile(source)

export const profileEditPassword = template()