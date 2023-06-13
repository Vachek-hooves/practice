// LIFO - Last In First Out.

// function stackOnArrayExample(){
//     console.log('stack on Array example')

//     let stack=[];
//     console.log(stack)

//     console.log('Push fake call stack');

//     console.log('   Push outer:');
//     stack.push('outer');
//     console.log(stack)

//     console.log('   Push inner:');
//     stack.push('inner');
//     console.log(stack)

//     console.log('   Push Super-inner:');
//     stack.push('Super-inner');
//     console.log(stack)

//     console.log('   Push Super-super-inner:');
//     stack.push('Super-super-inner');
//     console.log(stack)

//     console.log('   executed fake call stack')
    

//     while(stack.length){
//         let removeElement= stack.pop()
//         console.log(stack)
        
//         console.log('   execute - ', removeElement)
        
//     }
// }
// stackOnArrayExample();

function bracketsIssue(){
    console.log('brackets issue:');

    const OPEN_BRACKETS =['(','{']; // опис відкритих дужок.
    const BRACKETS_PAIR = {         //  
        [')'] : '(',
        ['}'] : '{',
    }
}

function isBraketsOk(str){

    let stack =[];

    for (let i=0; i<str.length; i++){ // п
        let currentSymbol = str[i];

        if (OPEN_BRACKETS.includes(currentSymbol)){
            stack.push(currentSymbol);
        }else{
            if (stack.length===0){
                return false;
            }
            let topElement =stack[stack.length-1];
            if (BRACKETS_PAIR[currentSymbol]===topElement){
                stack.pop();
            }else{
                return false
            }
        }
    }
        return stack.length===0;
}