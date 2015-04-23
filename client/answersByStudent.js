Template.answersByStudent.helpers({
answers: function(){return Answers.find({}, {sort:{student:1, date:-1}})}
})

Template.studentoption.helpers({
	email:function(){return this.emails[0].address;}
	})