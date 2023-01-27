console.log('Stephany');
// global variable
let msg='This is a outside message'

////local variable
function displayMsg(){
    let msg='Hello World!'
    return(msg)
}
//updated global variable
msg=displayMsg()

//example 2

var fullMoon=true;
let species='human'

if (fullMoon){
let species='wolf'
console.log(`Full Moon!Lupin is ${species}`)
}
console.log(`NOT Full Moon!Lupin is ${species}`)

//example 3
let message ='Hello World!'
console.log(message)
message='Good evening!'
console.log(message)

//example 4--skip

// example 5
for (var i=0;i<10;i++){
    console.log(i)
}
console.log(`The last value of i is ${i}`)

// example 6
let sum = function (num1,num2){
    return num1+num2
}
// example 7
let square=function(num){
    return Math.pow(num,2)
}

//example 8-function that calling another function
function callTwice(dice){
    dice();
    dice();
}
function rolldice(){
    const roll=Math.trunc(Math.random()*7)
    console.log(roll)
}
callTwice(rolldice)

//example 9-function that returns another function

console.log('-------------example 9---------------')
function makeBetweenFunc(min,max){
    console.log('-------------example 9---------------')
    return function(num){
            return true
        if(num>min && num<=max){ 
        }
        else if (num< min || num>max){
            return false
        }else{
            return "Can't Compare"
        }
    }
}

let child=makeBetweenFunc(3,20)
console.log(child('peter'))

//example 10 ---method
const myMath={
    square(num){return num*num},
    double(num){return num+num}
};

//example 11
const secMath={
area(side){return side*side},
perimeter(side){return side*4}
};

//how to access properties  in a method  using "this"keyboard
const cat={
    name:'Mickey',
    color:'white with brown spots',
    breed:'unknown',
    meow(){(console.log(this.name))}
}

//example 12
const hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){this.eggCount++;return'Egg'}
}
//example 13
console.log('--------------example 13----------------')
function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch{
        console.log('Please pass a string next time!')
    }
}

function yellagain(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch(e){
        console.log(e)
        console.log('Please pass a string next time!')
    }
}