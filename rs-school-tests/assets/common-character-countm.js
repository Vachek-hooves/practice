let s1 = 'aabcc';
let s2 = 'adcaa';
// let s1 = 'zzzz';
// let s2 = 'zzzzzzz';
// let s1 = '';
// let s2 = 'abc';
// let s1 = 'a';
// let s2 = 'b';

function getCommonCharacterCount(s1,s2){

    s1.split(' ')
    s2=s2.split('')
    // console.log(s1,s2)
    let number=0;
    console.log(typeof(s1))

    for (let i=0;i<s1.length; i++){
        if(s2.includes(s1[i])){
            number++;
            // console.log(s1[i]);
            s2.splice(s1[i],1)
        }
    }
    console.log(number);
}

getCommonCharacterCount(s1,s2);