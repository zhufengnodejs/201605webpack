/**
 * 现在在不同的环境中执行不同的代码
 * 开发环境 输出详细的日志
 * 生产环境 不输出详细的日志
 * 从开发环境切换到生产环境不需修改源代码
 */

function sum(num){
  if(num == 1){
      return 1;
  }
  if(process.env.NODE_ENV == 'dev'){
      console.log(num);
  }
  return num * sum(--num);
}
console.log(sum(5));
