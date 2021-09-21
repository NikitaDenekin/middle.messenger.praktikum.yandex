import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
        <button id="profile-btn-back" class="profile__btn-back"></button>
        <div class="profile__preview">
          <div class="profile__preview-avatar"></div>
          <div class="profile__preview-name">Иван</div>
        </div>
        <div class="profile__info">
          <dl class="profile__item">
            <dt class="profile__item-name">Почта</dt>
            <dd class="profile__item-value">pochta@yandex.ru</dd>
          </dl>
          <dl class="profile__item">
            <dt class="profile__item-name">Логин</dt>
            <dd class="profile__item-value">ivanivanov</dd>
          </dl>
          <dl class="profile__item">
            <dt class="profile__item-name">Имя</dt>
            <dd class="profile__item-value">Иван</dd>
          </dl>
          <dl class="profile__item">
            <dt class="profile__item-name">Фамилия</dt>
            <dd class="profile__item-value">Иванов</dd>
          </dl>
          <dl class="profile__item">
            <dt class="profile__item-name">Имя в чате</dt>
            <dd class="profile__item-value">Иван</dd>
          </dl>
          <dl class="profile__item">
            <dt class="profile__item-name">Телефон</dt>
            <dd class="profile__item-value">+7 (909) 967 30 30</dd>
          </dl>
        </div>
        <div class="profile__bar">
          <button id="profile-btn-edit-info" class="profile__btn">Изменить данные</button>
          <button id="profile-btn-edit-password" class="profile__btn">Изменить пароль</button>
          <button id="profile-btn-exit" class="profile__btn profile__btn-exit">Выйти</button>
        </div>
      </div>`

const template = Handlebars.compile(source)

export const profile = template()
