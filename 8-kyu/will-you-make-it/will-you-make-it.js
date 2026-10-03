const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 const resultado = fuelLeft * mpg 
 if (resultado >= distanceToPump){
return true
}
​
return false
};
​
​
​
​
​
console.log(zeroFuel(80, 20,5))
​
​
// distanceToPump = quantas milhas preciso percorrer
// mpg = quantas milhas o carro faz com 1 galão
// fuelLeft = quantos galões ainda tenho