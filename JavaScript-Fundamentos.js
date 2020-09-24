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


