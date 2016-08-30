import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  answerContent: DS.attr(),
  author: DS.attr(),
  date: DS.attr('number'),
});
