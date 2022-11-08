//1 operator ? 

/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}
*/

/*Solution*/

// function checkAge(age){
//     return (age>18) ? true : confirm('Родители разрешили?');
// }

// const yourAge = prompt('Сколько вам лет?');
// console.log(checkAge(yourAge));



//2 pow function

/*
pow(3, 2) = 3*3 = 9
pow(3, 3) = 3*3*3 = 27
pow(1, 100) = 1*1 * ...* 1 = 1
*/

/*Solution*/

// const pow = function(a,b){
//     let res = 1;
//     for(let i = 0; i < b; i++){
//         res*=a;
//     }
//     return res;
// }

// console.log(pow(1,100));



//3 arrow function

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

/*Solution*/

// const ask = (question, yes, no) => { 

//     // if(confirm(question)) yes();
//     // else no()

//     return confirm(question) ? yes() : no();
// };

// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );



//4 sorting

/*
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

/*Solution*/

// let arr = [5, 2, 1, -10, 8];

// // arr.sort((a,b) => b-a);
// // alert(arr);

// function sorting(arr){
//     let temp = 0;
//     for(let i = 1; i < arr.length; i++){
//         for(let j = arr.length-1; j >= i; j--){
//             if(arr[j-1]<arr[j]){
//                 temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// alert(sorting(arr));



//5 array of names

/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /... ваш код / 

alert( names ); // Вася, Петя, Маша
*/

/*Solution*/

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((user)=>{return ' ' + user.name});
// alert( names ); // Вася, Петя, Маша



//6 transform to object

/* 
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = / ... ваш код ... /
/
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

/*Solution*/

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((user) => {
//     let newObj = {};

//     let fullName;
//     let id;
    
//     newObj.fullName = `${user.name} ${user.surname}`;
//     newObj.id = user.id;

//     return  newObj;
// });
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// console.log(usersMapped);
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин



//7 avg age

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

/*Solution*/

// const getAverageAge = (age) => {
//     const ages = arr.map((user)=>{
//         return user.age;
//     });
//     let sum = 0;
//     for( let i = 0; i<ages.length; i++){
//         sum+=ages[i];
//     }
//     return sum/arr.length;
// };

const getAverageAge = (age)=>{
    let firstVal = 0;
    let result = arr.reduce((prev, curr) => {return prev + curr.age}, firstVal);
    return result/arr.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );