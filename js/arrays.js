function guardar(){
    numero = parseInt(document.getElementById('number').value);

    var resultado = parImpar(numero);
    document.getElementById('numerosingresados').innerHTML += '<tbody><br><td>'+numero+'</td></tbody>';
    document.getElementById('aviso').innerHTML += '<tbody><br><td> El número '+numero+' es '+resultado+'.</td></tbody>';

}

function capturar(){
    var allnum = [];
    var mayor = 0;
    var menor = 0;
    var mil = 0;
    var par = 0;
    var impar = 0;

    for (x=0;x<=4;x++) {
        allnum[x]=parseInt(prompt('Ingrese un numero'));
        if (allnum[x]>mayor) {
            mayor=allnum[x];
        }
        if (mayor<=menor) {
            mayor=menor;
        }
        if (allnum[x]>1000) {
            mil = mil + allnum[x];
        }
        if (allnum[x] % 2 == 0) {
            par = par + allnum[x];
        }
        else {
            impar = impar + allnum[x];
        }
    }

    document.write('La secuencia introducida es: ' + allnum + '<br>');
    document.write('El número mayor es: ' + mayor + '<br>');

    allnum.sort((a, b) => a - b);
    var longitud = allnum.length;
    longitud = longitud/10;
    posicion_numero_menor = Math.floor(longitud)
    minimo = posicion_numero_menor;

    allnum.sort((a, b) => a - b);
    var porcentaje = (allnum[0] / mayor) * 100;
    var suma = (allnum[0]+allnum[1]+allnum[2]+allnum[3]+allnum[4])
    var porcentajetotal = (suma / mayor) * 100;
    var porcentajemil = (mil / mayor) * 100;
    var porcentajepar = (par / mayor) * 100;
    var porcentajeimpar = (impar / mayor) * 100;

    document.write("El numero menor es: " + allnum[posicion_numero_menor] + '<br>');
    document.write("El porcentaje del número menor es: " + porcentaje + '</br>');
    document.write("El porcentaje total es: " + porcentajetotal + '<br>');
    document.write("Porcentaje de números mayores a mil: " + porcentajemil + '<br>');
    document.write("Porcentaje de números pares: " + porcentajepar + '<br>');
    document.write("Porcentaje de números impares: " + porcentajeimpar + '<br>');
}