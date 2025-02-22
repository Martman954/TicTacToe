function min(numbers) {
    let result = 999
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < result){
            result = numbers[i]
        }
    }
    return result
}

/*a = [5, 6 ,7 ,6, 2, 7, 8]
console.log(min(a))*/


function kvecko(){
    let a = ""
    for (let i = 0; i < 100; i++) {
        if(i % 3 === 0){
            a += "Fizz "
        }
        else if(i % 5 === 0 && i % 3 !== 0){
            a += "FizzBuzz "
        }
        else{
            a += (i + " ")
        }        
    }
    console.log(a)
}

/*kvecko()*/



function range (...numbers){
    let a = []
    return function(y) {
        x = []
        for(let num of numbers){
            if(num > y){
                x.push(num)
            }
        }
        return x
    }
}
/*
let rangeFromTo = range()
console.log(range(4,6,4,2,4,6)(5))
*/

function reverseStuff(...stuff){
    let count = 0
    for(let i of stuff) count++;

    let a = []
    for(i = count-1; i >= 0; i--){
        a.push(stuff[i])
    }
    console.log(a)
}
/*
reverseStuff(4,6,8,2)
reverseStuff("A", "c", "B")
*/


function deepEqual(objX, objY){
    //  Initial check
    if(typeof(objX) !== typeof(objY)) 
        return false
    
    count1 = 0
    for(let a of Object.keys(objX))
        count1++
    
    count2 = 0
    for(let a of Object.keys(objY))
        count2++

    //  Number of variables check
    if(count1 !== count2)
        return false 

    for(let a in objX){
        if (objX.hasOwnProperty(a)) {
            console.log(`${a}: ${objX[a]}`);
        }
    }
}
objektJedna = {x: 5, y: 2}
objektDva = {x: 2, y: 5}

deepEqual(objektJedna, objektDva)
