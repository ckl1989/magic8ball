import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // console.log(this.store.findAll('history-item'));
    // var returnItems = [];
    // return this.store.findAll('history-item').then(success).catch(failure);

    // return this.store.findAll('history-item').then(function(items){
    //   return items.reverseObjects();
    // });

    return this.get('store').findAll('history-item').then(function(items){
      console.log(items);
      return items;
    }).catch(failure);

    // return this.store.findAll('history-item');
  }
  // ,
  // setupController: function(controller, model) {
  //   this._super(controller, model);
  //   controller.set('model', model);
  // }
});

function failure(reason) {
  // handle the error
  console.log("failure for: " + reason);
}
