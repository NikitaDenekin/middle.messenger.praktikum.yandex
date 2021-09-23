export const replyForm = `<form class="talk__reply">
{{#each fields}}
  {{{this}}}
{{/each}}
<button type="submit" class="talk__btn-submit">{{buttonText}}</button>
</form>`
