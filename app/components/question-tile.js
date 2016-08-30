import Ember from 'ember';

export default Ember.Component.extend({
// model:Ember.computed({
//   set:function(key, answers)
// })

  favoriteList: Ember.inject.service(),

  sortBy: ['date:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),


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
