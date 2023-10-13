import { TestBed } from "@angular/core/testing";
import { UserComponent } from "./user.component";

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
