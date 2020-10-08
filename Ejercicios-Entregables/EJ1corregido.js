
const obj = {
   name: "Alberto",
   edad: 20,
   amigos: [
       "Juan, "Maria", "Paula"
       ],
   mascotas: [
       {
            name: "Pipo",
            raza: "perro"
       },
       {
            name: "lily",
            raza: "gato",
       },
     ]
  }   
//print
//si la clave es un tipo basico la imprimo, si es un array u objeto lo recorro y llamo recruivamente lo que hay dentro
const printDeep = {obj: any} => {
   if(["string", "number", "boolean"].includes{typeof obj}}{
      console.log(obj);
    }
    else if(Array.isArray{obj}}{
      obj.forEach(elem => printDeep(elem)};
   }else{
      Object.keys(obj).forEach( key => {
         console.log(key);
         printDeep(obj[key]);
      })
   }  
}   
printDeep(obj);








