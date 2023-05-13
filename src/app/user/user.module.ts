import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './userhome/card/card.component';
import { CardBoxComponent } from './userhome/card/card-box/card-box.component';
import { FilterpricePipe } from '../pipes/filterprice.pipe';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DietplanBoxComponent } from './diet-plan/dietplan-box/dietplan-box.component';
import { ForumComponent } from './userhome/forum/forum.component';
import { ForumboxComponent } from './userhome/forum/forumbox/forumbox.component';
import { ForumfeedbackComponent } from './userhome/forum/forumfeedback/forumfeedback.component';
import { OwnDietComponent } from './own-diet/own-diet.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path:"food",
      component: CardComponent
    },
    {
      path:"reach",
      component : ForumComponent
    },
    {
      path:"diet",
      component : DietPlanComponent
    },
    {
      path:"create",
      component:OwnDietComponent
    },

  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    DetailsComponent,
    ProductComponent,
    ProductrowComponent,
    CardComponent,
    CardBoxComponent,
    FilterpricePipe,
    FiltertypePipe,
    ReachUsComponent,
    DietPlanComponent,
    DietplanBoxComponent,
    ForumComponent,
    ForumboxComponent,
    ForumfeedbackComponent,
    OwnDietComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ]
})
export class UserModule { }
