import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DirectivesComponent,
    MenuOutlineComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[MenuBarComponent]
})
export class SharedModule { }
