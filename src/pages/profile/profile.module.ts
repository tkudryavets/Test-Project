import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileInfoComponent } from 'src/app/shared/components/profile-info/profile-info.component';
import { ProfilePlansComponent } from 'src/app/shared/components/profile-plans/profile-plans.component';



@NgModule({
  declarations: [ProfileComponent, ProfileInfoComponent,  ProfilePlansComponent],
  imports: [
    CommonModule, ProfileRoutingModule,
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
