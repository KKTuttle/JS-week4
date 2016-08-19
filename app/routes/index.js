import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer')
  },
  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
  }
});
