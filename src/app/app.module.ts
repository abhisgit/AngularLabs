import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrainingModule } from './training/training.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
