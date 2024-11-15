(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-emotion-js-ir'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-wrappers-kotlin-emotion-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-emotion-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-emotion-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-emotion-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-emotion-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-emotion-js-ir'], this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$_emotion_css_2enn37, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var css = $module$_emotion_css_2enn37.css;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function css_0(_this__u8e3s4, block) {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = {};
          }
          var tmp0_apply = tmp$ret$0;
          {
          }
          block(tmp0_apply);
          tmp$ret$1 = tmp0_apply;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp$ret$3 = css(tmp$ret$2);
    }
    _this__u8e3s4.className = tmp$ret$3;
  }
  function className(block) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = {};
        }
        var tmp0_apply = tmp$ret$0;
        {
        }
        block(tmp0_apply);
        tmp$ret$1 = tmp0_apply;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return css(tmp$ret$2);
  }
  var index;
  //region block: init
  index = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-emotion-js-ir.js.map