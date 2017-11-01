(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var my = {
        path:"",
        getPath:function () {
            var js = document.scripts, script = js[js.length - 1], jsPath = script.src;
            return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);//获取这个脚本的路径，也就是document.scripts最后一个，因为脚本一个一个加载的
        },
        init:function () {
            my.path = my.getPath()+"css/inputDown.css";
        }
    };

    my.init();



    $.fn.extend({
        inputDown:function (option,fn) {
            var link = document.createElement("link");
            link.href = my.path;
            link.rel = "stylesheet";
            document.getElementsByTagName("head")[0].appendChild(link);

            var div = document.createElement("div");
            div.id = "inputDownDiv";
            div.className = "inputDown";

            var html = "";
            var data = option.data;
            data.forEach(function (v) {
                html +="<div class='inputDownList'>"+v+"</div>";
            });
            div.innerHTML = html;

            var top = $(this).offset().top+$(this).outerHeight();
            var left = $(this).offset().left;


            console.log(top,left);

            div.style.width = $(this).outerWidth() + "px";
            div.style.left = left + "px";
            div.style.top = top +10+ "px";
            div.style.display = "none";

            document.body.appendChild(div);

            $(this).focus(function () {
                div.style.display = "block";
            });

            $(this).blur(function () {
                setTimeout(function () {
                    div.style.display = "none";
                },100)

            });

            var _this = this;

            $("body").on("click",".inputDownList",function () {
                var value = $(this).html();
                $(_this).val(value);
                if(typeof fn === "function"){
                    fn(value);
                }

            })
        },
        inputDownClose:function () {
            $("inputDownDiv").slideUp(0);
        }
    })
    
})
)