import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HistoryComponent } from './history/history.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { PlayFieldComponent } from './play-field/play-field.component';
import {Player1Component } from './player1/player1.component';
import {Player2Component } from './player2/player2.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'how-to-play',
    component: HowToPlayComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'hand',
    component: HandComponent
  },
  {
    path: 'play-field',
    component: PlayFieldComponent
  },
  {
    path: 'player1',
    component: Player1Component
  },
  {
    path: 'player2',
    component: Player2Component
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
