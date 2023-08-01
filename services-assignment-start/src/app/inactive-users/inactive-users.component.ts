import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UsersServicesService } from "../users-services.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userService: UsersServicesService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
