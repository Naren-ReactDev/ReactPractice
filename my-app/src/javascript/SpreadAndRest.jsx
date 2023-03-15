
const obj ={nameEmploye:'Narendar', age:'40',calculateIncome:()=>{console.log('I donot know now')}}
const obj1 ={nameEmploye:'Reddy', age:'40',calculateIncome:()=>{console.log('I donot know now')}}
const arr=[1,2,5];
const arr1=[10,12,56];
console.log(obj);
//destructuring Object
const {nameEmploye,age,calculateIncome}=obj;
console.log(nameEmploye+" "+age+" "+calculateIncome);
//destructuring Array
const [a,b]=arr;
const [c,...rest]=arr;//rest paramter
console.log(a+"  "+b);
console.log("=======>"+c+"  rest==>"+rest);
const destr={...obj, nameEmploye:'reddy garu'}//  spread object
console.log("==>"+JSON.stringify(destr));
const arr3=[...arr,...arr1];//spread array
console.log(arr3);
