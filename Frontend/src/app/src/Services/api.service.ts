import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from '../../Interfaces/Game';
import { Game } from '../../Classes/Games';
import { SessionTime } from '../../Classes/SessionTime';
import { lastValueFrom, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private gameList: Game[] = []

  constructor(private http:HttpClient) { }
  Get(){
    while(this.gameList.length !== 0){
      this.gameList.pop();
    }
    this.http.get<Game[]>("http://localhost:5155/api/Jogos").subscribe(element => 
      {
      for(let obj of element){
        this.gameList.push(obj)
      }      
    })
    return this.gameList;
  }
  Post(game:Game){
    this.http.post<Game>("http://localhost:5155/api/Jogos", game).subscribe((config) => {
      this.Get()
    })
  }
  Delete(game:Game){
    this.http.delete(`http://localhost:5155/api/Jogos/${game.gameId}`).subscribe( (res) => {
    this.Get()

    })
  }
  Put(game:Game){
    this.http.put(`http://localhost:5155/api/Jogos/${game.gameId}`,game).subscribe((res) => {
      this.Get()
    })
  }
  getList(){
    return this.gameList
  }

  async getSession(id:number){
    const req$ = this.http.get<SessionTime[]>(`http://localhost:5155/api/Session/${id}`).pipe(
      map(el => el.map(
        session => new SessionTime(session.sessionDate, session.sessionHours)
      ))
    )
    return lastValueFrom(req$)
  }
}
