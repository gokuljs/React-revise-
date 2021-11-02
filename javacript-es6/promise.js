// promise is like no matter what it will have an value in the end 
const mypromise=new Promise((resolve,reject)=>{
    if (false){
        setTimeout(()=>{
            resolve("i have succeded");
        },1000)
    }
    else{
        reject("o have failed the task drastically")
    }

});

mypromise
.then(value=>console.log(value))
.catch(rejected=>console.log("rejected cannot be continued"))