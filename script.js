var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = "<em>Ceci est mon texte</em>";
var htmlCodeInit = "Ceci est mon texte";

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);