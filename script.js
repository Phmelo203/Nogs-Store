const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0
const total = items.length
let timer

function update(direction) { 
    // Remove classes "active" atuais
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    // Atualiza índice ativo
    if (direction > 0) {
        active = active + 1
        if (active === total) {
            active = 0
        }
    } 
    else if (direction < 0) {
        active = active - 1
        if (active < 0) {
            active = total - 1
        }
    }

    // Adiciona classe "active" ao item e dot atualizados
    items[active].classList.add('active')
    dots[active].classList.add('active')

      // Atualiza o indicador de número, ex: 01
    numberIndicator.textContent = `0${active + 1}`

}

// Intervalo dos items //
clearInterval(timer)
timer = setInterval(() => {
        update(1)
    }, 10000);

// Eventos dos botões
prevButton.addEventListener('click', function(){
    update(-1)
})

nextButton.addEventListener('click', function(){
    update(1)
})
