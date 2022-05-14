import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-alert',
  templateUrl: './msg-alert.component.html',
  styleUrls: ['./msg-alert.component.css']
})
export class MsgAlertComponent implements OnInit {

  @Input()
  mensaje: string;

  @Input()
  clase: string;  //danger, info, succes, warning

  constructor() { }

  ngOnInit(): void {
  }

}
