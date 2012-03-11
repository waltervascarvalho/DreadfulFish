$(document).ready(function()
{
    //set max length
    var max_length = 2000;
 
    //load in max characters when page loads
    $("#counter").html(max_length);
 
    //run listen key press
    whenkeydown(max_length);
});
 
whenkeydown = function(max_length)
{
	max_length += 1;
	
    $("#input").unbind().keyup(function()
    {
        //check if the appropriate text area is being typed into
        if(document.activeElement.id === "input")
        {
            //get the data in the field
            var text = $(this).val();
 
            //set number of words.
            var numofwords = this.value.split(' ').length;
 
            //set the number of words left.
            var words_left = max_length - numofwords;
 
            //check if we are still within our maximum number of characters or not
            if(numofwords <= max_length)
            {
                //set the length of the text into the counter span
                $("#counter").html("").html(words_left).css("color", "#000000");
            }
            else
            {
                //style numbers in red
                $("#counter").html("").html(words_left).css("color", "#FF0000");
            }
        }
    });
}