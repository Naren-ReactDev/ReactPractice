const isOK=true;
const prom= new Promise((resolve,reject)=>{
 // setTimeout(()=>{resolve("success")},5000);
 console.log(isOK)
 if(isOK){
  resolve("success")
 }else{
    reject("failure","why");
 }
})
  
 
prom.then(fullFilledCallBack,rejectedCallBack1).catch(rejectedCallBack);

function fullFilledCallBack(result){
    dfd
    console.log("This is ===> "+result);
    console.log("fullfilled");
}
function rejectedCallBack1(result){
    console.log("This is<<== ===>1111 "+result);
    console.log("rejected");
}

function rejectedCallBack(result){
    console.log("This is<<== ===> "+result);
    console.log("rejected");
}