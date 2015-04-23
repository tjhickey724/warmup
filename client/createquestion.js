Template.createquestion.helpers({
	questions: function(){return Questions.find({},{sort:{whenCreated:-1}});}
})


Template.createquestion.events({
	"submit #createquestion": function(event){
		event.preventDefault();
		var theTitle = event.target.title.value;	
		var theQuestion = event.target.question.value;	
		console.log("theTitle="  + theTitle);
		console.log("theQuestion="  + theQuestion);
		
		Questions.insert({
			question:theQuestion, 
			whenCreated: new Date(),
			title: theTitle,
			current: true
		});
		
		$("#title").val("");
		$("#question").val("");
		
	}
		
});

Template.question.helpers({
	checked: function(){
	if (this.current) return "checked"; else return"";}
	
	})
	
Template.question.events({
	"change .current-question": function(event){
		var theCurrentValue = event.target.checked;		
		console.log("theCurrentValue="  + theCurrentValue);
		Questions.update(this._id,{$set:{current:theCurrentValue}});
		
		
	}
		
});