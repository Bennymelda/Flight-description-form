
let arr = []
function holds(){
  // this get the item from localStorage
let setItem =  localStorage.getItem('saved')
arr = JSON.parse(setItem) || []
}
//this select the form in the html

let flight =document.querySelector('form')
flight.addEventListener('submit', (event) =>{
  //this prevent the page from reloading
  event.preventDefault()
  
 let saveThis = document.querySelectorAll('input, select')
 let obj ={}
 // this allows us to loop through each of the input and select 
 saveThis.forEach(looper =>{
   obj[looper.name]=looper.value
 })
 arr.push(obj)
 saveThis.forEach(looper =>{
   looper.value =''
 })
 // this allows us to set all the array to json  and set them to local storage(ready to be stored)
  localStorage.setItem('saved', JSON.stringify(arr))
 
 localStorage.setItem('name', obj.fullname)
 // when you click on the submit button this takes you to the next page
 window.location.href ='Home.html'
 
})


/*
let addAll ='';
function holdDelete(){
  addAll ='';
  arr.forEach((button, index) =>{
    let one =button.fullname
    let two =button.dob
    let three =button.gender
    let four =button.passport
    let five =button.contact
    let six =button.departure_city
    let seven =button.arrival_city
    let eight =button.departure_date
    let nine =button.return_date
    let ten =button.flight_class
    let eleven =button.adults
    let twelve =button.children
    let thirteen =button.infants
    
    let html =`<p>${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve} ${thirteen} <button onclick = "deleteFunction(${index})">Delete</button></p>`
    addAll += html
  })
  
 let local = localStorage.setItem('saved', JSON.stringify(arr))

}
function deleteFunction(index){
  arr.splice(index, 1)
  holdDelete()
}
holds()

*/
/*

let join =''
let meat = ()=>{
  join =''
  arr.forEach((may, index)=>{
    let go =may.value
    let come =may.name
    const html =`<p> ${go} ${come}<button onclick="cave(${index})">Delete</button></p>`
    join += html
  }
}

meat()
function cave(){
  arr.splice(index,1)
  meat()
}

*/
/*
let yu =[]
function food(){
  let make= document.querySelector('.mini')
  make.addEventListener('submit',(event)=>{
    event.preventDefault()
    let jet ={}
    let you =document.querySelectorAll('input')
    you.forEach(bub =>{
      jet[bub.name]=bub.value
    })
    yu.push(jet)
    
    you.forEach(bud =>{
    bud.value =''
  })
  let saveYou = localStorage.setItem('saved', JSON.stringify(yu))
let save =localStorage.getItem('saved')
JSON.parse(save)
console.log(save)

  may()

  })
}


let on =''
function may(){
  on =''
  yu.forEach((jug, index)=>{
    let nu = jug.name
    let huo =jug.email
    let create =`<p>Name: ${nu} Email: ${huo}<button onclick="game(${index})" >delete</button> `
    on += create
  })
  document.querySelector('.hand').innerHTML =on
}
function game(index){
  yu.splice(index,1)
  may()
}
food()
*/

