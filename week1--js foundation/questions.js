var name = "tharun"
let name1 = "tharun"
const name2 = "tharun"


var fav_color = "green";
const height = 5.8;
let age = 24;
var isStudent = true;
let is_like = false;
console.log("this prints");
// height = 6.0;// throws error

function sum(a,b){
    return a+b;
}

let ans = sum(2,"---3");// concatenates
let ans2 = sum(2,3);// adds--operation 
console.log(ans);

function can_vote(age){
    if(age>=18){
        return true;
    }
    return false;
}

let can_vote_ans = can_vote(17);
console.log(can_vote_ans);

function is_even(num){
    if(num%2==0){
        return true;
    }
    return false;
}

let is_even_ans = is_even(3);
console.log(is_even_ans);

function sum_of_n(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

let sum_of_n_ans = sum_of_n(5);
console.log(sum_of_n_ans);


let obj_exampel = {
    name: "tharun",
    age: 24,
    isStudent: true,
    fav_color: "green",
    height: 5.8
}

console.log(obj_exampel);
console.log(obj_exampel.name);
// console.log(obj_exampel.age);


let user = {
    name: "tharun",
    age : 24,
}

console.log(user);

function greet(user){
    console.log("Hello "+user.name);
}


function only_even(arr){
    let even_arr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even_arr.push(arr[i]);
        }
    }
    return even_arr;
}


let only_even_ans = only_even([1,2,3,4,5,6,7,8,9,10]);
console.log(only_even_ans);

// using filter 

function only_even_filter(arr){
    return arr.filter(function(num){
        return num%2==0;
    })
}

function only_even_filter1(arr){
    return arr.filter((num)=>{
        return num%2==0;
    })
}

let only_even_filter_ans = only_even_filter1([1,2,3,4,5,6,7,8,9,10]);

console.log(only_even_filter_ans);


// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


function check(users){
    return users.filter((user) => {
        return user.age > 18 && user.gender === 'male';
    });
}