let arrayObj=[1,4,8,3];

//=====================map method=============================
let newObj=arrayObj.map((value=>{
     if(value%2==0){
        return value 
    }   
}))
console.log(newObj);//[ undefined, 4, 8, undefined ]
arrayObj=[{firstName:'narendar', lastName:'reddy', age:40},
{firstName:'anusha', lastName:'reddy', age:32}]
newObj=  arrayObj.map((value)=>{
        return {name:value.firstName+' '+value.lastName,age:value.age}
    })
    console.log(newObj);  // [{ name: 'narendar reddy', age: 40 }, { name: 'anusha reddy', age: 32 }]

//1. Does Original Array change? No 
//2.what will be the new array lenght?  same as original array
//3. Incase map dosenot return element, new array wiil have   'undefined' in that place  ** see line 9 **