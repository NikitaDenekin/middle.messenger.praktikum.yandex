import Handlebars from 'handlebars/dist/handlebars'

const popupFileTemp = `<div class="popup" id="{{popupId}}">
        <div class="popup__container">
          <h2 class="popup__title">{{title}}</h2>
          <p class="popup__text">{{text}}</p>
          <button type="button" class="popup__btn popup__btn-select">Выбрать файл на компьютере</button>
          <button type="button" class="popup__btn popup__btn-accept">Поменять</button>
          <p class="popup__error"></p>
        </div>
      </div>`

const popupFileAdd = `<div class="popup" id="{{popupId}}">
        <div class="popup__container">
          <h2 class="popup__title">{{title}}</h2>
          <button type="button" class="popup__btn popup__btn-select">{{text}}</button>
          <button type="button" class="popup__btn popup__btn-accept">{{btnAcceptTitle}}</button>
          <p class="popup__error"></p>
        </div>
      </div>`

const popupUser = `<div class="popup" id="{{popupId}}">
        <div class="popup__container">
          <h2 class="popup__title">{{title}}</h2>
            <label class="popup__field">
                <p class="popup__field-title">Логин</p>
                <input type="text" class="popup__input">
            </label>
          <button type="button" class="popup__btn popup__btn-accept">{{btnAcceptTitle}}</button>
          <p class="popup__error"></p>
        </div>
      </div>`

export class Popup {
  constructor(type, popupId, title, text, btnSelectText = '', btnAcceptTitle) {
    this._data = {
      popupId,
      title,
      text,
      btnSelectText,
      btnAcceptTitle,
    }
    this._type = type
  }

  _addEventListeners() {
    const popupEl = document.querySelector(`#${this._data.popupId}`)
    popupEl.addEventListener('click', (e) => {
      if (e.target.className === 'popup') {
        popupEl.classList.add('popup-hidden')
      }
    })
  }

  renderPopup() {
    const mainEl = document.querySelector('main')
    let template
    switch (this._type) {
      case 'popupUser':
        template = Handlebars.compile(popupUser)
      case 'popupFileAdd':
        template = Handlebars.compile(popupFileAdd)
      default:
        template = Handlebars.compile(popupUser)
    }
    const popup = template(this._data)
    mainEl.insertAdjacentHTML('afterbegin', popup)
    this._addEventListeners()
  }
}
