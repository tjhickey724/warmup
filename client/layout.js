Template.layout.helpers({
	isTeacher: function(){
		var studentEmail = Meteor.user().emails[0].address;
		return (studentEmail=="dapike13@gmail.com")|| (studentEmail=="tjhickey@brandeis.edu");}

})