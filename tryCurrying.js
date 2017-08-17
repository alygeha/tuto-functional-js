//non-currying version
let dragon = (name, size, element) => 
    name + ' is a '+
    size + ' dragon that breathes ' + 
    element + ' !';

console.log(dragon('loulou', 'tiny', 'lightning'))

//currying version
dragon = 
name =>
    size =>
        element =>
        name + ' is a '+
        size + ' dragon that breathes ' + 
        element + ' !!!';

console.log(dragon('loulou')('tiny')('lightning'))

//using closures
//let loulouDragon = dragon('loulou');
//let tinyDragon = loulouDragon('tiny');
//console.log(tinyDragon('lighting'))

//to render a non_currying function curriable use the lodash module then apply dragon = _.curry(dragon)


