import Ember from 'ember';

export default Ember.Controller.extend({
  answers: ['Of course!',
            'Not a chance!',
            'What does your heart tell you?',
            'Ask again later',
            'Yes',
            'No',
            'Maybe',
            'You will know in time'
          ],

  actions: {
    shake(){
      var answers = this.get("answers");
      var question = this.get('question');
      var answer = "";
      console.log("question is: " + question);
      question.trim();
      if(!question || question.length === 0){
        answer = " ";
      }else{
        var randomIndex = getRandomInt(0, answers.length);

        answer = answers[randomIndex];
        console.log("answer is: " + answer);
        // this.$("eight-ball").effect("shake");
        var newHistoryItem = this.store.createRecord('history-item', {
          question: question,
          answer: answer
        });
        newHistoryItem.save().then(success).catch(failure);
      }

      this.set('random-answer', answer);

      // console.log("model is: " + this.get("items"));


      //console.log(this.store.findAll('history-item').get('length'));

      /*---------------------------------------
      var model = this.get('model');
      var question = this.get('question');
      console.log("question is: " + question);
      var randomIndex = getRandomInt(0, model.get('length'));
      var answer = model.objectAt(randomIndex);
      console.log("answer is: " + answer.get('message'));
      var newHistoryItem = this.store.createRecord('history-item', {
        question: question,
        answer: answer.get('message')
      });
      // console.log("model is: " + newHistoryItem);
      // console.log(randomIndex);
      this.set('random-message', answer);
      newHistoryItem.save().then(success).catch(failure);*/
    }
  }

});

function success(){
  // var itemsArray = this.get("items").addObject(item);
  // this.set("items", itemsArray);
  console.log("success");
}

function failure(reason) {
  // handle the error
  console.log("failure for: " + reason);
}

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
