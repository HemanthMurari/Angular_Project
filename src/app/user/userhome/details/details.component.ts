import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  details:any;
  constructor(private cs:ProductService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id=0
      }
    )
  }
  readData(){
    this.cs.getDetails(this.id).subscribe(
      {
        next:(data:any)=>this.details=data,
        error:()=>this.details={}
      }
    )
  }


}
