import { Component, OnInit } from '@angular/core';
import { GameService } from '../control/game.service';
import {ResultService} from '../model/result.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private game: GameService,
              private result: ResultService) { }

  ngOnInit() {
  }

  onClick(choice: string) {
    this.game.Play(choice);
  }
}
