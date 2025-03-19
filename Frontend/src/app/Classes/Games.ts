export class Game {
    gameId:number;
    gameName:string;
    gameImageUrl:string;
    hoursPlayed:number;
    review:string;
    rating:number;
    public backgroundImageLink:string;
    constructor(id:number,name:string,url:string,time:number,review:string, rating:number) {
        this.gameId = id
        this.gameName = name
        this.gameImageUrl = url
        this.hoursPlayed = time
        this.review = review
        this.rating = rating
        this.backgroundImageLink = ""
        
    }

}