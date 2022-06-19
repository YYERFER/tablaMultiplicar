/*Ejercicio
Dado un numero, devolver  la tabla de multiplicar completa
Ejemplo:
-Ejecuto la funcion:
tablaMultiplicar(4)
-Me devuelve este resultado:
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
*/


let valor = prompt('Ingrese el número de la tabla de Multiplicar');

 (mutltiplicar = (valor)=>{

document.write(`<span style="color:red"><b> La tabla de multiplicar del ${valor} es:</b></span> <br><br>`)

for(i=1; i<10; i++){
    document.write(valor + ' X ' + i +' = ' + (i*valor) + ' <br> ');
};

})(valor);