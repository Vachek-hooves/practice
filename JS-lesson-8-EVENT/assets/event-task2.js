const product=document.getElementsByClassName('product');
let list=[];
let ProductSort=sortProduct; // кили тицну на цю позицію відбудеться дія (сортування)
const price=document.getElementById('price');
const quantity=document.getElementById('quantity')
console.log(price, quantity)

document.addEventListener('DOMContentLoaded',()=>{
    ProductSort.addEventListener('click',sortingAZ);
    ProductSort.addEventListener('click', sortingZA);
})

// ProductSort.addEventListener('click',sortingAZ);
function sortingAZ(){ // сортування А-Я.
    for (i=0;i< product.length;i++){
        // console.log(product[i].innerHTML);
        list.push(product[i].innerHTML)
        // console.log(list);
    };
    // console.log(list);
    let modif=[...list].sort();
    // console.log(list)
    for (let i=0; i<product.length; i++){
        // console.log(product[i].innerHTML)
        if(product){
            for(let i=0; i<modif.length; i++){
                // console.log(list[i])
                product[i].innerHTML=modif[i];
            }
        }
    }
    ProductSort.removeEventListener('click',sortingAZ);
    // console.log(list)
};

// ProductSort.addEventListener('click', sortingZA);
function sortingZA(){
    for (i=0;i< product.length;i++){
        // console.log(product[i].innerHTML);
        list.push(product[i].innerHTML);
        // console.log(list);
    };
    // console.log(list);
    let modif=[...list].reverse();
    // console.log(modif)
    // console.log(list)
    for (let i=0; i<product.length; i++){
        // console.log(product[i].innerHTML)
        if(product){
            for(let i=0; i<modif.length; i++){
                // console.log(list[i])
                product[i].innerHTML=modif[i];
            }
        }
    }
    // ProductSort.removeEventListener('click',sortingZA)// can be like that.
};


