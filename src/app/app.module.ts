import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import { AppRoutingModule } from './app.routes';

// services
import { MinionsService } from './services/minions.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MinionsComponent } from './components/minions/minions.component';
import { MinionComponent } from './components/minion/minion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MinionsComponent,
    MinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MinionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
