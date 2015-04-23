Template.welcome.helpers({
	warmup: function(){return Questions.findOne();}
})



Template.welcome.events({
	"submit #quiz": function(event){
		event.preventDefault();
		var theAnswer = event.target.answer.value;
		var theDate = new Date();
		var theUserId = Meteor.userId();
		var studentEmail = Meteor.user().emails[0].address;

		var theQuestionId = this._id;

		//Profiles.update(this._id,{$set:{bio:biotext}});
		console.log("theanswer="  + theAnswer);
		console.log("theuserid="+theUserId);
		console.log("thedate = "+theDate);
		
		var answerDoc = Answers.findOne({question:this.question, student:studentEmail});
		
		if (answerDoc == undefined) {
			Answers.insert({question:this.question, student:studentEmail, answer:theAnswer, grade:"ungraded", comment:"" });
		} else {
		// user a Meteor.method to upsert this query based on the question and student ...
			Answers.update(answerDoc._id,{question:this.question, student:studentEmail, answer:theAnswer, grade:"ungraded", comment:"" });
		}
		
		$("#chatinput").val("");
		
		//console.log("_id = "+this._id);
		//Router.go('/profile/'+this._id);
		
	},
	
	"click .chatdel": function(event){
		console.log("this="+ JSON.stringify(this));
		// check to see if this.userid == Meteor.userId()
		if (this.userid == Meteor.userId()) {
			Chats.remove(this._id);
		}
	}
});