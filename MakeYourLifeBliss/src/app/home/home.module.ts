import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { PresentationModule } from "../presentation/presentation.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PresentationModule],
})
export class HomeModule {}
