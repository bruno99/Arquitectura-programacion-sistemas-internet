import { MongoCLient} from "https://deno.land/x/mongo@v0.12.1/mod.ts";
try{
const client = new MongoClient();
client.connectWithUrl("mongodb+srv://Bruno99:nebrija@cluster0.qb7tw.gcp.mongodb.net/cluster0?retryWrites=true&w=majority
");

interface UserSchema {
_id: {Soid: string};
name: string;
pwd: string;
};

interface CoursesSchema {
_id: {soid: string }; 
name: string;
year: number;
}

const db = client.database('cluster0');
const courses = db.collection<CoursesSchema>('CoursesCollection');

const course: Partial<CoursesSchema> = {
  name: "EDA",
  year: 1,
};

const insertCourse  = await courses.insertOne(course);

}catch(e)

//replicar e la BD de mongo los datos de rick y morty, es decir, crear una coleccion, episodios, personajes y planetas
