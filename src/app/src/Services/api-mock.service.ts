import { Injectable } from '@angular/core';
import { Game } from '../../Classes/Games';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }
  private gameList: Game[] = []
  Get(){
    this.gameList.push(new Game(2,"Katana Um",	"https://i.scdn.co/image/ab67616d00001e02d3c12724ab66f21170225d22",	5,	"Um jogo do balacobaco",	5))
    this.gameList.push(new Game(7,	"Outer citys",	"https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png",	92.2, "Bem maneiro",	5))
    this.gameList.push(new Game(10, "Vava", "https://i.ytimg.com/vi/OLpVvtWApVM/maxresdefault.jpg", 0, "Achei meio paia", 1))
    return this.gameList;
  }
  Post(game:Game){
    game.gameId = Math.floor(Math.random() * 10000)
    this.gameList.push(game);
  }

  Delete(game:Game){
    for(let i = 0; i< this.gameList.length;i++){
      if(this.gameList[i].gameId === game.gameId) {
        this.gameList.splice(i, 1);
      }
    }
  }
}
