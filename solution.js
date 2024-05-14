async function sleep(millis) {
     await new Promise(resolve =>{
         setTimeout(resolve, millis);
    });
}
//example 1
let t = Date.now(); 
sleep(100).then(() => 
   { console.log(Date.now() - t);  

   });//100 
//example 2
sleep(200).then(() => 
    { console.log(Date.now() - t);  
        
   });//200
//synchronous operation-simultaneously
// function add(a,b){
//     return a+b;


// }
// console.log("Start");
// let result=add(3,5);
// console.log("Result"+result);
// console.log("End");

//asynchronous operation-not concurrently
// function delayedMessage(){
//     setTimeout(()=>console.log("Hello There"),2000);
// }
// console.log("Start");
// delayedMessage();
// console.log("End");

//asynchronous function((async/wait)
// const promise =new Promise ((resolve)=>{
//     setTimeout(()=>resolve(3),2000);
// });
// promise.then((response)=>console.log(response))
// .catch((error)=>console.log(error));
// console.log("Hello");

// async function myFunc(){
//     try{
//         let response=await promise;
//         console.log(response);
//         console.log("Hello");
//     }catch(error){
//         console.log(error);
//     }
// }