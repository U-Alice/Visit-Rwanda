// const page1 = document.getElementsByClassName("page1")
// const page2 = document.getElementById("page2")
// const but1 = document.getElementById("but1")
// const but2 = document.getElementById("but2")
// const scrollPage = document.getElementById("display")

// function changeDiv (){
// scrollPage.innerHTML = page1
// }

const LeftBTN = document.querySelector('#Left')

const RightBTN = document.querySelector('#Right')

RightBTN.addEventListener('click', ()=>{
    document.querySelector('.ScrollBTNs').classList.add('ScrollBTNsToRight')
    document.querySelector('.scroll').classList.add('ScrollDIVToRight')

})

LeftBTN.addEventListener('click', ()=>{
    document.querySelector('.ScrollBTNs').classList.remove('ScrollBTNsToRight')
    document.querySelector('.scroll').classList.remove('ScrollDIVToRight')
})


setInterval(()=>{
    document.querySelector('.ScrollBTNs').classList.toggle('ScrollBTNsToRight')
    document.querySelector('.scroll').classList.toggle('ScrollDIVToRight')
}, 8000)