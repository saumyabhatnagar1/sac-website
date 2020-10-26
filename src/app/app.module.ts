import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { ClubComponent } from './club/club.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ClubPageComponent } from './club-page/club-page.component';
import { TsocComponent } from './club/tsoc/tsoc.component';
import { AimlComponent } from './club/aiml/aiml.component';
import { CiphercellComponent } from './club/ciphercell/ciphercell.component';
import { CometComponent } from './club/comet/comet.component';
import { Tech4gudComponent } from './club/tech4gud/tech4gud.component';
import { InquizitiveComponent } from './club/inquizitive/inquizitive.component';
import { IndradhanushComponent } from './club/indradhanush/indradhanush.component';
import { CapriccioComponent } from './club/capriccio/capriccio.component';
import { IgnitersComponent } from './club/igniters/igniters.component';
import { C2cComponent } from './club/c2c/c2c.component';
import { TakeDaBaitComponent } from './club/take-da-bait/take-da-bait.component';
import { ClubDeTheatreComponent } from './club/club-de-theatre/club-de-theatre.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule }from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { ShutterbugComponent } from './club/shutterbug/shutterbug.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { WriteusComponent } from './home/writeus/writeus.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { AchievementsComponent } from './achievements/achievements.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    ClubComponent,
    GalleryComponent,
    HeaderComponent,
    ClubPageComponent,
    TsocComponent,
    AimlComponent,
    CiphercellComponent,
    CometComponent,
    Tech4gudComponent,
    InquizitiveComponent,
    IndradhanushComponent,
    CapriccioComponent,
    IgnitersComponent,
    C2cComponent,
    TakeDaBaitComponent,
    ClubDeTheatreComponent,
    ShutterbugComponent,
    CalendarComponent,
    WriteusComponent,
    NewslettersComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
