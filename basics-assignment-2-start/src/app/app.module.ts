import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DummyTaskOneComponent } from './dummy-task-one/dummy-task-one.component';
import { DummyTaskTwoComponent } from './dummy-task-two/dummy-task-two.component';

@NgModule({
  declarations: [AppComponent, DummyTaskOneComponent, DummyTaskTwoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
