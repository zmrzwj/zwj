function multiply(num1,num2) {
    var numArray1 = num1.split("").reverse();
    var numArray2 = num2.split("").reverse();

    var temp = [];
    temp.length = numArray1.length+numArray2.length;
    temp.fill(0);

    // 先不考虑进位问题，n1的第i位与n2的第j位相乘，结果应该存放在结果的第i+j位上
    for(var i=0;i<numArray1.length;i++){
        for(var j=0;j<numArray2.length;j++){
            temp[i+j] = numArray2[j]*numArray1[i]+temp[i+j];
            //console.log(numArray2[j]*numArray1[i]);
        }
    }

    //console.log(temp);

    //单独处理进位问题
    for(i=0;i<temp.length;i++){
        if(parseInt(temp[i]) >10){
            var jinwei = parseInt(parseInt(temp[i])/10);
            temp[i] = parseInt(temp[i])%10;
            temp[i+1] = parseInt(temp[i+1]) + jinwei;
        }
    }


    return temp[temp.length - 1] === 0?temp.reverse().slice(1).join(""):temp.reverse().join("")
}

var num1 = "1023456789";
var num2 = "98765432010";

console.log(multiply(num1,num2));
