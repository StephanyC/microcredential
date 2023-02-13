console.log('Stephany')

// Items on Capstone Page Chocolate Fudge
let item1 = document.querySelector('.link1')
let item2 = document.querySelector('.link2')
let item3 = document.querySelector('.link3')
let item4 = document.querySelector('.link4')
let item5 = document.querySelector('.link5')
let item6 = document.querySelector('.link6')


let xclose = document.querySelector('.modalHeadX')
let close2 = document.querySelector('.modalHeadX1')
let close3 = document.querySelector('.modalHeadX2')
let close4 = document.querySelector('.modalHeadX3')
let close5 = document.querySelector('.modalHeadX4')
let close6 = document.querySelector('.modalHeadX5')

let modal = document.querySelector('#windowItem1')
item1.addEventListener('click', function(){
    modal.style.display='block'
})
xclose.addEventListener('click',function(){
        modal.style.display ='none'
 });

let modal1 = document.querySelector('.Img2')
item2.addEventListener('click', function(){
    modal1.style.display='block'
});
close2.addEventListener('click',function(){
    modal1.style.display ='none'
});

let modal2 = document.querySelector('.Img3')
item3.addEventListener('click',function(){
    modal2.style.display='block'
})
close3.addEventListener('click',function(){
    modal2.style.display ='none'
})

let modal3 = document.querySelector('.Img4')
item4.addEventListener('click',function(){
    modal3.style.display='block'
})
close4.addEventListener('click',function(){
    modal3.style.display ='none'
})

let modal4 = document.querySelector('.Img5')
item5.addEventListener('click',function(){
    modal4.style.display='block'
})
close5.addEventListener('click',function(){
    modal4.style.display ='none'
})

let modal5 = document.querySelector('.Img6')
item6.addEventListener('click',function(){
    modal5.style.display='block'
})
close6.addEventListener('click',function(){
    modal5.style.display ='none'
})

// Capstone Page Add to Cart

let carts =document.querySelectorAll('.add-cart')

let products =[
    {
        name: 'Chocolate Fudge',
        variety: 'Dark or Milk',
        price: 6.50,
        inCart:0
    },

    {
        name: 'Chocolate Gift Box',
        variety: 'Swiss, Ruby, and Milk',
        price: 25.50,
        inCart:0
    },
    {
        name: 'Chocolate Bar',
        variety: 'Milk Chocolate and Dark Chocolate',
        price: 5.50,
        inCart:0
    },
    {
        name: 'Chocolate Truffles',
        variety: 'Swiss, Ruby, and Milk',
        price: 25.50,
        inCart:0
    },
    {
        name: 'Chocolate Lollipops',
        variety: 'Swiss, Ruby, and Milk',
        price: 6.50,
        inCart:0
    },
    {
        name: 'Birthday Cake',
        variety: 'Swiss, Ruby, and Milk',
        price: 25.50,
        inCart:0
    }
];

for (let i=0; i<carts.length;i++){
carts[i].addEventListener('click',() => {
    console.log("added to carts")
    cartNumbers(products[i]);
    totalCost(products[i])
})
};

function onLoadCartNumbers(){
    let chocoNumbers = localStorage.getItem('cartNumbers');
    if (chocoNumbers){
        document.querySelector('.cart span').textContent = chocoNumbers;
    }
};
// Saving to our Storage Cart Numbers
function cartNumbers(products){
    let chocoNumbers = localStorage.getItem('cartNumbers');

    chocoNumbers = parseInt(chocoNumbers);

    if(chocoNumbers){
        localStorage.setItem('cartNumbers', chocoNumbers +1); 
        document.querySelector('.cart span').textContent = chocoNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers',+1);  
        document.querySelector('.cart span').textContent = 1
    }
   setItems(products);
};

function setItems(products){
let cartItems = localStorage.getItem('productsInCart')
cartItems = JSON.parse(cartItems);
console.log("My cartItems are", cartItems);

if(cartItems != null){
    if(cartItems[products.tag] == undefined){
        cartItems = {
            ...cartItems,
            [products.tag]:products
        }
    }
    cartItems[products.tag].inCart += 1; 
} else {
products.inCart = 1;
cartItems = {
    [products.tag]: products
    }   
}
localStorage.setItem("productsInCart",JSON.stringify(cartItems));
};

function totalCost(products){
// console.log("The product price is", products.price);
let cartCost= localStorage.getItem('totalCost');
console.log("My cartCost is", cartCost);
console.log(typeof cartCost);

if (cartCost != null){
    cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + products.price);
} else {
    localStorage.setItem("totalCost",products.price)
}
var displayCart;
function displayCart() {
 let cartItems =localStorage.getItem(productsInCart);
 cartItems =JSON. parse(cartItems)
 let productContainer =document.querySelector(".products");
  console.log(cartItems)
}
displayCart();

 if (cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item=>{
        productContainer.innerHTML += `
        <div class ="product">
        <ion-icon name="close-circle"></ion-icon>
        <img src=./images/${item.tag}.jpg>
        <span>${item.tag}.jpg</span>
        </div>
        <div class ="price">
        $${item.price},00</div>
        <div class = "quantity">
        <ion-icon class = "decrease"
        name="arrow-droplet-circle"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon class = "increase"
        name="arrow-dropright-circle">ion-icon>
        </div>
        <div class = total>
        $${item.inCart = item.price},00
        </div>
        `
        productContainer.innerHTML += `
        <div class = "basketTotalContainer">
        <h4 class ="basketTotalTitle"
        </h4>
        <h4 class = "basketTotal">
        $${cartCost},00
        </h4>
        `
    });
  }
};

onLoadCartNumbers();




let shop = document.getElementById("myButton").onclick = function (){
    location.href= "shop.html"
};




















