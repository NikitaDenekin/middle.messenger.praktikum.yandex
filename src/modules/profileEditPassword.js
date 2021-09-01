import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="profile">
        <button id="profile-btn-back" class="profile__btn-back"></button>
        <div class="profile__preview">
          <div class="profile__preview-avatar"></div>
          <div class="profile__preview-name">Иван</div>
        </div>
        <form class="profile__info profile__form-edit-password">
          <label class="profile__item">
            <p class="profile__item-name">Старый пароль</p>
            <input class="profile__item-value" placeholder="•••••••••"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Новый пароль</p>
            <input name="password" class="profile__item-value" placeholder="•••••••••••"/>
          </label>
          <label class="profile__item">
            <p class="profile__item-name">Повторите новый пароль</p>
            <input class="profile__item-value" placeholder="•••••••••••"/>
          </label>
          <button id="profile-btn-submit" type="button" class="profile__btn-submit">Сохранить</button>
        </form>
      </div>`

const template = Handlebars.compile(source)

export const profileEditPassword = template()
