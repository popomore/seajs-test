// 合并，后缀为 css
define('css/combine', ['./combine.css'], function(require) {
  require('./combine.css')();
});
define('css/combine.css', [], function(require, exports, module) {
  console.log('combine.css');
  module.exports = function() {
    console.log('require combine.css');
  };
});
