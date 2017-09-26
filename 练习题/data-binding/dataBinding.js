var data = {};

observe(data);

data.name = "zwj";

function observe(data) {
    if(!data || typeof data !== 'object'){
        return;
    }

    Object.keys(data).forEach(function (key) {
        defineReactive(data,key,data[key]);
    })
}

function defineReactive(data,key,val) {
    var dep = new Dep();
    observe(val);//监听子对象
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
            Dep.target && dep.addDep(Dep.target);
            return val;
        },
        set:function (newVal) {
            if (val === newVal) {
                return;
            } else {
                val = newVal;
                dep.notify();
            }

        }
    })
}

//发布者
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub:function (sub) {
        this.subs.push(sub);
    },
    notify:function () {
        this.subs.forEach(function (sub) {
            sub.update();
        })
    }

};


//订阅者
function Watcher(vm,exp,cb) {
    this.vm =  vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
}

Watcher.prototype = {
    updata:function () {
        this.run();
    },
    run:function () {
        var value = this.get();//获取最新值
        var oldVal = this.value;
        if(value !== oldVal){
            this.value = value;
        }
    },
    get:function () {
        Dep.target = this; // 将当前订阅者指向自己
        var value = this.vm[exp];// 触发getter，添加自己到属性订阅器中
        Dep.target = null;
        return value;
    }
};


//Compile解析模板指令
function Compile(el) {
    this.$el = this.isElementNode(el)?el:document.querySelector(el);
    if(this.$el){
        this.$fragment = this.node2Fragment($this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    init: function() {
        this.compileElement(this.$fragment);
    },
    node2Fragment:function (el) {
        var fragment = document.createDocumentFragment();
        while (child = el.firstChild){
            fragment.appendChild(child);
        }
        return fragment;

    }
}