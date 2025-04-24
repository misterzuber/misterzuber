console.log("zuber");

let value1=3;
let value2=7;
console.log(value1+value2);


var paidmoney=15;
if(paidmoney<10){
    console.log("you are elgible for basic subscription ");
    tax=paidmoney*0.04;
    console.log("tax is",tax);
}
else{
    console.log("you are not elgible for basic subscription");
}
if(paidmoney<20 && paidmoney>10) {
    console.log("you are  elgible for mediam subscription");
    tax=paidmoney*0.08;
    console.log("tax is",tax);
}
else{
    console.log("you are not elgible for mediam subscription");
}
if(paidmoney>20) {
    console.log("you are  elgible for preimum subscription");
    tax=paidmoney*0.16;
    console.log("tax is",tax);
}
else{
    console.log("you are not elgible for preimum subscription");
}
let data="zuber";
console.log(typeof(data));