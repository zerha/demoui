/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zerhaBtn/src/zerhaBtn.vue?vue&type=template&id=009ee8fe&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._v(" zerhabtn 组件 ")])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zerhaBtn/src/zerhaBtn.vue?vue&type=script&lang=js&

  /* harmony default export */ var zerhaBtnvue_type_script_lang_js_ = ({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'zerhaBtn',
  });

;// CONCATENATED MODULE: ./packages/zerhaBtn/src/zerhaBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_zerhaBtnvue_type_script_lang_js_ = (zerhaBtnvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/zerhaBtn/src/zerhaBtn.vue





/* normalize component */
;
var component = normalizeComponent(
  src_zerhaBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "009ee8fe",
  null
  
)

/* harmony default export */ var zerhaBtn = (component.exports);
;// CONCATENATED MODULE: ./packages/zerhaBtn/index.js


// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
zerhaBtn.install = function (Vue) {
  Vue.component(zerhaBtn.name, zerhaBtn)
}

// 默认导出组件
/* harmony default export */ var packages_zerhaBtn = (zerhaBtn);


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zerhaSpan/src/zerhaSpan.vue?vue&type=template&id=078ac99a&scoped=true&
var zerhaSpanvue_type_template_id_078ac99a_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('span',{staticClass:"spanDemo",on:{"click":_vm.clickSpan}},[_vm._v("span标签----zerha")])])
}
var zerhaSpanvue_type_template_id_078ac99a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zerhaSpan/src/zerhaSpan.vue?vue&type=script&lang=js&

/* harmony default export */ var zerhaSpanvue_type_script_lang_js_ = ({
  name:'zerhaSpan',
  methods: {
      clickSpan () {
        alert('点击触发span标签！')
      }
    }
  });

;// CONCATENATED MODULE: ./packages/zerhaSpan/src/zerhaSpan.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_zerhaSpanvue_type_script_lang_js_ = (zerhaSpanvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zerhaSpan/src/zerhaSpan.vue?vue&type=style&index=0&id=078ac99a&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/zerhaSpan/src/zerhaSpan.vue?vue&type=style&index=0&id=078ac99a&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./packages/zerhaSpan/src/zerhaSpan.vue



;


/* normalize component */

var zerhaSpan_component = normalizeComponent(
  src_zerhaSpanvue_type_script_lang_js_,
  zerhaSpanvue_type_template_id_078ac99a_scoped_true_render,
  zerhaSpanvue_type_template_id_078ac99a_scoped_true_staticRenderFns,
  false,
  null,
  "078ac99a",
  null
  
)

/* harmony default export */ var zerhaSpan = (zerhaSpan_component.exports);
;// CONCATENATED MODULE: ./packages/zerhaSpan/index.js


// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
zerhaSpan.install = function (Vue) {
  Vue.component(zerhaSpan.name, zerhaSpan)
}

// 默认导出组件
/* harmony default export */ var packages_zerhaSpan = (zerhaSpan);


;// CONCATENATED MODULE: ./packages/index.js




// 存储组件列表
const components = [
  packages_zerhaBtn,
  packages_zerhaSpan
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=frog-ui.common.js.map