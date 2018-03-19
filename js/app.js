$(document).ready(function() {
    $("#grid-input").click(function() {
        $(".drawing-area").empty();

        var rows = $("#row").val();
        var cols = $("#col").val();
        if (rows > 0 && cols > 0) {
            if (rows < 8 || cols < 8) {
                for (var i = 1; i <= rows; i++) {
                    var rowClassName = 'row' + i;
                    var tr = $('<tr>').addClass(rowClassName);
                    tr.appendTo('.drawing-area'); //Adding dynamic class names whenever a new table row is created

                    for (var j = 1; j <= cols; j++) {
                        var colClassName = 'col' + j;
                        $('<td width="30px" height="30px" style="border: 1px solid #000; "></a></td>').addClass(colClassName).appendTo(tr);
                    }
                    $('.drawing-area').append('</tr>');

                }
                $('.drawing-area').css('visibility', 'visible').hide().fadeIn('slow');



            } else if ((rows >= 8 && rows <= 20) && (cols >= 8 && cols <= 50)) {
                for (var i = 1; i <= rows; i++) {
                    var rowClassName = 'row' + i;
                    var tr = $('<tr>').addClass(rowClassName);
                    tr.appendTo('.drawing-area'); //Adding dynamic class names whenever a new table row is created

                    for (var j = 1; j <= cols; j++) {
                        var colClassName = 'col' + j;
                        $('<td width="20px" height="20px" style="border: 1px solid #000; text-align: center;"></a></td>').addClass(colClassName).appendTo(tr);
                    }

                }
                $('.drawing-area').css('visibility', 'visible').hide().fadeIn('slow');


            } else if (rows > 20 || cols > 50) {
                alert('Bamm!!! Your input will flood the browser\'s belly');
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
            alert("green is selected");
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