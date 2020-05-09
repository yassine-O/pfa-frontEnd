export class Token {
    extract(data: Object,propertyName) :string{
      return JSON.parse(JSON.stringify(data))[propertyName];
    }
    jwt:string
    saveToken(token:string,nameToken:string){
        localStorage.setItem(nameToken,token);
    }
    getToken(name):string{
        return localStorage.getItem(name);
    }
    
}