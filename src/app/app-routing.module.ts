import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClubComponent} from './club/club.component'
import { GalleryComponent } from './gallery/gallery.component';
import {HomeComponent} from './home/home.component'
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'clubs',component:ClubComponent},
  {path:'team',component:TeamsComponent},
  {path:'gallery',component:GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
