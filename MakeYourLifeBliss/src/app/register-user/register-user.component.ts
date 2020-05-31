import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MustMatch } from "../shared/must-match";
import { RegisterUserService } from "./register-user.service";
import { User } from "../entity/user";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"],
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: RegisterUserService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        dateOfBirth: [""],
        placeOfBirth: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: [MustMatch("password", "confirmPassword")],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    //let data: any = this.userService.getListOfUsers();

    let user = new User();
    user.UserName = "test1";
    user.Gender = "F";
    user.DateOfBirth = new Date();
    user.PlaceOfBirth = "Place1";
    user.Email = "raj1@gmail.com";
    user.MobileNo = 65341;
    user.Password = "welcome1";
    this.userService.addUser(user);

    //console.log("test - " + JSON.stringify(data));

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
