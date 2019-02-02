function event(){

    let button =document.querySelector('button')

    button.innerHTML='please click the button'

    let alertText='You Clicked The Button'

    button.addEventListener('click',function () {
        alert('you clicked the button !')
        button.innerHTML='The button was clicked'
    })

 }