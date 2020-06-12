import Component from '@ember/component';
import { computed, set } from '@ember/object';

export default Component.extend({
  a: null, // computed based on passed in value of `string`
  b: null, // computed based on passed in value of `string`

  value: computed('a', 'b', {
    get() {
      return this.a + "|" + this.b;
    },

    set(key, value) {
      const vals = value.split("|");
      set(this, 'a', vals[0]);
      set(this, 'b', vals[1]);
      return value;
    }
  })
});
