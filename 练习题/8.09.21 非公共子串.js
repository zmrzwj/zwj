function str(str1,str2) {

    if(str1.length!==str2.length){
        return Math.max(str1.length,str2.length);
    }else {
        if(str1 === str2){
            return -1;
        }else {
            return str1.length;
        }
    }

}

//console.log(str("2345","2345"));


