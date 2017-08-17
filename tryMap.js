var animals = [
    {name : 'Pipo', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula',species:'cat'},
    {name:'Jimmy',species:'fish'}
]

var names = animals.map(function(animal){
    return animal.name
})

// var names = animals.map((animal) => animal.name);
console.log(names);