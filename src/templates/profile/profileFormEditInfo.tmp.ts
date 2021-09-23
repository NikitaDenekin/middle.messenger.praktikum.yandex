export const profileFormEditInfoTmp: string = `<form class="profile__info profile__form-edit-info">
<label class="profile__item">
  <p class="profile__item-name">Почта</p>
  <input name="email" class="profile__item-value" placeholder="{{data.email}}"/>
</label>
<label class="profile__item">
  <p class="profile__item-name">Логин</p>
  <input name="login" class="profile__item-value" placeholder="{{data.login}}"/>
</label>
<label class="profile__item">
  <p class="profile__item-name">Имя</p>
  <input name="first_name" class="profile__item-value" placeholder="{{data.name}}"/>
</label>
<label class="profile__item">
  <p class="profile__item-name">Фамилия</p>
  <input name="second_name" class="profile__item-value" placeholder="{{data.secondName}}"/>
</label>
<label class="profile__item">
  <p class="profile__item-name">Имя в чате</p>
  <input name="login" class="profile__item-value" placeholder="{{data.chatName}}"/>
</label>
<label class="profile__item">
  <p class="profile__item-name">Телефон</p>
  <input name="phone" class="profile__item-value" placeholder="{{data.phone}}"/>
</label>
<button id="profile-btn-submit" type="submit" class="profile__btn-submit">Сохранить</button>
</form>`
