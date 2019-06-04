console.log("====  ES6 promise中的 .then链式操作大法  ====")
console.dir(Promise)
function runAsync(){
    var p =new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log("调用创建promise对象");
            //promise 执行成功状态
            resolve(1)
            },3000);
        });
    return p;
}

//.then()前面的函数调用必须返回一个promise对象值 否则.then()中拿不到前一个函数的返回值 就是undifined
runAsync().then((data)=>{
    console.log("data + 1 =", data + 1)
    return  data+1 ;
}).then((data)=>{
    console.log("data + 2 =", data+ 2);
})

function getNumber(){
    let p2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var num= Math.ceil(Math.random()*10);
            //异步成功 做到了
            if(num<5){
                resolve(num)
            }else{
                //没做到
                reject("好大的数字啊")
            }
        },2000);
        
    })
    return p2;
}
//then方法分别指定不同状态的promise回调函数  
getNumber().then((d)=>{
    //success
    console.log("==== 调用resolve修改Promise的状态变更resolved====");
    console.log(d)
    
},
//方法一  呼出失败的返回值
(reason,d)=>{
    //fail
    console.log("===  执行失败promise状态变更rejected====");
    console.log(d)
    console.log(reason)
})


//方法2
getNumber().then((d)=>{
    //success
    console.log("==== 调用resolve修改Promise的状态变更resolved====");
    
})

//方法2  使用catch呼出失败的返回值
.catch(error=>{
    console.log(error)
})
console.log("====  promise中的 .async  ====")




