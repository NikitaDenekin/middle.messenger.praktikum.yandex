import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
        <button id="profile-btn-back" class="profile__btn-back"></button>
        <div class="profile__preview">
          <div class="profile__preview-avatar"></div>
          <div class="profile__preview-name">Иван</div>
        </div>
        <form class="profile__info profile__form-edit-info">
          <label class="profile__item">
            <p class="profile__item-name">Почта</p>
            <input name="email" class="profile__item-value" placeholder="pochta@yandex.ru"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Логин</p>
            <input name="login" class="profile__item-value" placeholder="ivanivanov"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Имя</p>
            <input name="first_name" class="profile__item-value" placeholder="Иван"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Фамилия</p>
            <input name="second_name" class="profile__item-value" placeholder="Иванов"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Имя в чате</p>
            <input name="login" class="profile__item-value" placeholder="Иван"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Телефон</p>
            <input name="phone" class="profile__item-value" placeholder="+7 (909) 967 30 30"/>
          </label>
          <button id="profile-btn-submit" type="submit" class="profile__btn-submit">Сохранить</button>
        </form>
      </div>`

const template = Handlebars.compile(source)

export const profileEditInfo = template()
