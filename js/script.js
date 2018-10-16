// $(document).ready(function(){
  
//    $(":button").click(function(){alert("Вы нажали на кнопку.")});

// });                               
//$(document).ready(function(){

//   $("#but1").click(function(){
//      $("#but1").after($("#par1").clone());
//   });
//   $("#par2").mouseover(function(){
//      $(this).css("color","green");
//   });
//   $("#par2").mouseout(function(){
//      $(this).css("color","black");
//   });
//   $("#but2").click(function(){
//      $("body").append($("#par2").clone(true));
//   });
//   $("#but3").click(function(){
//      $("body").append($("#par2").clone(false));
//   });
// })
//$(document).ready(function(){
  
//   $("#but1").click(function(){
//      $("#par1").remove();
//   });
//   $("#but2").click(function(){
//      $("h1").remove();
//   });
//   $("#but3").click(function(){
//      $("p").remove();
//   });

function view(arg) {
	console.log(arg);
}

// var block ={};
// block.vova ="food"
// block.danil ="rom"
// block.sergei ="kod"
// block.speak =function(){
//	return "dom"
//}
// view(block.speak());
// view(block.vova);
// view(block.danil);
// view(block.sergei);

var v1 = document.getElementById("pegr");
var cells = v1.getElementsByTagName("p");
view(cells);