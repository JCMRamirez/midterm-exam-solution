//question 2 function
function delayedGreeting(name){
    setTimeout(()=>{
        console.log(`Hello, ${name}!`);
    }, 2000); //set 2000 milliseconds which is 2 seconds
}

delayedGreeting("Alice");