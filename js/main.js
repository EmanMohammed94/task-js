

let productArray=[];
let products=[];


async function getProducts(){
let response= await fetch('https://dummyjson.com/products');
productArray=await response.json();

products=productArray.products;

display();
}

getProducts();



function display(){
    let Container = ``;
    for(let i=0;i<products.length;i++)
{



    Container +=`   <div class="slides-holder__item  ">
    <img src=${products[i].thumbnail} class="w-25" alt="img"/>
    </div>`
    console.log(products[i].thumbnail)
}
document.getElementById('imageContainer').innerHTML=Container;



}