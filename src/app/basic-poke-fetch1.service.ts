import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BasicPokeFetch1Service {

  constructor(private http:HttpClient) { }

  pokemon:any

  basicURLCall:string = "https://pokeapi.co/api/v2/pokemon/"

  getData(pokemon:string){

    var appendedURL = this.basicURLCall + pokemon;
    
    var myData = this.http.get(appendedURL);

    return myData;

  }

}
