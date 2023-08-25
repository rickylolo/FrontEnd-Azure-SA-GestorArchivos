// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AppComponent } from './app.component';
import { CardfilesComponent } from './cardfiles/cardfiles.component';
import { CardviewComponent } from './cardview/cardview.component';

@NgModule({
  
  declarations: [AppComponent, CardfilesComponent, CardviewComponent],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
