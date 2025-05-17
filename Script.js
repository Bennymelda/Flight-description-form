
let arr = []
let flight =document.querySelector('form')
flight.addEventListener('submit', (event) =>{
  event.preventDefault()
 let saveThis = document.querySelectorAll('input', 'select')
 let obj ={}
 saveThis.forEach(looper =>{
   obj[looper.name]=looper.value
 })
 arr.push(obj)
 saveThis.forEach(looper =>{
   looper.value =''
 })
 window.location.href ='Home.html'
 
})




