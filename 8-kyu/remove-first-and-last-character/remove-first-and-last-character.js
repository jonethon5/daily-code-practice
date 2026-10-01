function removeChar(str) {
const indiceParaRemover = str.length - 1;
const ultima = str.slice(0,  indiceParaRemover);
const resultado = ultima.slice(1);
return resultado;
}
​
console.log(removeChar('eloquent'))