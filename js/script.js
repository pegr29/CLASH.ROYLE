// $(document).ready(function(){
  
//    $(":button").click(function(){alert("Вы нажали на кнопку.")});

// });                               
$(document).ready(function(){

   $("#but1").click(function(){
      $("#but1").after($("#par1").clone());
   });
   $("#par2").mouseover(function(){
      $(this).css("color","green");
   });
   $("#par2").mouseout(function(){
      $(this).css("color","black");
   });
   $("#but2").click(function(){
      $("body").append($("#par2").clone(true));
   });
   $("#but3").click(function(){
      $("body").append($("#par2").clone(false));
   });
})