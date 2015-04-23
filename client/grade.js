Template.grade.helpers({
	answers:function(){return Answers.find({}, {sort:{grade:-1, date:-1}});},
	isTeacher: function(){
		var studentEmail = Meteor.user().emails[0].address;
		return (studentEmail=="dapike13@gmail.com")|| (studentEmail=="tjhickey@brandeis.edu");}
})



Template.answer.events({
	"change .grade": function(event){
		var theGrade = event.target.value;		
		console.log("theGrade="  + theGrade);
		Answers.update(this._id,{$set:{grade:theGrade}});
		
		
	}
		
});

Template.answer.helpers({
	ungradedSelected: function(){if (this.grade=="ungraded") return "selected"; else return "";},
	correctSelected: function(){if (this.grade=="correct") return "selected"; else return "";},
	incorrectSelected: function(){if (this.grade=="incorrect") return "selected"; else return "";}
	
})