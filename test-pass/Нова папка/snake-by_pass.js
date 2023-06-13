let example =[
    [1,2,3],
    [6,5,4],
    [7,8,6]
]


console.log('snake matrix')
function findSnake(){
    for(let i=0; i< example.length; i++){
        for(let j=0; j < example[i].length; j++){
            let columnIndex=i%2 ===0
            ? j
            : (example[i].length-j-1);

            console.log(example[i][columnIndex]);
        }
    }
}
findSnake(example)