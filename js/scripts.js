$(document).ready(function(){
	var counter = 0;
	var itemRow =
		'<div class="item-row">' +
		 	'<div class="remove-x">' +
		 		'<i class="fa fa-times fa-2x"></i>' + 
		 	'</div>' +

		 	//the height of div #item shows up 10px. why?
		 	'<div class="item">' +

		 		//why does span show up without content in it 
		 		//and with a height of only 5px?
		 		'<span class="item">' + $('#field').val() + '</span>' + 


		 	'</div>' + 
		 	'<div class="check">' +
		 		'<i class="fa fa-check fa-2x"></i>' +
		 	'</div>' +
		'</div>';

// WHAT TO DO NEXT: 
// ASSIGN ID TO EACH THING, LEAVE CLASS UNCHANGED SO THAT CSS DOESN'T BREAK

	$(document).keydown(function(e){
		if (e.which == 13) {
			//var content = $('#field').val();
			$('.items').prepend(itemRow);
			$('#field').val('');

		}; //end if statement



	}); //end keydown

		//$(".x").click(function (){
		//	$(this).remove();
		//});
}); //end document ready