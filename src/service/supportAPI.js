
export class SupportAPI {
    constructor(){
        this.baseURL = "http://127.0.0.1:8080/tigers/support"
        this.postOption = {
            method:"post",
            headers:{
                "content-type":"application/json"
            }
        };
        this.getOption = {
            method:"get"
        }
    }

    async read(){
        const response = await fetch(this.baseURL,this.getOption);
        return await response.json();
    }

    async write(comment){
        const response= await fetch(this.baseURL,{
            ...this.postOption,
            body: JSON.stringify({"comment":comment})
        });
        return await response.json();
    }

}