const dots = document.querySelectorAll('.dot')
const navContainer = document.querySelector('.nav-container')


navContainer.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('nav-link')) {
        console.log('hello')
    }
})

function navSelect() {



    dots.forEach( dot => {
        if (dot.parentElement.classList.contains('active')) {
            dot.nextElementSibling.style.display = 'none'
        } else {
            dot.nextElementSibling.style.display = 'block'
        }
    })
}

navSelect()