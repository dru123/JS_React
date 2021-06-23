// /class always work in strict mode
// age=10;
// name="fake";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this);
        console.log(`His Name is ${this.name} and age is 
        ${this.age}`);
    }
    setDetails(newName, newAge) {
        this.name = newName;
        this.age = newAge
    }
}
let binod = new Person("Binod", 23);
binod.getDetails();
// binod.setDetails("Ravi",24);
// binod.getDetails();
// window
// button added
let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
// event listener -> pass
btn1.addEventListener("click", function(){
        binod.getDetails()

});//function k ander wrap krke bjne s pura function node api m jata mtlb object k sth pas hota h jiski wjh bd m call lgyioge toh object k sth calll hoga
//print the details the binod

// His Name is Binod and age is 
//         23


btn2.addEventListener("click", binod.getDetails);//yh pr humne biding nhi kri address pass hua   object pass nhi hua so address refrence ki wjh s object loose hogya uundefined or window aya
// // window pss hota h bydefault object
setTimeout(binod.getDetails, 1000);
// // undefined

// function pass krte hotoh button bydefault l leti h

let fn = binod.getDetails;
fn();
