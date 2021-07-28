import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TweempusTwimpListComponent } from './nav/tweempus-twimp-list/tweempus-twimp-list.component';
import { TweempusTwimpCardComponent } from './nav/tweempus-twimp-card/tweempus-twimp-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, NavComponent, TweempusTwimpListComponent, TweempusTwimpCardComponent],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
