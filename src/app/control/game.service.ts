import { Injectable } from '@angular/core';
import {ResultService} from '../model/result.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  messageOut: string;
  compChoice: number;
  rockPaperScissors = [1 , 2 , 3];

  constructor(private gameResult: ResultService) { }

  Play(userChoice: string) {
    // '1' - Paper , '2' - Rock , '3' - Scissors
    this.compChoice = this.rockPaperScissors[Math.floor(Math.random() * this.rockPaperScissors.length)];
    // console.log(this.compChoice);

    // For Paper:
    if (userChoice === 'paper' && this.compChoice === 1) {
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: paper. It is draw!';
      document.getElementById(userChoice).classList.add('gray-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 1000 );
    } else if (userChoice === 'paper' && this.compChoice === 2) {
      this.gameResult.addUserPoint();
      console.log('User won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: rock. You won!';
      document.getElementById(userChoice).classList.add('green-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 1000 );
    } else if (userChoice === 'paper' && this.compChoice === 3) {
      this.gameResult.addCompPoint();
      console.log('Computer won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: scissors. You lost!';
      document.getElementById(userChoice).classList.add('red-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 1000 );
    }
    // For Rock:
    if (userChoice === 'rock' && this.compChoice === 1) {
      this.gameResult.addCompPoint();
      console.log('Computer won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: paper. You lost!';
      document.getElementById(userChoice).classList.add('red-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 1000 );
    } else if (userChoice === 'rock' && this.compChoice === 2) {
      console.log('Draw!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: rock. It is draw!';
      document.getElementById(userChoice).classList.add('gray-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 1000 );
    } else if (userChoice === 'rock' && this.compChoice === 3) {
      this.gameResult.addUserPoint();
      console.log('User won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: scissors. You won!';
      document.getElementById(userChoice).classList.add('green-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 1000 );
    }
    // For Scissors:
    if (userChoice === 'scissors' && this.compChoice === 1) {
      this.gameResult.addUserPoint();
      console.log('User won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: paper. You won!';
      document.getElementById(userChoice).classList.add('green-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 1000 );
    } else if (userChoice === 'scissors' && this.compChoice === 2) {
      this.gameResult.addCompPoint();
      console.log('Computer won!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: rock. You lost!';
      document.getElementById(userChoice).classList.add('red-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 1000 );
    } else if (userChoice === 'scissors' && this.compChoice === 3) {
      console.log('Draw!');
      this.messageOut = 'User choice: ' + userChoice + '. Comp choice: scissors. It is draw!';
      document.getElementById(userChoice).classList.add('gray-glow');
      setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 1000 );
    }

    console.log(this.gameResult.getResult());
  }
}
