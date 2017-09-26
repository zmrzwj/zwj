const fs = require('fs');
const readline = require('readline');

/*fs.readdir("c:",function (err,data) {
    console.log(data);
});*/

fs.readFile("data.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    //console.log(data);
});

var fileName = 'data.txt';
let writeFileName = 'wdata.txt';
var fread = fs.createReadStream(fileName);
let fwrite = fs.createWriteStream(writeFileName);

var freadline = readline.createInterface({
    input:fread,
    output:fwrite
});

freadline.on('line',function (line) {

    var farray = line.split("\t");
    //console.log(farray);
    //fwrite.write('['+farray.join()+'],'+"\n")
    var temp = farray.map(function (v) {
        if(v==""){
            return 0;
        }else {
            return v;
        }
    });
    fwrite.write('['+temp.join()+'],'+"\n")

});


