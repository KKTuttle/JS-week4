import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  answerContent: DS.attr(),
  author: DS.attr()

});
