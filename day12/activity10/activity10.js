console.log('Stephany');

//example 24
let heading = document.querySelector('.para3')
// par1.remove()

//example 4
let firstP=document.querySelector('#special p')
firstP.style.color = 'magenta'

// example 1  find location in html
let p1= document.getElementById('one')
p1.style.color = 'red';

//example 2
let ps = document.getElementsByTagName('p')
console.log(ps)

//example 3
let n = document.getElementsByClassName('name')
for (let i=0;i<n.length;i++){
    n[i].style.color='orange'
}
//example 4&5
let names = document.querySelectorAll('#special .name')
for(let i=0; i<names.length; i++){
names[i].style.fontWeight='bolder'
names[i].style.fontStyle='italic'
names[i].style.fontSize= '2em'
}

//example 6
let myWebsite = document.querySelector('.qcc')

//example 10
let n2 = document.querySelectorAll('#special .name')[1]
n2.className='bgBlue'

//example 15
let list = document.querySelectorAll('li')[2]

//example 17 append new element
//step 1 - create an element
let myPara = document.createElement('p')
//step 2- create the element content and append it to the new element
let mySentence = document.createTextNode('Appended paragraph')
myPara.appendChild(mySentence)
//step 3-append the new element into an existing DOM element
let newP= document.querySelector('.d')
newP.appendChild(myPara)
//step 4-prepend the new element into an existing DOM element
let secP = document.querySelector('.d')
secP.append('Hello World!')

//example 22
let subtitle = document.createElement('h2')
subtitle.append('PARKS TO VISIT IN NYC')

let parks = document.querySelector('.nyc')
parks.insertAdjacentElement("beforebegin",subtitle)

//example 23
let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[0])








