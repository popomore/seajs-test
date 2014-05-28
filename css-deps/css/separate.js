define('css/separate', ['./separate.css'], function(require) {
  try {
    require('./separate.css')();
  } catch(e) {
    console.log('can not get separate.css');
  }
});
