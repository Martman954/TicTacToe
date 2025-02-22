//  1:  Squaring Integers

function squareList(array) {
    return array.filter(x => x > 0)
                .filter(x => Math.floor(x) === x)
                .map(x => x * x)
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]

//  2.  Flattening

let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.reduce((arr, x) => [...arr, ...x]))
// → [1, 2, 3, 4, 5, 6]

//  3.  Your Own Loop

function loop(number, start, end, stuff){
    for(number; start(number); number = end(number)){
        stuff(number)
    }
}

loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)
// → 3
// → 2
// → 1

//  4.  Alphabetical Sorting

function alphabeticalOrder(array) {
    return array.sort()
}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]

//  5.  From Title To URL

//  NOTES: Need to split the string into an array of characters
//          and then join it back together
function urlSlug(title) {
    return title.split('')
                .map(x => (x === " " ? "-" : x))
                .map(x => (x === x.toUpperCase() ? x.toLowerCase() : x))
                .join('')
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
// → a-mind-needs-books-like-a-sword-needs-a-whetstone

//  6.  Something

function checkPositive(array) {
    return array.some(x => x > 0) // if any element in array
}

console.log(checkPositive([1, 2, 3, -4, 5]))
// → true

//  7.  Everything

/*
function every(array, test) {
    return array.some(test)
}
*/
function every(array, test){
    for(let i = 0; i < array.length; i++){
        if(!test(array[i]))
            return false
    }
    return true
}
console.log("7. Everything: ")
console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true

//  8.  Script Transformation

require("./scripts.js")

function oldestLivingScript(scripts) {
    return scripts.filter(({name}) => name === "Han")
                  .filter(({living}) => living === true)[0].name
}

console.log(oldestLivingScript(SCRIPTS))
// → Han

//  9.  The Multi-Tool Of Array Transformation

require("./scripts.js")

function rtlScriptNames(scripts) {
    
    return scripts.filter(({direction}) => direction === "rtl")
                    .map(x => x.name)
}

console.log(rtlScriptNames(SCRIPTS))
// → [ "Adlam", "Arabic", "Imperial Aramaic", ... ]

//  10. Dominant Writing Direction

require("./scripts.js")

function dominantDirection(text) {
    var c = countBy(text, )
}

function countBy(items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex(c => c.name === name)
        if (known === -1) {
            counts.push({ name, count: 1 })
        } else {
            counts[known].count++
        }
    }
    return counts
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (
            script.ranges.some(([from, to]) => {
                return code >= from && code < to
            })
        ) {
            return script
        }
    }
    return null
}

console.log(dominantDirection("Hello!"))
// → ltr
console.log(dominantDirection("Hey, مساء الخير"))
// → rtl