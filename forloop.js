
for(i=1; i<=10; i ++){
    console.log(i);
    
}

for(i=10; i>=1; i--){
    console.log(i);
}
    
    
for(i=1; i<=6; i++){
    console.log(i*i);
    
}

    
for(i=1; i<=50; i++){
    if(i%5==0)
console.log("count");
}

for(i =1; i <=5; i++)
{
    console.log("Hello");
}

for(i = 2; i <= 10; i = i + 2)
{
    console.log(i);
}
let sum = 0;
for(let i=1; i<=10; i ++){
    sum + i;

}
console.log("sum", sum);

function greet(){
    console.log("Hello , welcom");
    
}
greet();
 function greetUser(name){
    console.log("Hello" + name);
    
 }
greetUser("mehreeen");
greetUser("Ali");

//add tow numbers

function add (a,b){
    console.log(a+b);
    
}
add(5,5);
add(20,30);

//sum using function

function calculatesum (limit){
    let sum=0;
    for (let i=1; i<=limit; i++){
        sum =i;
    }
    return sum;

}
console.log(calculatesum(10));





