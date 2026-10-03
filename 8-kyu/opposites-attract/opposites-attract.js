function lovefunc(flower1, flower2){
  if ( flower1 % 2 === 0 && flower2 % 2 === 1 ){
return true
} if ( flower1 % 2 === 1 && flower2 % 2 === 0 ){
return true
}
​
​
return false
}
​
​
console.log(lovefunc(2, 3))
console.log(lovefunc(3, 2))
console.log(lovefunc(2, 6))
console.log(lovefunc(3, 5))
​