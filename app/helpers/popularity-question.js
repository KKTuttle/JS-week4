import Ember from 'ember';

export function popularityQuestion(params/*, hash*/) {
  var question = params[0];
  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="✔️✔️✔️😄">✔️✔️✔️😄</span>');
  } else if (question.get('answers').get('length') < 5 && (question.get('answers').get('length')!==0)) {
    return Ember.String.htmlSafe('<span class="✔️✔️">✔️✔️</span>');
  } else {
    return Ember.String.htmlSafe('<span class="😢">😢</span>');
  }
}

export default Ember.Helper.helper(popularityQuestion);
