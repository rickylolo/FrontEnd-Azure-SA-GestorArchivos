import { Component } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css'],
})
export class CardviewComponent {
  archivoCargado = false;
  onArchivoCargado(event: any) {
    this.archivoCargado = true;
  }
}
