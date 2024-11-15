(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react'), require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'r4'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'r4'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'r4'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'r4'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'r4'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r4'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'r4'.");
    }
    root.r4 = factory(typeof r4 === 'undefined' ? {} : r4, this['react-dom/client'], react, this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react, $module$_emotion_css_2enn37, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var useState = $module$react.useState;
  var createContext = $module$react.createContext;
  var css = $module$_emotion_css_2enn37.css;
  var useState_0 = $module$react.useState;
  var useContext = $module$react.useContext;
  var ensureNotNull = kotlin_kotlin.$_$.r;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.p;
  var classMeta = kotlin_kotlin.$_$.h;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.n;
  var THROW_ISE = kotlin_kotlin.$_$.q;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var checkIndexOverflow = kotlin_kotlin.$_$.e;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var average = kotlin_kotlin.$_$.d;
  var numberToInt = kotlin_kotlin.$_$.l;
  var FC_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var toIntOrNull = kotlin_kotlin.$_$.o;
  var numberRangeToNumber = kotlin_kotlin.$_$.k;
  var arrayListOf = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    createRoot(container).render(create(get_CStudentList()));
  }
  function get_GradeColorContext() {
    init_properties_GradeColorProvider_kt_ffuacd();
    return GradeColorContext;
  }
  var GradeColorContext;
  function get_GradeColorProvider() {
    init_properties_GradeColorProvider_kt_ffuacd();
    return GradeColorProvider;
  }
  var GradeColorProvider;
  function GradeColorScheme(grade1Color, grade2Color, grade3Color, grade4Color, grade5Color) {
    this.b6_1 = grade1Color;
    this.c6_1 = grade2Color;
    this.d6_1 = grade3Color;
    this.e6_1 = grade4Color;
    this.f6_1 = grade5Color;
  }
  GradeColorScheme.prototype.toString = function () {
    return 'GradeColorScheme(grade1Color=' + this.b6_1 + ', grade2Color=' + this.c6_1 + ', grade3Color=' + this.d6_1 + ', grade4Color=' + this.e6_1 + ', grade5Color=' + this.f6_1 + ')';
  };
  GradeColorScheme.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GradeColorScheme))
      return false;
    var tmp0_other_with_cast = other instanceof GradeColorScheme ? other : THROW_CCE();
    if (!(this.b6_1 === tmp0_other_with_cast.b6_1))
      return false;
    if (!(this.c6_1 === tmp0_other_with_cast.c6_1))
      return false;
    if (!(this.d6_1 === tmp0_other_with_cast.d6_1))
      return false;
    if (!(this.e6_1 === tmp0_other_with_cast.e6_1))
      return false;
    if (!(this.f6_1 === tmp0_other_with_cast.f6_1))
      return false;
    return true;
  };
  GradeColorScheme.$metadata$ = classMeta('GradeColorScheme');
  function GradeColorProvider$lambda$lambda($colorScheme, $props) {
    return function ($this$invoke) {
      $this$invoke.value = $colorScheme;
      $this$invoke.t5($props.children);
      return Unit_getInstance();
    };
  }
  function GradeColorProvider$lambda() {
    return function ($this$FC, props) {
      var tmp0_container = useState(new GradeColorScheme('black', 'brown', 'green', 'yellow', 'red'));
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_container;
        }
        tmp$ret$1 = tmp$ret$0[0];
      }
      var colorScheme = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp0_container;
        }
        tmp$ret$3 = tmp$ret$2[1];
      }
      var setColorScheme = tmp$ret$3;
      var tmp = get_GradeColorContext().Provider;
      $this$FC.v5(tmp, GradeColorProvider$lambda$lambda(colorScheme, props));
      return Unit_getInstance();
    };
  }
  var properties_initialized_GradeColorProvider_kt_rczugx;
  function init_properties_GradeColorProvider_kt_ffuacd() {
    if (properties_initialized_GradeColorProvider_kt_rczugx) {
    } else {
      properties_initialized_GradeColorProvider_kt_rczugx = true;
      GradeColorContext = createContext(new GradeColorScheme('black', 'brown', 'green', 'yellow', 'red'));
      GradeColorProvider = FC(GradeColorProvider$lambda());
    }
  }
  function get_CStudentList() {
    init_properties_StudentList_kt_1unjvp();
    return CStudentList;
  }
  var CStudentList;
  function invoke$lambda($highlighted$delegate) {
    init_properties_StudentList_kt_1unjvp();
    var tmp$ret$1;
    {
      var tmp0_getValue = getLocalDelegateReference('highlighted', KMutableProperty0, true, function () {
        return THROW_ISE();
      });
      var tmp$ret$0;
      {
        tmp$ret$0 = $highlighted$delegate;
      }
      tmp$ret$1 = tmp$ret$0[0];
    }
    return tmp$ret$1;
  }
  function invoke$lambda_0($highlighted$delegate, value) {
    init_properties_StudentList_kt_1unjvp();
    var tmp0_setValue = getLocalDelegateReference('highlighted', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    {
      tmp$ret$0 = $highlighted$delegate;
    }
    return tmp$ret$0[1](value);
  }
  function CStudentList$lambda$lambda() {
    return function ($this$invoke) {
      $this$invoke.u5('\u0436\u0443\u0440\u043D\u0430\u043B \u043E\u0446\u0435\u043D\u043E\u043A');
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda$lambda$lambda($item, $setGrades) {
    return function (newGrade) {
      $item.i6_1 = newGrade;
      var tmp$ret$2;
      {
        var tmp0_map = get_studentList();
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            var tmp$ret$0;
            {
              tmp$ret$0 = item.i6_1;
            }
            tmp0_mapTo.e(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp1_invoke = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = $setGrades;
      }
      tmp$ret$3(tmp1_invoke);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda$lambda($item, $setGrades) {
    return function ($this$invoke) {
      $this$invoke.student = $item;
      $this$invoke.setGrade = CStudentList$lambda$lambda$lambda$lambda$lambda$lambda($item, $setGrades);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda$lambda_0($tmp1__anonymous__6ijp4k, $highlighted$delegate) {
    return function (it) {
      invoke$lambda_0($highlighted$delegate, $tmp1__anonymous__6ijp4k);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda$lambda($tmp1__anonymous__6ijp4k, $highlighted$delegate, $item, $setGrades) {
    return function ($this$invoke) {
      var tmp;
      if ($tmp1__anonymous__6ijp4k === invoke$lambda($highlighted$delegate)) {
        var tmp0_css = $this$invoke;
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
              {
                tmp0_apply.fontWeight = (/*union*/{bold: 'bold', normal: 'normal', bolder: 'bolder', lighter: 'lighter'}/*union*/).bold;
              }
              tmp$ret$1 = tmp0_apply;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = css(tmp$ret$2);
        }
        tmp = tmp0_css.className = tmp$ret$3;
      }
      var tmp_0 = get_CStudent();
      $this$invoke.v5(tmp_0, CStudentList$lambda$lambda$lambda$lambda$lambda($item, $setGrades));
      $this$invoke.onClick = CStudentList$lambda$lambda$lambda$lambda$lambda_0($tmp1__anonymous__6ijp4k, $highlighted$delegate);
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda($highlighted$delegate, $setGrades) {
    return function ($this$invoke) {
      var tmp$ret$4;
      {
        var tmp0_mapIndexed = get_studentList();
        var tmp$ret$3;
        {
          var tmp0_mapIndexedTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_mapIndexed, 10));
          var index = 0;
          var tmp0_iterator = tmp0_mapIndexed.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            {
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
              var tmp$ret$2;
              {
                var tmp0__get_li__p4dyoc = ReactHTML_getInstance();
                var tmp$ret$1;
                {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'li';
                  }
                  tmp$ret$1 = tmp$ret$0;
                }
                tmp$ret$2 = tmp$ret$1;
              }
              var tmp = tmp$ret$2;
              $this$invoke.v5(tmp, CStudentList$lambda$lambda$lambda$lambda(tmp1__anonymous__uwfjfc, $highlighted$delegate, item, $setGrades));
            }
            tmp0_mapIndexedTo.e(Unit_getInstance());
          }
          tmp$ret$3 = tmp0_mapIndexedTo;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda$lambda_0($averageGrade, $averageGradeColor) {
    return function ($this$invoke) {
      $this$invoke.u5('\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430: ' + $averageGrade);
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
            {
              tmp0_apply.color = $averageGradeColor;
            }
            tmp$ret$1 = tmp0_apply;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      $this$invoke.style = tmp$ret$3;
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda$lambda_0($highlighted$delegate, $setGrades, $averageGrade, $averageGradeColor) {
    return function ($this$invoke) {
      var tmp$ret$2;
      {
        var tmp0__get_ol__p4dwdo = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'ol';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.v5(tmp, CStudentList$lambda$lambda$lambda($highlighted$delegate, $setGrades));
      var tmp$ret$5;
      {
        var tmp1__get_h1__sde1rt = ReactHTML_getInstance();
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            tmp$ret$3 = 'h1';
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_0 = tmp$ret$5;
      $this$invoke.v5(tmp_0, CStudentList$lambda$lambda$lambda_0($averageGrade, $averageGradeColor));
      return Unit_getInstance();
    };
  }
  function CStudentList$lambda() {
    return function ($this$FC, it) {
      var highlighted$delegate = useState_0();
      var tmp$ret$2;
      {
        var tmp0_map = get_studentList();
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.b();
          while (tmp0_iterator.c()) {
            var item = tmp0_iterator.d();
            var tmp$ret$0;
            {
              tmp$ret$0 = item.i6_1;
            }
            tmp0_mapTo.e(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp0_container = useState(tmp$ret$2);
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          tmp$ret$3 = tmp0_container;
        }
        tmp$ret$4 = tmp$ret$3[0];
      }
      var grades = tmp$ret$4;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          tmp$ret$5 = tmp0_container;
        }
        tmp$ret$6 = tmp$ret$5[1];
      }
      var setGrades = tmp$ret$6;
      var tmp$ret$9;
      {
        var tmp1_map = get_studentList();
        var tmp$ret$8;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
          var tmp0_iterator_0 = tmp1_map.b();
          while (tmp0_iterator_0.c()) {
            var item_0 = tmp0_iterator_0.d();
            var tmp$ret$7;
            {
              tmp$ret$7 = item_0.i6_1;
            }
            tmp0_mapTo_0.e(tmp$ret$7);
          }
          tmp$ret$8 = tmp0_mapTo_0;
        }
        tmp$ret$9 = tmp$ret$8;
      }
      var averageGrade = average(tmp$ret$9);
      var colorScheme = useContext(get_GradeColorContext());
      var tmp1_subject = numberToInt(averageGrade);
      {
        var averageGradeColor;
        switch (tmp1_subject) {
          case 1:
            averageGradeColor = colorScheme.b6_1;
            break;
          case 2:
            averageGradeColor = colorScheme.c6_1;
            break;
          case 3:
            averageGradeColor = colorScheme.d6_1;
            break;
          case 4:
            averageGradeColor = colorScheme.e6_1;
            break;
          case 5:
            averageGradeColor = colorScheme.f6_1;
            break;
          default:
            averageGradeColor = 'gray';
            break;
        }
      }
      var tmp$ret$12;
      {
        var tmp2__get_h1__vme0ka = ReactHTML_getInstance();
        var tmp$ret$11;
        {
          var tmp$ret$10;
          {
            tmp$ret$10 = 'h1';
          }
          tmp$ret$11 = tmp$ret$10;
        }
        tmp$ret$12 = tmp$ret$11;
      }
      var tmp = tmp$ret$12;
      $this$FC.v5(tmp, CStudentList$lambda$lambda());
      var tmp_0 = get_GradeColorProvider();
      $this$FC.v5(tmp_0, CStudentList$lambda$lambda_0(highlighted$delegate, setGrades, averageGrade, averageGradeColor));
      return Unit_getInstance();
    };
  }
  var properties_initialized_StudentList_kt_qdzu2f;
  function init_properties_StudentList_kt_1unjvp() {
    if (properties_initialized_StudentList_kt_qdzu2f) {
    } else {
      properties_initialized_StudentList_kt_qdzu2f = true;
      CStudentList = FC_0('\u0436\u0443\u0440\u043D\u0430\u043B \u043E\u0446\u0435\u043D\u043E\u043A', CStudentList$lambda());
    }
  }
  function get_CStudent() {
    init_properties_student_kt_hy3w93();
    return CStudent;
  }
  var CStudent;
  function CStudent$lambda$lambda$lambda$lambda($setGrade, $props) {
    return function (event) {
      var tmp = event.target;
      var newGrade = toIntOrNull((tmp instanceof HTMLInputElement ? tmp : THROW_CCE()).value);
      var tmp_0;
      if (!(newGrade == null) ? numberRangeToNumber(1, 5).j1(newGrade) : false) {
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = $setGrade;
          }
          tmp$ret$0(newGrade);
        }
        tmp_0 = $props.setGrade(newGrade);
      }
      return Unit_getInstance();
    };
  }
  function CStudent$lambda$lambda$lambda($grade, $gradeColor, $setGrade, $props) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).number;
      $this$invoke.value = $grade.toString();
      $this$invoke.onChange = CStudent$lambda$lambda$lambda$lambda($setGrade, $props);
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
            {
              tmp0_apply.color = $gradeColor;
            }
            tmp$ret$1 = tmp0_apply;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      $this$invoke.style = tmp$ret$3;
      return Unit_getInstance();
    };
  }
  function CStudent$lambda$lambda($props, $grade, $gradeColor, $setGrade) {
    return function ($this$invoke) {
      $this$invoke.u5($props.student.g6_1 + ' ' + $props.student.h6_1);
      var tmp$ret$2;
      {
        var tmp0__get_input__prnny7 = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'input';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.v5(tmp, CStudent$lambda$lambda$lambda($grade, $gradeColor, $setGrade, $props));
      return Unit_getInstance();
    };
  }
  function CStudent$lambda() {
    return function ($this$FC, props) {
      var tmp0_container = useState(props.student.i6_1);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_container;
        }
        tmp$ret$1 = tmp$ret$0[0];
      }
      var grade = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp0_container;
        }
        tmp$ret$3 = tmp$ret$2[1];
      }
      var setGrade = tmp$ret$3;
      var colorScheme = useContext(get_GradeColorContext());
      var tmp1_subject = grade;
      {
        var gradeColor;
        switch (tmp1_subject) {
          case 1:
            gradeColor = colorScheme.b6_1;
            break;
          case 2:
            gradeColor = colorScheme.c6_1;
            break;
          case 3:
            gradeColor = colorScheme.d6_1;
            break;
          case 4:
            gradeColor = colorScheme.e6_1;
            break;
          case 5:
            gradeColor = colorScheme.f6_1;
            break;
          default:
            gradeColor = 'gray';
            break;
        }
      }
      var tmp$ret$6;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = 'div';
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      var tmp = tmp$ret$6;
      $this$FC.v5(tmp, CStudent$lambda$lambda(props, grade, gradeColor, setGrade));
      return Unit_getInstance();
    };
  }
  var properties_initialized_student_kt_54putx;
  function init_properties_student_kt_hy3w93() {
    if (properties_initialized_student_kt_54putx) {
    } else {
      properties_initialized_student_kt_54putx = true;
      CStudent = FC(CStudent$lambda());
    }
  }
  function get_studentList() {
    init_properties_student_kt_hy3w93_0();
    return studentList;
  }
  var studentList;
  function Student_init_$Init$(firstname, surname, grade, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      grade = 0;
    Student.call($this, firstname, surname, grade);
    return $this;
  }
  function Student_init_$Create$(firstname, surname, grade, $mask0, $marker) {
    return Student_init_$Init$(firstname, surname, grade, $mask0, $marker, Object.create(Student.prototype));
  }
  function Student(firstname, surname, grade) {
    this.g6_1 = firstname;
    this.h6_1 = surname;
    this.i6_1 = grade;
  }
  Student.prototype.j6 = function (_set____db54di) {
    this.i6_1 = _set____db54di;
  };
  Student.prototype.k6 = function () {
    return this.i6_1;
  };
  Student.prototype.toString = function () {
    return 'Student(firstname=' + this.g6_1 + ', surname=' + this.h6_1 + ', grade=' + this.i6_1 + ')';
  };
  Student.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Student))
      return false;
    var tmp0_other_with_cast = other instanceof Student ? other : THROW_CCE();
    if (!(this.g6_1 === tmp0_other_with_cast.g6_1))
      return false;
    if (!(this.h6_1 === tmp0_other_with_cast.h6_1))
      return false;
    if (!(this.i6_1 === tmp0_other_with_cast.i6_1))
      return false;
    return true;
  };
  Student.$metadata$ = classMeta('Student');
  var properties_initialized_student_kt_54putx_0;
  function init_properties_student_kt_hy3w93_0() {
    if (properties_initialized_student_kt_54putx_0) {
    } else {
      properties_initialized_student_kt_54putx_0 = true;
      var tmp = Student_init_$Create$('Sheldon', 'Cooper', 0, 4, null);
      var tmp_0 = Student_init_$Create$('Leonard', 'Hofstadter', 0, 4, null);
      studentList = arrayListOf([tmp, tmp_0, Student_init_$Create$('Howard', 'Wolowitz', 0, 4, null)]);
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=r4.js.map