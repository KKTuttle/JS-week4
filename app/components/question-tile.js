import Ember from 'ember';

export default Ember.Component.extend({
  bestAnswer: Ember.computed('model.@each.best', {
    get: function() {
      return this.get('model').filterBy('best', true).length;
    },
  }),
  // manyAnswer: Ember.computed()

  actions: {
    best: function(answer) {
      answer.toggleProperty('best');
    },
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
