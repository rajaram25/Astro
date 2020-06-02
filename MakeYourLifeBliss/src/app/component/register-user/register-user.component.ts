import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterUserService } from "./register-user.service";
import { MustMatch } from "src/app/shared/must-match";
import { User } from "src/app/entity/user";

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
        userName: ["", Validators.required],
        gender: ["", Validators.required],
        dateOfBirth: [""],
        placeOfBirth: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        mobileNumber: ["", Validators.required],
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

    //console.log("test - " + JSON.stringify(data));

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let user = new User();
    user.userName = this.f.userName.value;
    user.Gender = this.f.gender.value;
    user.DateOfBirth = new Date();
    user.PlaceOfBirth = this.f.placeOfBirth.value;
    user.Email = this.f.email.value;
    user.MobileNo = this.f.mobileNumber.value;
    user.password = this.f.password.value;
    user.Status = 1;
    this.userService.addUser(user);

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
