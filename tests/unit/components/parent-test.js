import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | parent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.factoryFor('component:parent').create();
    assert.ok(component);
  });
});
