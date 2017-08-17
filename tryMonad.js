import Bacon from 'baconjs'
import loadTranslation from './fakeTranslator'

let getInFrench = (word) => {
    // const apiKey = 'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0'
    // const url = 'https://www.googleapis.com' + 
    // '/language/translate/v2'  +
    // '?key=' + apiKey +
    // '&source=en' +
    // '&target=pt' +
    // '&format=text' + 
    // '&q=' + encodeURIComponent(word)

    // const promise = fetch(url)
    //     .then(response => response.json())
    //     .then(parsedResponse =>
    //     parsedResponse
    //         .data          
    //     )
    //const stream = bacon.fromPromise(promise)

    const promise = loadTranslation(word)                        
    const stream = Bacon.fromPromise(promise)        
    return stream
}

//simple example : there is no need to use flatMap
getInFrench('blabla')
            .onValue(word => console.log(word))

//up stream with downstream = 2 streams to be flaten before treatment and that's flatMap
//and that's Monad functor
const stream = new Bacon.Bus()

stream
    .flatMap(word => getInFrench(word))
    .map(word => word.toUpperCase())
    .onValue(word => console.log(word))

stream.push('cat')
stream.push('dog')
stream.push('meal')