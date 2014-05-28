define('css-js/separate.css.js', [], function(require, exports, module) {
  console.log('separate.css.js');
  module.exports = function() {
    console.log('require separate.css.js');
  };
});
