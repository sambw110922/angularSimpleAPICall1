import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BasicServiceTestService {

  constructor() { }

  sendMessage():string {

    let myMessage:string = "Hello, I am from service!";
    return myMessage

  }

}
