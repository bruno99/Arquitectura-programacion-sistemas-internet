//fichero: /.vscode/settings.json (meter los settings de deno y tal)
instalar extension de deno y prettier (hacer bonito)

//fichero: app.ts
librería oak graphql
importar el oak graphql
creo aplicacion const app = new Application();
//Los tipos que graphql va a servir:
const types = gql

  typeUser {
       firstName: String
       lastName: String
  }
  input UserInput {
       firstName: String
       lastName: String
  }
  type ResolveType {
       done: Boolean
  }
  type Query {
       getUser(id:String): User (no hay explamacion porque puede ser eso o indefinido)
  }
  type Mutation {
       setUser(input: UserInput!): ResolveType! (la exclamaciones que tiene que devolverme el objeto si o si)
  }      
  const resolvers = {
    Query: {
      getUser: (parent: any, args: {id:string}, context: any, info: any) => {
        return {
          firstName: "Bruno",
          lastName: "Urban",
        }
      },
    },
    Mutation: {
      setUser: (
        parent: any,
        args: any,
        context: any,
        info: any
        ) => {
        console.log("input:", args.input.firstName, args.input.lastName);
        return {
          done: true,
        };
      },
    };
    
  
