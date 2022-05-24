import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoveDirective } from './move.directive';
import { BoxComponent } from './box/box.component';
import { BreakDirective } from './break.directive';
import { BoxshakeDirective } from './boxshake.directive';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { IconsrcDirective } from './iconsrc.directive';
import { BrickComponent } from './brick/brick.component';
import { InteractiveComponent } from './interactive/interactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoveDirective,
    BoxComponent,
    BreakDirective,
    BoxshakeDirective,
    HeadingComponent,
    CardComponent,
    IconsrcDirective,
    BrickComponent,
    InteractiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
