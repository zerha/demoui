

// 导入组件，组件必须声明 name
import zerhaSpan from './src/zerhaSpan.vue'

// 为组件提供 install 安装方法，供按需引入
zerhaSpan.install = function (Vue) {
  Vue.component(zerhaSpan.name, zerhaSpan)
}

// 默认导出组件
export default zerhaSpan

