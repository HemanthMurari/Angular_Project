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


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  },
  {
    path:"add-diet-plan",
    component: DietPlanFormComponent,
  },
  {
    path:"delete-diet-plan",
    component: DietPlanFormComponent,
}]

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule


  ]
})
export class AdminModule { }
