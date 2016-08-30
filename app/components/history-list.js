import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  // content: function(){
  //   console.log("history-items is: " + this.get('history-items'));
  //   return this.get('history-items').toArray().reverse();
  // }.property('history-item'),

  content: Ember.computed('history-items.[]', function(){
    console.log("history-items is: " + this.get('history-items'));
    var items = this.get('history-items');
    if(!Ember.isEmpty(items)){
      this.set('hasContent', true);
      return items.toArray().reverseObjects();
    }
    this.set('hasContent', false);
    return [];
  }),

  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 5,
  pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),
  totalPagesBinding: "pagedContent.totalPages",
  actions: {
    delete(){
      //get id of the history item and delete that
      this.attrs.delete();
    }
  }
});
