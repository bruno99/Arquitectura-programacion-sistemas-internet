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
       getUser(id:String): User
  }
  type Mutation {
       setUser(input: UserInput!): ResolveType!
  }      
  
