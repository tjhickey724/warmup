Template.questionAnswers.helpers({

answers:function(qid){
console.log("the qid="+qid);
return Answers.find({qid:qid}, {sort:{student:1}})}
})