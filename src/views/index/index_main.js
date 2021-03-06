import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHtml5Editor from 'vue-html5-editor'
import routes from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../../assets/scss/common.scss'
import './scss/index.scss';

import webHeader from '../../components/common/header.vue'
import webFooter from '../../components/common/footer.vue'

Vue.use(VueHtml5Editor, {
    showModuleName: true,
    language: "zh-cn",
    image: {
        sizeLimit: 512 * 1024,
        compress: true,
        width: 320,
        height: 300,
        quality: 80,
    },
    modules: [{
        name: "bold",
        icon: "fa fa-bold",
        i18n: "加粗",
        title: "加粗",
        show: true,
        handler: function (editor) {
            editor.execCommand("bold");
        }
    }],
    visibleModules: [
        "bold",
        "color",
        "font",
        "align",
        "list",
    ]
})

Vue.use(VueRouter)
Vue.use(Element)

// 实例化VueRouter
const router = new VueRouter({
  mode: 'hash',
  routes
})

// 验证登录
router.beforeEach((to, from, next) => {
  // 滚动置顶
  window.scrollTo && window.scrollTo(0, 0)

  next()
  // if (!Cookies.get('uid') && to.name !== 'login') {
  //   next({ path: '/login' })
  //   return false
  // }
})

new Vue({
    el: '#app',
    methods: {
      saveAll () {
        this.$refs.showBox.$refs.editBox.saveAll()
      }
    },
    router,
    components: {
      webHeader,
      webFooter
    }
})
