Meteor.startup(function(){
	if (Questions.find({}).count()==0){
		
		Questions.insert({
			question:"What is the sum of the angles of a pentagon?", 
			whenCreated: new Date(),
			title: "Pentagon Angles",
			current: true
		});
			 
	}

	
});
