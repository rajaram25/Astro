import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterUserComponent } from "./register-user.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterUserComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],

  exports: [RegisterUserComponent],
})
export class RegisterUserModule {}
