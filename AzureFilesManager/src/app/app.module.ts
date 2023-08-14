// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import {/cardfiles.component.html} from './cardfilesimport { CardfilesComponent } from './cardfiles/cardfiles.component';
';

@NgModule({
  declarations: [
    AppComponent,
    CardfilesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
