import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dietplan-box',
  templateUrl: './dietplan-box.component.html',
  styleUrls: ['./dietplan-box.component.css']
})
export class DietplanBoxComponent {
  @Input() details:any;

}
