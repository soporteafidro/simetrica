import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'study-new-info',
  templateUrl: './study-new-info.component.html',
  styleUrls: ['./study-new-info.component.scss']
})
export class StudyNewInfoComponent implements OnInit {

  constructor() { }


  @Output() OnIntroSkept = new EventEmitter();

  ngOnInit() {

  }

  skipIntro(): void {
    this.OnIntroSkept.emit();
  }
}
