export class Token {
    
    
    saveToken(token:string,nameToken:string){
        localStorage.setItem(nameToken,token);
    }
    getToken(name):string{
        return localStorage.getItem(name);
    }
    
}