var os = require('os');

console.log(os.arch());//返回一个字符串, 表明Node.js 二进制编译 所用的 操作系统CPU架构.
console.log(os.constants);//返回一个包含错误码,处理信号等通用的操作系统特定常量的对象. 现在, 这些特定的常量的定义被描述在OS Constants
console.log(os.cpus());//方法返回一个对象数组, 包含安装的每个CPU/CPU核的信息.
console.log(os.freemem());//以整数的形式回空闲系统内存 的字节数.
console.log(os.homedir());//以字符串的形式返回当前用户的home目录.
console.log(os.loadavg());//返回一个数组,包含1, 5, 15分钟平均负载.平均负载是UNIX相关的概念,在Windows平台上没有对应的概念. 在Windows上,其返回值总是[0, 0, 0].
console.log(os.networkInterfaces());//返回对象的每个关键词都指明了一个网络接口.
console.log(os.platform());//返回一个字符串, 指定Node.js编译时的操作系统平台
console.log(os.release());//返回一个字符串, 指定操作系统的发行版.
console.log(os.tmpdir());//返回一个字符串, 表明操作系统的 默认临时文件目录.
console.log(os.totalmem());//以整数的形式返回所有系统内存的字节数.
console.log(os.type());//返回一个字符串,表明操作系统的名字
console.log(os.uptime());//方法在几秒内返回操作系统的上线时间.
console.log(os.userInfo());//当前有效用户的信息



