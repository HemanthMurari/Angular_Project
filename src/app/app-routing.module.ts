import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './user/userhome/details/details.component';
// import { DietPlanComponent } from './user/diet-plan/diet-plan.component';
import { DietPlanFormComponent } from './admin/diet-plan-form/diet-plan-form.component';
import { HomeComponent } from './user/home/home.component';
import { ForumfeedbackComponent } from './user/userhome/forum/forumfeedback/forumfeedback.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:":id",component:DetailsComponent},
  {path:":id",component:DietPlanFormComponent},
  {path:"forum/:id",component:ForumfeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
