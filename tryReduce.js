import fs from 'fs'

var output = fs.readFileSync('data.txt','utf8')
.split('\n')
.map(line => line.trim().split(' '))
.reduce((customers, line) => {   
    
    customers[line[0]] = customers[line[0]] || [] //soit customer existe déjà / soit new array
    customers[line[0]].push({
        name : line[1],
        product : line [2],
        price : line[3],
        quantity : line[4]
        })
    return customers
}, {})
console.log('output', JSON.stringify(output, null, 2))

function findLargest(numbers) {
    // Your code goes here
    //return Math.max.apply(Math, numbers);
    
    var max = numbers[0]
    
    /*for(var i=1; i<numbers.length;i++)
    {
        if(numbers[i]>max)
        {
            max=numbers[i];
        }
    }*/
    return numbers.reduce(function (previousMax, currentNumber){
        return (currentNumber > previousMax) ? currentNumber : previousMax
    }    
    , max)    
}

function customSort(table, criteria) {
  table.sort(function(x, y){
    return y[criteria] - x[criteria];
  });
}


console.log(findLargest([1, -28, 88, 200, 7]));
console.log(findLargest([-28]));