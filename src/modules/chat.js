import Handlebars from 'handlebars/dist/handlebars'

const source = `<div class="chat">
\t\t\t\t<div class="chat__menue">
\t\t\t\t\t<div class="chat__bar">
\t\t\t\t\t\t<button id="chat-btn-profile" class="chat__btn-profile">Профиль ></button>
\t\t\t\t\t\t<div class="chat__inpot-container">
\t\t\t\t\t\t\t<input type="text" class="chat__input-search" placeholder="Поиск">
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<ul class="chat__list">
\t\t\t\t\t\t<li class="chat__companion companion">
\t\t\t\t\t\t\t<div class="companion__avatar"></div>
\t\t\t\t\t\t\t<p class="companion__name">Иван</p>
\t\t\t\t\t\t\t<p class="companion__last-massage">привет</p>
\t\t\t\t\t\t\t<p class="companion__time">10:20</p>
\t\t\t\t\t\t\t<div class="companion__not-read-massage">5</div>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li class="chat__companion companion">
\t\t\t\t\t\t\t<div class="companion__avatar"></div>
\t\t\t\t\t\t\t<p class="companion__name">Иван</p>
\t\t\t\t\t\t\t<p class="companion__last-massage">привет</p>
\t\t\t\t\t\t\t<p class="companion__time">10:20</p>
\t\t\t\t\t\t\t<p class="companion__not-read-massage">5</p>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>
\t\t\t\t<div class="chat__talk talk">
\t\t\t\t\t<div class="talk__user">
\t\t\t\t\t\t<div class="talk__user-info">
\t\t\t\t\t\t\t<div class="talk__user-avatar"></div>
\t\t\t\t\t\t\t<div class="talk__user-name">Иван</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<button class="talk__bar"></button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="talk__message talk__message-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores harum ipsum maiores nam neque officiis voluptas. Esse et excepturi laboriosam perferendis veniam. Accusamus, vero?</div>
\t\t\t\t\t<div class="talk__message talk__message-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores harum ipsum maiores nam neque officiis voluptas. Esse et excepturi laboriosam perferendis veniam. Accusamus, vero?</div>
\t\t\t\t\t<div class="talk__reply">
\t\t\t\t\t\t<input type="text" class="talk__input talk__input-message" placeholder="Сообщение">
\t\t\t\t\t\t<button class="talk__btn-submit"></button>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>`

const template = Handlebars.compile(source)

export const chat = template()