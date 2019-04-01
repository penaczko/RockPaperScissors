import { Injectable } from '@angular/core';
import {ResultService} from '../model/result.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  messageOut: string;
  compChoice: string;
  userChoice: string;
  // '1' - Paper , '2' - Rock , '3' - Scissors
  rockPaperScissors = ['r' , 'p' , 's'];

  constructor(private gameResult: ResultService) { }

  win() {
    console.log('Win');
    this.messageOut = 'You WON!';
    this.gameResult.addUserPoint();
    document.getElementById(this.userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(this.userChoice).classList.remove('green-glow')}, 1000 );
  }

  lose() {
    console.log('Lose');
    this.messageOut = 'You LOSE!';
    this.gameResult.addCompPoint();
    document.getElementById(this.userChoice).classList.add('red-glow');
    setTimeout(() => {document.getElementById(this.userChoice).classList.remove('red-glow')}, 1000 );
  }

  draw() {
    console.log('Draw');
    this.messageOut = 'It is DRAW!';
    document.getElementById(this.userChoice).classList.add('gray-glow');
    setTimeout(() => {document.getElementById(this.userChoice).classList.remove('gray-glow')}, 1000 );
  }

  Play(uChoice: string) {
    this.userChoice = uChoice;
    this.compChoice = this.rockPaperScissors[Math.floor(Math.random() * this.rockPaperScissors.length)];
    // console.log(this.compChoice);

    switch (uChoice + this.compChoice) {
      // For Paper:
      case 'pp': {
        this.draw();
        break;
      }
      case 'pr': {
        this.win();
        break;
      }
      case 'ps': {
        this.lose();
        break;
      }
      // For Rock:
      case 'rr': {
        this.draw();
        break;
      }
      case 'rp': {
        this.lose();
        break;
      }
      case 'rs': {
        this.win();
        break;
      }
      // For Scissors:
      case 'sr': {
        this.lose();
        break;
      }
      case 'sp': {
        this.win();
        break;
      }
      case 'ss': {
        this.draw();
        break;
      }
    }
    console.log(this.gameResult.getResult());
  }
}
