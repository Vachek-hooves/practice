// let n= 152;
let n= 1001;

function deleteDigit(n){

    let arr=n.toString().split('');
    console.log(arr)
    let devide=arr.splice(0,1)

    arr=(arr.join(''))
    console.log(arr)
 
    return arr

    // console.log(Math.max(...arr))
    
}
deleteDigit(n)