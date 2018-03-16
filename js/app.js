$("#grid-input").on("click",function(){
   var rows = $("#row").val();
   var cols = $("#col").val();
   for(var i=1;i<=rows;i++){
       for(var j=1;j<=cols;j++){
           $(".drawing-area").append('<canvas id="myPixel"></canvas>');
       }
   }
});