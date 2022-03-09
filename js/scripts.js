// var multiply = function(number1, number2) {
//     return number1 * number2;
//   };

//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = multiply(number1, number2);
//   alert(result);
//   var multiply = function(number1, number2) {
//     return number1 * number2;
//   };

// var divide = function(height, weight) { 
//       return height/ weight; 

// };
//    var height=parseInt(prompt("Enter your height:"));
//    var weight=parseInt(prompt("Enter your weight"));
//    var result= divide(height,weight);
//    alert(result);
//    var divide = function(height,weight){
//            return height/weight;

//    };
//    var convert =function(celcius,num1,num2){
//        return celcius*num1+num2;
//    };
//    var celcius=parseInt(prompt("Enter celcius degree"));
//    const num1=1.8;
//    const num2=32;
//    var result=convert(celcius,num1,num2);
//    alert(result);
//    var convert=function(celcius,num1,num2){
//        return celcius*num1+num2;
//    };
//    var conversion=(gallon,num3)=>{
//        return gallon*num3;
//    };
//    var gallon=parseInt(prompt("Enter unit in gallons"));
//    const num3=3.785;
//    var result=conversion(gallon,num3);
//    alert(result);
//    var conversion=(gallon,num3)=>{
//        return gallon*num3;
//    };

var add = function(number1, number2) {
    return number1 + number2;
};
var subtract = function(number1, number2) {
    return number1 - number2;
};
var multiply = function(number1, number2) {
    return number1 * number2;
};
var divide = function(number1, number2) {
    return number1 / number2;
};

$(document).ready(function() {
    $("form#add").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        var result = add(number1, number2);
        $("#output").text(result);
    });
});