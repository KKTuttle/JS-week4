import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  bestAnswer: Ember.computed('model.@each.best', {
    get: function() {
      return this.get('model').filterBy('best', true).length;
    },
  }),
  sortBy: ['answer:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  // manyAnswer: Ember.computed()

  actions: {
    best: function(answer) {
      answer.toggleProperty('best');
    },
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    addToFavorite(question) {
      this.get('favoriteList').add(question);
    },
  }
});
