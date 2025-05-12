export class APiUtils
{
    apiContext:any;
    loginPayLoad:string;

    constructor(apiContext:any,loginPayLoad:string)
    {
        this.apiContext =apiContext; 
        this.loginPayLoad = loginPayLoad;
    }

    async getToken()
     {
        const loginResponse =  await this.apiContext.post("https://vo9288.virtual.otrs.com/api/agent/auth/login",
        {
            data:this.loginPayLoad
         } )//200,201,
        const loginResponseJson = await loginResponse.json();
        const token =loginResponseJson.Token;
        console.log(token);
        return token;
    }    
}
module.exports = {APiUtils};




