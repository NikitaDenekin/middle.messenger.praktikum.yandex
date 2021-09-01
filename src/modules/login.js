import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="entry">
<div class="entry__container">
  <h2 class="entry__title">Вход</h2>
  <form action="" class="form entry__form-signup">
    <label for="" class="form__field">
      <p class="form__input-title">Логин</p>
      <input type="text" name="login" class="form__input entry__input" />
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
    <button type="button" id="login-btn-login" class="form__btn form__btn-signup">Войти</button>
  </form>
  <a href="#" id="login-btn-signin" class="entry__btn">Нет аккаунта?</a>
</div>
</div>`

const template = Handlebars.compile(source)

export const login = template()
