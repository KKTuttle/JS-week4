import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  isFavoriteShowing:false,
  actions: {
    removeFromFavorite(question) {
      this.get('favoriteList').remove(question);
    }
  }
});
