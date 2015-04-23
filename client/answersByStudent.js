Template.answersByStudent.helpers({
	students:function()
	
	
	{return Answers.find({}).distinct({'student', true})}
	})

Template.studentoption.helpers({
	email:function(){return this.emails[0].address;}
	})