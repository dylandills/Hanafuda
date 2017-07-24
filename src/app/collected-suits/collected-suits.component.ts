import { Component, OnInit } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-collected-suits',
  templateUrl: './collected-suits.component.html',
  styleUrls: ['./collected-suits.component.scss']
})
export class CollectedSuitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
