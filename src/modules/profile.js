import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
        <button id="profile-btn-back" class="profile__btn-back"></button>
\t\t\t\t<div class="profile__preview">
\t\t\t\t\t<div class="profile__preview-avatar"></div>
\t\t\t\t\t<div class="profile__preview-name">Иван</div>
\t\t\t\t</div>
\t\t\t\t<div class="profile__info">
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Почта</p>
\t\t\t\t\t\t<p class="profile__item-value">pochta@yandex.ru</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Логин</p>
\t\t\t\t\t\t<p class="profile__item-value">ivanivanov</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Имя</p>
\t\t\t\t\t\t<p class="profile__item-value">Иван</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Фамилия</p>
\t\t\t\t\t\t<p class="profile__item-value">Иванов</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Имя в чате</p>
\t\t\t\t\t\t<p class="profile__item-value">Иван</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="profile__item">
\t\t\t\t\t\t<p class="profile__item-name">Телефон</p>
\t\t\t\t\t\t<p class="profile__item-value">+7 (909) 967 30 30</p>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="profile__bar">
\t\t\t\t\t<button id="profile-btn-edit-info" class="profile__btn">Изменить данные</button>
\t\t\t\t\t<button id="profile-btn-edit-password" class="profile__btn">Изменить пароль</button>
\t\t\t\t\t<button id="profile-btn-exit" class="profile__btn profile__btn-exit">Выйти</button>
\t\t\t\t</div>
\t\t\t</div>`

const template = Handlebars.compile(source)

export const profile = template()