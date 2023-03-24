let guestList= "guest: * Ivan\n * Ulya\n *Dyma\n"
console.log(guestList)
/////////////////////////////////
let str = "Hi\nWorld";
let str1 = `Hi
World`
console.log(str==str1) // true. 
/////////////////////////////////
let example= "hello world!";
console.log('......................')
console.log("working with - 'hello world'")
console.log('......................')
console.group('charAt(index)')
console.log(example.charAt(1))
console.log(example[2])
console.log('зміна регістру на великий першого символу нового слова,можлива при створенні нової змінної')

let newExample=(example.charAt(0)).toUpperCase()+(example.slice(1,5))+" "+(example.charAt(6)).toUpperCase()+(example.slice(7))

console.log(newExample + " => str.(charAt().toUpperCase())+str.slice(from include,till before)");
console.log(example+" - стара змінна" +" / "+ newExample+" - нова змінна");
console.groupEnd();
////////////////////////////////
console.group('indexOf(index,pos)')
console.log(example.indexOf('el'));
console.log(example.indexOf('hl'))
console.log(example.indexOf('lo')+" -'lo' знах-ся з 3-го індексу включно");
if (example.indexOf('world') !=-1){
    console.log('елемент присутній')
}else{
    console.log('елемент відсутній')
};
console.groupEnd();
////////////////////////////////
console.group('includes, startsWith, endsWith');
console.group('includes("substr", pos)'+ "- pos можна не вказувати")
console.log(example.includes('rld') + " - був пошук 'rld'")
console.groupEnd()
console.group('startsWith("substr")');
console.log(example.startsWith('hel'));
console.groupEnd();
console.group('endsWith("substr")')

