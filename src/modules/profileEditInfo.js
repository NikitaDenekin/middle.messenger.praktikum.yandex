import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
\t\t\t\t<button id="profile-btn-back" class="profile__btn-back"></button>
\t\t\t\t<div class="profile__preview">
\t\t\t\t\t<div class="profile__preview-avatar"></div>
\t\t\t\t\t<div class="profile__preview-name">Иван</div>
\t\t\t\t</div>
\t\t\t\t<form class="profile__info profile__form-edit-info">
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Почта</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="pochta@yandex.ru"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Логин</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="ivanivanov"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Имя</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="Иван"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Фамилия</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="Иванов"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Имя в чате</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="Иван"/>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Телефон</p>
\t\t\t\t\t\t<input class="profile__item-value" placeholder="+7 (909) 967 30 30"/>
\t\t\t\t\t</div>
\t\t\t\t\t<button id="profile-btn-submit" type="button" class="profile__btn-submit">Сохранить</button>
\t\t\t\t</form>
\t\t\t</div>`

const template = Handlebars.compile(source)

export const profileEditInfo = template()