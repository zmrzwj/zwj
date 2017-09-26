'use strict';

var _hello = require('./components/hello.vue');

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 3; //import "babel-polyfill"

var Foo = { template: '<div>foo</div>' };
var Bar = { template: '<div>bar</div>' };
// 2. 定义路由
var routes = [{ path: '/foo', component: _hello2.default }, { path: '/bar', component: Bar }];
// 3. 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
var app = new Vue({
    router: router
}).$mount('#app');
