const people = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]

const matrix = people.map(
    (person) => (`${ person.name } ${ person.age < 18 ? "is underage!!": 
            "can go to the Matrix"}`
        )
)

console.log(matrix)