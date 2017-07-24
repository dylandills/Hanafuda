import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ViewEncapsulation} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';


import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import { PlayerComponent } from './player/player.component';
import { HandComponent } from './hand/hand.component';
import { CollectedSuitsComponent } from './collected-suits/collected-suits.component';

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
    PlayerComponent,
    HandComponent,
    CollectedSuitsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
