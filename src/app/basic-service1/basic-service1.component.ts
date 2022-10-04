import { Component, OnInit } from '@angular/core';
import { BasicServiceTestService } from '../basic-service-test.service';

@Component({
  selector: 'app-basic-service1',
  templateUrl: './basic-service1.component.html',
  styleUrls: ['./basic-service1.component.css'],
  providers: [
    BasicServiceTestService
  ]
})

export class BasicService1Component implements OnInit {

  message:string = "Default";

  constructor(private bst:BasicServiceTestService) { }

  ngOnInit(): void {
  }

  //  Test the service
  testService(){
    this.message = this.bst.sendMessage()
  }

}
