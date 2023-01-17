console.log('Stephany Canela');

// if statement
let day=true;
let night=false;

if(day){
    console.log(`The condition or statement is ${day}`);
};

let num1='20';//string data
let num2=20; // numerical data

if(num1==num2){
    console.log(`${num1} and ${num2} are exactly equal to!`)
};
// == only compare the number but not the data type
// === compares the value and data type (whether it is a string or an integer)

// example1
let goodMood=true;
let goodSleep=true;

if(goodMood !== goodSleep){
    console.log('Today is a good day');
}
else{
console.log('I am moody!');
};

// example 2
let a=5,b=4, equalNum;
if(a==b){
    equalNum=true;
}
else{
    equalNum=false;
}
console.log(`Are the numbers the same? ${equalNum}`);

// example 3
let n1 = 5, n2 = 8;
if(n1===n2){
    console.log('The number are equal')
}
else if(n1>n2){
    console.log('number 1 is greater than number 2')
}
else if(n2>n1){
    console.log('number 1 is less than number 2')
}
else{
    console.log('INVALID ENTRY');
}

// example 4
let colors=['red','blue','green','yellow','orange'];
let userPick=parseInt(prompt('select color from one to 5'));
let selectColor= colors[userPick -1];

if (selectColor=== 'red'){
    console.log('The selected color is red');
}
else if (selectColor==='blue'){
    console.log('The selected color is blue');
}
else if (selectColor==='green'){
    console.log('The selected color is green');
}
else if(selectColor==='yellow'){
    console.log('The selected color is yellow');
}
else if (selectColor==='orange'){
    console.log('The selected color is orange');
}
else{
    console.log(`The selected color ${userPick} which is not in the list!`)
}

//example 5
let userInput= prompt("Enter a number");
let checkInput= parseInt(userInput);
checkInput=isNaN(checkInput);

if(checkInput){
    console.log(`${userInput} is a string or character`);
}
else{
    console.log(`${userInput} is a number`);
}

//example 6
let password=prompt('enter a password');
if(password.length>=6){
console.log('Password has 6+ characters');
}
else{
console.log('password is less than 6 characters');
}
if(password.indexOf('   ')===-1){
console.log(`Great! Password = ${password} has no space`)
}
 else{
 console.log(`Warning! password= ${password} has SPACE!`)
};

// EXAMPLE 7
let name = prompt('Enter a name');
if (name){
    console.log(`Welcome to the program ${name}`);
}
else{
    console.log(`You didn't enter a name!`);
}

// Class Activity 6 
let insert= prompt("Enter a value");
let evaluateInput=parseInt(insert);

if(insert<0){
    console.log(`${insert} is a negative number`);
}
else if (insert>0){
    console.log(`${insert} is a positive number`);
}else if (insert=`${insert}`){
    console.log (`${insert} is a string`);
};
