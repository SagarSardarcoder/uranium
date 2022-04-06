
var today = new Date();

 var month = today.getMonth()+1;
 let fun1= function(){
           console.log(module)
           console.log( "current month is "+ month);
 }
 var date = today.getDate();
 let fun2 =  function(){
          console.log(module)
          console.log("curent date is "+ date);
          }
 let fun3 = function(){
            console.log(module)
            console.log("Uranium, W3D3, the topic for today is Nodejs module system")
        }

module.exports.exp1 = fun1
module.exports.exp2 = fun2
module.exports.exp3 = fun3