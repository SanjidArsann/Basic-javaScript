function bringSingara(taka) {
    console.log('Singara er jonno dise', taka);
    console.log('mama Singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
console.log(singara);