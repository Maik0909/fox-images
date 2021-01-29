

const isIntersecting = (entry) => {
   return entry.isIntersecting

}

const action = (entry) => {
   const container = entry.target
   const image = container.firstChild

   const url = image.dataset.src

   image.src = url
   observer.unobserve(container)
   observer.unobserve(image)

   container.classList.add('loading')
   image.classList.add('appear')


}

const observer = new IntersectionObserver((entries) => {
   entries
      .filter(isIntersecting)
      .forEach(action)

})



const registerImage = (image) => {
   observer.observe(image)
}


export {
   registerImage
}