var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const YOUNG = {start: 18, end: 25}
const MID = {start: 26, end:35}
const OLD = {start:36, end:55}

const isYOUNG = (age) => age >= YOUNG.start && age <= YOUNG.end
const isMID = (age) => age >= MID.start && age <= MID.end
const isOLD = (age) => age >= OLD.start && age <= OLD.end

function checkIfVoted(acc, voted, people, votes){
    if(acc[people]){
        if(voted){
            return {...acc, [people]: acc[people] + 1, [votes]: acc[votes] + 1}
        }
        else{
            return {...acc, [people]: acc[people] + 1}
        }
    } else{return {...acc, [people]:1, [votes]: 1}}
}

const result = voters.reduce(
    (acc, {age, voted})=> {

        if(isYOUNG(age)) return checkIfVoted(acc, voted, 'YoungPeople', 'YoungVoters')

        if(isMID(age)) return checkIfVoted(acc, voted, 'MidPeople', 'MidVoters')

        if(isOLD(age)) return checkIfVoted(acc, voted, 'OldPeople', 'OldVoters')

        return acc
    }
    ,{}
)

console.log(result)

