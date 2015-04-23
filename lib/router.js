Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'welcome'});
Router.route('/grade', {name: 'grade'});
Router.route('/createquestion', {name: 'createquestion'});
Router.route('/answersByStudent', {name: 'answersByStudent'});
Router.route('/answersByQuestion', {name: 'answersByQuestion'});

Router.route('/questionAnswers/:_id', {name: 'questionAnswers',
	data:function(){return {qid:this.params._id}}})