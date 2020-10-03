


Recibira 2 parametros y tiene que ir recibiendo cada uno de sus elementos y compararlos. Si es un basico lo compara y ya, si es un array entrara a cada uno de sus elementos.
Importante e object keys, saber si es array y objeto pra entrar elemento a elemento
Hacer una funcion que sea print obect pero que imprima en profundidad, y luego el de comparacion de 2 y finalmente el clonado (construir otro igual donde copie los valores, 
no la referecnia)
clone deep y equal deep. Recursividad
Primero comparar la referecnia === porque si la referencia es la misma no tengo por que entrar 
 interface IPersona{
      nombre: string;
      edad: number;
      numeros: any;
      
   }
const persona: IPersona ={
   nombre: "Bruno",
   edad: 20, 
   numeros: [1,2,3]
}
const persona2: IPersona ={
   nombre: "Bruno",
   edad: 20, 
   numeros: [1,2,3]
}


const deepPrint = (Ipersona: { nombre: string; edad: number;numeros: any }) => {
   console.log(`nombre: ${Ipersona.nombre}`);
   console.log(`edad: ${Ipersona.edad}`);
   console.log(`numeros: ${Ipersona.numeros}`);
} 
deepPrint(persona);

//creo que aqui cambiamos persona por object o algo asi
const deepClone = (persona) => {
  let result;
  if (persona instanceof Array) {
    result = [ ...persona ];
  } else if (typeof persona=== 'object') {
    result = {...persona} //deberia copiar los valores pero no la referencia
  } else {
    return persona;
  }
  for (let prop of Reflect.ownKeys (result)) {
    result[ prop ] = deepClone (result[ prop ]);
  }
  return result; 
}

var deepEqual = function (persona, persona1) {
  if (persona1 === persona) {//si es un basico lo comparara por referencia y ya estaria 
    return true;
  }
  else if ((typeof persona1 == "object" && persona1 != null) && (typeof persona2 == "object" && persona2 != null)) {//si es objeto tendre que entrar elemento a elemento
    if (Object.keys(persona1).length != Object.keys(persona2).length)
      return false;

    for (var prop in persona1) {
      if (persona2.hasOwnProperty(prop))
      {  
        if (! deepEqual(persona1[prop], persona[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}
