# ember-computed-issue

This is a reproduction of https://github.com/emberjs/ember.js/issues/18417. 

If you set ember-source version to 3.12 or earlier in package.json, and run this application, when you modify either of the values in the text fields, you'll see that the String below instantly changes.

With an ember-source version of 3.13 or greater, those changes are not propagated to the parent string value. 
