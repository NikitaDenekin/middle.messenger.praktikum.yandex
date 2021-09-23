export const chatTmp: string = `<div class="chat">
  <div class="chat__menu">
    <div class="chat__bar">
      {{{link}}}
      <div class="chat__input-container">
        <input
          type="text"
          class="chat__input-search"
          placeholder="Поиск"
        />
      </div>
    </div>
    <ul class="chat__list">
      {{#each companions}}
        {{{this}}}
      {{/each}}
    </ul>
  </div>
  <div class="chat__talk talk">
      {{{talkUser}}}
      {{#each talkMassages}}
        {{{this}}}
      {{/each}}
      {{{replyForm}}}
  </div>
</div>`
