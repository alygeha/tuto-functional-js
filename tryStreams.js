import fs from 'fs'
import highland from 'highland' // a streaming library

highland(fs.createReadStream('data.txt', 'utf8'))
    .split()
    .map(line => line.split(' '))
    .map(col => ({
        name : col[0],
        firstname : col[1], 
        quantity : col[3],      
    }))
    .map(line => ({
        customer: line.firstname,
        commands: line.quantity
    }))
.each(x => console.log('each: ', x))

//to see https://baconjs.github.io/
//bacon a strong streaming library that allow to handle streams of events (UI)

import bacon from 'baconjs'
const stream = new bacon.Bus()

stream
    .map(word => word.toUpperCase())
    .onValue(console.log)

stream.push('cat')
stream.push('meal')
stream.push('trumpet')