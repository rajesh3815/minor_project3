const food = require('./data-sets.json')
//list all the food items
let allFoods = () => {
    for (let item in food) {
        console.log(food[item])
    }
}
// allFoods()

//list all the food items with category vegetables
let vegetables = () => {
    let veges = food.filter((item) => {
        if (item.category == 'Vegetable') {
            return item;
        }
    })
    return veges
}
// console.log(vegetables())

// list all the food items with category fruit
let fruits = () => {
    let fruit = food.filter((item) => {
        if (item.category == 'Fruit') {
            return item;
        }
    })
    return fruit
}
//  console.log(fruits())

// list all the food items with category protien
let protien = () => {
    let fruit = food.filter((item) => {
        if (item.category == 'Protein') {
            return item;
        }
    })
    return fruit
}
// console.log(protien())

// list all the food items with category nuts
let nuts = () => {
    let fruit = food.filter((item) => {
        if (item.category == 'Nuts') {
            return item;
        }
    })
    return fruit
}
// console.log(nuts())

// list all the food items with category grains
let grains = () => {
    let fruit = food.filter((item) => {
        if (item.category == 'Grain') {
            return item;
        }
    })
    return fruit
}
// console.log(grains())

// list all the food items with category dairy
let dairy = () => {
    let fruit = food.filter((item) => {
        if (item.category == 'Dairy') {
            return item;
        }
    })
    return fruit
}
// console.log(dairy())

// list all the food items with calorie above 100
let food_cal=()=>{
    let cal100=food.filter((item)=>{
       return item.calorie>100
    })
    return cal100
}
// console.log(food_cal())

// list all the food items with calorie below 100
let food_cal1=()=>{
    let cal100=food.filter((item)=>{
       return item.calorie<100
    })
    return cal100
}
// console.log(food_cal1())

//   list all the food items with highest protien content to lowest
function compare(a,b){
    return b.protiens-a.protiens
}
let protien_sort=()=>{
food.sort(compare)
return food
}
console.log(protien_sort())