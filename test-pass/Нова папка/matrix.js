
const matrix = 
    [ 
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3], 
    ]

    // console.log(matrix)

//  To show each element of matrix
    let total=0;

    for (let i=0; i<matrix.length; i++){
        for( let t=0; t<matrix[i].length; t++){
            console.log(matrix[i][t])
            total+=matrix[i][t]
    }
    
}
console.log(total)


// // Find sum of each matrix row

// function showSumByRow(matrix){
//     let total= [];
    
//     for (let i=0; i<matrix.length; i++){
//         // console.log(matrix[i]);
//         let sum=0;

//         for (let t=0; t<matrix[i].length; t++){
//             sum +=matrix[i][t];
//             // console.log(sum)
//         }
//         total.push(sum)
//     }
//     console.log(total)
// }
// // showSumByRow(matrix)
// // Find sum of each matrix column
// console.log('Find sum of each matrix column')

// function findMatrixColumn(matrix){

//     // variable where 0 exist in index
//     let zeroIndexInColumn=[];

//     // to find how many columns does exist
//     let matrixColumns=matrix[0].length;

//     // Check all elements of each column
//     for(let i=0; i<matrixColumns; i++){
//         for(let t=0; t< matrix.length; t++){
//             // console.log(matrix[t][i])
//             if(matrix[t][i]===0){
//                 zeroIndexInColumn.push(i)
//                 break
//             }
//         }
//     }
//     console.log(zeroIndexInColumn)

// }
// // findMatrixColumn(matrix)
// ///////////////////////////////////
// const matrixSmall = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// ////////////////////////////////////

// console.log('snake by-pass')
// function snakeByPass(){ // something goes wrong
    
//     for(let i=0; i<matrixSmall.length; i++){
//         for (let j=0; j < matrixSmall[i].length; j++){
//             let columnInd = i%2 ===0
//                 ? j 
//                 : matrixSmall[i].length-j-1;

//             console.log(matrixSmall[i][columnInd])
//         }
//     }
// }
// snakeByPass(matrixSmall); 



// ///////////////////////////////////
// const  bigMatrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [0,3,4,9],
//     [6,8,0,2],
// ]
// console.log("diagonal search in matrix");




// //  Find elements on diagonal
// function diagMatrix(find){
//     for(let i=0; i<find.length; i++){
//         console.log(find[i][i])
//     }
// }
// diagMatrix(bigMatrix)






// //////////////////////
// console.log('cross diagonal search')
// // cross diagonal 
// function crossDiag (){
//     let n= bigMatrix.length

//     for(let i=0; i< n; i++){
//         console.log(bigMatrix[i][n-i-1])
//     }
// };
// crossDiag();





// ////////////////////
// // half matrix (triangle)
// console.log("triangle matrix")
// function triangleMatrix(){
    

//     for (let i=0; i<bigMatrix.length; i++){
//         let row=[];

//         for (let j=0; j<=i; j++){
//             row.push(bigMatrix[i][j]);
//         }
//         console.log(row.join(' '))
//     }
// }
// triangleMatrix()