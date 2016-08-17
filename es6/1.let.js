/*for(let i=0;i<3;i++){
    for(let i=0;i<2;i++){
        console.log(i,i);
    }
}*/
/**
 * 00
 * 11
 */
//Identifier 'a' has already been declared
/*if(true){
    var a = 1;
    var a = 2;
    console.log(a);
}*/
//不存在预解释
/*for (var i = 0; i < 2; i ++){
    console.log('inner',i);
    var i = 100;
}*/

/*
for (let i = 0; i < 2; i ++){
    let i = 100;
    console.log('inner',i);
}
*/

;(function () {

})();
/*
{
    let i =10;
    console.log(i);
}
console.log(i);*/
