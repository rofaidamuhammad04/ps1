// Create a function to calculate Average to a group of 
// numbers (at least 10 numbers)
 
function Average(a,b,c,d,e,f,g,h,i,j){
    return (a+b+c+d+e+f+g+h+i+j)/10;
}
console.log(Average(1,2,3,4,5,6,7,8,9,10));



// Write a function that takes the base and height of a 
// triangle and return its area
 
function Area(base,height)
 {
    return(base*height)/2;
 }
 console.log( Area(1,2));



//  Create a function that takes the age in years and
//  returns the age in days and print it on console
 
function age(year)
{
    return year*365;
}
console.log(age(1));




// Create a function takes two numbers and return 
// thier sum
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));



// Create a function that takes an array containing 
// only numbers and return the first element
function array(arr){
    return arr[0];
}
console.log(array([4,5,6,7,9]));


// Create a function show your name in HTML 
// document
function showname()
{
    var myname="Rofaida";
    document.getElementById("name").innerHTML=myname;
}
showname()


// Write a function that takes an integer hours and 
// converts it to second 
function convert(hour)
{
    return hour*60*60;
}
console.log(convert(1));

// Given four numbers, return true if the sum of both 
// numbers is more than 350. Otherwise return false
function four(a,b,c,d)
{
    if((a+b+c+d)>350)
    {
       var x=true;
    }
    else
    {
        var x=false;
    }
    document.getElementById("boolean").innerHTML=x;
}
four(50,50,80,60);



// create a function that takes number if number equals zero return true otherwise return false
function zero(num1){
    if(num1==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(zero(0))



// create a function that takes two numbers and calc modelus%
function modelus(a,b){
    return a%b;
}
console.log(modelus(2,4));


// Make a function take two parameters num1 and num2 and print the 
// greater number or if they are equal print they are equal
function greater(num1,num2){
    if(num1>num2)
    {
        console.log("the greater is"+" "+num1)
    }
    else if(num1==num2)
    {
        console.log("they are equal")
    }
    else
    {
        console.log("the greater is"+" "+num2)
    }
}
console.log(greater(2,3))
  


// Write a JavaScript function to get the current date
function date(){
    return new Date()

}
console.log(date())



// Check if input variable is a number or not
function number(value){
    
 return typeof(value);
}
console.log(number(0));