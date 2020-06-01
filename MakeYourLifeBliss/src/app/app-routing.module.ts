import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterUserComponent } from "./component/register-user/register-user.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "register", component: RegisterUserComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
