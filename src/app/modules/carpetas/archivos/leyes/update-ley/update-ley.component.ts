import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarpetaService } from '../../../service/carpeta.service';
import { ArchivoService } from '../../service/archivo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-ley',
  templateUrl: './update-ley.component.html',
  styleUrls: ['./update-ley.component.scss']
})
export class UpdateLeyComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private carpetaService = inject(CarpetaService);
  private archivoService = inject(ArchivoService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  idArchivo: any = '';
  archivo: any = null;
  archivoForm: any;

  file: File;
  uploadProgress: number;

  constructor() {
    this.idArchivo = this.activatedRoute.snapshot.params['id'];
    this.archivoService.getArchivoById(this.idArchivo).subscribe({
      next: (data: any) => {
        console.log(data);
        this.archivo = data;
        this.archivoForm.patchValue({
          numero: this.archivo?.numero,
          detalle: this.archivo?.detalle,
          entidad: this.archivo?.entidad,
          fechaAprobacion: this.archivo?.fechaAprobacion,
          monto: this.archivo?.monto,
          fojas: this.archivo?.fojas,
          observaciones: this.archivo?.observaciones,
        })
      },
      error: (message: any | undefined) => {
        console.log(message.error.message);
        Swal.fire('Error', message.error.message, 'error')
      }
    })


    this.archivoForm = this.fb.group({
      file: [''],
      numero: [this.archivo?.numero, [Validators.required]],
      detalle: ['', [Validators.required]],
      fechaAprobacion: ['', [Validators.required]],
      fechaPromulgacion: ['', [Validators.required]],
      fojas: [''],
      observaciones: [''],
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

      if (this.file) {
        formData.append('file', this.file);
      }

      // Agregar otros campos al FormData aquí
      formData.append('numero', this.archivoForm.get('numero').value);
      formData.append('detalle', this.archivoForm.get('detalle').value);
      formData.append('fechaAprobacion', this.archivoForm.get('fechaAprobacion').value);
      formData.append('fechaPromulgacion', this.archivoForm.get('fechaPromulgacion').value);
      formData.append('fojas', this.archivoForm.get('fojas').value);
      formData.append('observaciones', this.archivoForm.get('observaciones').value);

      this.archivoService.updateArchivo(formData, this.idArchivo).subscribe((event: any) => {
        if (event.type === HttpEventType .UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);

        } else if (event.type === HttpEventType.Response) {
          this.snackBar.open('Archivo PDF y otros campos Editados correctamente', 'Cerrar', {
            duration: 2000
          });
          this.router.navigate(['carpetas/listLey', this.archivo.idCarpeta._id]);
        }
      });
    }
    else {
      console.log("Error en formulario");
    }

  }

}
