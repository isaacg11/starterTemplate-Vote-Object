Stamplay.init('sdkvoteobject');

function upvote(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654a452b3039e5f75c0d0e4').then(function(){
    	return objectInstance.upVote(1).then(function(){
    		alert('Upvoted by 1!');
    	});
    });
}

function downvote(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654a452b3039e5f75c0d0e4').then(function(){
    	return objectInstance.downVote(1).then(function(){
    		alert('Downvoted by 1!');
    	});
    });
}