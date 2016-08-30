import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  question(i) { return `question ${i}`; },
  answer(i) { return `answer to question ${i}`; }
});
