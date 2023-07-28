import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dummy-task-one",
  templateUrl: "./dummy-task-one.component.html",
  styleUrls: ["./dummy-task-one.component.css"],
})
export class DummyTaskOneComponent implements OnInit {
  username: string = "";

  constructor() {}

  ngOnInit(): void {}

  onSend() {
    this.username = "";
  }
}
