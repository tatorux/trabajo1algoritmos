
function suma(){

alert ("OBTENGA LOS RESULTADOS DE OPERACIONES COMO SUMA, RESTA, MULTIPLICACION Y DIVICION INSERTANDO DOS VALORES")    

    var a = 0;
    var b = 0;

var suma = 0;
var resta = 0;
var multi = 0;
var divi = 0;

a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

suma = a + b ;
resta = a - b;
multi = a * b;
divi = a / b; 

alert ("EL RESULTADO DE LA SUMA ES:" + suma);
alert ("EL RESULTADO DE LA RESTA ES:" + resta);
alert ("EL RESULTADO DE LA MULTIPLICACION ES:" + multi);
alert ("EL RESULTADO DE LA DIVICION ES:" + divi);

}


function NumeroMayor(){

alert ("OBTENGA EL RESULTADO DE COMPARAR 3 VALORES PARA CONOCER EL NUMERO MAYOR");

    var a = 0;
    var b = 0;
    var c = 0;
    a = parseInt(prompt("INGRESE EL PRIMER DIGITO A COMPARAR"));
    b = parseInt(prompt("INGRESE EL SEGUNDO DIGITO A COMPARAR"));
    c = parseInt(prompt("INGRESE EL TERCER DIGITO A COMPARAR"));
    if (a>b && a>c) {
    alert(a+"  ES MAYOR QUE:  " + b + "  Y  " + c);
}
   else if (b>a && b>c) {
    alert(b+"  ES MAYOR QUE: "+a+"  Y  " +c);
}
   else if (c>a && c>b){
    alert(c+"  ES MAYOR QUE: "+ a+ "  Y  " +b);
}   
    else{
    alert("TODOS LOS NUMEROS SON IGUALES");
}
}

function numeroMenor(){

    alert ("OBTENGA EL RESULTADO DE COMPARAR 3 VALORES PARA CONOCER EL NUMERO MENOR");

    var a = 0;
    var b = 0;
    var c = 0;
    a = parseInt(prompt("INGRESE EL PRIMER DIGITO A COMPARAR"));
    b = parseInt(prompt("INGRESE EL SEGUNDO DIGITO A COMPARAR"));
    c = parseInt(prompt("INGRESE EL TERCER DIGITO A COMPARAR"));
    if (a<b && a<c) {
    alert(a+"  ES MENOR QUE:  " + b + "  Y  " + c);
}
   else if (b<a && b<c) {
    alert(b+"  ES MENOR QUE: "+a+"  Y  " +c);
}
   else if (c<a && c<b){
    alert(c+"  ES MENOR QUE: "+ a+ "  Y  " +b);
}   
    else{
    alert("TODOS LOS NUMEROS SON IGUALES");
}
}


function parOimpar(){

    alert ("OBTENGA EL RESULTADO QUE PERMITIRA CONOCER SI EL VALOR INGRESADO ES PAR O INPAR");

    var a = 0;
    a = parseInt(prompt("POR FAVOR INGRESE UN NUMERO"));
    
    if (a % 2 == 0) {
        alert(a+" ES UN NUMERO PAR");
    } else {
        alert(a+" ES UN NUMERO IMPAR");
    }

    

}


function CUADRADO(){

    alert ("OBTENGA EL CUADRADO DE UN VALOR INGRESANDO EL UNMERO OPERAR");
    
    var a = 0;
    var b = 0;
    a = parseInt(prompt("POR FAVOR INGRESE EL NUMERO A CALCULAR"));
    b = a*a;
    alert ("EL CUADRADO DEL NUMERO "+a+ " ES: "+ b);
}


function AREADELTRIANGULO (){

    alert ("OBTENGA EL AREA DE UN TRIANGULO INGRESANDO SUS MEDIDAS (BASE Y ALTURA)");

var b = 0;
var h = 0;
var a = 0;
b = parseInt(prompt("INGRESE LA BASE DEL TRIANGULO"));
h = parseInt(prompt("INGRESE LA ALTURA DEL TRIANGULO"));
a= b*h/2;
alert ("EL AREA DEL TRIANGULO ES: " + a);
}


function centimetrosametros(){

    alert ("OBTENGA EL RESULTADO DE CONVERSION DE CENTIMETROS A METROS INGRESANDO EL VALOR");

    var a = 0;
    var m = 0;
    a = parseInt(prompt("DIJITE LA CANTIDAD DE CENTIMETROS A CONVERTIR"));
    m= 0.01 * a;
    alert (a+" EQUIVALEN A: "+ m+" METROS");
}


function AÑO (){

    alert ("OBTENGA UN MENSAJE QUE ADIVINARA EN QUE AÑO NACIO INGRESANDO SU EDAD");

    var b = 0;
    var a = 0;
    b = parseInt(prompt("POR FAVOR INGRESE SU EDAD"));
    a = 2022-b;
    alert ("USTED NACIO EN EL AÑO: " + a);
    }

    function CAPITAL (){

        alert ("OBTENGA UN TOTAL DE GANANCIA INGRESANDO EL CAPITAL A INVERTIR Y EL TIEMPO EN AÑOS");

        var c = 0;
        var a = 0;
        var g = 0;
        var i = 0;
        var t = 0;
        c= parseInt(prompt("INGRESE EL MONTO QUE DESEA INVERTR"));
        a= parseInt(prompt("INGRESE EL TIEMPO EN AÑOS A INVERTIR"));
        i= 1.7 * 12 / 100;
        g=(c*i)*a;
        
        alert("SU GANACIA TRAS INVERTIR "+c+" PESOS EN "+a+ " AÑOS ES DE: "+g +" PESOS")

        
        }

        function calificaciones (){
            
            alert ("OBTENGA UN RESULTADO QUE INFORME SI A APROBADO UNA MATERIA INGRESANDO LAS NOTAS A CALCULAR");
            
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var e = 0;
            var p = 0;
            a= parseInt(prompt("INGRESE LA PROMERA NOTA TENIENDO EN CUENTA QUE VAN DE 1 A 5"));
            b= parseInt(prompt("INGRESE LA SEGUNDA NOTA A CALCULAR"));
            c= parseInt(prompt("INGRESE LA TERCERA NOTA A CALCULAR"));
            d= parseInt(prompt("INGRESE LA CUARTA NOTA A CLACULAR"));
            e= parseInt(prompt("INGRESE LA QUINTA NOTA A CALCULAR"));
            
            p=(a+b+c+d+e)/5
            if (p<=3.9) {
                alert("EL ESTUDIANTE REPROBO"+p);
            } else {
                alert("EL ESTUDIANTE APROBO"+p);
            }
    
    
            function fruteria (){
                var kl=0;
                var T=0;
                var D=0;
                var TD=0;
                kl=parseInt(prompt("Ingrese los kilos de fruta a comprar: "));
                T=4500*kl;
                if(kl<=2){
                    alert("No tendra un descuento. \n Su total a pagar es: "+ T );
                    alert ("¡Gracias por su compra!");
                }if ((kl>2)&&(kl<=5)){
                alert("Se le Realizara un descuento del 10% a: " + T);
                D=10*T/100;
                TD=T-D;
                alert ("Su valor a pagar es: "+"$"+TD);
                }if((kl>5)&&(kl<10)){
                    alert("Se le Realizara un descuento del 15% a: " + T);
                D=15*T/100;
                TD=T-D;
                alert ("Su valor a pagar es: "+"$"+TD+"\n"+"¡Gracias por su compra!");
                }if (kl>=10){
                alert("Se le Realizara un descuento del 20% a: " + T);
                D=20*T/100;
                TD=T-D;
                alert ("Su valor a pagar es: "+"$"+TD+"\n"+"¡Gracias por su compra!");
                }

        }

        }
