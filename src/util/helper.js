

let fun1 =  function(){
  var today = new Date();
        console.log( "current month is "+ today.getMonth()+1);
 }
 
 let fun2 =  function(){
  var today = new Date();
          console.log("curent date is "+today.getDate());
          }
 let fun3 = function(){
            
            console.log("Uranium, W3D3, the topic for today is Nodejs module system")
        }

module.exports.exp1 = fun1
module.exports.exp2 = fun2
module.exports.exp3 = fun3