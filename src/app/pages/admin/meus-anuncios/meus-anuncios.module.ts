import { NgModule } from "@angular/core";
import { MeusAnunciosComponent } from "./meus-anuncios.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MeusAnunciosComponent
  ],
  exports: [
    MeusAnunciosComponent
  ]
})
export class MeusAnunciosModule {

}
