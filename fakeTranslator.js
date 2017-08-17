import highland from 'highland'
import Promise from 'bluebird'
import fs from 'fs'

function loadTranslation(word){
const promise = new Promise((resolve, reject) =>
    {
         setTimeout(() => {
                highland(fs.createReadStream('translate.txt', 'utf8'))
                    .split()
                    .map(line => line.split(' '))
                    .map(col => ({
                        en: col[0],
                        fr: col[1]
                    }))
                    .filter(x => x.en === word)
                    .map(x => x.fr)
                    .each(x => resolve(x))             
         }, 1000);
    })

    return promise
}

export default loadTranslation