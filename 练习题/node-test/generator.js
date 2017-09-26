function* g(name){
    yield "你好";
    yield "hello"+name;
}

let iter = g("zwj");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

let t = Symbol("zwj");
console.log("t:",t);

let n = Symbol("zwj");

console.log(t.toString());

var arr = [];
arr.length = 20;
arr.fill(1);

console.log(arr);