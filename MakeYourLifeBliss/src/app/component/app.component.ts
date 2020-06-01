import { Component } from "@angular/core";
import { LoginService } from "../login/login.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "MakeYourLifeBliss";

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {}

  /** To hold the flag to determine the user logged in sucessfully or not.*/
  isUserLoggedIn: boolean = false;

  ngOnInit() {
    this.loginService.userLoggedIn.subscribe((flag) => {
      this.isUserLoggedIn = flag;
    });
  }
}
