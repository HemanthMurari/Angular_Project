import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AfilterPipe } from '../pipes/afilter.pipe';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdreplyComponent } from './adminpage/adreply/adreply.component';
import { AdreplyformComponent } from './adminpage/adreplyform/adreplyform.component';
import { ForumComponent } from '../user/userhome/forum/forum.component';


const route:Routes=[

  {
  path:"home",component: HomeComponent,
  children:[
    {path:"",component:AdminHomeComponent},
    {path:"adddietplan",component: DietPlanFormComponent,},
    // {path:"delete-diet-plan",component: DietPlanFormComponent,}
    {
      path:"reach",
      component : AdminpageComponent
    }

  ]},
 ];


@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent,
    AdminHomeComponent,
    AfilterPipe,
    AdminpageComponent,
    AdreplyComponent,
    AdreplyformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule


  ]
})
export class AdminModule { }
