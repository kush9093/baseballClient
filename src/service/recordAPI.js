
 export class RecordAPI {
    constructor(){
        this.baseURL = "http://127.0.0.1:8080/tigers/record";
        this.getOption = {
            method:"get"
        }
    }

    async pitching(pcode){
        const response = await fetch(this.baseURL+"/pitching?pcode="+pcode,this.getOption);
        return await response.json();
    }


    async hitting(pcode){
        const response = await fetch(this.baseURL+"/hitting?pcode="+pcode,this.getOption);
        return await response.json();
    }


 }