// user se aik number ly or uska tble 2 , 4 ,6 print kry

let num = 2;
for (let i=1; i<=10; i++){
    console.log(num + "x" + 1 + "="+(num*i));}

 // odd number
 
 for(let i=1; i<=10; i+=2){
    console.log(i);
    
 }

 //1 se 10 tk number (5 skip)

 for(let i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
    
 }

 // forloop se squre print krna (1 se 10)

 for(let i=1; i<=10; i++){
    console.log(i*i);
    
 }

 let count =0
 for(let i=1; i<=10; i++){
    if(i%2===0){
        count ++;
    }
 
 console.log(count);
}
 //function

 function greet(age){
    if(age >=18){
        console.log("welcome");
        
    }
    else{
        console.log("not Allow");
        
    }
 }
 greet(16);
  
 function greet(time){
    if(time==="morning"){
    console.log("good morning");
    }
    else if(time==="evening"){

    
        console.log("good evening");
        
    }
 }
greet("morning");

function greet(marks){
    if(marks>=80){
        console.log("Excellent");
        
    }
    else if (marks>=50){
        console.log("pass");
        
    }
}
greet(73);

function greet(gender){
    if(gender==="male"){
        console.log("Hello Sir");
        
    }
    else if(gender==="Female"){
        console.log("Hello ma am");
        
    }
}
greet("female");


function greet(day){
    if(day==="friday"){
        console.log("jumma mubarak");
        
    }
    else if(day==="monday"){
        console.log("Have a nice day");
        
    }
}
greet("friday");
 