import Handlebars from 'handlebars/dist/handlebars'

const popupFileTemp = `<div class="popup" id="{{popupId}}">
\t\t\t\t<div class="popup__container">
\t\t\t\t\t<h2 class="popup__title">{{title}}</h2>
\t\t\t\t\t<p class="popup__text">{{text}}</p>
\t\t\t\t\t<button type="button" class="popup__btn popup__btn-select">Выбрать файл на компьютере</button>
\t\t\t\t\t<button type="button" class="popup__btn popup__btn-accept">Поменять</button>
\t\t\t\t\t<p class="popup__error"></p>
\t\t\t\t</div>
\t\t\t</div>`

const popupFileAdd = `<div class="popup" id="{{popupId}}">
\t\t\t\t<div class="popup__container">
\t\t\t\t\t<h2 class="popup__title">{{title}}</h2>
\t\t\t\t\t<button type="button" class="popup__btn popup__btn-select">{{text}}</button>
\t\t\t\t\t<button type="button" class="popup__btn popup__btn-accept">{{btnAcceptTitle}}</button>
\t\t\t\t\t<p class="popup__error"></p>
\t\t\t\t</div>
\t\t\t</div>`

const popupUser = `<div class="popup" id="{{popupId}}">
\t\t\t\t<div class="popup__container">
\t\t\t\t\t<h2 class="popup__title">{{title}}</h2>
\t\t\t\t\t  <label class="popup__field">
                <p class="popup__field-title">Логин</p>
                <input type="text" class="popup__input">
            </label>
\t\t\t\t\t<button type="button" class="popup__btn popup__btn-accept">{{btnAcceptTitle}}</button>
\t\t\t\t\t<p class="popup__error"></p>
\t\t\t\t</div>
\t\t\t</div>`

export class Popup {
    constructor(type, popupId, title, text, btnSelectText = '', btnAcceptTitle) {
        this._data = {
            popupId : popupId,
            title: title,
            text: text,
            btnSelectText: btnSelectText,
            btnAcceptTitle: btnAcceptTitle
        }
        this._type = type
    }
    _addEventListeners(){
        const popupEl = document.querySelector(`#${this._data.popupId}`)
        popupEl.addEventListener('click', function (e){
            if(e.target.className === 'popup'){
                popupEl.classList.add('popup-hidden')
            }
            return
        })
    }
    renderPopup(){
        const mainEl = document.querySelector('main')
        let template
        switch (this._type){
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