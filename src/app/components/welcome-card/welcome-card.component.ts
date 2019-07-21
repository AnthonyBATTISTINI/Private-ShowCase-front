import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnInit {

  @Input()
  picture = '';

  @Input()
  title = '';

  @Input()
  subtitle = '';

  constructor() { }

  ngOnInit() {
  }

}
