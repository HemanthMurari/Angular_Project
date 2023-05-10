import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent {
  @Input() products: any;
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
    this.cs.getDietPlans().subscribe(
      {
        next:(data:any)=>this.details=data,
        error:()=>this.details={}
      }
    )
  }


}
