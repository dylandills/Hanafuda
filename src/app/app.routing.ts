import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HistoryComponent } from './history/history.component';
import { CardComponent } from './card/card.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import {PlayerComponent } from './player/player.component';
import { CollectedSuitsComponent } from './collected-suits/collected-suits.component';

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
    path: 'playfield',
    component: PlayfieldComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'card/:flower',
    component: CollectedSuitsComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
