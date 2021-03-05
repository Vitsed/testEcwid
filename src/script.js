fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));


const person = {
    name : 'Anton',
    tel : '+15555555',
    parents: {
        mom : 'Alexandra',
        dad : 'Vitalii'
    }
};

console.log(JSON.stringify(person));

const myJson = JSON.stringify(person);

console.log("------------")
// console.log(JSON.parse(myJson));

const clone = JSON.parse(myJson);

person.parents.mom = 'Linda';

console.log(person);

console.log(JSON.parse(JSON.stringify(person)));

clone.parents.mom = 'Ann';

console.log(clone);