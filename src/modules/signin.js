// const Handlebars = require('handlebars')
import Handlebars from 'handlebars/dist/handlebars'

const source = `
<div class="entry">
<div class="entry__container">
  <h2 class="entry__title">Регистрация</h2>
  <form action="" class="form entry__form entry__form-signin">
    <label for="" class="form__field">
      <p class="form__input-title">Почта</p>
      <input type="text" name="email" class="form__input entry__input" />
      <span class="form__input-error"></span>
    </label>
    <label for="" class="form__field">
      <p class="form__input-title">Логин</p>
      <input type="text" name="login" class="form__input entry__input" />
      <span class="form__input-error"></span>
    </label>
    <label for="" class="form__field">
      <p class="form__input-title">Имя</p>
      <input
        type="text"
        name="first_name"
        class="form__input entry__input"
      />
      <span class="form__input-error"></span>
    </label>
    <label for="" class="form__field">
      <p class="form__input-title">Фамилия</p>
      <input
        type="text"
        name="second_name"
        class="form__input entry__input"
      />
      <span class="form__input-error"></span>
    </label>

    <label for="" class="form__field">
      <p class="form__input-title">Телефон</p>
      <input type="text" name="phone" class="form__input entry__input" />
      <span class="form__input-error"></span>
    </label>
    <label for="" class="form__field">
      <p class="form__input-title">Пароль</p>
      <input
        type="text"
        name="password"
        class="form__input entry__input"
      />
      <span class="form__input-error"></span>
    </label>
    <label for="" class="form__field">
      <p class="form__input-title">Пароль (ещё раз)</p>
      <input
        type="text"
        name="password"
        class="form__input entry__input"
      />
      <span class="form__input-error"></span>
    </label>
    <button type="submit" class="form__btn form__btn-signin">
      Зарегистрироваться
    </button>
  </form>
  <a href="#" id="login-btn-signup" class="entry__btn">Войти</a>
</div>
</div>`

const template = Handlebars.compile(source)


export const signin = template()
