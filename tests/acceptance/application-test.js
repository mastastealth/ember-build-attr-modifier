import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('p').hasAttribute('data-test-pgraph', 'true');
    assert.dom('button').hasAttribute('data-test-btn-hello', 'Hi');
    assert.dom('span').hasAttribute('v-span', '');
  });
});
