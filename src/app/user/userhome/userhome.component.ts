import { Component } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
  }
}
