// 合并，后缀为 css
define('css-js/combine', ['./combine.css.js'], function(require) {
  require('./combine.css.js')();
});
define('css-js/combine.css.js', [], function(require, exports, module) {
  console.log('combine.css.js');
  module.exports = function() {
    console.log('require combine.css.js');
  };
});
