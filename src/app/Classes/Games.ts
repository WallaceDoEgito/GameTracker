export class Game {
    gameId:number;
    gameName:string;
    gameImageUrl:string;
    hoursPlayed:number;
    rating:number;
    constructor(id:number,name:string,url:string,time:number,rating:number) {
        this.gameId = id
        this.gameName = name
        this.gameImageUrl = url
        this.hoursPlayed = time
        this.rating = rating

        
    }

}