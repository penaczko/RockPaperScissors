import { Injectable } from '@angular/core';
import {GameService} from '../control/game.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  result: number [] = [0, 0];

  constructor() { }

  getResult() {
    return this.result.slice();
  }

  addUserPoint() {
    this.result[0]++;
  }

  addCompPoint() {
    this.result[1]++;
  }
}
