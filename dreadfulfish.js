var shorts = ["ain't","aren't","aren't","arent","basically","cannot","can't","colour","couldn't","didn't","doesn't","don't","download","famous","hadn't","hasn't","haven't","he'd","he'll","he's ","historically","how'd","how's","I'd","I'll","I'm","I've","I meant that","I must","I have got to","I shall","I will","improve it","intended to","isn't","it's a","it's","it's","I've","let's","long ago","name's","probably","ohh","pouring down","r u","ru","she'd","she's","shes","shouldn't","that's","thats","there's","these are","those are","they're","to summarise","u r","ur","u","wanna","wasn't","we'll","weren't","we're","we've","what's","whats","where's","who's","won't","wont","wouldn't","yeah","yep","yesit","you'd","you'll","you're","you've"];

var longs = ["is not","are not","are not","are not","to put it simply","can not","can not","color","could not","did not","does not","do not","down load","well-known","had not","has not","have not","he would","he will","he is ","in the past","how did","how is","I would","I will","I am","I have","I wanted to say","I've got to","I must","I intend to","I intend to","make it better","was going to","is not","it is a","it is","it is","I have","let us","a long time ago","name is",",in all likelyhood,","oh","raining cats and dogs","are you","are you","she would","she is","she is","should not","that is","that is","there is","these're","those're","they are","at the end of the day","you are","your","you","want to","was not","we will","were not","we are","we have","what is","what is","where is","who is","will not","will not","would not","yes","yes","yes it","you would","you will","you are","you have"];

function findReplace(matchList, switchList, text){
	var changeCount = 0;
	
	for(var i = 0; i < matchList.length; i++){
		// Escape the escape characters in RegExp builders.
		var re = new RegExp("\\b"+matchList[i]+"\\b", "ig");
		
		if(re.test(text) == true)
			changeCount++;
		
		text = text.replace(re,switchList[i]);
	}

	return text + " ["+changeCount+" changes.]";
} 

function shortToLong(){
	var words = document.getElementById("input").value;
	var result = findReplace(shorts, longs, words);
	document.getElementById("output").value = result;
}
			
function longToShort(){
	var words = document.getElementById("input").value;
	var result = findReplace(longs, shorts, words);
	document.getElementById("output").value = result;
}