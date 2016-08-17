var url = '/api/books';
var res = url.replace(/\/api\/(\w+)\/(\w+)/,'$1.$2.json');
console.log(res);
//将对 http://localhost:8080/api/books的请求
// 映射为对 http://localhost:9090/books.json 的请求
