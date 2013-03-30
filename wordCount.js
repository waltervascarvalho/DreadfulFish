$(document).ready(function() {
	
	//set max length
	var max_length = 0;
	var words_start;
 
	//load in max characters when page loads
	$("#counter").html(max_length);

	//run listen key press
	whenkeydown(max_length);

});
 
whenkeydown = function(max_length) {
	
	max_length -= 1;
	
	$("#input").unbind().keyup(function() {
		//check if the appropriate text area is being typed into
		if (document.activeElement.id === "input") {
			//get the data in the field
			var text = $(this).val().trim;

			//set number of words.
			numofwords = this.value.split(/\S+/g).length;

			//set the number of total words.
			words_start = max_length + numofwords;
			
			//set the total of the text into the counter span
			$("#counter").html("").html(words_start).css("color", "#777");
	
			return words_start;
		}
	});
}