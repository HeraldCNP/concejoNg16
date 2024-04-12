import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarpetaService } from '../../../service/carpeta.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArchivoService } from '../../service/archivo.service';

@Component({
  selector: 'app-create-resolucion',
  templateUrl: './create-resolucion.component.html',
  styleUrls: ['./create-resolucion.component.scss']
})
export class CreateResolucionComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private carpetaService = inject(CarpetaService);
  private archivoService = inject(ArchivoService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private snackBar =inject(MatSnackBar);
  private router =inject(Router);

  idCarpeta:any = '';
  carpeta:any = null;
  archivoForm:any;

  file: File;
  uploadProgress: number;

  constructor() {
    this.idCarpeta = this.activatedRoute.snapshot.params['id'];
    this.carpetaService.getCarpetaById(this.idCarpeta).subscribe({
      next: (data: any) => {
        console.log(data);
        this.carpeta = data;
      },
      error: (message: any | undefined) => {
        console.log(message.error.message);
        Swal.fire('Error', message.error.message, 'error')
      }
    })

    this.archivoForm = this.fb.group({
      file: [''],
      numero: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      entidad: [''],
      fechaAprobacion: ['', [Validators.required]],
      monto: [''],
      fojas: [''],
      observaciones: [''],
      idCarpeta: [this.idCarpeta, [Validators.required]],
    })
  }
  ngOnInit() {

  }



  get form() {
    return this.archivoForm.controls;
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    } else {
      console.log("Error al cargar el archivo");
    }
  }

  onSubmit() {
    if (this.archivoForm.valid) {
      const formData = new FormData();

      if(this.file){
        formData.append('file', this.file);
      }

      // Agregar otros campos al FormData aquí
      formData.append('numero', this.archivoForm.get('numero').value);
      formData.append('detalle', this.archivoForm.get('detalle').value);
      formData.append('entidad', this.archivoForm.get('entidad').value);
      formData.append('fechaAprobacion', this.archivoForm.get('fechaAprobacion').value);
      formData.append('monto', this.archivoForm.get('monto').value);
      formData.append('fojas', this.archivoForm.get('fojas').value);
      formData.append('observaciones', this.archivoForm.get('observaciones').value);
      formData.append('idCarpeta', this.archivoForm.get('idCarpeta').value);

      this.archivoService.createArchivo(formData).subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);

        } else if (event.type === HttpEventType.Response) {
          this.snackBar.open('Archivo PDF y otros campos subidos correctamente', 'Cerrar', {
            duration: 2000
          });
          this.router.navigate(['carpetas/listResolucion', this.idCarpeta]);
        }
      });
    }
    else{
      console.log("Error en formulario");
    }
  }


  cancel(){

  }



}
