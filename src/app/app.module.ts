import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CustomHammerConfig } from './hammer-config';

@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
