const json = fetch("https://https://rickandmortyapi.com/api/");
json.then((response)=> {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});
/*
const response = await fetch("https://rickandmortyapi.com/api/");
const jsonData = await response.json();
console.log(jsonData);
*/
//sacar todos los personajes que se llamen Rick
const json = fetch("https://rickandmortyapi.com/api/character/?name=rick");
json.then((response)=> {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});
