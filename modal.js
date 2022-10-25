const element = document.querySelector("body")
element.addEventListener('click', changeBackground)

function changeBackground(){
   element.classList.toggle('active')
}

let image = document.querySelector("#image")
image.addEventListener('click', changeImage)
let changedImg = true

function changeImage(){
   image.classList.toggle('active')
   if(changedImg){
        image.src = './assets/SwitcherLight.svg'
        changedImg = false
   }else{
        image.src = './assets/Switcher.svg'
        changedImg = true
    }
}

