var L1 = 0, L2 = 0, L3 = 0, S = 0, A = 0;
var ladoMayor = "", ladoMenor = "", TipoT = "";


function LA1(){
    L1 = document.getElementById("L1").value 
    L1 = Number.parseFloat(L1)
}

function LA2(){
    L2 = document.getElementById("L2").value 
    L2 = Number.parseFloat(L2)
}

function LA3(){
    L3 = document.getElementById("L3").value 
    L3 = Number.parseFloat(L3)
}

function Semiperimetro(){


    S = (L1 + L2 + L3) /2
    alert('El Semiperimetro es igual a: '+ S)

 }

function Area(){

   S = (L1 + L2 + L3) /2
    A = Math.sqrt(S * (S - L1) * (S - L2) * (S- L3))

    alert('El Area es igual a: '+ A)

}



function obtenerLadoMayorMenor() {
    // Verificar cuál es el lado mayor
     ladoMayor = Math.max(L1, L2, L3);
    
    // Verificar cuál es el lado menor
     ladoMenor = Math.min(L1, L2, L3);



     alert('El lado mayor es: '+ ladoMayor + ' y el lado menor es: ' + ladoMenor)

    
  }
  
  function determinarTipoTriangulo() {
    if (L1 + L2 > L3 && L1 + L3 > L2 && L2 + L3 > L1) {
      if (L1 === L2 && L2 === L3) {
        TipoT = " es un triangulo Equilátero"; 
      } else if (L1 === L2 || L2 === L3 || L1 === L3) {
        TipoT= "es un triangulo Isósceles"; 
      } else {
        TipoT= "es un triangulo Escaleno"; 
      }
    } else {
        TipoT=  " no es un triángulo";
    }

    alert('la figura ' + TipoT )
  }