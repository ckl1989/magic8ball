import { test } from 'qunit';
import moduleForAcceptance from 'magic8/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | shake');

test('visiting /shake', function(assert) {
  server.createList('history-item', 6);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('submit question by enter', function(assert) {
  server.createList('history-item', 2);
  visit('/');
  //currently test works because loadfixtures isnt returning anything. in UI it is not working because server gives back empty data promise, instead of null, making the UI still show pagination number
  fillIn('input', 'test question?');
  keyEvent('input', 'keyup', 13).then(function(){
        console.log("did it");
  });

  andThen(function() {
    var items = find('#history .history-item');
    assert.equal(items.length, 3);
    assert.equal(currentURL(), '/');
  });
});

test('submit question by enter', function(assert) {
  server.createList('history-item', 2);
  visit('/');
  //currently test works because loadfixtures isnt returning anything. in UI it is not working because server gives back empty data promise, instead of null, making the UI still show pagination number
  fillIn('input', 'test question?');
  click('#shake-button');
  andThen(function() {
    var items = find('#history .history-item');
    assert.equal(items.length, 3);
    assert.equal(currentURL(), '/');
  });
});

test('pagination-empty', function(assert) {
  server.createList('history-item', 0);
  visit('/');
  //currently test works because loadfixtures isnt returning anything. in UI it is not working because server gives back empty data promise, instead of null, making the UI still show pagination number

  andThen(function() {
    var items = find('#history .history-item');
    assert.equal(items.length, 0);

    var pageNumbers = find('#history #page-numbers');
    assert.equal(pageNumbers, null);
  });
});

test('pagination-prepopulated', function(assert) {
  server.createList('history-item', 6);
  visit('/');
  fillIn('input', 'test question?');
  click('#shake-button');
  andThen(function() {
    var items = find('#history .history-item');
    assert.equal(items.length, 5);

    //check to see if page is correct
  });
});

test('pagination-submit', function(assert) {
  server.createList('history-item', 6);
  visit('/');
  fillIn('input', 'test question?');
  click('#shake-button');

  //click next button
  click('li.arrow.next a');

  andThen(function() {
    var items = find('#history .history-item');
    assert.equal(items.length, 2);

  });
});
