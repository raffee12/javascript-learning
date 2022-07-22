var todo1 = "groceris"
var todo2 = "apple"

var todo3 = "orange"
// var todo4 = todo1   + todo2
// console.log(todo1  + todo3)

var month = "November"

var dayOfMonth = 9;

var year = 2021
console.log(`Today's date ${month} ${dayOfMonth}, ${year}`)

var result = (4+5)*3
console.log(result)

var age = 25;
var message = 'I am  ' + age  +   ' years old'
console.log(message)
const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1657657871261-2b40053ad9c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')

img.style.width = '40px'
img.style.height = '40px'
img.style.borderRadius = '40px'

document.body.appendChild(img)
var container = document.querySelector('.container')
var creatingElement = document.createElement('div')
creatingElement.style.textAlign = 'center'
creatingElement.innerHTML = `<h1> ${message}</h1>`;
container.appendChild(creatingElement)
var creatingDammytext = document.createElement('div')
creatingDammytext.textContent = 'My name is rafiza I do coding beacuse for logistics purpose'
creatingDammytext.style.color = '#fff'
creatingDammytext.style.fontSize = '32px'
container.appendChild(creatingDammytext)
var button = document.createElement('button')
button.textContent = 'Learn More'
button.style.padding = '15px 30px'
button.style.backgroundColor = '#f06'
button.style.color = '#fff'
button.style.border = 'none'
button.style.borderRadius = '5px'
button.style.marginTop = '30px'

container.appendChild(button)



// container.append(img)