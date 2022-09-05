
 export class PlayerAPI {
    constructor(){
        this.baseURL = "http://127.0.0.1:8080/tigers/player";
        this.getOption = {
            method:"get"
        }
    }

    async list(position){
        if(position){
        const obj = {"pitcher":"투수","cathcer":"포수","infielder":"내야수","outfielder":"외야수"};
        const response = await fetch(this.baseURL+"/list?position="+obj[position],this.getOption);
        return await response.json();
    } else {
        const response = await fetch(this.baseURL+"/list",this.getOption);
        return await response.json();
    }
    }


    async detail(pcode){
        const response = await fetch(this.baseURL+"/detail?pcode="+pcode,this.getOption);
        return await response.json();
    }


 }