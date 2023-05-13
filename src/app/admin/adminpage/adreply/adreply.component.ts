import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adreply',
  templateUrl: './adreply.component.html',
  styleUrls: ['./adreply.component.css']
})
export class AdreplyComponent {
  @Input() q:any;
}
