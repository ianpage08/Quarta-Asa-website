
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');



btnNext.addEventListener('click', () => {
    let items = document.querySelectorAll('.item-pergunta','.itens-personagens');
    document.querySelector('.box-perguntas').appendChild(items[0])
    
})

btnPrev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item-pergunta');
    document.querySelector('.box-perguntas').prepend(items[items.length - 1])
})


    
