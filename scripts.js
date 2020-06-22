const modalOverlay = document.querySelector('.modal-overlay') /* vai procurar o elemento entre parenteses no meu html e quando achar vai atribui a modalOverlay */
const cards = document.querySelectorAll('.card') /* aqui pega todoas as class cardes */

for(let card of cards) { /* nesse for para cada imagem clicada ele vai adicionar a class active no modal */
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id"); /* pegando o video de forma dinamica */
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`; /* pegando o video de forma dinamica */

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){ /* aqui já é o oposto, para cada click a class que foi adicionada acima vai ser removida */

    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = "" /* essa linha resolve o problema de quando eu fechava o video o audio nao desligava..quando fecha a src fica como vazio, por esse motivo que o audio e video fecham de vez */

})
