import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | parent', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders initially', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Parent />`);

    assert.equal(this.element.querySelector('[data-test-parent-value]').textContent.trim(), 'Hello|World');
  });

  test('it can update when child changes CP dependent keys', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Parent />`);

    assert.equal(this.element.querySelector('[data-test-parent-value]').textContent.trim(), 'Hello|World', 'precond');

    await fillIn('.child-a', 'foo');

    assert.equal(this.element.querySelector('[data-test-parent-value]').textContent.trim(), 'foo|World', 'updated value');
  });
});
