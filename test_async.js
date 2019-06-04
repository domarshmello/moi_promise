async function testAsync() {
    return " async define a function ";
}

const result = testAsync().then( _=>{
    console.log( _ ) ;
});

async function testAsync1() {
    console.log("async 修饰的函数无返回值  undefined ");
}

const result1 = testAsync1().then( _=>{
    console.log("调用无返回值的函数：", _ ) ;
});


console.log(" ==== 测试 await 在等个啥子嘛==== ")


function getSome(){
    return"---1:something--- ";
}

async function getAsync(){
    return Promise.resolve("---2:hello async--- ")
}

async function test(){
    const v1 = await getSome();
    const v2= await getAsync();
    console.log(v1,v2);
}
test();



function takeLog(){
    return new Promise( _=>{ 
        setTimeout( ()=> _("llalaa"),1000);
    });
}

async function UseAwait(){
    const v3= await takeLog();
    console.log(v3);
}
UseAwait();

console.log("====async/await 的优势在于处理 then 链====");
function takeLog1(){
    return new Promise( resolve=>{ 
        setTimeout( ()=> resolve(n+100),n);
    });
}
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
// function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => step2(time2))
//         .then(time3 => step3(time3))
//         .then(_ => {
//             console.log(`---promise方式处理开始 result is ${_}`);
//             console.timeEnd("doIt");
//         });
// }

// doIt()函数使用async  /await h
async function doIt() {
    console
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}
doIt();

console.log(" async关键字修饰函数 返一个promise对象 ")

async function f(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(_=>{
            resolve("done"),1000})
    })
    let result_data= await promise;// ‘暂停 直到promise返回一个resolve值（*）
    console.log("result_data is : ",result_data)
    return 1;
    // return Promise.resolve(1); 显示返回一个promise值
}
f().then(console.log("=========sssss==========="))

console.log(" Await只能在async函数内部使用关键词await可以让JavaScript进行等待,直到一个promise执行并返回它的结果,JavaScript才会继续往下执行。 ")