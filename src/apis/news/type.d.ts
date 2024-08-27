export interface TResponseModel {
    news: any[]
    count: number
}
export interface TypeNews {
    nId : number
    content : string,
    tel : string,
    imagePath : string,
    ip : string,
    userId : number,
    sentType : boolean ,
    sentStatus : boolean,
    dateForSent : Date,
    multi : string,
    sentDate : Date,
    createdAt : Date,
}
