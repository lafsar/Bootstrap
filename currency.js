/*  function that given a dollar amount returns a object of the 
number of bills and coins needed to return change.

For instance, given 7.23, it should return:
{
  fives: 1,
  ones: 2,
  dimes: 2,
  pennies: 3
}
*/

//convert int, float or string to valid format first
var currency = function (number) {
var y=0;
var denominations = [
    {key: 'pennies: ', value:1},
    {key:'nickels: ', value:5},
    {key:'dimes: ', value:10},
    {key:'quarters: ',value:25},
    {key:'ones: ', value:100},
    {key:'fives: ',value:500},
    {key:'tens: ' ,value:1000},
    {key:'twenties: ', value:2000},
    {key:'fifties: ',value:5000},
    {key:'hundreds: ',value:10000}];  
    
    finalnum= parseFloat(number)*100; //the easy way

    //The hard way
    /* var finalnum = number.toString();
    for(var i=0; i<=finalnum.length-1; i++) {
        if(finalnum[i] ==='.'){
            finalnum= finalnum.split("");
            finalnum.splice(i,1); 
          
            if(finalnum[i] != null){
                finalnum = finalnum.slice(0,i+2);
           
            }
         }
    }
     
   if( Object.prototype.toString.call(finalnum ) === '[object Array]' )
        finalnum=finalnum.join(''); //if result is an array make it a string*/
   
var finale ={};    
 for (var x=denominations.length-1; x>=0; x--) {
 var denom = denominations[x];
     for(key in denom) {
         if(denom.hasOwnProperty(key))
             var val = denom[key];
     }
     
     var divided = Math.floor(finalnum / val);
     
     if (divided >= 1){
        finalnum -= divided * val;
          finale[denom.key] = divided;
       
 
     }
     if (finalnum ==0)
         break;
 }
   
    return finale;
}
