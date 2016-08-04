import { Component } from '@angular/core';
import { Highlight } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'dir-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Highlight]
})
export class AppComponent {
  title = 'app works!';
  private switch:boolean = true;
  private items = [1,2,3,4,5];
  private value:number = 10;

  onSwitch() {
    this.switch = !this.switch;
  }
}
