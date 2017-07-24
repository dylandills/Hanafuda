import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ViewEncapsulation} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import { PlayerComponent } from './player/player.component';
import { CollectedSuitsComponent } from './collected-suits/collected-suits.component';
import { PlayerTurnPipe } from './playerTurn.pipe';

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
    CollectedSuitsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DragDropModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
