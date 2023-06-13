console.log("cats ear")

// /**
//  * Given matrix where you have to find cats by ears "^^"
//  *
//  * @param {Array<Array>} matrix 
//  * @return {Number} count of cats found
//  *
//  * @example
//  * countCats([
//  *  [0, 1, '^^'],
//  *  [0, '^^', 2],
//  *  ['^^', 1, 2]
//  * ]) => 3`t
//  *
//  */
//  function countCats(/* matrix */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
  
//   module.exports = {
//     countCats
//   };

const matrix = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];


function countCats (arr){
    let cat = '^^';
    let catsArr =[];
    let Number;

    let single= arr.flat();
    console.log(single)

    for (let i=0; i<single.length; i++){
        let catPart=single[i];
        // console.log(catPart)
        if(catPart===cat){
          catsArr.push(catPart);

          
        }
    }
    Number=catsArr.length
    alert(Number)
};
countCats(matrix);

