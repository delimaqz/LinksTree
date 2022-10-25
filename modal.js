const image = document.querySelector('#image')
image.addEventListener('click', changeBackground)

function changeBackground(){
   document.body.classList.toggle('active')
}

let newImage = document.querySelector("#image")
newImage.addEventListener('click', changeImage)
let changedImg = true

function changeImage(){
   newImage.classList.toggle('active')
   if(changedImg){
        newImage.src = './assets/SwitcherLight.svg'
        changedImg = false
   }else{
      newImage.src = './assets/Switcher.svg'
      changedImg = true
   }
}

