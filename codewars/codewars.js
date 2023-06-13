//////////
let arr=['hello', 'world', 'this', 'is', 'great']

console.log(arr.join(' '))

let string= '01011110001100111'
/////////////
for (let i=0; i<string.length; i++){
    // console.log(string[i])
    let x = string[i]
    if (x<5){
        x='0'
        // console.log(x)
      }else if(x>=5){
        x='1'
        // console.log(x)
      }
//    console.log('giev an error')
}

/////////////////////////////
function areYouPlayingBanjo(name) {
    let youName=('enter your name')
    console.log(youName)
    return name;
}
areYouPlayingBanjo();

/////////////////////////////////////////////////////////

function findMultiples(a,b) {
  
  for(let i=a; i<=b; i+a){
    console.log(i)
  }

}
// findMultiples(2,6)
////////////////////////////////////////////////////////

function highAndLow(numbers){

  let high
  let low

  let numb = numbers.split(' ').map(Number);
  // console.log(numb)
  // console.log(typeof(numb))
  let sorted = numb.sort((a, b) => a - b);

  high = sorted[sorted.length - 1];
  low = sorted[0];

  // console.log(typeof( `${high} ${low}`))
  return `${high} ${low}`;


}
highAndLow("1 9 3 25 15 4 -5")
console.log('---------------------------')
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
console.log('---------------------------')
highAndLow("1 2 3")
//////////////////////////////////////////////////////

function derive(a,b) {

  let multi= a*b;
  console.log(multi);

  let sub=b-1;
  console.log(sub)
  console.log(`${multi}x^${sub}`)

};
derive(7,8);