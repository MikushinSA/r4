(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-extensions-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-extensions-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-extensions-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-extensions-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-extensions-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function js(builder) {
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
        builder(tmp0_apply);
        tmp$ret$1 = tmp0_apply;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function jso(block) {
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
    return tmp$ret$1;
  }
  function jso_0() {
    return {};
  }
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-extensions-js-ir.js.map