define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(config) {

        config.globalResources(['resources/elements/em-test', 'resources/attributes/attr-test', 'resources/value-converters/vc-test', 'resources/binding-behaviors/bb-test']);
    }
});
define('resources/elements/em-test',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EmTest = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var EmTest = exports.EmTest = (_class = function () {
    function EmTest() {
      _classCallCheck(this, EmTest);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    EmTest.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return EmTest;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/attributes/attr-test',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AttrTestCustomAttribute = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var AttrTestCustomAttribute = exports.AttrTestCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
        function AttrTestCustomAttribute(element) {
            _classCallCheck(this, AttrTestCustomAttribute);

            this.element = element;
        }

        AttrTestCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {
            this.element.style.backgroundColor = newValue;
        };

        return AttrTestCustomAttribute;
    }()) || _class);
});
define('resources/value-converters/vc-test',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var VcTestValueConverter = exports.VcTestValueConverter = function () {
        function VcTestValueConverter() {
            _classCallCheck(this, VcTestValueConverter);
        }

        VcTestValueConverter.prototype.toView = function toView(value) {
            return value + '...';
        };

        VcTestValueConverter.prototype.fromView = function fromView(value) {};

        return VcTestValueConverter;
    }();
});
define('resources/binding-behaviors/bb-test',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BbTestBindingBehavior = exports.BbTestBindingBehavior = function () {
        function BbTestBindingBehavior() {
            _classCallCheck(this, BbTestBindingBehavior);
        }

        BbTestBindingBehavior.prototype.bind = function bind(binding, source) {
            console.log('bb-test[bind]');
        };

        BbTestBindingBehavior.prototype.unbind = function unbind(binding, source) {
            console.log('bb-test[unbind]');
        };

        return BbTestBindingBehavior;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <h1>${message}</h1>\n    <hr/>\n    <em-test value=\"em-test\"></em-test>\n    <hr/>\n    <div attr-test='red'>attr-test</div>\n    <hr/>\n    <div>${'vc-test' | vcTest}</div>\n    <hr/>\n    <div>${'bb-test' & bbTest}</div>\n</template>\n"; });
define('text!resources/elements/em-test.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map