//Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.” 
let temp = prompt("Enter todays temperature")
 if(temp > 40){
     alert("It is too hot outside");
 }
 else if(temp > 30){
     alert("The weather today is normal");
 }
 else if(temp > 20){
     alert("Today's Weather is cool");
 }
 else if(temp > 10){
     alert("OMG! Today's weather is so cool");
 }
