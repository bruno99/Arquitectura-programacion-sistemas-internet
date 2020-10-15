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
let data: IData = await response.json();

const episodes: IResult[] = data.results;


while(data.info.next){
  response = await fetch(data.info.next);
  data = await response.json;
  episodes.push(...data.results);
}

const characters:{ [key:string]:number } = {};

episodes.forEach( ep => {
  ep.characters.forEach( url => {
    if (characters[url]) characters[url]++;
    else characters[url] = 1;
  });
});

constchar: {
  url: string,
  num: number,
} = { url: "", num: 0};
  
 Object.keys[characters].forEach(url: string => {
  if(characters[url] > char.num){
    char.url = url;
    char.num = characters[url];
  }
});

response = await fetch(char.url);
const max = await response.json();
console.log(max);

console.log("done");





