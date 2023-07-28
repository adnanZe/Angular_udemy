import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WarningAlert } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';

@NgModule({
  declarations: [AppComponent, WarningAlert, SuccessAlertComponent, DummyComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
