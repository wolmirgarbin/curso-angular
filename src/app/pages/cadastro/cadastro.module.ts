import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CadastroComponent } from "./cadastro.component";
import { HeaderModule } from "../../components/header/header.module";
import { TituloModule } from "../../components/titulo/titulo.module";
import { CardModule } from "../../components/card/card.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HeaderModule,
    TituloModule,
    CardModule,
    FormsModule
  ],
  declarations: [
    CadastroComponent
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule {

}
