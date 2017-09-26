//import "babel-polyfill"
import hello from './components/hello.vue';

let a=3;
const Foo = { template:'<div>foo</div>'};
const Bar = { template:'<div>bar</div>'};
// 2. 定义路由
const routes = [
    { path: '/foo', component: hello },
    { path: '/bar', component: Bar }
];
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
const app = new Vue({
    router
}).$mount('#app');