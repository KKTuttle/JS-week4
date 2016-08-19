import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true)
    },
    save1() {
      var params = {
        question: this.get('question'),
        answerContent: this.get('answerContent'),
        author: this.get('author'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
