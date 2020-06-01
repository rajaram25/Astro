import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
import { RegisterUserService } from "../component/register-user/register-user.service";
import { User } from "../entity/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: RegisterUserService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginFormGroup.invalid) {
      return;
    }

    // let data: any = this.loginService.isGivenUserIsValid();
    this.userService.getListOfUsers().subscribe(
      (result) => {
        let listOfUsers = result as User[];
        listOfUsers.forEach((r) => {
          if (
            r.userName === this.f.userName.value &&
            r.password === this.f.password.value
          ) {
            this.router.navigate(
              ["/home"]
              // , {queryParams: { isUserLoggedIn: true },}
            );
            this.loginService.userLoggedIn.emit(true);
          }
        });
      },
      (error) => console.error(error)
    );
  }

  onReset() {
    this.submitted = false;
    this.loginFormGroup.reset();
  }
}
