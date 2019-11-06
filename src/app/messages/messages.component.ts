import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  add(message:string):void {
    this.messages.push(message)
  }

  clear():void {
    this.messages = []
  }

  constructor() { }

  ngOnInit() {
  }

}
