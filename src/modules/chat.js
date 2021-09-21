import Handlebars from 'handlebars/dist/handlebars'

const source = `
<div class="chat">
  <div class="chat__menue">
    <div class="chat__bar">
      <button id="chat-btn-profile" class="chat__btn-profile">
        Профиль >
      </button>
      <div class="chat__input-container">
        <input
          type="text"
          class="chat__input-search"
          placeholder="Поиск"
        />
      </div>
    </div>
    <ul class="chat__list">
      <li class="chat__companion companion">
        <div class="companion__avatar"></div>
        <p class="companion__name">Иван</p>
        <p class="companion__last-massage">привет</p>
        <time class="companion__time">10:20</time>
        <div class="companion__not-read-massage">5</div>
      </li>
      <li class="chat__companion companion">
        <div class="companion__avatar"></div>
        <p class="companion__name">Иван</p>
        <p class="companion__last-massage">привет</p>
        <time class="companion__time">10:20</time>
        <p class="companion__not-read-massage">5</p>
      </li>
    </ul>
  </div>
  <div class="chat__talk talk">
    <div class="talk__user">
      <div class="talk__user-info">
        <div class="talk__user-avatar"></div>
        <div class="talk__user-name">Иван</div>
      </div>
      <button class="talk__bar"></button>
    </div>
    <div class="talk__message talk__message-left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
      dolores harum ipsum maiores nam neque officiis voluptas. Esse et
      excepturi laboriosam perferendis veniam. Accusamus, vero?
    </div>
    <div class="talk__message talk__message-right">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
      dolores harum ipsum maiores nam neque officiis voluptas. Esse et
      excepturi laboriosam perferendis veniam. Accusamus, vero?
    </div>
    <form class="talk__reply">
      <input
        name="message"
        type="text"
        class="talk__input talk__input-message"
        placeholder="Сообщение"
      />
      <button type="submit" class="talk__btn-submit"></button>
    </form>
  </div>
</div>`

const template = Handlebars.compile(source)

export const chat = template()
