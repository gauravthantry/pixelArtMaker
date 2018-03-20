$(document).ready(function() {
const rows=$("#row");   /* Suggestion1: Declared global variables instead of calling the DOM elements locally every time the button is clicked */
const cols=$("#col");
    $("#grid-input").click(function() {
        $(".drawing-area").empty();

        let rowVal = rows.val();
        var colVal = cols.val();
        if (rowVal > 0 && colVal > 0) {
            if (rowVal < 10 && colVal < 20) {   /* Bigger squares will look good if the grid size is small */
                for (var i = 1; i <= rowVal; i++) {
                    var rowClassName = 'row' + i;
                    var tr = $('<tr>').addClass(rowClassName);
                    tr.appendTo('.drawing-area'); //Adding dynamic class names whenever a new table row is created

                    for (var j = 1; j <= colVal; j++) {
                        var colClassName = 'col' + j;
                        $('<td width="30px" height="30px" style="border: 1px solid #000; "></a></td>').addClass(colClassName).appendTo(tr);
                    }
                    $('.drawing-area').append('</tr>');

                }
                $('.drawing-area').css('visibility', 'visible').hide().fadeIn('slow');



            } else if ((rowVal >= 10 && rowVal <= 15) && (colVal <= 35)) {
                for (var i = 1; i <= rowVal; i++) {
                    var rowClassName = 'row' + i;
                    var tr = $('<tr>').addClass(rowClassName);
                    tr.appendTo('.drawing-area'); //Adding dynamic class names whenever a new table row is created

                    for (var j = 1; j <= colVal; j++) {
                        var colClassName = 'col' + j;
                        $('<td width="25px" height="25px" style="border: 1px solid #000; text-align: center;"></a></td>').addClass(colClassName).appendTo(tr);
                    }

                }
                $('.drawing-area').css('visibility', 'visible').hide().fadeIn('slow');


            } 
			else if ((rowVal >= 15 && rowVal <= 19) && (colVal <= 50)) {
                for (var i = 1; i <= rowVal; i++) {
                    var rowClassName = 'row' + i;
                    var tr = $('<tr>').addClass(rowClassName);
                    tr.appendTo('.drawing-area'); //Adding dynamic class names whenever a new table row is created

                    for (var j = 1; j <= colVal; j++) {
                        var colClassName = 'col' + j;
                        $('<td width="20px" height="20px" style="border: 1px solid #000; text-align: center;"></a></td>').addClass(colClassName).appendTo(tr);
                    }

                }
                $('.drawing-area').css('visibility', 'visible').hide().fadeIn('slow');


            } 
			else if (rowVal >= 20 || colVal > 50) {  /* Any input more than this size would exceed the browser size */
                alert('Bamm!!! Your input will flood the browser\'s belly. Feed no more than 19 rows and 50 columns');
            }
        } else {
            alert("You haven't provided the grid size!");
        }
    });
    $('body').on("click","td",function() {
        var color = $("input[name='color']:checked").val();
        if (color === 'blue') {         
            if ($(this).hasClass('colorFill-Blue'))
                $(this).removeClass('colorFill-Blue');
			
			else  if ($(this).hasClass('colorFill-Green'))
                $(this).removeClass('colorFill-Green');
			
			else if ($(this).hasClass('colorFill-Yellow'))
                $(this).removeClass('colorFill-Yellow');
			
            else
                $(this).addClass('colorFill-Blue');

        } else if (color === 'green') {
            if ($(this).hasClass('colorFill-Blue'))
                $(this).removeClass('colorFill-Blue');
			
			else  if ($(this).hasClass('colorFill-Green'))
                $(this).removeClass('colorFill-Green');
			
			else if ($(this).hasClass('colorFill-Yellow'))
                $(this).removeClass('colorFill-Yellow');
            else
                $(this).addClass('colorFill-Green');
            
        } else {
            if ($(this).hasClass('colorFill-Blue'))
                $(this).removeClass('colorFill-Blue');
			
			else  if ($(this).hasClass('colorFill-Green'))
                $(this).removeClass('colorFill-Green');
			
			else if ($(this).hasClass('colorFill-Yellow'))
                $(this).removeClass('colorFill-Yellow');
            else
                $(this).addClass('colorFill-Yellow');
        }
    });
});