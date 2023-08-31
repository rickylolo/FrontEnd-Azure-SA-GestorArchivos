import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FileUploadData {
  fileName: string;
  fileType: string;
  fileContent: string;
}

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css'],
})
export class CardviewComponent {
  archivoCargado = false;

  constructor(private http: HttpClient) {} // Inyectar HttpClient

  uploadFile(): void {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const formData = new FormData();
      formData.append('file', file);

      const uploadData: FileUploadData = {
        fileName: file.name,
        fileType: file.type,
        fileContent: '', // Placeholder para el contenido en base64
      };

      const reader = new FileReader();
      reader.onload = (e: any) => {
        uploadData.fileContent = e.target.result.split(',')[1]; // Obtener contenido en base64
        this.sendFile(uploadData);
      };
      reader.readAsDataURL(file);
    }
  }

  sendFile(uploadData: FileUploadData): void {
    console.log(uploadData);
  
    this.http.post('http://localhost:3001/file', JSON.stringify(uploadData), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      (response) => {
        console.log('Archivo subido exitosamente', response);
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
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop();
      const fileSize = file.size;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Data = e.target.result;
        console.log('Nombre:', fileName);
        console.log('Extensión:', fileExtension);
        console.log('Tamaño:', fileSize, 'bytes');
        //console.log('Datos en Base64:', base64Data);
      };
      reader.readAsDataURL(file);
    }
  }
}
