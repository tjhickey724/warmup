Template.grade.helpers({
	answers:function(){return Answers.find({});}
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