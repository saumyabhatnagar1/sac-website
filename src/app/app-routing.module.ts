import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubComponent } from './club/club.component'

import { AimlComponent } from './club/aiml/aiml.component';
import { C2cComponent } from './club/c2c/c2c.component';
import { CapriccioComponent } from './club/capriccio/capriccio.component';
import { CiphercellComponent } from './club/ciphercell/ciphercell.component';
import { ClubDeTheatreComponent } from './club/club-de-theatre/club-de-theatre.component';
import { CometComponent } from './club/comet/comet.component';
import { IgnitersComponent } from './club/igniters/igniters.component';
import { IndradhanushComponent } from './club/indradhanush/indradhanush.component';
import { InquizitiveComponent } from './club/inquizitive/inquizitive.component';
import { ShutterbugComponent } from './club/shutterbug/shutterbug.component';
import { TakeDaBaitComponent } from './club/take-da-bait/take-da-bait.component';
import { Tech4gudComponent } from './club/tech4gud/tech4gud.component';
import { TsocComponent } from './club/tsoc/tsoc.component';

import { ClubPageComponent } from './club-page/club-page.component'
import { GalleryComponent } from './gallery/gallery.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { HomeComponent } from './home/home.component'
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'team', component: TeamsComponent},
  {path: 'clubs', component: ClubComponent},
  {path: 'clubs/aiml', component: AimlComponent},
  {path: 'clubs/c2c', component: C2cComponent},
  {path: 'clubs/capriccio', component: CapriccioComponent},
  {path: 'clubs/ciphercell', component: CiphercellComponent},
  {path: 'clubs/club-de-theatre', component: ClubDeTheatreComponent},
  {path: 'clubs/comet', component: CometComponent},
  {path: 'clubs/igniters', component: IgnitersComponent},
  {path: 'clubs/indradhanush', component: IndradhanushComponent},
  {path: 'clubs/inquizitive', component: InquizitiveComponent},
  {path: 'clubs/shutterbug', component: ShutterbugComponent},
  {path: 'clubs/take-da-bait', component: TakeDaBaitComponent},
  {path: 'clubs/tech4gud', component: Tech4gudComponent},
  {path: 'clubs/tsoc', component: TsocComponent},
  {path: 'clubs/club-page', component: ClubPageComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'newsletters', component: NewslettersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
