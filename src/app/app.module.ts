import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { PlayFieldComponent } from './play-field/play-field.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { HandComponent } from './hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayfieldComponent,
    CardDetailComponent,
    CardComponent,
    WelcomeComponent,
    HowToPlayComponent,
    AboutComponent,
    HistoryComponent,
    PlayFieldComponent,
    Player1Component,
    Player2Component,
    HandComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
