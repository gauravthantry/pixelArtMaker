$(document).ready(function(){
   $("#grid-input").click(function(){
	   $(".drawing-area").empty();
	   
      var rows = $("#row").val();
      var cols = $("#col").val();
	  if(rows>0 && cols > 0){
      for(var i=1;i<=rows;i++){
          for(var j=1;j<=cols;j++){
              $(".drawing-area").append('<td id="myPixel" width="20px" height="20px" style="border: 1px solid #000;"></td>');
          }
   	   $(".drawing-area").append('<br/>');
      }
	  }
	  else{
		  alert("You haven't provided the grid size!");
	  }
   });
   var color=  $("input[name='color']:checked").val();
   console.log(color);
 $("td").click(function(){
 var color=  $("input[name='color']:checked").val();
 if(color==='blue')
 {
	 if($(this).hasClass('colorFill-Blue'))
		 $(this).removeClass('colorFill-Blue');
	  else
		  $(this).addClass('colorFill-Blue');
 }
 else if(color==='Ggreen')
 {
	 if($(this).hasClass('colorFill-Green'))
		 $(this).removeClass('colorFill-Green');
	 else
		 $(this).addClass('colorFill-Green');
 }
 else{
	 if($(this).hasClass('colorFill-Yellow'))
		 $(this).removeClass('colorFill-Yellow');
	 else
		 $(this).addClass('colorFill-Yellow');
 }
 });
});