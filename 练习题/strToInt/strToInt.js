function toIntArray(str){
    var temp = str.split("");
    return temp.map(function(v,i){
        if(i===1&&(v=="x" || v=="X")){
            return "x"
        }else{
            return +v;
        }

    });
}

function strToInt(str){
    if(!str){
        return NaN;
    }
    var data = toIntArray(str);

    if(data.length === 1){
        return data[0];
    }else{
        var headOne = data[0];
        var headTwo = data[1];

        if(isNaN(headOne)){
            return NaN;
        }else if( headOne>=1 && headTwo<=9){
            console.log("1-9");
            var indexNan = indexNaN(data);
            return computed(data.slice(0,indexNan),10);
        } else if(headOne == 0 && headTwo !== "x" ){
            //console.log(result);
            console.log("!x");
            indexNan = indexNaN(data);
            return computed(data.slice(0,indexNan),10);
        }else{
            indexNan = indexNaN(data.slice(2));
            console.log("indexNan",indexNan);
            return computed(data.slice(2,indexNan+2),16);
        }
    }

    function indexNaN(array){
        for(var i=0;i<array.length;i++){
            if(isNaN(array[i])){
                return i;
            }
        }
    }

    function computed(array,k){
        return array.reduce(function(x,y){
            return x*k + y;
        })
    }
}

var test = "0x234a123";
console.log(strToInt(test));
