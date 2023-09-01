import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css'],
})
export class CardviewComponent {
  pdfBase64:string = "";
  fileName: string ="";
  fileExtension:string = "";
  fileSize:string = "";
  base64Data:string = "";
  fileType:string = "";

  archivoCargado = false;

  constructor(private http: HttpClient) {} // Inyectar HttpClient

  sendFile(): void {
    const requestData={
      fileName:this.fileName,
      fileType:this.fileType,
      fileContent:this.base64Data,
    }

    this.http.post('http://localhost:3001/file', requestData).subscribe(
      (response) => {
        console.log('Archivo subido exitosamente');
      },
      (error) => {
        console.error('Error al subir el archivo', error);
      }
    );
  }


  
  handleFileInput(event: any): void {
    this.archivoCargado = true;
    const file = event.target.files[0];
  
    if (file) {
      this.fileName = file.name;
      
      // Verificar si la extensión está presente antes de asignarla
      this.fileType = this.fileName.split('.')[1];
      
  
      this.fileSize = file.size.toString();
  
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Data = e.target.result;
        const base64Body = base64Data.split(",")[1];
        this.base64Data=base64Body;
      };
      reader.readAsDataURL(file);
    }
  }
  
}
