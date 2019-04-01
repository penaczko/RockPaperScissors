import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {GameService} from './control/game.service';
import {ResultService} from './model/result.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GameService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
