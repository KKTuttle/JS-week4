import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true)
    },
    save() {
      var params = {
        question: this.get('question'),
        answer: this.get('answer'),
        author: this.get('author'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
    }
  }
});
