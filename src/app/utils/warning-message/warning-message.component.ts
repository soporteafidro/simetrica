import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['./warning-message.component.scss']
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  @Input() ifCondition;
  @Input() message;
  ngOnInit() {
  }

}
