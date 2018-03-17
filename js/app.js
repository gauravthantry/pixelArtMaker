$(document).ready(function(){
   $("#grid-input").click(function(){
	   $(".drawing-area").empty();
	   
      var rows = $("#row").val();
      var cols = $("#col").val();
	  if(rows>0 && cols > 0){
		  
      for(var i=1;i<=rows;i++){
          for(var j=1;j<=cols;j++){
              $(".drawing-area").append('<canvas id="myPixel" width="20px" height="20px" style="border: 1px solid #000;"></canvas>');
          }
   	   $(".drawing-area").append('<br/>');
      }
	  }
	  else{
		  alert("You haven't provided the grid size!");
	  }
   });
});