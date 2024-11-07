import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsComponent } from './nav-bar/options/options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';
import { CaroseulComponent } from './index/caroseul/caroseul.component';
import { HomeComponent } from './home/home.component';
import { OptionsProfileComponent } from './nav-bar/options-profile/options-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    OptionsComponent,
    IndexComponent,
    CaroseulComponent,
    HomeComponent,
    OptionsProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
