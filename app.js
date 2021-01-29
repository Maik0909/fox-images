import { registerImage } from './lazy.js'

const d = document
const addImage = d.getElementById('addImage')
const clearImages = d.getElementById('clearImages')
const boxImages = d.getElementById('images')

let num = 0, elements

const createImage = () => {
   const container = d.createElement('div')
   container.className = 'content-image'

   const image = d.createElement('img')
   image.dataset.src = `https://randomfox.ca/images/${++num}.jpg`


   container.appendChild(image)

   return container

}


const addProcess = (event) => {

   if (event) event.preventDefault()

   const newImage = createImage()
   registerImage(newImage)
   window.images.append(newImage)

   elements = Array.from(d.querySelectorAll('.content-image'))

}

addProcess()


addImage.addEventListener('click', addProcess)


const removeAll = (event) => {
   event.preventDefault()

   addImage.disabled = true

   elements.forEach(element => {
      element.classList.add('disappear')
   })

   d.body.addEventListener('animationend', (event) => {

      if (event.animationName === 'disappear') {
         boxImages.innerHTML = ''
         addImage.disabled = false
         num = 0
      }
   })

}

clearImages.addEventListener('click', removeAll)




