import _ from 'lodash'

let dragons = [
    {name: 'toto' , element: 'lightning'},
    {name: 'tata', element:'lightning'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'ice'}
]

let hasElement = 
    _.curry((element, obj) => obj.element === element)

let lightningsDragons = 
    dragons.filter(hasElement('lightning'))
    //equals to dragons.filter(x => hasElement('lightning')(x))

console.log(lightningsDragons)