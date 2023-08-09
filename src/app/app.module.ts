import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProgressBarComponent,
    LeftSectionComponent,
    RightSectionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
