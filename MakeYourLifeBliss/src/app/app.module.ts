import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ReactiveFormsModule } from "@angular/forms";
import { RegisterUserModule } from "./register-user/register-user.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    RegisterUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
