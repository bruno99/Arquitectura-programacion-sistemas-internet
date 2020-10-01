Backend -> El lenguaje de programación da igual. (Java, php, phyton,ruby...) Usaremos JavaScript con Typescript (JS/TS) 
JavaScript se inventó para el frontend (backend se programaba en otra cosa), surgió Node.js (este año verenmos Deno,js que permitía programar el backend en JS y así 
todo el stack (back y front) se puede programar en JS, lo que facilita.
Usaremos:
   -JS/TS moderno (a partir de ES6 de 2015)
   -Node.js-> Deno.js (el intérprete) deno no se usa demasiado actualmente, pero parece que va a ser el futuro.
   -Mongo (base de datos) es NoSQL, es decir no relacional (más moderno y ágil)
   -GRAPHQL-> En el back como servidor y en el front como cliente (surgió de Facebook hace poco pensado para optimizar consumo de datos y batería enfocado a los móviles)
JS necesita mantener retrocompatibilidad.
TS es JS tipado (si en JS a= 5, en TS a:number=5).Hay una cosa llamada transpilador que traduce mi código a JS, el transpilador va a comporbar que todos 
los tipos están bien puestos, pero el código que se ejecuta es de TS. Es decir, TS es un JS para asegurarse de que los tipos están bien puestos.
JSON es un formato de objeto de texto que permite almacenar cualquier tipo de infromación. Mongo guarda en JSON.

VSCODE 
Definir variables. 3 formas:
 1. 
 var a = 3; 
 OBSOLETO NO USAR
 2.
 let a = 5;
 3.Cuando no se vaya a reasignar, es decir, que no vaya a darle otro valor en ningún lugar del código. SIEMPRE USAR CONST SALVO CUANDO NO SE PUEDA
 const a = 5;
 Tampoco se podría hacer a++ porque sería reasignar como a = a+1.
 Lo que si se podría sería tener const a= [1,2,3] y hacer a.push(5), que sería a=[1,2,3,5]
 Para comparar a===b significa que apunten a lo mismo, no que sean el mismo valor(lo que seria a==b). 
 
 RECUERDA-> EN TYPESCRIPT SE TIPA:
 number
 string
 boolean
 any
 undefined
 
 ¿para qué se usa undefined? Cuando no sé si se me a va a devolver el tipo que estoy pidiendo. Ej/ let image: Image|undefined = getImage(); por si la imagen no existe
 La funcion typeof me dice el tipo. Ej/ if(typeof(fecha) == "string") haría algo si fecha es un tipo string
 El for se declara igual que el c++.
 El string se puede definir :
 -let a:string= "hola"; //usar esta seguramente
 -let a:string= 'hola';
 -let a:string= '''hola'''; -> "ho/nla"

---FUNCIONES---

Se asigna la función a una variable, es decir:
const foo = function(a,b){ 
 return a + b;
}
foo(3,4) // 7

cuando solo es una linea y es el valor de retorno
const f = (a,b) => a+b;

Una función es una variable tipicamente constante 
const suma = (a:number, b:number): number =>{ return a+b;}
suma(3,4) -> 7
suma("hola", "que tal");->esto en typescript da error, en javascript da hola que tal porque no se pondría lo de number
Tipar te garantiza que no vayan a suceder cosas como lo de hola que tal, a no ser que quieras, entonces ponddrias (a:number|string)

CLOSURE //cuando una funcion devuelve otra se lleva consigo los valores
const multiplyBy =(n:number) => {
  return (a:number) => n*a; //está devolviendo uns funcion que toma como parametro un numero y devuelve n*a
}
const double = multiplyBy(2); //double es 2*a porque se lleva el 2 y entonces n=2
 double(3)->6

for_each recorre cada elemnto de un array y hace una operacion sobre el
const for_each = (arr: number[], f:Function)
map genera otro array "transformado" en la operacion correspondiente. La entrada es un array y la salida un array del mismo tamaño (no necesariamente del mismo tipo)
filter es un fitro del array que filtra los parametros que le digamos

UNA FUNCION NUNCA DEBERIA MODIFICAR SUS PARAMETROS
//inmutabilidad= no cambias los objetos, creas nuevos
const a = [1,2,3];
const b = a; 
const double = (arr:number[])=>{
 const b= a.slice(); //esto hace un duplicado pero a no es === b
 for.....b{i] = 2* arr[i]
          }
const c= double(a); //->a=[2,4,6]
a===b//esto seria false porque las referencias son distintas aunque los valores sean los mismos        
   
EN JAVASCRIPT TODO SON REFERENCIAS
EJ/   
const a = [[1,2], [3,4], [1,5]]; //esto es un array de arrays
a[0]; //esto seria [1,2]
const c = a.slice(0); //hace una copia de a en c. a NO = c, pero a[0]===c[0] porque es una copia de la referencia 
Desecstructurar un array = hace una copia de los elementos y los separa, expande el array
const a=[1,2,3]
const b= [...a];
console.log(b); //a!=b Mismos valores pero distintas referencia
const c=[...a,...b]; //c=[1,2,3,1,2,3]
const [h,...i] = [...a ];//Declarar variables sueltas a partir d un array
console.log(h); //1
console.log(h);  //[2,3]

   //calcula el maximo con ...
const max = (...numbers:number[]):number=> {
   let num= 0;
   for(let num of numbers){
      if(i>num) num = i;
   }
   return num;
  max(1,2,3,4,5,6); //no necesitas pasarlo en array porque hemos usado los paraemtros desestructurados y los convierte en array 
  
//sacar el array del doble del numero mas el anterior   
 const a: number [] = [1,2,3,4,5];
 a.forEach( (value, index) => { //para cada elemento de a ejecuto f recibiendo como parametro value e index
    console.log(2*value + index);
 })
   
   //sacar los pares
    const a: number [] = [1,2,3,4,5];
 a.forEach( (value) => {
    if(value%2===0)
    console.log(value);
 })
   
   
 //los mayores de 10 del resultados al multiplicar todos por 2
  const a: number [] = [1,2,5,7,8];
a.map ( value => 2*value) //creo otro array del doble
.filter(value => value > 10) //creo otro array con los mayores de 10
.forEach(value => console.log(value)); //los imprimo
   
//SLICE Y SPLICE
   
//OBJETOS   
json-> asociar claves a valores 

   const persona={
   nombre: "Bruno",
   edad: 20,
   amigos: [
      {
         nombre:"Agus", 
         edad:21,
      },
      {
          nombre:"Ro", 
          edad:20,
      },
   ],
}
const printconsole = (obj) => {
   console.log(`nombre: ${obj.nombre}`);
   console.log(`edad: ${obj.edad}`);
   obj.amigos.forEach(amigo=>{
      console.log(`nombre: ${amigo.nombre}`);
   console.log(`edad: ${amigo.edad}`);
   })
}

Puedo hacer b.name que es lo mismo que b["name"];
 Cuando no es solo una palabra la clave va entre comillas: 
   const c= {"nombre y apellidos": "Bruno Urban",}
   Y accedo a ella como un array

 const persona = {
      nombre: "Bruno",
      edad: 20
   }
   Object.keys(persona).forEach( key =>{ 
      console.log(`${key}: ${persona[key]}`)
   });
   typeof persona; 
   if(typeof persona === "object"){

   }
   Array.isArray(arr)// true
const a= {
   name: "alberto",
   numeros:[1,2,3],
   perro:{
      name: "Pippin"
   }
}
const b= {
   name: "alberto",
   numeros:[1,2,3],
   perro:{
      name: "Pippin"
}
}

a.name===b.name; // true
a.numeros ===b.numeros; //false
a.perro.name = b.perro.name; //true


   
   
   
  
                        



