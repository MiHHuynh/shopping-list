$(document).ready(function(){
	var fieldcontent = $('#field').val();

	//first half of the row
	var itemRow1 =
		'<div class="item-row">' +
		 	'<div class="remove-x">' +
		 		'<i class="fa fa-times fa-2x"></i>' + 
		 	'</div>' +
		 	'<div class="item">' +
		 		'<span class="item">';

	//second half of the row
	var itemRow2 = '</span>' + '</div>' + 
		 	'<div class="check">' +
		 		'<i class="fa fa-check fa-2x"></i>' +
		 	'</div>' +
		'</div>';

	$(document).keydown(function(e){

		//when enter key is pressed
		if (e.which == 13) {
			fieldcontent = $('#field').val();
			$('.items').prepend(itemRow1 + fieldcontent + itemRow2);
			console.log(fieldcontent);
			$('#field').val('');
		}; //end if statement

	}); //end keydown
	
	//click checkmark to change appearance of item

	//how to add in toggle to be able to check and uncheck item?
	//how to make newly added item lines respond to click function?
	
	$('.check').on("click", function(){
		console.log("Test");
		$(this).css("color", "green");
		$(this).prev().children().css("text-decoration", "line-through")
									 .css("color", "#cccccc")
									 .css("font-style", "italic");

	});
	
}); //end document ready