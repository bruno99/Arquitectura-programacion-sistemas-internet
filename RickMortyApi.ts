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

//Cual es el personaje que aparece en mas episodios?
interface IInfo{
  next: string;
}
interface IResult{
  characters: string[];
}
interface IData {
  info: Iinfo;
  results: IResult[];
}
const url = "https://rickandmortyapi.com/api/episode?=1";
 
let response = await Fetch(url);
const data: IData = await response.json();

while(data.info.next){
  response = await fetch(data.info.next);
  data = await response.json;
}

console.log("done");





