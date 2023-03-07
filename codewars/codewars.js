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
    let youName=prompt('enter your name')
    console.log(youName)
    return name;
}
areYouPlayingBanjo()