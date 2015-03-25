$(document).ready(){
	$(document).keydown(function(e){
		if (e.which == 13) {
			$('.shell').prepend('Hi');
		};



	});
	// var counter = 0;
	// $(document).keydown(function(e){
	// 	var field = $('#field').val();
	// 	var line = 
	// 		'<h1>hello</h1>';

	// 	//enter key pressed
	// 	while (e.which == 13){
	// 		$(".shell").prepend(line);
	// 		$("#field").val('');
	// 		counter++;
	// 		alert (counter);
	// 	};
		//$(".x").click(function (){
		//	$(this).remove();
		//});
	});






}; //end document ready