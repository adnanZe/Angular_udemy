import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isVisible = false;
  clickLogs = [];

  onDisplayDetails() {
    this.isVisible = !this.isVisible;
    this.clickLogs.push(
      `Password is ${this.isVisible ? "visible" : "hidden"} ${Date.now()}`
    );
  }
}
