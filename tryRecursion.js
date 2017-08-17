let categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chihuahua', parent: 'dogs'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'siamese', parent: 'cats'}
]

//Foreach version
let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => {
            node[c.id] = makeTree(categories, c.id)            
        });

    return node
}

//Reduce version 
let makeTreeReduce = (categories, parent) => {   
    return categories
        .filter(c => c.parent === parent)
        .reduce((node, c) => {
            node[c.id] = makeTreeReduce(categories, c.id)
            return node            
        }, {});    
}


//Iterative version disgusting beurk !
let makeTreeIterative = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => 
            node[c.id] = categories
                            .filter(c2 => c2.parent === c.id)
                            .reduce((node, c2) => {
                                node[c2.id] =  categories
                                                .filter(c3 => c3.parent === c2.id)
                                                .reduce((node, c3) => {
                                                    node[c3.id] = categories
                                                            .filter(c4 => c4.parent === c3.id)
                                                            .reduce((node, c4) => {
                                                                node[c4.id] = null
                                                                return node
                                                                }                                                                
                                                            , {})
                                                    return node
                                                    }
                                                    , {})
                                return node
                                }          
                                , {})          
        )
    return node
}


console.log(
    JSON.stringify(    
        makeTreeIterative(categories, null)
    ,null, 2)
)


//** Wanted results */
// {
//     animals: {
//         mammals: {
//             dogs: {
//                 chihuahua: null
//                 labrador: null
//             }
//             cats: {
//                 persian: null
//                 siamse: null
//             }
//         }
//     }
// }