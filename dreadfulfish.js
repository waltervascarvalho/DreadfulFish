var shorts = [" ain't "," aren't "," aren't "," arent "," cannot "," can't "," colour "," couldn't "," didn't "," doesn't "," don't "," download "," hadn't "," hasn't "," haven't "," he'd "," he'll "," he's  "," historically "," how'd "," how's "," I'd "," I'll "," I'm "," I shall "," improve it "," isn't "," it's a "," it's "," it's "," I've "," let's  "," name's "," probably "," ohh "," r u "," ru "," she'd "," she's "," shes "," shouldn't "," Significantly, "," Surprisingly, "," that's "," thats "," there's "," these are "," those are "," they're "," u r "," ur "," u "," wanna "," wasn't "," we'll "," weren't "," we're "," we've "," what's "," whats "," where's "," who's "," won't "," wont "," wouldn't "," yeah "," yep "," yesit "," you'd "," you'll "," you're "," you've " ] ;

var longs = [" is not "," are not "," are not "," are not "," can not "," can not "," color "," could not "," did not "," does not "," do not "," down load "," had not "," has not "," have not "," he would "," he will "," he is  "," in the past "," how did "," how is "," I would "," I will "," I am "," I intend to "," make it better "," is not "," it is a "," it is "," it is "," I have "," let us  "," name is "," ,in all likelyhood, "," oh "," are you "," are you "," she would "," she is "," she is "," should not "," It is significant that "," It is surprising that "," that is "," that is "," there is "," these're "," those're "," they are "," you are "," your "," you "," want to "," was not "," we will "," were not "," we are "," we have "," what is "," what is "," where is "," who is "," will not "," will not "," would not "," yes "," yes "," yes it "," you would "," you will "," you are "," you have "];


function findReplace(matchList, switchList, text){
	for(var i=0; i<matchList.length;i++){
		var re= new RegExp("[ ]*"+matchList[i]+"[ ]*", "ig")
		text=text.replace(re, switchList[i]);
		//document.write(i+". "+matchList[i]+"=>"+switchList[i]+"<br />");
	}
	return text;
} 
