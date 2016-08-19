import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer')
  },
  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!=undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
  }
});
