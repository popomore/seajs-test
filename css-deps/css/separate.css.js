define('css/separate.css', [], function(require, exports, module) {
  console.log('separate.css');
  module.exports = function() {
    console.log('require separate.css');
  };
});
