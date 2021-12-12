import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { ZeroComponent } from './zero/zero.component';
import { UnComponent } from './un/un.component';
import { PhraseComponent } from './phrase/phrase.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HomeComponent,
    OneComponent,
    NotfoundComponent,
    ZeroComponent,
    UnComponent,
    PhraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
