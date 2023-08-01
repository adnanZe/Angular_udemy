import { Component } from "@angular/core";
import { UsersServicesService } from "./users-services.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersServicesService],
})
export class AppComponent {}
