var jsonp = {

    // 获取16位随机数
    rand: function() {
        return Math.random().toString().substr(2);
    },

    // 删除节点元素
    removeElem: function(elem) {
        var parent = elem.parentNode;
        if(parent && parent.nodeType !== 11) {
            parent.removeChild(elem);
        }
    },

    genUrl:function(data){
        var temp = "";
        if(typeof data === "string") {
            temp = data;
        }
        else if(typeof data === "object") {
            for(var key in data) {
                temp += "&" + key + "=" + encodeURIComponent(data[key]);
            }
        }

        return temp;
    },
    getJson:function(url,data,fn){

        var name;

        // 拼装url
        url = url + (url.indexOf("?") === -1 ? "?" : "&") + this.genUrl(data);
        console.log(url);
        // 检测callback的函数名是否已经定义
        var match = /callback=(\w+)/.exec(url);
        if(match && match[1]) {
            name = match[1];
            console.log(1);
        } else {
            console.log(2);
            // 如果未定义函数名的话随机成一个函数名
            // 随机生成的函数名通过时间戳拼16位随机数的方式，重名的概率基本为0
            // 如:jsonp_1355750852040_8260732076596469 ,callback后面为服务器执行的回调函数，
            // 后台//拼接动态JS代码
            /*
              String output = callback + "(" + jsonData + ");
              resp.setContentType("text/javascript");
              PrintWriter out = resp.getWriter();
            */
            /* +    URL 中+号表示空格                                 %2B
             空格 URL中的空格可以用+号或者编码           %20
             /   分隔目录和子目录                                     %2F
             ?    分隔实际的URL和参数                             %3F
             %    指定特殊字符                                          %25
             #    表示书签                                                  %23
             &    URL 中指定的参数间的分隔符                  %26
             =    URL 中指定参数的值                                %3D*/

            name = "jsonp_" + this.rand();
            // 把callback中的?替换成函数名
            url = url.replace("callback=?", "callback="+name);
            // 处理?被encode的情况
            url = url.replace("callback=%3F", "callback="+name);


            // 创建一个script元素
            var script = document.createElement("script");
            script.type = "text/javascript";

            // 设置要远程的url
            script.src = url;

            // 设置id，为了后面可以删除这个元素
            script.id = "id_" + name;

        }


        // 把传进来的函数重新组装，并把它设置为全局函数，远程就是调用这个函数
        window[name] = function(json) {
            console.log("name",name);
            // 执行这个函数后，要销毁这个函数
            window[name] = undefined;
            // 获取这个script的元素
            var elem = document.getElementById("id_" + name);
            // 删除head里面插入的script，这三步都是为了不影响污染整个DOM啊
            jsonp.removeElem(elem);
            // 执行传入的的函数
            fn(json);
        };

        // 在head里面插入script元素
        var head = document.getElementsByTagName("head");
        if(head && head[0]) {
            head[0].appendChild(script);
        }
    }
};

var data = {
    from: "北京",
    count: 27,
    output: "json",
    callback: "?"
};

jsonp.getJson("http://api.qunar.com/cdnWebservices.jcp", data, function(json) {console.log(json)});
jsonp.getJson("http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US", {callback: "?"}, function(json) {console.log(json)});