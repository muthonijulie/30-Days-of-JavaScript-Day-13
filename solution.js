function sleep(millis) {
    return new Promise(resolve =>{
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



