import { Component, OnInit } from '@angular/core';

import { BasicPokeFetch1Service } from "../basic-poke-fetch1.service";


@Component({
  selector: 'app-basic-apicall',
  templateUrl: './basic-apicall.component.html',
  styleUrls: ['./basic-apicall.component.css'],
  providers:[
    BasicPokeFetch1Service
  ]
})

export class BasicAPICallComponent implements OnInit {

  constructor(private bpf:BasicPokeFetch1Service) { }

  name:string = "DEFAULT NAME";
  type1:string = "DEFAULT TYPE1";
  type2:string = "DEFAULT TYPE2";

  ngOnInit(): void {
  }

  basicAPICall(){

    //  Array of pokemon 
    var rPokemon:string[] = [
      "bulbasaur",
      "charmander",
      "squirtle",
      "pikachu",
      "meowth",
      "clefairy",
      "eevee",
      "mew",
      "mewtwo"
    ];

    //  Pokemon RNG
    let rng = Math.floor(Math.random() * rPokemon.length);

    let randomPoke = rPokemon[rng];

    this.bpf.getData(randomPoke).subscribe((data:any) => {

      this.name = data.name;
      this.type1 = data.types[0].type.name;

      if(data.types[1]){
        this.type2 = data.types[1].type.name;
      } else {
        this.type2 = "NONE";
      }


    });

  }

}
